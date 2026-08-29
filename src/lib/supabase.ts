import { createClient } from '@supabase/supabase-js';
import type { QuoteFormData } from '../types';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(
  supabaseUrl && 
  supabaseAnonKey && 
  !supabaseUrl.includes('your-project-id') &&
  supabaseUrl.startsWith('https://')
);

export const supabase = (isSupabaseConfigured && supabaseUrl && supabaseAnonKey)
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

export interface SubmissionResponse {
  success: boolean;
  message: string;
  isMock?: boolean;
}

export async function submitQuoteInquiry(data: QuoteFormData): Promise<SubmissionResponse> {
  // If Supabase is configured, submit to database
  if (supabase) {
    try {
      const { error } = await supabase
        .from('quotes_and_inquiries')
        .insert([
          {
            full_name: data.fullName.trim(),
            company_name: data.companyName.trim() || null,
            email: data.email.trim().toLowerCase(),
            phone: data.phone.trim(),
            product_interest: data.productInterest,
            estimated_volume: data.estimatedVolume.trim() || null,
            message: data.message.trim(),
          },
        ]);

      if (error) {
        console.error('Supabase insert error:', error);
        return {
          success: false,
          message: error.message || 'Failed to submit inquiry to the database. Please try again.',
        };
      }

      return {
        success: true,
        message: 'Your inquiry has been successfully submitted directly to Supabase. Our technical engineering team will reach out within 24 business hours.',
      };
    } catch (err: any) {
      console.error('Network or client error during Supabase submission:', err);
      return {
        success: false,
        message: err?.message || 'An unexpected connection error occurred.',
      };
    }
  }

  // Graceful development/reviewer fallback if keys are pending in .env
  console.group('%c[Alishan Green Energy] 📥 New Inquiry Submitted (Demo Mode)', 'color: #10B981; font-weight: bold; font-size: 13px;');
  console.info('To link with your live PostgreSQL database, configure VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY in .env');
  console.table(data);
  console.groupEnd();

  // Save to browser localStorage so user can inspect it at any time
  try {
    const existing = JSON.parse(localStorage.getItem('alishan_submitted_inquiries') || '[]');
    existing.unshift({
      id: 'demo-' + Date.now(),
      created_at: new Date().toISOString(),
      ...data,
    });
    localStorage.setItem('alishan_submitted_inquiries', JSON.stringify(existing.slice(0, 50)));
  } catch (e) {
    console.error('Failed to save to localStorage:', e);
  }

  // Artificial realistic delay for UI responsiveness
  await new Promise((resolve) => setTimeout(resolve, 800));

  return {
    success: true,
    isMock: true,
    message: 'Inquiry received in Demo Mode & saved to local storage. (Link your live Supabase in .env to view in PostgreSQL Table Editor).',
  };
}

export function getLocalSubmissions(): Array<QuoteFormData & { id: string; created_at: string }> {
  try {
    return JSON.parse(localStorage.getItem('alishan_submitted_inquiries') || '[]');
  } catch {
    return [];
  }
}
