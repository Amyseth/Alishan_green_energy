import React, { useState } from 'react';
import { Send, CheckCircle2, AlertCircle, Loader2, Database, Shield } from 'lucide-react';
import { QuoteFormData } from '../../types';
import { submitQuoteInquiry, isSupabaseConfigured } from '../../lib/supabase';

interface QuoteFormProps {
  initialProduct?: string;
  onSuccess?: () => void;
  compact?: boolean;
}

export const QuoteForm: React.FC<QuoteFormProps> = ({
  initialProduct = '',
  onSuccess,
  compact = false,
}) => {
  const [formData, setFormData] = useState<QuoteFormData>({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    productInterest: initialProduct || 'Solar Encapsulant Films (EVA / POE / EPE)',
    estimatedVolume: '',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successResponse, setSuccessResponse] = useState<{
    message: string;
    isMock?: boolean;
  } | null>(null);

  const productOptions = [
    'Solar Encapsulant Films (EVA / POE / EPE)',
    'Alishan FC (Fast Cure EVA)',
    'Alishan UFC (Ultra-Fast Cure EVA)',
    'Alishan POE (Pure Polyolefin)',
    'Alishan EPE (Co-Extruded Multi-Layer)',
    'Alishan Low-Acid EVA',
    'Alishan EPE-NT (n-Type TOPCon Tailored)',
    'Alishan EPE-DC (UV Down-Conversion)',
    'Solar Backsheet Films (Backpro Series)',
    'Backpro KPC (PVDF Fluoropolymer)',
    'Backpro CPC (Fluoro-Coated)',
    'Backpro PPC (Polyolefin / Recyclable)',
    'Backpro -T Series (Bifacial Transparent)',
    'Custom Polymer Formulation / Joint R&D',
  ];

  const volumeOptions = [
    'Sample / R&D Trial (< 5,000 sqm)',
    '5,000 - 25,000 sqm / month',
    '25,000 - 100,000 sqm / month',
    '100,000 - 500,000 sqm / month',
    '500,000+ sqm / month (Multi-GW Utility)',
  ];

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (error) setError(null);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    // Basic validation
    if (!formData.fullName.trim()) {
      setError('Please provide your full contact name.');
      return;
    }
    if (!formData.email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      setError('Please provide a valid corporate email address.');
      return;
    }
    if (!formData.phone.trim() || formData.phone.trim().length < 8) {
      setError('Please provide a valid phone number with country code.');
      return;
    }
    if (!formData.message.trim()) {
      setError('Please enter your technical query or project requirements.');
      return;
    }

    setLoading(true);

    try {
      const response = await submitQuoteInquiry(formData);
      if (response.success) {
        setSuccessResponse({
          message: response.message,
          isMock: response.isMock,
        });
        if (onSuccess) {
          onSuccess();
        }
      } else {
        setError(response.message);
      }
    } catch (err: any) {
      setError(err?.message || 'An unexpected error occurred during submission.');
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setSuccessResponse(null);
    setFormData({
      fullName: '',
      companyName: '',
      email: '',
      phone: '',
      productInterest: initialProduct || 'Solar Encapsulant Films (EVA / POE / EPE)',
      estimatedVolume: '',
      message: '',
    });
  };

  if (successResponse) {
    return (
      <div className="bg-slate-900/90 border border-emerald-500/40 rounded-2xl p-8 text-center animate-fadeIn shadow-2xl">
        <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto mb-4 border border-emerald-500/30">
          <CheckCircle2 className="w-9 h-9" />
        </div>
        <h3 className="text-2xl font-bold text-white mb-2">Quote Request Received!</h3>
        <p className="text-slate-300 text-sm max-w-lg mx-auto leading-relaxed mb-6">
          {successResponse.message}
        </p>

        {successResponse.isMock && (
          <div className="bg-amber-500/10 border border-amber-500/30 rounded-xl p-4 text-xs text-amber-300 max-w-lg mx-auto mb-6 text-left space-y-2">
            <div className="flex items-start space-x-2">
              <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
              <div>
                <span className="font-semibold block text-amber-200">Demo Mode Active:</span>
                Your submission was captured and saved to browser <code className="bg-black/50 text-amber-300 px-1 py-0.5 rounded">localStorage</code> and logged in the <code className="bg-black/50 text-amber-300 px-1 py-0.5 rounded">Console (F12)</code>.
              </div>
            </div>
            <div className="bg-slate-950/80 p-3 rounded-lg border border-slate-800 text-[11px] font-mono text-slate-300 overflow-x-auto">
              <div className="text-emerald-400 font-bold mb-1">✓ Saved Payload:</div>
              <div>Name: <span className="text-white">{formData.fullName}</span></div>
              <div>Email: <span className="text-white">{formData.email}</span></div>
              <div>Company: <span className="text-white">{formData.companyName || 'N/A'}</span></div>
              <div>Phone: <span className="text-white">{formData.phone}</span></div>
              <div>Product: <span className="text-emerald-300">{formData.productInterest}</span></div>
              <div>Volume: <span className="text-white">{formData.estimatedVolume || 'N/A'}</span></div>
              {formData.message && <div>Message: <span className="text-slate-400">"{formData.message}"</span></div>}
            </div>
          </div>
        )}

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <button
            type="button"
            onClick={handleReset}
            className="px-6 py-2.5 rounded-lg bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-semibold text-sm transition-colors"
          >
            Submit Another Request
          </button>
          <a
            href="tel:+919171200097"
            className="px-6 py-2.5 rounded-lg bg-slate-800 hover:bg-slate-700 text-white font-medium text-sm transition-colors"
          >
            Direct Line: +91 91712 00097
          </a>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {/* Backend Status indicator */}
      <div className="flex items-center justify-between text-xs text-slate-400 pb-1 border-b border-slate-800">
        <span className="flex items-center text-slate-300 font-medium">
          <Database className="w-3.5 h-3.5 mr-1.5 text-emerald-400" />
          Direct Supabase Database Sync
        </span>
        <span className="flex items-center text-emerald-400">
          <Shield className="w-3 h-3 mr-1" />
          RLS Protected
        </span>
      </div>

      {error && (
        <div className="p-3.5 rounded-lg bg-rose-500/10 border border-rose-500/30 text-rose-300 text-xs flex items-start space-x-2">
          <AlertCircle className="w-4 h-4 shrink-0 mt-0.5" />
          <span>{error}</span>
        </div>
      )}

      {/* Grid Inputs */}
      <div className={`grid grid-cols-1 ${compact ? 'gap-3' : 'sm:grid-cols-2 gap-4'}`}>
        {/* Full Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Full Name <span className="text-emerald-400">*</span>
          </label>
          <input
            type="text"
            name="fullName"
            required
            value={formData.fullName}
            onChange={handleChange}
            placeholder="e.g. Rajesh Sharma"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Company Name */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Company / Organization
          </label>
          <input
            type="text"
            name="companyName"
            value={formData.companyName}
            onChange={handleChange}
            placeholder="e.g. Solartech Dynamics Ltd."
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Corporate Email */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Business Email <span className="text-emerald-400">*</span>
          </label>
          <input
            type="email"
            name="email"
            required
            value={formData.email}
            onChange={handleChange}
            placeholder="procurement@solarfirm.com"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Phone Number */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Phone Number <span className="text-emerald-400">*</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="+91 98765 43210"
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          />
        </div>

        {/* Product of Interest */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Product Interest <span className="text-emerald-400">*</span>
          </label>
          <select
            name="productInterest"
            required
            value={formData.productInterest}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          >
            {productOptions.map((opt) => (
              <option key={opt} value={opt} className="bg-slate-900 text-white">
                {opt}
              </option>
            ))}
          </select>
        </div>

        {/* Estimated Volume */}
        <div>
          <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
            Estimated Monthly Volume
          </label>
          <select
            name="estimatedVolume"
            value={formData.estimatedVolume}
            onChange={handleChange}
            className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
          >
            <option value="">Select projected volume</option>
            {volumeOptions.map((vol) => (
              <option key={vol} value={vol} className="bg-slate-900 text-white">
                {vol}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Message */}
      <div>
        <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-1.5">
          Technical Specifications / Project Details <span className="text-emerald-400">*</span>
        </label>
        <textarea
          name="message"
          rows={compact ? 3 : 4}
          required
          value={formData.message}
          onChange={handleChange}
          placeholder="Please specify thickness requirements (e.g. 0.45mm), module architecture (TOPCon / PERC / G2G), target delivery timelines, or custom NABL test requests..."
          className="w-full px-3.5 py-2.5 rounded-lg bg-slate-900/90 border border-slate-700 text-white placeholder-slate-500 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
        ></textarea>
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        disabled={loading}
        className="w-full py-3.5 px-6 rounded-lg bg-gradient-to-r from-emerald-500 to-emerald-600 hover:from-emerald-400 hover:to-emerald-500 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-emerald-500/25 transition-all duration-200 flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed hover:-translate-y-0.5"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin text-slate-950" />
            <span>Submitting To Database...</span>
          </>
        ) : (
          <>
            <span>Submit Quotation Request</span>
            <Send className="w-4 h-4" />
          </>
        )}
      </button>

      <p className="text-[11px] text-slate-500 text-center">
        By submitting, you agree to receive official technical specifications and pricing from Alishan Green Energy Pvt. Ltd.
      </p>
    </form>
  );
};

export default QuoteForm;
