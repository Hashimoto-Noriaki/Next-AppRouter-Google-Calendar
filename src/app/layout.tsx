import type { Metadata } from "next";
import { LoginUserProvider } from '@/features/auth'
import "./globals.css";

export const metadata: Metadata = {
  title: "スケジュール管理APP",
  description: "Google Calendarクローン",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body>
        <LoginUserProvider>
          {children}
        </LoginUserProvider>
      </body>
    </html>
  );
}
