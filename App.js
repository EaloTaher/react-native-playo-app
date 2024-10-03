import { StyleSheet } from "react-native";
import StackNavigator from "./navigation/StackNavigator";
import { AuthProvider } from "./AuthContext";

export default function App() {
  return (
    <AuthProvider>
      <StackNavigator />
    </AuthProvider>
  );
}
