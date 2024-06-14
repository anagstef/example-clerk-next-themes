"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";

export function ClerkAuthProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    const { resolvedTheme } = useTheme();

    return (
      <ClerkProvider
            appearance={{
                baseTheme: resolvedTheme ? dark : undefined,
                variables: {
                    colorPrimary: 'rgb(100, 103, 242)',
                    colorTextOnPrimaryBackground: 'rgb(250, 250, 250)',
                },
            }}
        >
        <h1>ClerkProvider</h1>
            <div>theme is: {resolvedTheme}</div>
        <main>{children}</main>
      </ClerkProvider>
    )
  }