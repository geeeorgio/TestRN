import Tab1 from 'src/screens/Tab1';
import Tab2 from 'src/screens/Tab2';
import { BottomTab } from 'src/types/bottomTab';

const BottomTabNavigator = () => {
  return (
    <BottomTab.Navigator>
      <BottomTab.Screen name="Tab1" component={Tab1} />
      <BottomTab.Screen name="Tab2" component={Tab2} />
    </BottomTab.Navigator>
  );
};

export default BottomTabNavigator;
