import { Redirect } from "expo-router";
import { useAuth } from "@/src/contexts/AuthContext";
import { CustomTabBar, CustomBottomTabBar } from "@/src/components";
import { Tab } from "@/src/types/types";
import { useTaskStore } from "@/src/store/store";
import { useEffect } from "react";

export default function TabsLayout() {
  const { session, user } = useAuth();
  if (!session) {
    return <Redirect href="/auth/signIn" />;
  }

  const { getRealTimeChanges, getTasks } = useTaskStore();
  useEffect(() => {
    if (user) {
      getTasks(user?.id || "");
    }
    getRealTimeChanges(user?.id || "");
  }, [user]);

  const tabs: Tab[] = [
    {
      name: "home",
      icon: "House",
      label: "Inicio",
    },
    {
      name: "profile",
      icon: "User",
      label: "Perfil",
    },
  ];

  return (
    <CustomTabBar
      tabs={tabs}
      tabBar={(props) => <CustomBottomTabBar {...props} />}
      tabBarPosition="bottom"
    />
  );
}
