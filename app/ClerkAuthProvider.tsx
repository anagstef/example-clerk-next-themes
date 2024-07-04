"use client";

import { elGR, enUS } from "@clerk/localizations";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function ClerkAuthProvider({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    // const { resolvedTheme } = useTheme();

    const [resolvedTheme, setResolvedTheme] = useState<string>('light');

    console.log("resolvedTheme: ", resolvedTheme);

    const appearance = {
        baseTheme: resolvedTheme === 'dark' ? dark : undefined,
        variables: {
            colorPrimary: 'rgb(100, 103, 242)',
            colorTextOnPrimaryBackground: 'rgb(250, 250, 250)',
        },
    };

    useEffect(() => {
      setTimeout(() => {
        console.log('resolvedTheme: ', resolvedTheme)
        setResolvedTheme('dark');
      },0);
    }, []);

    return (
      <ClerkProvider
            appearance={appearance}
            localization={resolvedTheme === 'dark' ? enUS : elGR}
        >
        <h1>ClerkProvider</h1>
            <div>theme is: {resolvedTheme}</div>
        <main>{children}</main>
      </ClerkProvider>
    )
  }