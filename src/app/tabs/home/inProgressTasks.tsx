import React, { useEffect } from "react";
import { CustomTask } from "@/src/components";
import { FlatList, View } from "react-native";
import { useTaskStoreSelectors } from "@/src/store/store";

export default function inProgressTasks() {
  const tasks = useTaskStoreSelectors.use.inProgress_tasks();
  const setInProgressTasks = useTaskStoreSelectors.use.setInProgressTasks();

  useEffect(() => {
    setInProgressTasks();
  }, []);
  return (
    <View className="flex-1 bg-white p-2">
      <FlatList
        data={tasks}
        renderItem={({ item }) => <CustomTask task={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-2"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
