import React, { useEffect } from "react";
import { CustomTask } from "@/src/components";
import { useDispatch, useSelector } from "react-redux";
import { Task } from "@/src/types/types";
import { task_status_selected } from "@/src/store/actions/task.action";
import { FlatList, View } from "react-native";

export default function inProgressTasks() {
  const dispatch = useDispatch();
  const TaskData: Task[] = useSelector(
    (state: any) => state.task.filtered_tasks_inProgress
  );

  useEffect(() => {
    dispatch(task_status_selected("inProgress"));
  }, []);
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
