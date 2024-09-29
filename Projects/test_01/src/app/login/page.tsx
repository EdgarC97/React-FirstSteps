import { AuthButtonServer } from "@/app/components/auth-button-server";
import React from "react";

export default function Login(){
    return (
        <section className="grid place-content-center min-h-screen">
            <h1 className="text-xl font-bold mb-4">Start session on Test_01</h1>
            <AuthButtonServer />    
        </section>

    )
}