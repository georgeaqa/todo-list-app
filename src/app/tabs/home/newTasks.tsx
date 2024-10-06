import React, { useEffect } from "react";
import { CustomTask } from "@/src/components";
import { FlatList, View } from "react-native";
import { useTaskStoreSelectors } from "@/src/store/store";

export default function newtask() {
  const newTasks = useTaskStoreSelectors.use.new_tasks();
  const setNewTasks = useTaskStoreSelectors.use.setNewTasks();

  useEffect(() => {
    setNewTasks();
  }, []);

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
