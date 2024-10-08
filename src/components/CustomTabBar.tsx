import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
  MaterialTopTabBarProps,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import CustomIcon from "./CustomIcon";
import { Tab } from "@/src/types/types";
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

type CustomTabBarProps = {
  tabs: Tab[];
  tabBar: (props: MaterialTopTabBarProps) => React.ReactNode;
  tabBarPosition?: "bottom" | "top";
};

export default function CustomTabBar({
  tabs,
  tabBar,
  tabBarPosition = "top",
}: CustomTabBarProps) {
  return (
    <MaterialTopTabs tabBar={tabBar} tabBarPosition={tabBarPosition}>
      {tabs.map((tab, index) => (
        <MaterialTopTabs.Screen
          key={index}
          name={tab.name}
          options={{
            tabBarIcon: ({ color }) => {
              return <CustomIcon name={tab.icon} color={color} />;
            },
            tabBarLabel: tab.label,
          }}
        />
      ))}
    </MaterialTopTabs>
  );
}
