import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from "react";
import { supabase } from "@/src/lib/supabase";
import { Session, User } from "@supabase/supabase-js";
import { View } from "react-native";
import { CustomActivityIndicator } from "../components";

type AuthContextType = {
  session: Session | null;
  user: User | undefined;
};

const AuthContext = createContext<AuthContextType>({
  session: null,
  user: undefined,
});

export default function AuthContextProvider({ children }: PropsWithChildren) {
  const [session, setSession] = useState<Session | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session);
      setIsReady(true);
    });

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session);
    });
  }, []);

  if (!isReady) {
    return (
      <View className="flex-1 justify-center items-center">
        <CustomActivityIndicator />
      </View>
    );
  }

  return (
    <AuthContext.Provider value={{ session, user: session?.user }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
