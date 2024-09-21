import { createServerComponentClient } from "@supabase/auth-helpers-nextjs";
import { AuthApiError } from "@supabase/supabase-js";
import { cookies } from "next/headers";
import { AuthButton } from "./components/auth-btutton";

export default async function Home() {
  const supabase = createServerComponentClient({ cookies });
  const { data: posts, error } = await supabase.from('posts').select();

  if (error) {
    console.error('Error al obtener los posts:', error);
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <AuthButton />
      <pre>
        {JSON.stringify(posts, null, 2)}
      </pre>
    </main>
  );
}
