import BottomTabNavigator from './BottomTabNavigator';
import DrawerNavigator from './DrawerNavigator';

import Home from 'src/screens/Home';
import Todos from 'src/screens/Todos';
import { Stack } from 'src/types/stack';

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Todos" component={Todos} />
      <Stack.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Stack.Screen name="DrawerNavigatior" component={DrawerNavigator} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
