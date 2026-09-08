export type AuthStage = 'CREDENTIALS' | 'OTP' | 'AUTHENTICATED' | 'LOCKED';

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  phone: string;
  maskedEmail: string;
  maskedPhone: string;
  role: string;
  department: string;
  avatarUrl: string;
  location: string;
  securityClearance: 'Level 4 - Executive' | 'Level 3 - Plant Lead' | 'Level 2 - Quality Specialist';
  lastLogin: string;
  ipAddress: string;
  sessionExpiry: string;
}

export interface SecurityAuditLog {
  id: string;
  timestamp: string;
  event: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED' | 'BLOCKED';
  ipAddress: string;
  location: string;
  protocol: string;
  details: string;
}

export interface AuthState {
  stage: AuthStage;
  email: string;
  user: UserProfile | null;
  otp: string;
  otpCreatedAt: number | null;
  otpExpiresAt: number | null; // 5 mins
  resendAvailableAt: number | null; // 60s countdown
  attemptsLeft: number; // 3 max
  lockoutUntil: number | null; // 2 mins countdown
  isLoading: boolean;
  error: string | null;
  successNotification: string | null;
  rememberMe: boolean;
  isDemoMode: boolean;
  auditLogs: SecurityAuditLog[];
}

export interface DemoCredentials {
  email: string;
  password: string;
  name: string;
  role: string;
  department: string;
}
