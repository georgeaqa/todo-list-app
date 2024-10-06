import { Animated, View, Pressable } from "react-native";
import { dimensions } from "@/src/constants";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { useMemo } from "react";
export default function CustomBottomTabBar({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) {
  const inputRange = useMemo(
    () => state.routes.map((_, i) => i),
    [state.routes]
  );

  const width = dimensions.width;

  const indicatorWidth = width / state.routes.length;
  return (
    <View className="flex-row h-16">
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };
        const Icon = options.tabBarIcon;

        return (
          <Animated.View key={index} className="flex-1 bg-white">
            <Pressable
              accessibilityRole="button"
              accessibilityState={isFocused ? { selected: true } : {}}
              accessibilityLabel={options.tabBarAccessibilityLabel}
              testID={options.tabBarTestID}
              onPress={onPress}
              className="flex-1 justify-center items-center"
            >
              {Icon && <Icon color="#000" focused={isFocused} />}
              <Animated.Text className="font-bold text-sm text-black">
                {label.toString()}
              </Animated.Text>
            </Pressable>
          </Animated.View>
        );
      })}
      <Animated.View
        className="absolute h-1 bg-black"
        style={{
          width: indicatorWidth,
          transform: [
            {
              translateX: position.interpolate({
                inputRange,
                outputRange: inputRange.map((i) => i * indicatorWidth),
              }),
            },
          ],
        }}
      />
    </View>
  );
}
