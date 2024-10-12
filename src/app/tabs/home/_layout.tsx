import {
  CustomIcon,
  CustomModalAdd,
  CustomTabBar,
  CustomTopTabBar,
} from "@/src/components";
import { Tab } from "@/src/types/types";
import { useState } from "react";
import { Pressable, View } from "react-native";

export default function HomeLayout() {
  const [modalVisible, setModalVisible] = useState(false);
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
    <View className="flex-1">
      <CustomTabBar
        tabs={tabs}
        tabBar={(props) => <CustomTopTabBar {...props} />}
      />
      <Pressable
        className="w-14 h-14 bg-white absolute right-4 bottom-4 rounded-full justify-center items-center border-2 shadow-md shadow-black"
        onPress={() => setModalVisible(true)}
      >
        <CustomIcon name="Plus" size={24} color="black" />
      </Pressable>
      <CustomModalAdd
        visible={modalVisible}
        onPress={() => setModalVisible(false)}
      />
    </View>
  );
}
