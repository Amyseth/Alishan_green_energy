import React, { useEffect } from 'react';
import { X, FileSpreadsheet, ShieldCheck } from 'lucide-react';
import QuoteForm from './QuoteForm';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  initialProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  initialProduct,
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => {
      document.body.style.overflow = 'auto';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Card */}
      <div className="relative w-full max-w-2xl bg-[#0B1528] border border-emerald-500/30 rounded-2xl shadow-2xl overflow-hidden z-10 my-8">
        {/* Top Header */}
        <div className="bg-gradient-to-r from-emerald-950/80 to-slate-900 px-6 py-5 border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/20 border border-emerald-500/40 flex items-center justify-center text-emerald-400">
              <FileSpreadsheet className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-lg font-bold text-white flex items-center">
                Request Formal Quotation & Technical Dossier
              </h2>
              <p className="text-xs text-slate-400 flex items-center mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-400 mr-1" />
                Alishan Green Energy Pvt. Ltd. | Raipur Manufacturing Plant
              </p>
            </div>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800/80 transition-colors"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 max-h-[80vh] overflow-y-auto">
          <QuoteForm
            initialProduct={initialProduct}
            onSuccess={() => {
              // keep open to show success state
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default QuoteModal;
