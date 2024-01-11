import { AlertDialog, Button, Text } from 'native-base';
import { forwardRef, useCallback, useImperativeHandle, useRef } from 'react';
import { useToggle } from '../hooks/useToggle';
import socket from '@/api/socket';
import { useSelector } from 'react-redux';
import { selectAuthUser } from '@/store/auth/selector';

export type ConfirmDialogRef = {
  toggle: () => void;
};

export const ConfirmDialog = forwardRef<ConfirmDialogRef>((_, ref) => {
  const cancelRef = useRef();
  const user = useSelector(selectAuthUser);
  const { toggle, handleToggle } = useToggle();

  useImperativeHandle(ref, () => ({
    toggle: handleToggle,
  }));

  const handleConfirm = useCallback(() => {
    socket.emit('notify-arrival-to-establishment', {
      user,
    });
    handleToggle();
  }, []);

  return (
    <AlertDialog leastDestructiveRef={cancelRef} isOpen={toggle} onClose={handleToggle}>
      <AlertDialog.Content>
        <AlertDialog.CloseButton />
        <AlertDialog.Header borderColor="coolGray.700" backgroundColor="coolGray.800">
          <Text fontWeight={700} fontSize={15} color="white">
            Você chegou ao estabelecimento?
          </Text>
        </AlertDialog.Header>
        <AlertDialog.Footer borderColor="coolGray.700" backgroundColor="coolGray.800">
          <Button.Group space={2} backgroundColor="coolGray.800">
            <Button ref={cancelRef} variant="outline" onPress={handleToggle} color="white">
              <Text fontWeight={700} fontSize={15} color="white">
                Não
              </Text>
            </Button>
            <Button colorScheme="success" onPress={handleConfirm} color="white">
              <Text fontWeight={700} fontSize={15} color="white">
                Sim
              </Text>
            </Button>
          </Button.Group>
        </AlertDialog.Footer>
      </AlertDialog.Content>
    </AlertDialog>
  );
});
