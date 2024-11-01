"use client";

import React, { useState, useTransition } from "react";
import { ChevronRight, Loader2, CheckCircle2, XCircle } from "lucide-react";

interface NewsletterState {
  status: "idle" | "success" | "error";
  message?: string;
}

export default function Newsletter() {
  const [email, setEmail] = useState("");
  const [state, setState] = useState<NewsletterState>({
    status: "idle",
  });
  const [isPending, startTransition] = useTransition();

  const subscribeToNewsletter = async (formData: FormData) => {
    // Simulate API call
    try {
      // In real app, replace with actual API call
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Simulate validation
      const email = formData.get("email") as string;
      if (!email.includes("@")) {
        throw new Error("Email tidak valid");
      }

      setState({
        status: "success",
        message:
          "Terima kasih telah berlangganan! Silakan cek email Anda untuk konfirmasi.",
      });
      setEmail("");
    } catch (error) {
      setState({
        status: "error",
        message:
          error instanceof Error
            ? error.message
            : "Terjadi kesalahan. Silakan coba lagi.",
      });
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    startTransition(() => {
      subscribeToNewsletter(formData);
    });
  };

  return (
    <section className="py-16 bg-gray-900 rounded-xl text-white relative overflow-hidden">
      <div className="max-w-2xl mx-auto px-8">
        <h3 className="text-2xl font-bold mb-2">Berlangganan Newsletter</h3>
        <p className="text-gray-300 mb-6">
          Dapatkan artikel dan wawasan terbaru langsung di inbox Anda. Tanpa
          spam.
        </p>

        <form onSubmit={handleSubmit} className="relative">
          <div className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email Anda"
              className="flex-1 px-4 py-2 rounded-lg bg-white/10 border border-gray-700 text-white 
                        placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-white 
                        focus:border-transparent disabled:opacity-50 disabled:cursor-not-allowed"
              required
              disabled={isPending || state.status === "success"}
              aria-disabled={isPending || state.status === "success"}
            />
            <button
              type="submit"
              disabled={isPending || state.status === "success"}
              aria-disabled={isPending || state.status === "success"}
              className="inline-flex items-center justify-center px-6 py-2 bg-white text-black 
                       font-medium rounded-lg hover:bg-gray-100 focus:outline-none focus:ring-2 
                       focus:ring-offset-2 focus:ring-white transition-colors disabled:opacity-50 
                       disabled:cursor-not-allowed"
            >
              {isPending ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Memproses...
                </>
              ) : (
                <>
                  Berlangganan
                  <ChevronRight className="ml-2 w-4 h-4" />
                </>
              )}
            </button>
          </div>
        </form>

        {/* Status Messages */}
        {(state.status === "success" || state.status === "error") && (
          <>
            <div
              className={`mt-4 p-4 rounded-lg flex items-start gap-3 text-sm ${
                state.status === "success"
                  ? "bg-white/10 text-white"
                  : "bg-red-500/10 text-red-200"
              }`}
            >
              {state.status === "success" ? (
                <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
              ) : (
                <XCircle className="w-5 h-5 flex-shrink-0" />
              )}
              <p>{state.message}</p>
            </div>
            {/* Reset button shows up after success */}
            {state.status === "success" && !isPending && (
              <button
                onClick={() => setState({ status: "idle" })}
                className="mt-4 text-sm text-gray-400 hover:text-white transition-colors mx-8"
              >
                Daftar dengan email lain
              </button>
            )}
          </>
        )}
      </div>
    </section>
  );
}
