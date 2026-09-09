import React, { useState, useRef, useEffect } from 'react';
import {
  Clock,
  RefreshCw,
  ArrowLeft,
  Lock,
  CheckCircle2,
  AlertTriangle,
  KeyRound,
  Smartphone,
  Mail,
  MessageSquare,
  QrCode,
  Copy,
  Check,
  ShieldCheck,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import { use2FA } from '../../context/AuthContext';
import { getTOTPUri, getQRCodeUrl, DEFAULT_TOTP_SECRET } from '../../utils/totp';

export const Stage2OTP: React.FC = () => {
  const {
    user,
    email,
    mfaChannel,
    setMfaChannel,
    customPhone,
    otpExpiresAt,
    resendAvailableAt,
    attemptsLeft,
    lockoutUntil,
    stage,
    isLoading,
    error,
    successNotification,
    verifyOtp,
    resendOtp,
    resetToCredentials,
  } = use2FA();

  // 6 separate input boxes
  const [digits, setDigits] = useState<string[]>(['', '', '', '', '', '']);
  const inputRefs = useRef<(HTMLInputElement | null)[]>([]);

  // Setup QR drawer state
  const [showQrDrawer, setShowQrDrawer] = useState(false);
  const [hasCopiedSecret, setHasCopiedSecret] = useState(false);

  // Timers state
  const [resendSecondsLeft, setResendSecondsLeft] = useState<number>(60);
  const [expirySecondsLeft, setExpirySecondsLeft] = useState<number>(300);
  const [lockoutSecondsLeft, setLockoutSecondsLeft] = useState<number>(120);

  // Auto-focus the first input on mount
  useEffect(() => {
    if (inputRefs.current[0]) {
      inputRefs.current[0].focus();
    }
  }, []);

  // Countdown timer for Resend & Expiry
  useEffect(() => {
    const timer = setInterval(() => {
      const now = Date.now();

      // Resend 60s countdown
      if (resendAvailableAt) {
        const diff = Math.max(0, Math.ceil((resendAvailableAt - now) / 1000));
        setResendSecondsLeft(diff);
      }

      // Expiry 5-min countdown
      if (otpExpiresAt) {
        const diff = Math.max(0, Math.ceil((otpExpiresAt - now) / 1000));
        setExpirySecondsLeft(diff);
      }

      // Lockout countdown
      if (lockoutUntil) {
        const diff = Math.max(0, Math.ceil((lockoutUntil - now) / 1000));
        setLockoutSecondsLeft(diff);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, [resendAvailableAt, otpExpiresAt, lockoutUntil]);

  // Handle single digit input
  const handleDigitChange = (index: number, value: string) => {
    const cleaned = value.replace(/\D/g, '');
    if (!cleaned && value !== '') return;

    const newDigits = [...digits];

    if (cleaned.length > 1) {
      const pastedDigits = cleaned.slice(0, 6).split('');
      pastedDigits.forEach((char, i) => {
        if (index + i < 6) {
          newDigits[index + i] = char;
        }
      });
      setDigits(newDigits);

      const nextFocus = Math.min(index + pastedDigits.length, 5);
      inputRefs.current[nextFocus]?.focus();

      if (newDigits.every((d) => d !== '')) {
        verifyOtp(newDigits.join(''));
      }
      return;
    }

    newDigits[index] = cleaned;
    setDigits(newDigits);

    if (cleaned && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }

    if (newDigits.every((d) => d !== '')) {
      verifyOtp(newDigits.join(''));
    }
  };

  const handleKeyDown = (index: number, e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Backspace') {
      if (!digits[index] && index > 0) {
        const newDigits = [...digits];
        newDigits[index - 1] = '';
        setDigits(newDigits);
        inputRefs.current[index - 1]?.focus();
      } else {
        const newDigits = [...digits];
        newDigits[index] = '';
        setDigits(newDigits);
      }
    } else if (e.key === 'ArrowLeft' && index > 0) {
      inputRefs.current[index - 1]?.focus();
    } else if (e.key === 'ArrowRight' && index < 5) {
      inputRefs.current[index + 1]?.focus();
    }
  };

  const handlePaste = (e: React.ClipboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    const pastedData = e.clipboardData.getData('text').trim().replace(/\D/g, '');
    if (!pastedData) return;

    const chars = pastedData.slice(0, 6).split('');
    const newDigits = ['', '', '', '', '', ''];
    chars.forEach((char, i) => {
      newDigits[i] = char;
    });
    setDigits(newDigits);

    const focusIdx = Math.min(chars.length, 5);
    inputRefs.current[focusIdx]?.focus();

    if (chars.length === 6) {
      verifyOtp(newDigits.join(''));
    }
  };

  const handleManualSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const fullCode = digits.join('');
    if (fullCode.length === 6) {
      verifyOtp(fullCode);
    }
  };

  const handleCopySecret = () => {
    navigator.clipboard.writeText(DEFAULT_TOTP_SECRET);
    setHasCopiedSecret(true);
    setTimeout(() => setHasCopiedSecret(false), 2000);
  };

  const formatExpiryTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
  };

  const isLocked = stage === 'LOCKED';
  const totpUri = getTOTPUri(user?.email || email || 'aseth230@gmail.com');
  const qrCodeUrl = getQRCodeUrl(totpUri);

  return (
    <div className="space-y-6 animate-fadeIn">
      {/* Stage Header */}
      <div className="text-center space-y-2">
        <div className="inline-flex items-center space-x-2 px-3.5 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold uppercase tracking-wider">
          <KeyRound className="w-3.5 h-3.5" />
          <span>Stage 2: Enterprise Multi-Factor Verification</span>
        </div>
        <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
          Enter 6-Digit Security Token
        </h2>
        <p className="text-xs sm:text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
          A single-use verification code has been dispatched via encrypted telecom gateway to your registered endpoint:{' '}
          <strong className="text-emerald-400 font-semibold">{user?.maskedPhone || '+91 89669 •••••'}</strong>.
        </p>
      </div>

      {/* 2FA Delivery Channel Tabs */}
      <div className="grid grid-cols-3 gap-1.5 p-1 rounded-2xl bg-slate-900/90 border border-slate-800">
        <button
          type="button"
          onClick={() => setMfaChannel('SMS')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
            mfaChannel === 'SMS'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <MessageSquare className="w-3.5 h-3.5 shrink-0" />
          <span>SMS / Mobile</span>
        </button>

        <button
          type="button"
          onClick={() => setMfaChannel('APP')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
            mfaChannel === 'APP'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Smartphone className="w-3.5 h-3.5 shrink-0" />
          <span>Authenticator App</span>
        </button>

        <button
          type="button"
          onClick={() => setMfaChannel('EMAIL')}
          className={`py-2 px-2 rounded-xl text-xs font-bold transition-all flex items-center justify-center space-x-1.5 ${
            mfaChannel === 'EMAIL'
              ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/20'
              : 'text-slate-400 hover:text-white hover:bg-slate-800/50'
          }`}
        >
          <Mail className="w-3.5 h-3.5 shrink-0" />
          <span>Work Email</span>
        </button>
      </div>

      {/* Channel Status Banner */}
      {mfaChannel === 'SMS' && (
        <div className="p-3.5 rounded-2xl bg-[#071322] border border-emerald-500/30 text-left space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center space-x-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              <span>Encrypted Telecom Gateway</span>
            </span>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">Airtel / Jio DLT Active</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Dispatched to verified mobile <strong className="text-white font-mono">{user?.phone || '+91 89669 99725'}</strong>. Enter the 6 digits received below.
          </p>
        </div>
      )}

      {mfaChannel === 'APP' && (
        <div className="p-3.5 rounded-2xl bg-[#071322] border border-cyan-500/30 text-left space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center space-x-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
              <span>Google / Microsoft Authenticator</span>
            </span>
            <span className="text-[11px] font-mono text-cyan-400 font-bold">RFC 6238 TOTP</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Enter the 6-digit code currently displayed in your smartphone's Authenticator app.
          </p>
          <button
            type="button"
            onClick={() => setShowQrDrawer(!showQrDrawer)}
            className="text-[11px] text-cyan-400 hover:text-cyan-300 flex items-center space-x-1 font-medium underline pt-1"
          >
            <span>{showQrDrawer ? 'Hide Device Setup Key' : 'First-time phone setup? View QR / Key'}</span>
            {showQrDrawer ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
          </button>

          {showQrDrawer && (
            <div className="p-3 mt-2 rounded-xl bg-slate-900 border border-slate-800 flex items-center space-x-3">
              <div className="p-1.5 bg-white rounded-lg shrink-0">
                <img src={qrCodeUrl} alt="QR Code" className="w-16 h-16 object-contain" />
              </div>
              <div className="text-[10px] space-y-1 text-slate-300">
                <div>Scan in Google Authenticator or enter Key:</div>
                <div className="flex items-center space-x-1.5">
                  <code className="px-1.5 py-0.5 rounded bg-slate-950 text-cyan-300 font-mono font-bold">
                    {DEFAULT_TOTP_SECRET}
                  </code>
                  <button type="button" onClick={handleCopySecret} className="text-slate-400 hover:text-white">
                    {hasCopiedSecret ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      )}

      {mfaChannel === 'EMAIL' && (
        <div className="p-3.5 rounded-2xl bg-[#071322] border border-emerald-500/30 text-left space-y-1">
          <div className="flex items-center justify-between">
            <span className="text-xs font-bold text-white flex items-center space-x-1.5">
              <Mail className="w-3.5 h-3.5 text-emerald-400" />
              <span>Corporate Work Email</span>
            </span>
            <span className="text-[11px] font-mono text-emerald-400 font-bold">TLS 1.3 Verified</span>
          </div>
          <p className="text-[11px] text-slate-300">
            Security code dispatched to <strong className="text-white font-mono">{user?.email || 'aseth230@gmail.com'}</strong>. (Check Inbox / Spam).
          </p>
        </div>
      )}

      {/* Lockout Banner */}
      {isLocked && (
        <div className="p-4 rounded-2xl bg-red-500/15 border border-red-500/40 text-red-200 text-xs sm:text-sm space-y-2 animate-shake">
          <div className="flex items-center space-x-2 font-bold text-red-400">
            <Lock className="w-4 h-4" />
            <span>SESSION TEMPORARILY LOCKED</span>
          </div>
          <p className="leading-relaxed">
            3 consecutive invalid OTP attempts detected. For enterprise security, sign-in attempts are paused.
          </p>
          <div className="flex items-center justify-between pt-2 border-t border-red-500/20 text-xs">
            <span>Lockout expires in: <strong className="text-white font-mono">{formatExpiryTime(lockoutSecondsLeft)}</strong></span>
            <span className="text-slate-400">Contact IT Sec Ops</span>
          </div>
        </div>
      )}

      {/* Error Banner */}
      {error && !isLocked && (
        <div className="p-3.5 rounded-2xl bg-red-500/10 border border-red-500/30 text-red-300 text-xs sm:text-sm flex items-start space-x-2.5 animate-shake">
          <AlertTriangle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
          <div className="leading-relaxed">{error}</div>
        </div>
      )}

      {/* Success Notification Banner */}
      {successNotification && (
        <div className="p-3 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-300 text-xs flex items-center space-x-2">
          <CheckCircle2 className="w-4 h-4 text-emerald-400 shrink-0" />
          <span>{successNotification}</span>
        </div>
      )}

      {/* 6 Individual Input Boxes */}
      <form onSubmit={handleManualSubmit} className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="font-semibold">Enter 6-Digit Security Token</span>
            <span className="text-[11px] text-slate-400">
              Attempts Left:{' '}
              <strong className={attemptsLeft === 1 ? 'text-red-400 font-bold' : 'text-emerald-400'}>
                {attemptsLeft} of 3
              </strong>
            </span>
          </div>

          <div className="flex items-center justify-between gap-2 sm:gap-3">
            {digits.map((digit, idx) => (
              <input
                key={idx}
                ref={(el) => { inputRefs.current[idx] = el; }}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                disabled={isLocked || isLoading}
                value={digit}
                onChange={(e) => handleDigitChange(idx, e.target.value)}
                onKeyDown={(e) => handleKeyDown(idx, e)}
                onPaste={handlePaste}
                className={`w-12 h-14 sm:w-14 sm:h-16 text-center text-xl sm:text-2xl font-mono font-extrabold rounded-2xl border transition-all duration-200 outline-none select-all ${
                  isLocked
                    ? 'bg-slate-900/40 border-red-500/30 text-slate-600 cursor-not-allowed'
                    : digit
                    ? 'bg-emerald-500/15 border-emerald-500 text-white shadow-lg shadow-emerald-500/20 ring-2 ring-emerald-500/30'
                    : 'bg-[#071322] border-slate-700 hover:border-slate-500 focus:border-emerald-500 text-white focus:ring-2 focus:ring-emerald-500/30'
                }`}
              />
            ))}
          </div>
        </div>

        {/* 5-Minute Expiry Progress Indicator */}
        <div className="p-3.5 rounded-2xl bg-slate-900/80 border border-slate-800 space-y-2">
          <div className="flex items-center justify-between text-xs text-slate-300">
            <span className="flex items-center space-x-1.5 text-slate-400">
              <Clock className="w-3.5 h-3.5 text-emerald-400" />
              <span>Security Token Validity Window</span>
            </span>
            <span className="font-mono font-bold text-white">
              {formatExpiryTime(expirySecondsLeft)} left
            </span>
          </div>
          <div className="w-full h-1.5 bg-slate-800 rounded-full overflow-hidden">
            <div
              className={`h-full transition-all duration-1000 ${
                expirySecondsLeft < 60
                  ? 'bg-red-500'
                  : expirySecondsLeft < 180
                  ? 'bg-amber-400'
                  : 'bg-emerald-500'
              }`}
              style={{ width: `${Math.max(0, (expirySecondsLeft / 300) * 100)}%` }}
            ></div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="space-y-3">
          <button
            type="submit"
            disabled={digits.some((d) => d === '') || isLocked || isLoading}
            className="w-full py-3.5 px-6 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-extrabold text-sm shadow-xl shadow-emerald-500/20 hover:shadow-emerald-500/30 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-40 disabled:cursor-not-allowed hover:-translate-y-0.5"
          >
            {isLoading ? (
              <div className="flex items-center space-x-2">
                <div className="w-4 h-4 border-2 border-slate-950 border-t-transparent rounded-full animate-spin"></div>
                <span>Validating Cryptographic Token...</span>
              </div>
            ) : (
              <>
                <CheckCircle2 className="w-4 h-4" />
                <span>Verify Token &amp; Access Dashboard</span>
              </>
            )}
          </button>

          {/* Resend OTP Button with Countdown */}
          <div className="flex items-center justify-between pt-1 text-xs">
            <button
              type="button"
              onClick={resetToCredentials}
              className="text-slate-400 hover:text-white flex items-center space-x-1 font-medium transition-colors"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to Credentials</span>
            </button>

            <button
              type="button"
              onClick={resendOtp}
              disabled={resendSecondsLeft > 0 || isLocked || isLoading}
              className={`font-semibold flex items-center space-x-1.5 transition-colors ${
                resendSecondsLeft > 0 || isLocked
                  ? 'text-slate-500 cursor-not-allowed'
                  : 'text-emerald-400 hover:text-emerald-300'
              }`}
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isLoading ? 'animate-spin' : ''}`} />
              <span>
                {resendSecondsLeft > 0
                  ? `Resend code in ${resendSecondsLeft}s`
                  : 'Resend Security Code'}
              </span>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};
export default Stage2OTP;
