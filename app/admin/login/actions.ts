
"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function login(formData: FormData) {
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
        (await cookies()).set("admin_auth", "true", { path: "/", secure: true, httpOnly: false });
        redirect("/admin/dashboard");
    } else {
        return { error: "Invalid credentials" };
    }
}
