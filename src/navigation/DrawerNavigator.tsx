import Drawer1 from 'src/screens/Drawer1';
import Drawer2 from 'src/screens/Drawer2';
import { Drawer } from 'src/types/drawer';

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Drawer1" component={Drawer1} />
      <Drawer.Screen name="Drawer2" component={Drawer2} />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;
