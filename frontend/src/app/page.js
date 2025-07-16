import Link from 'next/link';

export default function Home() {
  return (
    <main className='p-4'>
      <h1 className='text-2xl font-bold mb-4'>Welcome to Calorie Tracker</h1>
      <Link href="/calories" className='text-blue-500 underline'>
      Go to Calorie Tracker
      </Link>
    </main>
  )
}