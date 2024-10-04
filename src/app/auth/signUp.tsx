import {
  CustomButton,
  CustomIcon,
  CustomScreenWrapper,
  CustomTextInput,
} from "@/src/components";
import { Keyboard, Pressable, ScrollView, Text, View } from "react-native";
import React, { useState } from "react";
import { router } from "expo-router";
import { sign_up_with_email } from "@/src/services/authService";

export default function SignUpScreen() {
  const [username, setUsername] = useState("");
  const [full_name, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeat_password, setRepeatPassword] = useState("");
  const [watchPassword, setWatchPassword] = useState(false);
  const [watchRepeatPassword, setWatchRepeatPassword] = useState(false);

  const handleSignUp = async () => {
    if (password !== repeat_password) {
      console.log("Las contraseñas no coinciden");
      return;
    }
    try {
      await sign_up_with_email({
        email,
        password,
        username,
        full_name,
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
            <Text className="text-5xl font-bold text-center">
              Creacion de cuenta
            </Text>
          </View>
          <View className="gap-5">
            <CustomTextInput
              className="shadow-md shadow-black bg-white"
              iconLeft={<CustomIcon name="User" />}
              placeholder="Usuario"
              value={username}
              onChangeText={setUsername}
            />
            <CustomTextInput
              className="shadow-md shadow-black bg-white"
              iconLeft={<CustomIcon name="UserPen" />}
              placeholder="Nombres y apellidos"
              value={full_name}
              onChangeText={setFullName}
            />
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
            <CustomTextInput
              className="shadow-md shadow-black bg-white"
              iconLeft={<CustomIcon name="LockKeyhole" />}
              iconRight={
                <Pressable
                  onPress={() => setWatchRepeatPassword(!watchRepeatPassword)}
                >
                  {watchRepeatPassword ? (
                    <CustomIcon name="Eye" />
                  ) : (
                    <CustomIcon name="EyeOff" />
                  )}
                </Pressable>
              }
              placeholder="Repetir contraseña"
              secureTextEntry={!watchRepeatPassword}
              value={repeat_password}
              onChangeText={setRepeatPassword}
            />
            <CustomButton
              iconLeft={<CustomIcon name="UserPlus" />}
              onPress={() => handleSignUp()}
              tittle="Crear cuenta"
            />

            <CustomButton
              iconLeft={<CustomIcon name="LogIn" />}
              onPress={() => router.back()}
              tittle="Iniciar Sesión"
            />
          </View>
        </Pressable>
      </ScrollView>
    </CustomScreenWrapper>
  );
}
