import { create } from "zustand";
import { persist } from "zustand/middleware";

export const useAuth = create(
  persist(
    (set) => ({
      token: null,
      user: null,

      setAuth: (token, user) => set({ token, user }),
      removeAuth: () => set({ token: null, user: null }),
    }),
    { name: "auth-store" }
  )
);
