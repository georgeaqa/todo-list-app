import { Redirect } from "expo-router";
import { useAuth } from "@/src/contexts/AuthContext";
import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { CustomIcon, CustomBottomTabBar } from "@/src/components";
import { Tab } from "@/src/types/types";
import { useTaskStore } from "@/src/store/store";
import { useEffect } from "react";
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function TabsLayout() {
  const { session, user } = useAuth();
  if (!session) {
    return <Redirect href="/auth/signIn" />;
  }

  const { getRealTimeChanges, getTasks } = useTaskStore();
  useEffect(() => {
    if (user) {
      getTasks(user?.id || "");
    }
    getRealTimeChanges(user?.id || "");
  }, [user]);

  const tabs: Tab[] = [
    {
      name: "home",
      icon: "House",
      label: "Inicio",
    },
    {
      name: "profile",
      icon: "User",
      label: "Perfil",
    },
  ];

  return (
    <MaterialTopTabs
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      tabBarPosition="bottom"
    >
      {tabs.map((tab, index) => (
        <MaterialTopTabs.Screen
          key={index}
          name={tab.name}
          options={{
            tabBarIcon: ({ color }) => (
              <CustomIcon name={tab.icon} color={color} />
            ),
            tabBarLabel: tab.label,
          }}
        />
      ))}
    </MaterialTopTabs>
  );
}
