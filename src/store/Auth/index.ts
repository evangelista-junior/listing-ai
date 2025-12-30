import { create } from "zustand";

export type UserAuthType = {
  full_name: string;
  email: string;
  company?: string;
};

interface AuthStore {
  user: UserAuthType | null;
  isAuthenticated: boolean;
  setUser: (user: UserAuthType) => void;
  logout: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,

  setUser: (newUser) =>
    set({
      user: newUser,
      isAuthenticated: true,
    }),
  logout: () => set({ isAuthenticated: false }),
}));
