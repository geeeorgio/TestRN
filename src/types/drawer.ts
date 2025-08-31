import type { DrawerNavigationProp } from '@react-navigation/drawer';
import { createDrawerNavigator } from '@react-navigation/drawer';

export type DrawerParamsList = {
  Drawer1: undefined;
  Drawer2: undefined;
};

export type Drawer1Prop = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'Drawer1'>;
};

export type Drawer2Prop = {
  navigation: DrawerNavigationProp<DrawerParamsList, 'Drawer2'>;
};

export const Drawer = createDrawerNavigator<DrawerParamsList>();
