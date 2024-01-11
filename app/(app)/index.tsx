import { Box, Heading, ScrollView, useToast } from 'native-base';
import { useEffect, useRef } from 'react';
import { ConfirmDialog, ConfirmDialogRef } from '@/components/ConfirmDialog';
import { Fab } from '@/components/Fab';
import socket from '@/api/socket';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '@/store/auth/selector';
import { useListOrdersQuery } from '@/api/orders';

export default () => {
  const toast = useToast();
  const user = useSelector(selectAuthUser);
  const { data } = useListOrdersQuery();

  useEffect(() => {
    socket.on('notify-delivery', () => {
      toast.show({
        description: 'Sua notificação foi confirmada, fique no aguardo do pedido',
        backgroundColor: 'green.400',
        placement: 'top',
      });
    });
  }, [socket]);

  console.log(data);

  const confirDialogRef = useRef<ConfirmDialogRef>(null);
  return (
    <Box padding="4" height="full" backgroundColor="coolGray.800">
      <Heading size="lg" fontWeight="600" color="white">
        Welcome
      </Heading>
      <Heading mt="1" color="coolGray.400" fontWeight="medium" size="xs">
        {user?.username}
      </Heading>

      <ScrollView showsVerticalScrollIndicator={false} mt={5}></ScrollView>
      <Fab onPress={() => confirDialogRef.current?.toggle()} />
      <ConfirmDialog ref={confirDialogRef} />
    </Box>
  );
};
