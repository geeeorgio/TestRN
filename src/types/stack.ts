import type { StackNavigationProp } from '@react-navigation/stack';

export type RootStackParamsList = {
  Home: undefined;
  Todos: undefined;
};

export type HomeScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Home'
>;

export type TodosScreenNavigationProp = StackNavigationProp<
  RootStackParamsList,
  'Todos'
>;
