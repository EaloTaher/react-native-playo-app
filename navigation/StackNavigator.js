import { StyleSheet, Text, View } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeScreen from "../screens/HomeScreen";
import BookScreen from "../screens/BookScreen";
import PlayScreen from "../screens/PlayScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import { NavigationContainer } from "@react-navigation/native";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function BottomTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="HOME"
        component={HomeScreen}
        options={{
          tabBarActiveTintColor: "green",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="home" size={24} color="green" />
            ) : (
              <AntDesign name="home" size={24} color="#989898" />
            ),
        }}
      />
      <Tab.Screen
        name="PLAY"
        component={PlayScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="addusergroup" size={24} color="green" />
            ) : (
              <AntDesign name="addusergroup" size={24} color="#989898" />
            ),
        }}
      />
      <Tab.Screen
        name="BOOK"
        component={BookScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <Feather name="book-open" size={24} color="green" />
            ) : (
              <Feather name="book-open" size={24} color="#989898" />
            ),
        }}
      />
      <Tab.Screen
        name="PROFILE"
        component={ProfileScreen}
        options={{
          headerShown: false,
          tabBarActiveTintColor: "green",
          tabBarIcon: ({ focused }) =>
            focused ? (
              <AntDesign name="user" size={24} color="green" />
            ) : (
              <AntDesign name="user" size={24} color="#989898" />
            ),
        }}
      />
    </Tab.Navigator>
  );
}

function MainStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="main"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const StackNavigator = () => {
  return (
    <NavigationContainer>
      <MainStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
