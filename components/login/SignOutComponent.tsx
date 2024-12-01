/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { signOut } from "next-auth/react";
import { useState } from "react";

export default function SignOutPage() {
  const [message, setMessage] = useState("");

  const handleSignOut = async () => {
    try {
      await signOut();
      setMessage("Successfully signed out!");
    } catch (err) {
      console.error("Sign out error:", err);
      setMessage("Error signing out. Please try again.");
    }
  };
 

  return (
    <div className="text-center pt-80">
      <h1 className="text-2xl mb-4 text-[30px] font-bold">Sign Out</h1>
      <button 
        onClick={handleSignOut}
        className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded w-[200px]"
      >
        Sign Out
      </button>
      {message && (
        <div className="mt-4 text-green-600">{message}</div>
      )}
    </div>
  );
}