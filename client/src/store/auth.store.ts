import { create } from "zustand";
import { persist } from "zustand/middleware";

export interface User {
	id: number;
	username: string;
	email: string;
}

interface AuthState {
	user: User | null;
	token: string | null;
	isDark: boolean;
	login: (user: User, token: string) => void;
	logout: () => void;
	toggleDarkMode: () => void;
}

const useAuthStore = create<AuthState>()(
	persist(
		(set, get) => ({
			user: JSON.parse(localStorage.getItem("auth") || "{}").user || null,
			token: JSON.parse(localStorage.getItem("auth") || "{}").token || null,
			isDark: false,
			login: (user: User, token: string) => {
				set({ user, token });
				localStorage.setItem("auth", JSON.stringify({ user, token }));
			},
			logout: () => {
				set({ user: null, token: null });
				localStorage.removeItem("auth");
			},
			toggleDarkMode: () => set({ isDark: !get().isDark }),
		}),
		{
			name: "auth-store",
			partialize: (state) => ({
				user: state.user,
				token: state.token,
				isDark: state.isDark,
			}),
		}
	)
);

export default useAuthStore;
