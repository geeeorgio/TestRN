import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

export type BottomTabParamsList = {
  Tab1: undefined;
  Tab2: undefined;
};

export const BottomTab = createBottomTabNavigator<BottomTabParamsList>();
