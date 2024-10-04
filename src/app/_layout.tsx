import { Slot } from "expo-router";
import AuthContextProvider from "../contexts/AuthContext";
import "../../global.css";
import "react-native-reanimated";
import "react-native-gesture-handler";
import { StatusBar } from "react-native";
import { Provider } from "react-redux";
import { store } from "@/src/store";
export default function RootLayout() {
  return (
    <Provider store={store}>
      <AuthContextProvider>
        <StatusBar barStyle="dark-content" backgroundColor="#fff" />
        <Slot />
      </AuthContextProvider>
    </Provider>
  );
}
