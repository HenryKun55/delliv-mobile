import { MaterialIcons } from '@expo/vector-icons';
import { Fab as FabNB, Icon } from 'native-base';
import { InterfaceFabProps } from 'native-base/lib/typescript/components/composites/Fab/types';

export const Fab = (props: InterfaceFabProps) => {
  return (
    <FabNB
      renderInPortal={false}
      shadow={2}
      size="lg"
      bottom={20}
      right={8}
      backgroundColor="info.700"
      icon={<Icon color="white" as={MaterialIcons} name="place" size="2xl" />}
      {...props}
    />
  );
};
