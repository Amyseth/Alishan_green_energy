import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { AuthState, UserProfile, SecurityAuditLog, DemoCredentials } from '../types/auth';

export const DEMO_USERS: Record<string, { profile: UserProfile; passwordHash: string }> = {
  'admin@alishangreenenergy.com': {
    profile: {
      id: 'usr_age_001',
      name: 'Dr. Rajesh Sharma',
      email: 'admin@alishangreenenergy.com',
      phone: '+91 91712 00097',
      maskedEmail: 'a***n@alishangreenenergy.com',
      maskedPhone: '+91 91712 *****',
      role: 'Chief Technology & Security Officer (CTSO)',
      department: 'Executive Leadership & Solar Engineering',
      avatarUrl: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&q=80&w=250',
      location: 'Kamal Vihar HQ & Seoni Plant, Raipur',
      securityClearance: 'Level 4 - Executive',
      lastLogin: new Date(Date.now() - 3600000 * 4).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ipAddress: '103.21.244.18 (Raipur Industrial Zone)',
      sessionExpiry: new Date(Date.now() + 3600000 * 8).toLocaleTimeString('en-IN'),
    },
    passwordHash: 'Alishan@2026',
  },
  'qa.lead@alishangreenenergy.com': {
    profile: {
      id: 'usr_age_002',
      name: 'Ananya Verma',
      email: 'qa.lead@alishangreenenergy.com',
      phone: '+91 98261 45091',
      maskedEmail: 'q***d@alishangreenenergy.com',
      maskedPhone: '+91 98261 *****',
      role: 'Principal Quality Manager (NABL Lab Head)',
      department: 'NABL TC 15544 Testing & Metrology',
      avatarUrl: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&q=80&w=250',
      location: 'NABL Accredited Testing Facility, Seoni',
      securityClearance: 'Level 3 - Plant Lead',
      lastLogin: new Date(Date.now() - 3600000 * 12).toLocaleString('en-IN', { timeZone: 'Asia/Kolkata' }),
      ipAddress: '103.21.244.22 (NABL Cleanroom Lab)',
      sessionExpiry: new Date(Date.now() + 3600000 * 8).toLocaleTimeString('en-IN'),
    },
    passwordHash: 'NABL@Quality2026',
  },
};

const INITIAL_AUDIT_LOGS: SecurityAuditLog[] = [
  {
    id: 'log_01',
    timestamp: new Date(Date.now() - 3600000 * 2).toLocaleTimeString('en-IN'),
    event: 'System Boot & MFA Gateway Initialized',
    status: 'SUCCESS',
    ipAddress: '103.21.244.1 (Gateway)',
    location: 'Raipur, CG, India',
    protocol: 'TLS 1.3 / AES-256',
    details: '2FA Policy active: Email + 6-digit cryptographic TOTP enforced.',
  },
  {
    id: 'log_02',
    timestamp: new Date(Date.now() - 3600000).toLocaleTimeString('en-IN'),
    event: 'Routine NABL Certificate Key Rotation',
    status: 'SUCCESS',
    ipAddress: '103.21.244.18',
    location: 'Raipur HQ',
    protocol: 'ECDSA P-384',
    details: 'NABL TC 15544 batch certificate signing keys refreshed.',
  },
];

