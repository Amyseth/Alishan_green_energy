-- ============================================================================
-- Alishan Green Energy Pvt. Ltd. - Database Schema
-- Table: quotes_and_inquiries
-- ============================================================================

-- 1. Create table for storing corporate B2B quotes and technical inquiries
CREATE TABLE IF NOT EXISTS public.quotes_and_inquiries (
    id BIGSERIAL PRIMARY KEY,
    full_name TEXT NOT NULL,
    company_name TEXT,
    email TEXT NOT NULL,
    phone TEXT NOT NULL,
    product_interest TEXT NOT NULL,
    estimated_volume TEXT,
    message TEXT NOT NULL,
    created_at TIMESTAMPTZ NOT NULL DEFAULT NOW()
);

-- 2. Add comments for database documentation
COMMENT ON TABLE public.quotes_and_inquiries IS 'Stores prospective client inquiries and quotation requests for solar PV encapsulants and backsheets';
COMMENT ON COLUMN public.quotes_and_inquiries.full_name IS 'Full legal or contact name of the representative';
COMMENT ON COLUMN public.quotes_and_inquiries.company_name IS 'Solar module manufacturer or EPC company name';
COMMENT ON COLUMN public.quotes_and_inquiries.email IS 'Business email address for official correspondence';
COMMENT ON COLUMN public.quotes_and_inquiries.phone IS 'Contact telephone/mobile number';
COMMENT ON COLUMN public.quotes_and_inquiries.product_interest IS 'Category or specific product of interest (e.g. Encapsulants, Backsheets, Custom Formulation)';
COMMENT ON COLUMN public.quotes_and_inquiries.estimated_volume IS 'Projected monthly/annual procurement volume (e.g. MW/month or sqm)';
COMMENT ON COLUMN public.quotes_and_inquiries.message IS 'Detailed specification requirements or application notes';

-- 3. Enable Row Level Security (RLS)
ALTER TABLE public.quotes_and_inquiries ENABLE ROW LEVEL SECURITY;

-- 4. Create RLS Policy: Allow public anonymous insertion from the website form
-- This ensures unauthenticated prospective clients can submit quotes, but CANNOT read, update, or delete records.
CREATE POLICY "Allow public insert to quotes_and_inquiries"
    ON public.quotes_and_inquiries
    FOR INSERT
    TO anon
    WITH CHECK (true);

-- 5. Create index on created_at for chronological administrative querying
CREATE INDEX IF NOT EXISTS idx_quotes_and_inquiries_created_at
    ON public.quotes_and_inquiries (created_at DESC);
