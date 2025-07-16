'use client';

import { useEffect, useState } from 'react';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/navigation';

export default function Home() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem('token');
    setIsAuthenticated(!!token);
  }, []);

  const handleProtectedClick = (e) => {
    e.preventDefault();
    if (!isAuthenticated) {
      toast.error("You must be logged in to access Calorie Tracker");
    } else {
      router.push('/calories');
    }
  };

  return (
    <main className='p-4'>
      <ToastContainer position="top-center" />
      <div className='max-w-xl mx-auto mt-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-indigo-500/20'>
        <h1 className='text-2xl font-bold mb-4 text-blue-400'>Welcome to Calorie Tracker</h1>
        <button
          onClick={handleProtectedClick}
          className='text-blue-500 underline cursor-pointer'
        >
          Go to Calorie Tracker
        </button>
      </div>
    </main>
  );
}
