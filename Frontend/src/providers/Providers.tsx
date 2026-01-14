import { ReactNode } from "react";
import { DarkModeProvider } from "../context/DarkmodeContext";
import { AuthProvider } from "../hooks/auth/useAuth";

export default function Providers({ children }: { children: ReactNode }) {
  return (
    <DarkModeProvider>
        <AuthProvider>
            {children}
        </AuthProvider>
    </DarkModeProvider>
  );
}
