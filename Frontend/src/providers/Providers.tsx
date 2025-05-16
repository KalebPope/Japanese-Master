import { ReactNode } from "react";
import { DarkModeProvider } from "../context/DarkmodeContext";
import { AuthProvider } from "../hooks/useAuth";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
        <AuthProvider>
            {children}
        </AuthProvider>
    </DarkModeProvider>
  );
}
