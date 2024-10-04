import React from "react";
import { CustomTask } from "@/src/components";
import { useSelector } from "react-redux";
import { Task } from "@/src/types/types";
import { FlatList, View } from "react-native";

export default function allTasks() {
  const TaskData: Task[] = useSelector((state: any) => state.task.tasks);
  return (
    <View className="flex-1 bg-white p-2">
      <FlatList
        data={TaskData}
        renderItem={({ item }) => <CustomTask task={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerClassName="gap-2"
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
}
