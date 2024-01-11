import { useLocalSearchParams } from 'expo-router';
import { Box, Text } from 'native-base';

export default () => {
  const { id } = useLocalSearchParams();
  return (
    <Box padding="4" height="full" backgroundColor="coolGray.800">
      <Text color="white">{id}</Text>
    </Box>
  );
};
