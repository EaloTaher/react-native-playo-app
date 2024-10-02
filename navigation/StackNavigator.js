import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
//Main Screens
import HomeScreen from "../screens/HomeScreen";
import BookScreen from "../screens/BookScreen";
import PlayScreen from "../screens/PlayScreen";
import ProfileScreen from "../screens/ProfileScreen";
import AntDesign from "@expo/vector-icons/AntDesign";
import Feather from "@expo/vector-icons/Feather";
import VenueInfoScreen from "../screens/VenueInfoScreen";
//Auth Screens
import StartScreen from "../screens/StartScreen";
import LoginScreen from "../screens/LoginScreen";
import RegisterScreen from "../screens/RegisterScreen";
import PasswordScreen from "../screens/PasswordScreen";
import SelectImage from "../screens/SelectImage";
import PreFinalScreen from "../screens/PreFinalScreen";
import NameScreen from "../screens/NameScreen";

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
        name="Main"
        component={BottomTabs}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen
        name="Venue"
        component={VenueInfoScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}

const AuthStack = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Start"
        component={StartScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Password"
        component={PasswordScreen}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Image"
        component={SelectImage}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="PreFinal"
        component={PreFinalScreen}
        options={{ headerShown: false }}
      />

      <Stack.Screen
        name="Name"
        component={NameScreen}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};
const StackNavigator = () => {
  return (
    <NavigationContainer>
      <AuthStack />
    </NavigationContainer>
  );
};

export default StackNavigator;
