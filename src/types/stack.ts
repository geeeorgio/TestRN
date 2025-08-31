import {
  createStackNavigator,
  type StackNavigationProp,
} from '@react-navigation/stack';

export type RootStackParamsList = {
  Home: undefined;
  Todos: undefined;
  BottomTabNavigator: undefined;
  DrawerNavigatior: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

export type TodosScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Todos'
>;

export const Stack = createStackNavigator<RootStackParamsList>();
