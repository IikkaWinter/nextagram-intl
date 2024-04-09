import "./global.css";
import GithubCorner from "../../components/github-corner/GithubCorner";
import { notFound } from "next/navigation";
import { locales } from "../../navigation";
import { ReactNode } from "react";
import { unstable_setRequestLocale } from "next-intl/server";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export const metadata = {
  title: "NextGram",
  description:
    "A sample Next.js app showing dynamic routing with modals as a route.",
  metadataBase: new URL("https://nextgram.vercel.app"),
};

interface LayoutProps {
  children: ReactNode;
  modal: ReactNode;
  params: { locale: string };
}

export default function Layout({ children, modal, params }: LayoutProps) {
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(params.locale as any)) notFound();
  unstable_setRequestLocale(params.locale);

  return (
    <html lang={params.locale}>
      <body>
        <GithubCorner />
        {children}
        {modal}
      </body>
    </html>
  );
}
