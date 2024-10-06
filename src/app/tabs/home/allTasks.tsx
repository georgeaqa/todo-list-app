import React from "react";
import { CustomTask } from "@/src/components";
import { FlatList, View } from "react-native";
import { useTaskStoreSelectors } from "@/src/store/store";

export default function allTasks() {
  const tasks = useTaskStoreSelectors.use.tasks();
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
