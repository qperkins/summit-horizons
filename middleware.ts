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
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)'],
};
