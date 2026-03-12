-- SPE Leads table: stores all contact form submissions
CREATE TABLE IF NOT EXISTS spe_leads (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  first_name text,
  last_name text,
  email text,
  phone text,
  message text,
  service text,
  source_page text,
  status text NOT NULL DEFAULT 'new'
    CHECK (status IN ('new', 'contacted', 'quoted', 'won', 'lost')),
  notes text,
  updated_at timestamptz NOT NULL DEFAULT now()
);

-- Auto-update updated_at on row change
CREATE OR REPLACE FUNCTION update_spe_leads_updated_at()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER spe_leads_updated_at
  BEFORE UPDATE ON spe_leads
  FOR EACH ROW
  EXECUTE FUNCTION update_spe_leads_updated_at();

-- Index for common queries
CREATE INDEX idx_spe_leads_status ON spe_leads(status);
CREATE INDEX idx_spe_leads_created_at ON spe_leads(created_at DESC);

-- SPE Analytics table: page views + form interactions
CREATE TABLE IF NOT EXISTS spe_analytics (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  created_at timestamptz NOT NULL DEFAULT now(),
  event text NOT NULL,
  page text,
  referrer text,
  user_agent text,
  session_id text
);

CREATE INDEX idx_spe_analytics_event ON spe_analytics(event);
CREATE INDEX idx_spe_analytics_created_at ON spe_analytics(created_at DESC);

-- Enable RLS
ALTER TABLE spe_leads ENABLE ROW LEVEL SECURITY;
ALTER TABLE spe_analytics ENABLE ROW LEVEL SECURITY;

-- Service role can do everything (used by API routes)
CREATE POLICY "Service role full access on spe_leads"
  ON spe_leads FOR ALL
  USING (auth.role() = 'service_role');

CREATE POLICY "Service role full access on spe_analytics"
  ON spe_analytics FOR ALL
  USING (auth.role() = 'service_role');

-- Anon can insert analytics (client-side tracking)
CREATE POLICY "Anon can insert spe_analytics"
  ON spe_analytics FOR INSERT
  WITH CHECK (true);
