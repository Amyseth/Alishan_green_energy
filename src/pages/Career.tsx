import React, { useState } from 'react';
import { 
  Briefcase, 
  MapPin, 
  Clock, 
  GraduationCap, 
  Send, 
  CheckCircle2, 
  Mail, 
  PhoneCall, 
  ArrowRight, 
  ShieldCheck, 
  Zap, 
  Users, 
  Building, 
  ChevronDown,
  X,
  AlertCircle
} from 'lucide-react';
import { COMPANY_INFO } from '../data/company';

interface JobPosition {
  id: string;
  title: string;
  department: string;
  location: string;
  experience: string;
  qualification: string;
  compensation?: string;
  type: string;
  description: string[];
  responsibilities: string[];
}

const OPEN_POSITIONS: JobPosition[] = [
  {
    id: 'plant-head',
    title: 'Plant Head (Operations & Extrusion Manufacturing)',
    department: 'Plant Operations & Manufacturing',
    location: 'Raipur, Chhattisgarh (On-Site)',
    experience: 'Min 5+ years (with at least 3 years in managerial role in Solar/Polymer Industry)',
    qualification: "Bachelor's degree in Engineering / Industrial Management (Master's preferred)",
    type: 'Full-Time | Day Shift',
    description: [
      'Lead end-to-end multi-GW solar polymer film extrusion and backsheet slitting operations.',
      'Maintain peak production schedules while optimizing energy efficiency and raw material yield.',
      'Ensure strict adherence to ISO 9001, 14001, 45001, and 5S cleanroom standards.'
    ],
    responsibilities: [
      'Oversee end-to-end plant operations ensuring high-throughput, zero-defect extrusion.',
      'Develop production schedules focusing on cross-linking consistency, UV stability, and safety.',
      'Manage departmental budgets, optimize polymer resin utilization, and reduce line purge waste.',
      'Collaborate with R&D, QC & Supply Chain teams for continuous process improvements.'
    ]
  },
  {
    id: 'quality-head',
    title: 'Quality Head / Senior QC Professional',
    department: 'Quality Assurance & Testing (NABL)',
    location: 'Raipur, Chhattisgarh (On-Site)',
    experience: 'Senior Level (QC/QA professional from Polymer, Electronics or Chemical Industry)',
    qualification: 'Preferably IIT Graduate / M.Sc Polymer Chemistry / PhD / Equivalent',
    compensation: '₹40,000.00 – ₹90,000.00 per month',
    type: 'Full-Time | Day Shift',
    description: [
      'Direct operations for our in-house NABL TC 15544 accredited solar testing laboratory.',
      'Lead rigorous incoming resin verification, in-line thickness auditing, and Soxhlet gel content cross-link testing.',
      'Interface directly with tier-1 module customer technical audits and IEC 61215 / 61730 certifications.'
    ],
    responsibilities: [
      'Oversee QA/QC protocols for all incoming EVA and POE resins and finished master rolls.',
      'Supervise testing on spectrophotometers, thermal shrinkage ovens, and peel adhesion fixtures.',
      'Maintain rigorous quality documentation ensuring zero-defect batch compliance.',
      'Drive root-cause analysis (RCA) and corrective actions (CAPA) on production lines.'
    ]
  },
  {
    id: 'finance-head',
    title: 'Finance Head',
    department: 'Corporate Finance & Strategy',
    location: 'Kamal Vihar, Raipur, Chhattisgarh',
    experience: 'Minimum 8+ years in finance leadership roles (preferably manufacturing sector)',
    qualification: 'Chartered Accountant (CA) / MBA in Finance',
    type: 'Full-Time | Day Shift',
    description: [
      'Drive corporate financial strategy, working capital management, and capital structuring.',
      'Lead budgeting, multi-year forecasting, and financial modeling for capacity expansion.',
      'Coordinate with financial institutions, consortium banks, and statutory auditors.'
    ],
    responsibilities: [
      'Drive financial strategy aligned with Alishan\'s multi-GW expansion roadmap.',
      'Manage working capital, cash flows, and cost controls across production and supply chain.',
      'Build detailed financial models for capital investment and machinery procurement.',
      'Ensure strict statutory compliance with GST, corporate law, and financial regulations.'
    ]
  },
  {
    id: 'maint-engineer',
    title: 'Maintenance & Extrusion Line Engineer',
    department: 'Plant Engineering & Maintenance',
    location: 'Raipur, Chhattisgarh (On-Site)',
    experience: '3–5 years in polymer sheet extrusion lines, gearboxes, chillers & winding machinery',
    qualification: 'B.E. / B.Tech / Diploma in Mechanical or Electrical Engineering',
    type: 'Full-Time',
    description: [
      'Execute preventive, predictive, and breakdown maintenance across high-speed extrusion machinery.',
      'Maintain chill rolls, corona treaters, beta-gauge thickness sensors, and automated slitters.'
    ],
    responsibilities: [
      'Plan and execute daily preventive maintenance schedules to eliminate unplanned line downtime.',
      'Troubleshoot electrical drives, PLCs, temperature PID controllers, and hydraulic winders.',
      'Maintain spare parts inventory and coordinate with machinery OEM service engineers.'
    ]
  },
  {
    id: 'ehs-engineer',
    title: 'Safety & Environment (EHS) Engineer',
    department: 'Environment, Health & Safety (EHS)',
    location: 'Raipur, Chhattisgarh (On-Site)',
    experience: '2–4 years in manufacturing plant EHS compliance and emergency preparedness',
    qualification: 'Degree / Diploma in Industrial Safety & Environmental Engineering',
    type: 'Full-Time',
    description: [
      'Maintain zero-incident safety culture across factory premises in accordance with ISO 45001.',
      'Ensure 100% compliance with Chhattisgarh Environment Conservation Board (CECB) regulations.'
    ],
    responsibilities: [
      'Conduct regular safety hazard audits, fire safety inspections, and mock drills.',
      'Oversee waste recycling, safe handling of polymer additives, and Zero Liquid Discharge (ZLD).',
      'Train factory staff and operators on PPE protocols and standard operating procedures (SOPs).'
    ]
  },
  {
    id: 'accountant',
    title: 'Accountant / Assistant Accounts Manager',
    department: 'Finance & Accounts',
    location: 'Raipur, Chhattisgarh (On-Site)',
    experience: 'Minimum 2–3 years in manufacturing accounts & ERP systems',
    qualification: 'B.Com / M.Com / Inter-CA / Finance Graduate',
    type: 'Full-Time',
    description: [
      'Manage day-to-day accounts payable, accounts receivable, and vendor reconciliation.',
      'Assist in GST returns filing, TDS deduction compliance, and monthly ledger balance audits.'
    ],
    responsibilities: [
      'Prepare financial vouchers, debit/credit notes, and invoice processing.',
      'Perform monthly bank reconciliations and track plant inventory valuation.',
      'Assist senior finance management in quarterly audit closures and tax compliance.'
    ]
  }
];

