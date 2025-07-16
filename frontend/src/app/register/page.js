"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function handleSubmit(e) {
    e.preventDefault();

    const res = await fetch("http://localhost:4000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Account Created, You Can Login Now");
      router.push("/login");
    } else {
      alert(data.message || "Registration Failed");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-sm mx-auto mt-10 flex flex-col gap-4 bg-black/80 p-6 rounded-xl"
    >
      <h1 className="text-xl font-bold text-white">Register</h1>
      <input
        className="p-2 rounded bg-gray-800 text-white"
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="p-2 rounded bg-gray-800 text-white"
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button className="p-2 bg-pink-600 rounded hover:bg-pink-500 text-white">
        Register
      </button>
    </form>
  );
}
