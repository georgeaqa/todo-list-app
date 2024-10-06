import React from "react";
import { CustomActivityIndicator, CustomTask } from "@/src/components";
import { FlatList, View } from "react-native";
import { useTaskStore } from "@/src/store/store";

export default function inProgressTasks() {
  const { tasks, loading, error } = useTaskStore();
  const inProgressTasks = tasks.filter((task) => task.status === "inProgress");
  
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
        data={inProgressTasks}
        renderItem={({ item }) => <CustomTask task={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-2"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
