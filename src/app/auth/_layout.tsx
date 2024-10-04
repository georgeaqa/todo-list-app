import { Redirect, Stack } from "expo-router";
import { useAuth } from "@/src/contexts/AuthContext";
export default function AuthLayout() {
  const { session } = useAuth();
  if (session) {
    return <Redirect href="/tabs" />;
  }
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="signIn" />
      <Stack.Screen name="signUp" />
    </Stack>
  );
}
