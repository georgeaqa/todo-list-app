import React from "react";
import { CustomActivityIndicator, CustomTask } from "@/src/components";
import { FlatList, View } from "react-native";
import { useTaskStore } from "@/src/store/store";

export default function newtask() {
  const { tasks, loading, error } = useTaskStore();
  const newTasks = tasks.filter((task) => task.status === "new");

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
        data={newTasks}
        renderItem={({ item }) => <CustomTask task={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-2"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
