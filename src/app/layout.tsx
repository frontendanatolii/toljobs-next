import "./globals.css";
import "./../stylesheets/commonClasses.css";
import "./../stylesheets/antdOverride.css";
import "./../stylesheets/layout.css";
import './../stylesheets/loader.css';
import type { Metadata } from 'next'
import { LayoutProvider } from "@/components/LayoutProvider";
import { ReduxProvider } from "@/components/ReduxProvider";

export const metadata: Metadata = {
  title: 'TolJobs',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <ReduxProvider>
      <LayoutProvider>{children}</LayoutProvider>
    </ReduxProvider>
  )
}
