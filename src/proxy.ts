import { type NextRequest } from "next/server";
import { updateSession } from "@/lib/supabase/middleware";

/**
 * Runs before every matched request. Next 16 calls this "proxy"
 * (it was called "middleware" up to Next 15).
 *
 * Its job here is twofold: refresh the Supabase auth token on every
 * request, and keep signed-out users out of the app routes.
 */
export async function proxy(request: NextRequest) {
  return await updateSession(request);
}

export const config = {
  matcher: [
    // Everything except static files and images.
    "/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp|woff2?)$).*)",
  ],
};
