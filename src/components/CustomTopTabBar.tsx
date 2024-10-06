import { Animated, View, Pressable } from "react-native";
import { MaterialTopTabBarProps } from "@react-navigation/material-top-tabs";
import { useSafeAreaInsets } from "react-native-safe-area-context";
export default function CustomTopTabBar({
  state,
  descriptors,
  navigation,
  position,
}: MaterialTopTabBarProps) {
  const insets = useSafeAreaInsets();
  const inputRange = state.routes.map((_, i) => i);
  return (
    <View
      className="flex-row h-16 bg-white"
      style={{
        marginTop: insets.top,
      }}
    >
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

        const scale = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? 1.2 : 1)), // Aumentar escala al 120% si está enfocado
        });
        const backgroundColor = position.interpolate({
          inputRange,
          outputRange: inputRange.map((i) => (i === index ? "#000" : "#fff")), // Aumentar escala al 120% si está enfocado
        });

        return (
          <Pressable
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            className="flex-1"
          >
            <Animated.View
              className="flex-1 justify-center items-center"
              style={{ backgroundColor, transform: [{ scale }] }}
            >
              {Icon && (
                <Icon color={isFocused ? "#fff" : "#000"} focused={isFocused} />
              )}
              <Animated.Text
                className={`font-bold text-sm ${
                  isFocused ? "text-white" : "text-black"
                } `}
              >
                {label.toString()}
              </Animated.Text>
            </Animated.View>
          </Pressable>
        );
      })}
    </View>
  );
}
