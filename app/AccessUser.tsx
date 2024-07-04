"use client";

import { useClerk } from "@clerk/nextjs";

export const AccessUser = ({ children }: any) => {
    const clerk = useClerk();
    console.log("clerk: ", clerk);
    return (
        <div>
            <h1>AccessUser</h1>
            <>{children}</>
        </div>
    );
};