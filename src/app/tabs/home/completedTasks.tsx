import React, { useEffect } from "react";
import { CustomTask } from "@/src/components";
import { FlatList, View } from "react-native";
import { useTaskStoreSelectors } from "@/src/store/store";

export default function completedTasks() {
  const tasks = useTaskStoreSelectors.use.completed_tasks();
  const setCompletedTasks = useTaskStoreSelectors.use.setCompletedTasks();

  useEffect(() => {
    setCompletedTasks();
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
