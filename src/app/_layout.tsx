import { Slot } from "expo-router";
import AuthContextProvider from "../contexts/AuthContext";
import "../../global.css";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
export default function RootLayout() {
  return (
    <AuthContextProvider>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />
      <Slot />
    </AuthContextProvider>
  );
}
