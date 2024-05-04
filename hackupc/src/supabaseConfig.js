import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://xkzvrawgtlfksbxcdhdl.supabase.co'
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InhrenZyYXdndGxma3NieGNkaGRsIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxNDc4MzA2NywiZXhwIjoyMDMwMzU5MDY3fQ.ZvUzdURoH9DNwp4q9NvssoQhe6RNE-A9PitP-aNwnFA'
const supabase = createClient(supabaseUrl, supabaseKey)

export default supabase;
