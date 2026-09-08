// Standard RFC 6238 TOTP verification (Google Authenticator / Microsoft Authenticator)

export const DEFAULT_TOTP_SECRET = 'JBSWY3DPEHPK3PXP'; // Base32 Secret

function base32ToBytes(base32: string): Uint8Array {
  const alphabet = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let bits = '';
  for (let i = 0; i < base32.length; i++) {
    const val = alphabet.indexOf(base32.charAt(i).toUpperCase());
    if (val === -1) continue;
    bits += val.toString(2).padStart(5, '0');
  }
  const bytes = new Uint8Array(Math.floor(bits.length / 8));
  for (let i = 0; i + 8 <= bits.length; i += 8) {
    bytes[i / 8] = parseInt(bits.substr(i, 8), 2);
  }
  return bytes;
}

export async function generateTOTPCode(secret: string = DEFAULT_TOTP_SECRET, timeOffsetSteps: number = 0): Promise<string> {
  const timeStep = 30;
  const counter = Math.floor(Date.now() / 1000 / timeStep) + timeOffsetSteps;
  const buffer = new ArrayBuffer(8);
  const view = new DataView(buffer);
  view.setBigUint64(0, BigInt(counter), false);

  const keyBytes = base32ToBytes(secret);
  const cryptoKey = await window.crypto.subtle.importKey(
    'raw',
    keyBytes.buffer as ArrayBuffer,
    { name: 'HMAC', hash: { name: 'SHA-1' } },
    false,
    ['sign']
  );

  const signature = await window.crypto.subtle.sign('HMAC', cryptoKey, buffer);
  const hmac = new Uint8Array(signature);
  const offset = hmac[hmac.length - 1] & 0x0f;

  const codeInt =
    ((hmac[offset] & 0x7f) << 24) |
    ((hmac[offset + 1] & 0xff) << 16) |
    ((hmac[offset + 2] & 0xff) << 8) |
    (hmac[offset + 3] & 0xff);

  const otp = (codeInt % 1000000).toString().padStart(6, '0');
  return otp;
}

export async function verifyTOTPCode(enteredCode: string, secret: string = DEFAULT_TOTP_SECRET): Promise<boolean> {
  const clean = enteredCode.trim();
  for (const offset of [0, -1, 1]) {
    const validCode = await generateTOTPCode(secret, offset);
    if (clean === validCode) {
      return true;
    }
  }
  return false;
}

export function getTOTPUri(email: string, secret: string = DEFAULT_TOTP_SECRET): string {
  const issuer = 'Alishan Green Energy';
  return `otpauth://totp/${encodeURIComponent(issuer)}:${encodeURIComponent(email)}?secret=${secret}&issuer=${encodeURIComponent(issuer)}&algorithm=SHA1&digits=6&period=30`;
}

export function getQRCodeUrl(uri: string): string {
  return `https://api.qrserver.com/v1/create-qr-code/?size=220x220&data=${encodeURIComponent(uri)}`;
}
