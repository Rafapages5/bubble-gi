import { createServerComponentClient } from '@supabase/auth-helpers-nextjs'
import { cookies } from 'next/headers'
import { Database } from '@/types'

/**
 * Create a Supabase client for use in Server Components
 * This uses cookies() from next/headers for session management
 */
export function createServerClient() {
  const cookieStore = cookies()
  return createServerComponentClient<Database>({ cookies: () => cookieStore })
}
