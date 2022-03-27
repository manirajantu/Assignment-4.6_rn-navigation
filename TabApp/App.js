import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from '@expo/vector-icons/Ionicons';

function HomeScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Home!</Text>
    </View>
  );
}

function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Settings!</Text>
    </View>
  );
}


function ContactScreen() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Contact Us!</Text>
    </View>
  );
}

// https://www.youtube.com/watch?v=NwX3mV3LeW8


const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({route}) => ({
          headerTitle: () => <Text>Header</Text>,
          tabBarIcon: ({focused, color, size, padding}) => {
            let iconName;
            if(route.name === 'Home') {
                iconName = focused ? 'home' : 'home-outline'
            } else if (route.name === 'About') {
              iconName = focused ? 'person' : 'person-outline'
            } else if (route.name === 'Settings') {
              iconName = focused ? 'person' : 'person-outline';
            }
            return ( <Ionicons name={iconName} size={size} color={color} style={{paddingBottom: padding}} />
            );  
          }
        })}
      >
        <Tab.Screen name="Home" component={HomeScreen} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
        <Tab.Screen name="Contact" component={ContactScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}







// const Tab = createBottomTabNavigator();

// export default function App() {
//   return (
//     <NavigationContainer>
//       <Tab.Navigator>
//         <Tab.Screen name="Home" component={HomeScreen} />
//         <Tab.Screen name="Settings" component={SettingsScreen} />
//         <Tab.Screen name="Contact" component={ContactScreen} />
//       </Tab.Navigator>
//     </NavigationContainer>
//   );
// }


