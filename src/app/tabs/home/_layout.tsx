import {
  MaterialTopTabNavigationEventMap,
  MaterialTopTabNavigationOptions,
  createMaterialTopTabNavigator,
} from "@react-navigation/material-top-tabs";
import { withLayoutContext } from "expo-router";
import { ParamListBase, TabNavigationState } from "@react-navigation/native";
import { CustomIcon, CustomTopTabBar } from "@/src/components";
import { icons } from "lucide-react-native";
const { Navigator } = createMaterialTopTabNavigator();

export const MaterialTopTabs = withLayoutContext<
  MaterialTopTabNavigationOptions,
  typeof Navigator,
  TabNavigationState<ParamListBase>,
  MaterialTopTabNavigationEventMap
>(Navigator);

export default function HomeLayout() {
  type Tab = {
    name: string;
    activeIcon: keyof typeof icons;
    label: string;
  };

  const tabs: Tab[] = [
    {
      name: "allTasks",
      activeIcon: "Folder",
      label: "Todos",
    },
    {
      name: "newTasks",
      activeIcon: "FolderPlus",
      label: "Nuevos",
    },
    {
      name: "inProgressTasks",
      activeIcon: "FolderGit",
      label: "En progreso",
    },
    {
      name: "completedTasks",
      activeIcon: "FolderCheck",
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
              return <CustomIcon name={tab.activeIcon} color={color} />;
            },
            tabBarLabel: tab.label,
          }}
        />
      ))}
    </MaterialTopTabs>
  );
}
