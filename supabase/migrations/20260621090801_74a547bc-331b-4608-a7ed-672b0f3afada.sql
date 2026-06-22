CREATE TABLE public.franchise_enquiries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  full_name text NOT NULL,
  email text NOT NULL,
  phone text NOT NULL,
  city text NOT NULL,
  state text NOT NULL,
  message text,
  created_at timestamptz NOT NULL DEFAULT now()
);

GRANT INSERT ON public.franchise_enquiries TO anon, authenticated;
GRANT ALL ON public.franchise_enquiries TO service_role;

ALTER TABLE public.franchise_enquiries ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can submit a franchise enquiry"
  ON public.franchise_enquiries
  FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);