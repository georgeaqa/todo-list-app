import { icons } from "lucide-react-native";

export interface Task {
  id: number;
  created_at: string;
  title: string;
  status: string;
}

export interface Tab {
  name: string;
  icon: keyof typeof icons;
  label: string;
}
