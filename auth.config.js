// auth.config.ts
import Google from "@auth/core/providers/google";
import { defineConfig } from "auth-astro";

export default defineConfig({
	providers: [
		Google({
			clientId: import.meta.env.GOOGLE_CLIENT_ID,
			clientSecret: import.meta.env.GOOGLE_CLIENT_SECRET,
		}),
	],
	pages: {
		signIn: "/dashboard", // opcional: página personalizada de login
		signOut: "/", // al cerrar sesión
		error: "/", // si falla el login
		newUser: "/dashboard", // redirige aquí si es un nuevo usuario
	},
	callbacks: {
		async redirect({ url, baseUrl }) {
			// Puedes forzar siempre a redirigir a /dashboard
			return "/dashboard";
		},
	},
});
