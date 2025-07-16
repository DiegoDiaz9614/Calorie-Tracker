import Link from 'next/link';


export default function Home() {
    return (
      <main className='p-4'>
        <div className='max-w-xl mx-auto mt-10 bg-gradient-to-br from-gray-800 via-gray-900 to-black p-6 rounded-lg shadow-lg border border-indigo-500/20'>
        <h1 className='text-2xl font-bold mb-4 text-blue-400'>Welcome to Calorie Tracker</h1>
        <Link href="/calories" className='text-blue-500 underline'>
        Go to Calorie Tracker
        </Link>
        </div>
      </main>
    )
}