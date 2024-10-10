import {
  CustomButton,
  CustomIcon,
  CustomScreenWrapper,
  CustomTextInput,
} from "@/src/components";
import { Keyboard, Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { sign_in_with_email } from "@/src/services/authService";

export default function SignInScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [watchPassword, setWatchPassword] = useState(false);

  const handleSignIn = async () => {
    try {
      await sign_in_with_email({
        email,
        password,
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CustomScreenWrapper>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerClassName="grow"
      >
        <Pressable
          className="flex-1 gap-10 justify-center"
          onPress={Keyboard.dismiss}
        >
          <View className="gap-2">
            <Text className="text-7xl font-bold text-center">Bienvenidos</Text>
            <Text className="text-5xl font-bold text-center">
              Todo-List-App
            </Text>
          </View>
          <View className="gap-5">
            <CustomTextInput
              className="shadow-md shadow-black bg-white"
              iconLeft={<CustomIcon name="Mail" />}
              placeholder="Correo Electrónico"
              value={email}
              onChangeText={setEmail}
            />

            <CustomTextInput
              className="shadow-md shadow-black bg-white"
              iconLeft={<CustomIcon name="LockKeyhole" />}
              iconRight={
                <Pressable onPress={() => setWatchPassword(!watchPassword)}>
                  {watchPassword ? (
                    <CustomIcon name="Eye" />
                  ) : (
                    <CustomIcon name="EyeOff" />
                  )}
                </Pressable>
              }
              placeholder="Contraseña"
              secureTextEntry={!watchPassword}
              value={password}
              onChangeText={setPassword}
            />
            <CustomButton
              className=""
              iconLeft={<CustomIcon name="LogIn" />}
              onPress={() => handleSignIn()}
              title="Iniciar Sesión"
            />

            <CustomButton
              className=""
              iconLeft={<CustomIcon name="UserPlus" />}
              onPress={() => router.push("/auth/signUp")}
              title="Crear cuenta"
            />
          </View>
        </Pressable>
      </ScrollView>
    </CustomScreenWrapper>
  );
}
