"use client";

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  const [token, setToken] = useState(null);
  const router = useRouter();

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    setToken(storedToken);
  }, []);

  function handleLogout() {
    localStorage.removeItem("token");
    setToken(null);
    router.push("/");
  }

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-white`}
      >
        <header className="bg-gray-950 p-4 border-b border-purple-600 shadow-md">
          <div className="max-w-5xl mx-auto flex justify-between items-center">
            <h1 className="text-xl font-bold text-blue-500">CALORIE TRACKER</h1>
            <nav className="flex items-center gap-4">
              <a href="/" className="hover:text-pink-400 text-blue-500">
                Home
              </a>
              {token ? (
                <>
                  <a
                    href="/calories"
                    className="hover:text-pink-400 text-blue-500"
                  >
                    Calories
                  </a>
                  <button
                    onClick={handleLogout}
                    className="text-red-500 hover:text-red-400"
                  >
                    Logout
                  </button>
                </>
              ) : (
                <>
                  <a
                    href="/login"
                    className="hover:text-pink-400 text-blue-500"
                  >
                    Login
                  </a>
                  <a
                    href="/register"
                    className="hover:text-pink-400 text-blue-500"
                  >
                    Register
                  </a>
                </>
              )}
            </nav>
          </div>
        </header>

        <main className="p-6 max-w-3xl mx-auto">{children}</main>

        <ToastContainer />
      </body>
    </html>
  );
}