export const Career: React.FC = () => {
  const [selectedJob, setSelectedJob] = useState<JobPosition | null>(null);
  const [expandedJobId, setExpandedJobId] = useState<string | null>(OPEN_POSITIONS[0].id);

  // Application form states
  const [applicantName, setApplicantName] = useState('');
  const [applicantEmail, setApplicantEmail] = useState('');
  const [applicantPhone, setApplicantPhone] = useState('');
  const [applicantPosition, setApplicantPosition] = useState('');
  const [applicantExp, setApplicantExp] = useState('');
  const [applicantNotes, setApplicantNotes] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [applicationSuccess, setApplicationSuccess] = useState(false);

  const handleOpenApplication = (job: JobPosition) => {
    setSelectedJob(job);
    setApplicantPosition(job.title);
    setApplicationSuccess(false);
  };

  const handleApplicationSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Save to localStorage
    try {
      const existing = JSON.parse(localStorage.getItem('alishan_job_applications') || '[]');
      existing.unshift({
        id: 'app-' + Date.now(),
        date: new Date().toISOString(),
        name: applicantName,
        email: applicantEmail,
        phone: applicantPhone,
        position: applicantPosition,
        experience: applicantExp,
        notes: applicantNotes
      });
      localStorage.setItem('alishan_job_applications', JSON.stringify(existing.slice(0, 50)));
    } catch (err) {
      console.error(err);
    }

    await new Promise((resolve) => setTimeout(resolve, 800));
    setIsSubmitting(false);
    setApplicationSuccess(true);
  };

  return (
    <div className="pt-28 pb-20 space-y-20">
      {/* ========================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ========================================================================= */}
      <section className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
        <div className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs sm:text-sm font-semibold">
          <Briefcase className="w-4 h-4 mr-1" />
          <span>Careers at Alishan Green Energy</span>
        </div>

        <h1 className="text-3xl sm:text-5xl font-extrabold text-white tracking-tight leading-tight">
          Build India's Clean Energy{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 via-teal-300 to-cyan-300">
            Manufacturing Future
          </span>
        </h1>

        <p className="text-slate-300 text-base sm:text-lg max-w-3xl mx-auto leading-relaxed">
          We are growing, and you are growing with us. Join a dynamic team of polymer technologists, production engineers, and quality specialists manufacturing advanced solar encapsulants for India's clean energy transition.
        </p>

        {/* Culture Highlights */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto pt-6 text-left">
          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center border border-emerald-500/20">
              <Zap className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base">State-of-the-Art Technology</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Work with advanced automated continuous polymer extrusion lines and an in-house NABL TC 15544 accredited laboratory.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-400 flex items-center justify-center border border-teal-500/20">
              <Users className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base">Mentorship &amp; Growth</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              Accelerate your engineering and leadership career with hands-on responsibilities, competitive pay, and direct executive mentorship.
            </p>
          </div>

          <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 space-y-3">
            <div className="w-10 h-10 rounded-xl bg-cyan-500/10 text-cyan-400 flex items-center justify-center border border-cyan-500/20">
              <ShieldCheck className="w-5 h-5" />
            </div>
            <h3 className="text-white font-bold text-base">Safety &amp; Well-Being First</h3>
            <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">
              IMS certified operations adhering to ISO 45001 occupational health &amp; safety, 5S cleanrooms, and sustainable green manufacturing.
            </p>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 2. DIRECT HR CONTACT BANNER */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 backdrop-blur-md">
          <div className="space-y-2 text-center md:text-left">
            <div className="text-emerald-400 font-bold text-base sm:text-lg flex items-center justify-center md:justify-start space-x-2">
              <Mail className="w-5 h-5" />
              <span>Direct Recruitment &amp; Resume Submission</span>
            </div>
            <p className="text-slate-300 text-xs sm:text-sm max-w-xl">
              Don't see an exact match? Send your CV directly to our Talent Acquisition team. We review all applications within 48 business hours.
            </p>
          </div>

          <div className="flex flex-wrap items-center justify-center gap-3">
            <a
              href="mailto:hr@alishangreenenergy.com?subject=Job%20Application%20-%20Alishan%20Green%20Energy"
              className="px-5 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 flex items-center space-x-2"
            >
              <Mail className="w-4 h-4" />
              <span>Email: hr@alishangreenenergy.com</span>
            </a>
            <a
              href="tel:+919171200097"
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700 text-white font-semibold text-xs sm:text-sm transition-all flex items-center space-x-2"
            >
              <PhoneCall className="w-4 h-4 text-emerald-400" />
              <span>HR Desk: +91 91712 00097</span>
            </a>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3. OPEN POSITIONS LIST */}
      {/* ========================================================================= */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-b border-slate-800 pb-4">
          <div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white">
              Open Positions ({OPEN_POSITIONS.length})
            </h2>
            <p className="text-slate-400 text-xs sm:text-sm mt-1">
              Active openings across our plant facilities in Raipur, Chhattisgarh
            </p>
          </div>

          <div className="flex items-center space-x-2 text-xs text-emerald-400 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
            <CheckCircle2 className="w-4 h-4" />
            <span>Equal Opportunity Employer</span>
          </div>
        </div>

        <div className="space-y-4">
          {OPEN_POSITIONS.map((job) => {
            const isExpanded = expandedJobId === job.id;
            return (
              <div
                key={job.id}
                className="bg-slate-900/70 border border-slate-800 hover:border-slate-700 rounded-2xl overflow-hidden transition-all duration-200"
              >
                {/* Job Header */}
                <div 
                  className="p-6 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-4 select-none"
                  onClick={() => setExpandedJobId(isExpanded ? null : job.id)}
                >
                  <div className="space-y-2">
                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/10 text-emerald-400 text-xs font-semibold border border-emerald-500/20">
                        {job.department}
                      </span>
                      {job.compensation && (
                        <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/10 text-cyan-400 text-xs font-semibold border border-cyan-500/20">
                          {job.compensation}
                        </span>
                      )}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold text-white group-hover:text-emerald-400 transition-colors">
                      {job.title}
                    </h3>
                    <div className="flex flex-wrap items-center gap-4 text-xs text-slate-400">
                      <span className="flex items-center">
                        <MapPin className="w-3.5 h-3.5 mr-1 text-slate-500" />
                        {job.location}
                      </span>
                      <span className="flex items-center">
                        <Clock className="w-3.5 h-3.5 mr-1 text-slate-500" />
                        {job.type}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3 shrink-0">
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        handleOpenApplication(job);
                      }}
                      className="px-5 py-2 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20"
                    >
                      Apply Now
                    </button>
                    <button
                      className="p-2 rounded-xl bg-slate-800 text-slate-400 hover:text-white transition-colors"
                      aria-label="Expand position details"
                    >
                      <ChevronDown className={`w-5 h-5 transition-transform duration-200 ${isExpanded ? 'rotate-180 text-emerald-400' : ''}`} />
                    </button>
                  </div>
                </div>

                {/* Job Expanded Details */}
                {isExpanded && (
                  <div className="px-6 pb-6 pt-2 border-t border-slate-800/80 space-y-5 bg-slate-950/40 animate-fadeIn">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm bg-slate-900/60 p-4 rounded-xl border border-slate-800">
                      <div>
                        <span className="text-slate-400 font-semibold block mb-1">Required Experience:</span>
                        <span className="text-slate-200">{job.experience}</span>
                      </div>
                      <div>
                        <span className="text-slate-400 font-semibold block mb-1">Educational Qualification:</span>
                        <span className="text-slate-200">{job.qualification}</span>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-bold text-sm">Role Summary:</h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                        {job.description.map((desc, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-400 mr-2 mt-1">•</span>
                            <span>{desc}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="space-y-2">
                      <h4 className="text-white font-bold text-sm">Key Responsibilities:</h4>
                      <ul className="space-y-1.5 text-xs sm:text-sm text-slate-300">
                        {job.responsibilities.map((resp, idx) => (
                          <li key={idx} className="flex items-start">
                            <span className="text-emerald-400 mr-2 mt-1">✓</span>
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-2 flex flex-wrap items-center justify-between gap-4">
                      <div className="text-xs text-slate-400">
                        Location: <strong className="text-slate-300">{job.location}</strong>
                      </div>
                      <button
                        onClick={() => handleOpenApplication(job)}
                        className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all flex items-center space-x-2"
                      >
                        <span>Apply For This Position</span>
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 4. APPLICATION MODAL */}
      {/* ========================================================================= */}
      {selectedJob && (
        <div 
          className="fixed inset-0 z-50 bg-black/85 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 animate-fadeIn"
          onClick={() => setSelectedJob(null)}
        >
          <div 
            className="relative max-w-xl w-full bg-slate-900 border border-slate-700 rounded-2xl overflow-hidden shadow-2xl p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedJob(null)}
              className="absolute top-5 right-5 p-1.5 rounded-full bg-slate-800 text-slate-400 hover:text-white transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            {applicationSuccess ? (
              <div className="text-center py-8 space-y-4">
                <div className="w-16 h-16 bg-emerald-500/20 text-emerald-400 rounded-full flex items-center justify-center mx-auto border border-emerald-500/30">
                  <CheckCircle2 className="w-9 h-9" />
                </div>
                <h3 className="text-2xl font-bold text-white">Application Submitted!</h3>
                <p className="text-slate-300 text-sm max-w-md mx-auto leading-relaxed">
                  Thank you, <strong className="text-white">{applicantName}</strong>. Your profile for <strong className="text-emerald-400">{selectedJob.title}</strong> has been logged with our HR department.
                </p>
                <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-xs text-slate-400">
                  You can also email your full CV/portfolio directly to <a href="mailto:hr@alishangreenenergy.com" className="text-emerald-400 underline">hr@alishangreenenergy.com</a>.
                </div>
                <button
                  onClick={() => setSelectedJob(null)}
                  className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-sm transition-all"
                >
                  Close Window
                </button>
              </div>
            ) : (
              <form onSubmit={handleApplicationSubmit} className="space-y-4">
                <div>
                  <div className="text-xs font-semibold text-emerald-400 uppercase tracking-wider mb-1">
                    Job Application
                  </div>
                  <h3 className="text-xl font-bold text-white">{selectedJob.title}</h3>
                  <p className="text-xs text-slate-400 mt-0.5">{selectedJob.location}</p>
                </div>

                <div className="space-y-3 pt-2">
                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Full Name *</label>
                    <input
                      type="text"
                      required
                      value={applicantName}
                      onChange={(e) => setApplicantName(e.target.value)}
                      placeholder="e.g. Rahul Sharma"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={applicantEmail}
                        onChange={(e) => setApplicantEmail(e.target.value)}
                        placeholder="rahul@example.com"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-slate-300 mb-1">Phone Number *</label>
                      <input
                        type="tel"
                        required
                        value={applicantPhone}
                        onChange={(e) => setApplicantPhone(e.target.value)}
                        placeholder="+91 98765 43210"
                        className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none transition-colors"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">Total Years of Experience *</label>
                    <input
                      type="text"
                      required
                      value={applicantExp}
                      onChange={(e) => setApplicantExp(e.target.value)}
                      placeholder="e.g. 5 Years in Polymer / Solar Sheet Extrusion"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-medium text-slate-300 mb-1">LinkedIn Profile or Resume Link</label>
                    <input
                      type="text"
                      value={applicantNotes}
                      onChange={(e) => setApplicantNotes(e.target.value)}
                      placeholder="https://linkedin.com/in/username or Drive link"
                      className="w-full bg-slate-950 border border-slate-800 focus:border-emerald-500 rounded-xl px-3.5 py-2.5 text-white text-sm focus:outline-none transition-colors"
                    />
                  </div>
                </div>

                <div className="pt-3 flex items-center justify-end space-x-3">
                  <button
                    type="button"
                    onClick={() => setSelectedJob(null)}
                    className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 text-xs font-semibold transition-colors"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="px-6 py-2.5 rounded-xl bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-bold text-xs sm:text-sm transition-all shadow-md shadow-emerald-500/20 disabled:opacity-50 flex items-center space-x-1.5"
                  >
                    {isSubmitting ? (
                      <span>Submitting...</span>
                    ) : (
                      <>
                        <span>Submit Application</span>
                        <Send className="w-3.5 h-3.5" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Career;
