import { useFetchProfileQuery } from '@/api/auth';
import { useAppDispatch } from '@/store';
import { selectAuthIsAuthenticated } from '@/store/auth/selector';
import { logout } from '@/store/auth/slice';
import { Redirect, Stack, router } from 'expo-router';
import { Box, Button, Text } from 'native-base';
import { useCallback } from 'react';
import { useSelector } from 'react-redux';

export default function AppLayout() {
  const { isLoading } = useFetchProfileQuery();
  const isAuthenticated = useSelector(selectAuthIsAuthenticated);
  const dispatch = useAppDispatch();

  const handleLogout = useCallback(() => {
    dispatch(logout());
    router.replace('/sign-in');
  }, []);

  if (isLoading) {
    <Box safeArea padding="4" height="full" backgroundColor="coolGray.800">
      <Text>Loading...</Text>
    </Box>;
  }

  if (!isAuthenticated) {
    return <Redirect href="/sign-in" />;
  }

  return (
    <Stack
      initialRouteName="(app)"
      screenOptions={{
        title: 'delliv',
        headerRight: () => (
          <Button size="sm" onPress={handleLogout}>
            Logout
          </Button>
        ),
        headerTitleStyle: { color: '#fff' },
        headerStyle: { backgroundColor: '#1f2937' },
      }}
    />
  );
}
