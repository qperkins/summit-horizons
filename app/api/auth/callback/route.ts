import { handleAuth } from '@workos-inc/authkit-nextjs';

export const GET = handleAuth({
  returnPathname: '/resources',
  onSuccess: async ({ state }) => {
    // Handle any post-authentication logic here
    // The redirect is handled automatically by WorkOS using returnPathname
    const customData = state ? JSON.parse(state) : null;
    // You can use customData for additional logic if needed
  },
});
