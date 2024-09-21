import { createRouteHandlerClient } from "@supabase/auth-helpers-nextjs";
import { cookies } from "next/headers";
import { type NextRequest, NextResponse } from 'next/server';

export const dynamic = 'force-dynamic';

export async function GET(request: NextRequest) {
    const requestUrl = new URL(request.url);
    const code = requestUrl.searchParams.get('code');

    if (code != null) {
        const supabase = createRouteHandlerClient({ cookies });

        const { error } = await supabase.auth.exchangeCodeForSession(code);

        if (error) {
            console.error('Error al intercambiar el código por una sesión:', error.message);
            return NextResponse.redirect(requestUrl.origin); // Redirige en caso de error
        }
    } else {
        console.warn('No se proporcionó el código de autenticación.');
    }

    return NextResponse.redirect(requestUrl.origin);
}
