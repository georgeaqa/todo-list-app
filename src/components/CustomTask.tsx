import { Text, View } from "react-native";
import React from "react";
import CustomIcon from "./CustomIcon";
import { Task } from "../types/types";

type CustomTaskProps = {
  task: Task;
};

const getTextColor = (status: string) => {
  switch (status) {
    case "completed":
      return "text-gray-500";
    case "inProgress":
      return "text-yellow-500";
    default:
      return "text-green-500";
  }
};

export default function CustomTask({ task }: CustomTaskProps) {
  return (
    <View className="flex-row justify-between items-center bg-white p-2 gap-2 rounded-xl border-2 shadow-md shadow-black">
      <View className="flex-1">
        <Text className="text-lg font-bold">{task.title}</Text>
        <Text className={`text-sm font-bold ${getTextColor(task.status)}`}>
          {task.status === "completed"
            ? "Completada"
            : task.status === "inProgress"
            ? "En progreso"
            : "Nueva"}
        </Text>
      </View>
      <CustomIcon name="Trash" color="red" />
    </View>
  );
}
