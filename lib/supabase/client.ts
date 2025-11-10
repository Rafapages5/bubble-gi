import { createClientComponentClient } from '@supabase/auth-helpers-nextjs'
import { Database } from '@/types'

/**
 * Create a Supabase client for use in Client Components
 * This automatically handles cookies and session management
 */
export function createClient() {
  return createClientComponentClient<Database>()
}
