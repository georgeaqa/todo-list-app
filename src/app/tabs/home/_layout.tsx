import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { CustomIcon, CustomTopTabBar } from "@/src/components";
import { Tab } from "@/src/types/types";
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function HomeLayout() {
  const tabs: Tab[] = [
    {
      name: "allTasks",
      icon: "Folder",
      label: "Todos",
    },
    {
      name: "newTasks",
      icon: "FolderPlus",
      label: "Nuevos",
    },
    {
      name: "inProgressTasks",
      icon: "FolderGit",
      label: "En progreso",
    },
    {
      name: "completedTasks",
      icon: "FolderCheck",
      label: "Completadas",
    },
  ];

  return (
    <MaterialTopTabs tabBar={(props) => <CustomTopTabBar {...props} />}>
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
