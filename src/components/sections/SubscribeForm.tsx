"use client";

import { useActionState } from "react";

type ActionResult = { ok: boolean; message: string };

export default function SubscribeForm({
    action,
}: {
    action: (formData: FormData) => Promise<ActionResult>;
}) {
    const [state, formAction, pending] = useActionState(action, null as any);

    return (
        <form action={formAction} className="mt-4 flex gap-2">
            <input
                type="email"
                name="email"
                required
                placeholder="Email kamu"
                className="flex-1 rounded-lg bg-white/10 border border-white/20 px-3 py-2 text-sm placeholder:text-white/50 outline-none focus:border-white/40"
            />
            <button
                type="submit"
                disabled={pending}
                className="rounded-lg bg-white text-black px-4 py-2 text-sm font-medium hover:bg-white/85 disabled:opacity-70"
            >
                {pending ? "Mengirim..." : "Langganan"}
            </button>

            {/* feedback singkat */}
            {state?.message && (
                <span
                    className={`ml-2 text-xs ${state.ok ? "text-emerald-300" : "text-red-300"
                        }`}
                >
                    {state.message}
                </span>
            )}
        </form>
    );
}