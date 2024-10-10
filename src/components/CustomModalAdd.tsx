import React from "react";
import { Text, View } from "react-native";
import CustomButton from "./CustomButton";
import Animated, { withTiming } from "react-native-reanimated";
import { dimensions } from "../constants";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import CustomTextInput from "./CustomTextInput";
import CustomIcon from "./CustomIcon";

const { width, height } = dimensions;

const WIDTH = 160;
const HEIGHT = height - 180;
const TIME = 1000;
const customEntering = (targetValues: any) => {
  "worklet";
  const animations = {
    originX: withTiming(targetValues.targetOriginX, { duration: TIME }),
    originY: withTiming(targetValues.targetOriginY, { duration: TIME }),
    opacity: withTiming(1, { duration: TIME }),
    transform: [
      { rotate: withTiming("0deg", { duration: TIME }) },
      { scale: withTiming(1, { duration: TIME }) },
    ],
  };
  const initialValues = {
    originX: WIDTH,
    originY: HEIGHT,
    opacity: 0,
    transform: [{ rotate: "90deg" }, { scale: 0 }],
  };
  return {
    initialValues,
    animations,
  };
};

const customExiting = (values: any) => {
  "worklet";
  const animations = {
    originX: withTiming(WIDTH, { duration: TIME }),
    originY: withTiming(HEIGHT, { duration: TIME }),
    opacity: withTiming(0, { duration: TIME }),
    transform: [
      { rotate: withTiming("90deg", { duration: TIME }) },
      { scale: withTiming(0, { duration: TIME }) },
    ],
  };
  const initialValues = {
    originX: values.currentOriginX,
    originY: values.currentOriginY,
    opacity: 1,
    transform: [{ rotate: "0deg" }, { scale: 1 }],
  };
  return {
    initialValues,
    animations,
  };
};

type CustomModalAddProps = {
  visible: boolean;
  onPress: () => void;
};

export default function CustomModalAdd({
  visible,
  onPress,
}: CustomModalAddProps) {
  const { top, bottom } = useSafeAreaInsets();
  return (
    <>
      {visible && (
        <View
          className="absolute bg-white/50 items-center justify-center px-1"
          style={{ width, height: height + top + bottom }}
        >
          <Animated.View
            className="bg-white w-full shadow-md shadow-black border-2 rounded-3xl"
            entering={customEntering}
            exiting={customExiting}
          >
            <View className="gap-4 py-4 px-2">
              <Text>Titulo:</Text>
              <CustomTextInput />
              <CustomButton
                onPress={() => {}}
                title="Guardar"
                iconLeft={<CustomIcon name="Save" />}
              ></CustomButton>
              <CustomButton
                onPress={onPress}
                iconLeft={<CustomIcon name="X" />}
                title="Cancelar"
              />
            </View>
          </Animated.View>
        </View>
      )}
    </>
  );
}
