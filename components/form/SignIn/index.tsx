import { Controller, useForm } from 'react-hook-form';
import { Box, Button, FormControl, Heading, Icon, Input, Pressable, VStack } from 'native-base';
import schema, { FormProps } from './validators';
import { zodResolver } from '@hookform/resolvers/zod';
import { useSignInMutation } from '@/api/auth';
import { useCallback } from 'react';
import { router } from 'expo-router';
import { useToast } from 'native-base';
import { MaterialIcons } from '@expo/vector-icons';
import { useToggle } from '@/hooks/useToggle';

export const SignInForm = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormProps>({ resolver: zodResolver(schema) });
  const [signIn, { isLoading }] = useSignInMutation();
  const { toggle: showPassword, handleToggle: handleShowPassword } = useToggle();
  const toast = useToast();

  const onSubmit = useCallback(({ username, password }: FormProps) => {
    signIn({
      username,
      password,
    })
      .unwrap()
      .then(() => router.replace('/(app)'))
      .catch((errors) => {
        console.log(errors);
        toast.show({
          description: 'Credenciais Inválidas',
          backgroundColor: 'red.400',
          placement: 'top',
        });
      });
  }, []);

  return (
    <Box flex={1}>
      <Box flex={1}>
        <Heading size="lg" fontWeight="600" color="white">
          Welcome
        </Heading>
        <Heading mt="1" color="coolGray.400" fontWeight="medium" size="xs">
          Sign in to continue!
        </Heading>

        <VStack height="container" space={3} mt={10}>
          <FormControl isRequired isInvalid={'username' in errors}>
            <FormControl.Label>Username</FormControl.Label>
            <Controller
              name="username"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  color="white"
                  value={value}
                  onBlur={onBlur}
                  placeholder="john"
                  autoCapitalize="none"
                  selectionColor="white"
                  placeholderTextColor="coolGray.500"
                  onChangeText={(value) => onChange(value)}
                  _input={{
                    selectionColor: '#fff',
                    cursorColor: '#fff',
                  }}
                />
              )}
            />
          </FormControl>

          <FormControl isRequired isInvalid={'password' in errors}>
            <FormControl.Label>Password</FormControl.Label>
            <Controller
              name="password"
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <Input
                  color="white"
                  value={value}
                  type={showPassword ? 'text' : 'password'}
                  onBlur={onBlur}
                  selectionColor="white"
                  placeholder="*********"
                  placeholderTextColor="coolGray.500"
                  onChangeText={(value) => onChange(value)}
                  onSubmitEditing={handleSubmit(onSubmit)}
                  _input={{
                    selectionColor: '#fff',
                    cursorColor: '#fff',
                  }}
                  InputRightElement={
                    <Pressable onPress={() => handleShowPassword()}>
                      <Icon
                        as={<MaterialIcons name={showPassword ? 'visibility' : 'visibility-off'} />}
                        size={6}
                        mr="2"
                        color="muted.400"
                      />
                    </Pressable>
                  }
                />
              )}
            />
          </FormControl>
        </VStack>
      </Box>
      <Box>
        <Button
          mt="full"
          colorScheme="indigo"
          isLoading={isLoading}
          onPress={handleSubmit(onSubmit)}>
          Sign in
        </Button>
      </Box>
    </Box>
  );
};
