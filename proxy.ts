import { authkitMiddleware } from '@workos-inc/authkit-nextjs';

export default authkitMiddleware({
  redirectUri: process.env.WORKOS_REDIRECT_URI || process.env.NEXT_PUBLIC_WORKOS_REDIRECT_URI || 'http://localhost:3000/api/auth/callback',
  middlewareAuth: {
    enabled: true, // Authentication is now enabled - routes are protected by default
    unauthenticatedPaths: [
      // Public pages - accessible without authentication
      '/',
      '/about',
      '/services',
      '/contact',
      '/shop',
      '/resources',
      '/login',
      '/checkout/success',
      '/checkout/cancel',
      '/cart',
    ],
  },
});

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - Image files and other static assets
     */
    '/((?!api|_next/static|_next/image|favicon.ico|.*\\.jpg|.*\\.jpeg|.*\\.png|.*\\.gif|.*\\.svg|.*\\.webp|.*\\.ico).*)',
  ],
};
