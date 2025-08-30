import { createStackNavigator } from '@react-navigation/stack';

import Home from 'src/screens/Home';
import Todos from 'src/screens/Todos';
import type { RootStackParamsList } from 'src/types/stack';

const Stack = createStackNavigator<RootStackParamsList>();

const RootNavigator = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Todos" component={Todos} />
    </Stack.Navigator>
  );
};

export default RootNavigator;
