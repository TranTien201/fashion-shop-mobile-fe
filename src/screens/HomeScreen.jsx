/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartScreen from './src/screens/CartScreen';

const Tab = createBottomTabNavigator();

function HomeScreen() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Settings" component={CartScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default HomeScreen;
