import React from "react";
import { CustomActivityIndicator, CustomTask } from "@/src/components";
import { FlatList, View } from "react-native";
import { useTaskStore } from "@/src/store/store";

export default function allTasks() {
  const { tasks, loading, error } = useTaskStore();

  if (loading) {
    return (
      <View className="flex-1 justify-center items-center bg-white">
        <CustomActivityIndicator />
      </View>
    );
  }

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
