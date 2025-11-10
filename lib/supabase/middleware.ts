import { createMiddlewareClient } from '@supabase/auth-helpers-nextjs'
import { NextRequest, NextResponse } from 'next/server'
import { Database } from '@/types'

/**
 * Middleware to refresh Supabase session
 */
export async function updateSession(request: NextRequest) {
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  })

  const supabase = createMiddlewareClient<Database>({ req: request, res: response })

  // Refresh session if expired
  await supabase.auth.getSession()

  return response
}
