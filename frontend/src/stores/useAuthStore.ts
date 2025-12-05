// src/stores/useAuthStore.ts
import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

export interface AuthUser {
  username: string;
  email: string;
}

export interface AuthStore {
  user: AuthUser | null;
  accessToken: string | null;
  setAuth: (user: AuthUser, accessToken: string) => void;
  unsetAuth: () => void;
}

export const useAuthStore = create<AuthStore>()(
  persist<AuthStore>(
    (set) => ({
      user: null,
      accessToken: null,
      setAuth: (user, accessToken) => set({ user, accessToken }),
      unsetAuth: () => set({ user: null, accessToken: null }),
    }),
    {
      name: "auth-storage",
      storage: createJSONStorage(() => sessionStorage),
      // user 정보는 유지하되, accessToken은 항상 null로만 저장되도록 처리
      partialize: (state) => ({
        user: state.user,
        accessToken: null,
        setAuth: state.setAuth,
        unsetAuth: state.unsetAuth,
      }),
    }
  )
);