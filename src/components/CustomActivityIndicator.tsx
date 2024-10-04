import React from "react";
import { View } from "react-native";
import { MotiView } from "moti";
import { Easing } from "react-native-reanimated";

export default function CustomActivityIndicator() {
  return (
    <View className="flex-1 items-center justify-center">
      {[...Array(4).keys()].map((index) => {
        return (
          <MotiView
            from={{ opacity: 1, scale: 1 }}
            animate={{ opacity: 0, scale: 4 }}
            transition={{
              type: "timing",
              duration: 1000,
              delay: index * 250,
              easing: Easing.out(Easing.ease),
              loop: true,
              repeatReverse: false,
            }}
            key={index}
            className="absolute w-[100px] h-[100px] bg-black rounded-full"
          ></MotiView>
        );
      })}
    </View>
  );
}
