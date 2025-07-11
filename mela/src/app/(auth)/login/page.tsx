// Bismillahirahmanirahim 
// / Elhamdulillahirabbulalemin
// Esselatu vesselamu ala rasulillah ve ala alihi ve sahbihi ecma'in
// Allahu Ekber velilahi'lhamd


import loginImage from "@/assets/login-image.jpg";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

import LoginForm from "./LoginForm";
import { Button } from "@/components/ui/button";

export const metadata: Metadata = {
  title: "Giriş Yap",
};

export default function Page() {
  return (
    <main className="flex h-screen items-center justify-center p-5">
      <div className="flex h-full max-h-[40rem] w-full max-w-[64rem] overflow-hidden rounded-2xl bg-card shadow-2xl">
        <div className="w-full space-y-10 overflow-y-auto p-10 md:w-1/2">
          <h1 className="text-center text-3xl font-bold">Müşterisi Burada</h1>
          <div className="space-y-5">
            <div className="flex items-center gap-3">
              <div className="h-px flex-1 bg-muted" />
              <span></span>
              <div className="h-px flex-1 bg-muted" />
            </div>
            <LoginForm />
           
            <Button variant="outline">
              <Link href="/signup" className="block text-center hover:underline">
               Hesabın yoksa  Kaydol
              </Link>
            </Button>
            <Button variant="outline">
              <Link href="/frgpas" className="block text-center hover:underline">
                Şifremi Unuttum
              </Link>
            </Button>
          </div>
        </div>
        <Image
          src={loginImage}
          alt=""
          className="hidden w-1/2 object-cover md:block"
        />
      </div>
    </main>
  );
}