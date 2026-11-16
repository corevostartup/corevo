import type { Metadata } from "next";
import { cookies } from "next/headers";
import { Suspense } from "react";
import { AdminApp } from "@/components/admin/AdminApp";
import { LoginForm } from "@/components/admin/LoginForm";
import { COOKIE, isValidAdminToken } from "@/lib/admin-session";

export const metadata: Metadata = {
  title: "Administração | Corevo",
  robots: { index: false, follow: false },
};

export default async function AdminLoginPage() {
  const jar = await cookies();
  const authenticated = await isValidAdminToken(jar.get(COOKIE)?.value);

  if (authenticated) return <AdminApp />;

  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
