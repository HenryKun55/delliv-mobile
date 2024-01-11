import { SignInForm } from '@/components/form/SignIn';
import { Box } from 'native-base';

export default function Page() {
  return (
    <Box safeArea padding="4" height="full" backgroundColor="coolGray.800">
      <SignInForm />
    </Box>
  );
}