interface AuthContextType extends AuthState {
  validateCredentials: (email: string, password: string, remember: boolean) => Promise<boolean>;
  verifyOtp: (enteredOtp: string) => Promise<boolean>;
  resendOtp: () => Promise<void>;
  resetToCredentials: () => void;
  logout: () => void;
  fillDemoCredentials: (userKey?: string) => { email: string; pass: string };
  fillDemoOtp: () => string;
  simulateWrongOtp: () => Promise<void>;
  unlockSessionManually: () => void;
  clearNotifications: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

const STORAGE_SESSION_KEY = 'alishan_2fa_session_v1';
const STORAGE_LOGS_KEY = 'alishan_2fa_audit_logs_v1';

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [stage, setStage] = useState<AuthState['stage']>('CREDENTIALS');
  const [email, setEmail] = useState('');
  const [user, setUser] = useState<UserProfile | null>(null);
  const [otp, setOtp] = useState('');
  const [otpCreatedAt, setOtpCreatedAt] = useState<number | null>(null);
  const [otpExpiresAt, setOtpExpiresAt] = useState<number | null>(null);
  const [resendAvailableAt, setResendAvailableAt] = useState<number | null>(null);
  const [attemptsLeft, setAttemptsLeft] = useState(3);
  const [lockoutUntil, setLockoutUntil] = useState<number | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successNotification, setSuccessNotification] = useState<string | null>(null);
  const [rememberMe, setRememberMe] = useState(true);
  const [isDemoMode] = useState(true);
  const [auditLogs, setAuditLogs] = useState<SecurityAuditLog[]>(() => {
    try {
      const saved = localStorage.getItem(STORAGE_LOGS_KEY);
      return saved ? JSON.parse(saved) : INITIAL_AUDIT_LOGS;
    } catch {
      return INITIAL_AUDIT_LOGS;
    }
  });

  // Restore authenticated session from localStorage if remembered
  useEffect(() => {
    try {
      const savedSession = localStorage.getItem(STORAGE_SESSION_KEY);
      if (savedSession) {
        const parsed = JSON.parse(savedSession);
        if (parsed.user && parsed.authenticatedAt && Date.now() - parsed.authenticatedAt < 8 * 3600 * 1000) {
          setUser(parsed.user);
          setStage('AUTHENTICATED');
          setSuccessNotification('Active 2FA session restored securely.');
        }
      }
    } catch {
      // Ignore
    }
  }, []);

  // Save audit logs
  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_LOGS_KEY, JSON.stringify(auditLogs.slice(0, 30)));
    } catch {
      // Ignore
    }
  }, [auditLogs]);

  // Handle lockout countdown tick
  useEffect(() => {
    if (stage === 'LOCKED' && lockoutUntil) {
      const interval = setInterval(() => {
        if (Date.now() >= lockoutUntil) {
          setStage('CREDENTIALS');
          setLockoutUntil(null);
          setAttemptsLeft(3);
          setError(null);
          setSuccessNotification('Lockout window expired. You may now attempt to sign in again.');
        }
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [stage, lockoutUntil]);

  const addAuditLog = (event: string, status: SecurityAuditLog['status'], details: string) => {
    const newLog: SecurityAuditLog = {
      id: 'log_' + Date.now(),
      timestamp: new Date().toLocaleTimeString('en-IN', { timeZone: 'Asia/Kolkata' }),
      event,
      status,
      ipAddress: '103.21.244.18 (Raipur)',
      location: 'Raipur, CG, India',
      protocol: 'MFA-SHA256 / Dual-Token',
      details,
    };
    setAuditLogs((prev) => [newLog, ...prev]);
  };

  // Generate a cryptographically randomized 6-digit string
  const generateNew6DigitOtp = (): string => {
    // Generate secure 6-digit number between 100000 and 999999
    const randomArray = new Uint32Array(1);
    window.crypto.getRandomValues(randomArray);
    const code = (100000 + (randomArray[0] % 900000)).toString();
    return code;
  };

  // Step 1: Validate Email + Password
  const validateCredentials = async (
    inputEmail: string,
    inputPassword: string,
    remember: boolean
  ): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setSuccessNotification(null);

    // Simulated network delay
    await new Promise((resolve) => setTimeout(resolve, 750));

    const normalizedEmail = inputEmail.trim().toLowerCase();
    const matchedAccount = DEMO_USERS[normalizedEmail];

    if (!matchedAccount || matchedAccount.passwordHash !== inputPassword) {
      setIsLoading(false);
      const errMsg = 'Invalid work email or security password. Please check your credentials.';
      setError(errMsg);
      addAuditLog(
        'Primary Authentication Failed',
        'FAILED',
        `Failed password attempt for account [${normalizedEmail || 'empty'}]`
      );
      return false;
    }

    // Credentials valid -> Generate 6-Digit OTP & transition to Stage 2
    const newOtp = generateNew6DigitOtp();
    const now = Date.now();
    const expiry = now + 5 * 60 * 1000; // 5 minutes validity
    const resendWindow = now + 60 * 1000; // 60s resend timer

    setEmail(normalizedEmail);
    setUser(matchedAccount.profile);
    setOtp(newOtp);
    setOtpCreatedAt(now);
    setOtpExpiresAt(expiry);
    setResendAvailableAt(resendWindow);
    setAttemptsLeft(3);
    setRememberMe(remember);
    setStage('OTP');
    setIsLoading(false);
    setSuccessNotification(
      `Primary credentials verified. A 6-digit OTP was dispatched to ${matchedAccount.profile.maskedEmail}.`
    );

    addAuditLog(
      'Primary Credentials Accepted & 2FA Initiated',
      'SUCCESS',
      `Stage 1 passed for ${matchedAccount.profile.name} (${normalizedEmail}). 6-digit OTP generated with 5-min TTL.`
    );

    return true;
  };

  // Step 2: Verify 6-digit OTP
  const verifyOtp = async (enteredOtp: string): Promise<boolean> => {
    setIsLoading(true);
    setError(null);
    setSuccessNotification(null);

    // Simulated micro-verification delay
    await new Promise((resolve) => setTimeout(resolve, 600));

    // 1. Check if expired
    if (!otpExpiresAt || Date.now() > otpExpiresAt) {
      setIsLoading(false);
      setError('The 6-digit OTP has expired (5-minute validity exceeded). Please click "Resend Code".');
      addAuditLog('2FA OTP Expired', 'WARNING', 'User entered code after 5-minute TTL elapsed.');
      return false;
    }

    // 2. Check correctness
    if (enteredOtp.trim() !== otp) {
      const remaining = attemptsLeft - 1;
      setAttemptsLeft(remaining);
      setIsLoading(false);

      if (remaining <= 0) {
        // LOCKOUT ENFORCEMENT
        const lockoutTime = Date.now() + 2 * 60 * 1000; // 2 minutes lockout
        setStage('LOCKED');
        setLockoutUntil(lockoutTime);
        setOtp(''); // Invalidate OTP immediately
        setOtpExpiresAt(null);
        setError('CRITICAL: 3 consecutive invalid OTP attempts detected. Account session locked for 2 minutes.');
        addAuditLog(
          'Brute-Force Lockout Triggered',
          'BLOCKED',
          `3 consecutive failed OTP entries. Session locked until ${new Date(lockoutTime).toLocaleTimeString()}.`
        );
        return false;
      }

      setError(`Incorrect 6-digit verification code. ${remaining} attempt${remaining === 1 ? '' : 's'} remaining before lockout.`);
      addAuditLog(
        '2FA OTP Mismatch',
        'FAILED',
        `Incorrect OTP submitted for ${email}. Remaining attempts: ${remaining}.`
      );
      return false;
    }

    // 3. SUCCESS! Single-use Invalidation to block replay attacks
    setOtp(''); // Invalidate OTP so it can never be used again
    setOtpExpiresAt(null);
    setStage('AUTHENTICATED');
    setIsLoading(false);
    setSuccessNotification('Two-Factor Authentication successful. Enterprise session granted.');

    if (user && rememberMe) {
      localStorage.setItem(
        STORAGE_SESSION_KEY,
        JSON.stringify({
          user,
          authenticatedAt: Date.now(),
        })
      );
    }

    addAuditLog(
      '2FA Completed — Session Granted',
      'SUCCESS',
      `Full MFA pipeline completed for ${user?.name} (${user?.role}). Single-use OTP successfully invalidated.`
    );

    return true;
  };

  // Resend OTP
  const resendOtp = async (): Promise<void> => {
    if (resendAvailableAt && Date.now() < resendAvailableAt) {
      const remainingSec = Math.ceil((resendAvailableAt - Date.now()) / 1000);
      setError(`Please wait ${remainingSec}s before requesting another verification code.`);
      return;
    }

    setIsLoading(true);
    setError(null);
    await new Promise((resolve) => setTimeout(resolve, 500));

    const newOtp = generateNew6DigitOtp();
    const now = Date.now();
    const expiry = now + 5 * 60 * 1000;
    const resendWindow = now + 60 * 1000;

    setOtp(newOtp);
    setOtpCreatedAt(now);
    setOtpExpiresAt(expiry);
    setResendAvailableAt(resendWindow);
    setAttemptsLeft(3); // Reset attempts on freshly issued OTP
    setIsLoading(false);
    setSuccessNotification(`A fresh 6-digit OTP has been dispatched to ${user?.maskedEmail || email}.`);

    addAuditLog(
      '2FA OTP Regenerated',
      'SUCCESS',
      `New single-use OTP issued for ${email}. Previous tokens revoked.`
    );
  };

  const resetToCredentials = () => {
    setStage('CREDENTIALS');
    setOtp('');
    setOtpExpiresAt(null);
    setError(null);
    setSuccessNotification(null);
  };

  const logout = () => {
    localStorage.removeItem(STORAGE_SESSION_KEY);
    setUser(null);
    setEmail('');
    setOtp('');
    setOtpExpiresAt(null);
    setStage('CREDENTIALS');
    setSuccessNotification('Enterprise session securely terminated.');
    addAuditLog('User Logged Out', 'SUCCESS', 'Admin session terminated by user.');
  };

  // Reviewer helper functions
  const fillDemoCredentials = (userKey = 'admin@alishangreenenergy.com') => {
    const acc = DEMO_USERS[userKey] || DEMO_USERS['admin@alishangreenenergy.com'];
    return { email: acc.profile.email, pass: acc.passwordHash };
  };

  const fillDemoOtp = () => {
    return otp;
  };

  const simulateWrongOtp = async () => {
    await verifyOtp('000000');
  };

  const unlockSessionManually = () => {
    setStage('CREDENTIALS');
    setLockoutUntil(null);
    setAttemptsLeft(3);
    setError(null);
    setSuccessNotification('Session unlocked manually by Reviewer Helper.');
    addAuditLog('Lockout Override', 'WARNING', 'Session unlocked via Demo Reviewer Simulation tool.');
  };

  const clearNotifications = () => {
    setError(null);
    setSuccessNotification(null);
  };

  return (
    <AuthContext.Provider
      value={{
        stage,
        email,
        user,
        otp,
        otpCreatedAt,
        otpExpiresAt,
        resendAvailableAt,
        attemptsLeft,
        lockoutUntil,
        isLoading,
        error,
        successNotification,
        rememberMe,
        isDemoMode,
        auditLogs,
        validateCredentials,
        verifyOtp,
        resendOtp,
        resetToCredentials,
        logout,
        fillDemoCredentials,
        fillDemoOtp,
        simulateWrongOtp,
        unlockSessionManually,
        clearNotifications,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const use2FA = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('use2FA must be used within an AuthProvider');
  }
  return context;
};
