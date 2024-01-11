import { VStack, Box, Divider, Pressable, Text } from 'native-base';
import { Link } from 'expo-router';
import * as Crypto from 'expo-crypto';

export default function () {
  return (
    <Link href={{ pathname: '/(app)/request/[id]', params: { id: Crypto.randomUUID() } }} asChild>
      <Pressable>
        <Box
          borderColor="white"
          borderWidth={2}
          borderRadius="2xl"
          padding={4}
          backgroundColor="blueGray.700">
          <VStack space="4" divider={<Divider />}>
            <Text color="white" fontWeight="semibold" fontSize={20}>
              NativeBase
            </Text>
            <Text color="white">
              NativeBase is a free and open source framework that enable developers to build
              high-quality mobile apps using React Native iOS and Android apps with a fusion of ES6.
            </Text>
            <Text color="white">GeekyAnts</Text>
          </VStack>
        </Box>
      </Pressable>
    </Link>
  );
}
