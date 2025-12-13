import { redirect } from 'next/navigation';
import { getSignUpUrl } from '@workos-inc/authkit-nextjs';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const returnPathname = searchParams.get('return_pathname') || '/';
  
  const authorizationUrl = await getSignUpUrl({
    state: JSON.stringify({ returnPathname }),
  });
  
  return redirect(authorizationUrl);
}
