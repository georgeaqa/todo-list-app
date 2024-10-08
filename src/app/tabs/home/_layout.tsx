import { CustomTabBar, CustomTopTabBar } from "@/src/components";
import { Tab } from "@/src/types/types";

export default function HomeLayout() {
  const tabs: Tab[] = [
    {
      name: "allTasks",
      icon: "Folder",
      label: "Todos",
    },
    {
      name: "newTasks",
      icon: "FolderPlus",
      label: "Nuevos",
    },
    {
      name: "inProgressTasks",
      icon: "FolderGit",
      label: "En progreso",
    },
    {
      name: "completedTasks",
      icon: "FolderCheck",
      label: "Completadas",
    },
  ];

  return (
    <CustomTabBar
      tabs={tabs}
      tabBar={(props) => <CustomTopTabBar {...props} />}
    />
  );
}
