import Link from 'next/link';
import { OPPORTUNITY_TYPES } from '@/lib/constants';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      <nav className="bg-white shadow-sm px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-indigo-700">Field Finder</h1>
        <div className="flex gap-4">
          <Link href="/login" className="text-gray-600 hover:text-indigo-600 font-medium">Login</Link>
          <Link href="/register" className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700">
            Get Started
          </Link>
        </div>
      </nav>

      <section className="max-w-4xl mx-auto text-center py-24 px-6">
        <h2 className="text-5xl font-bold text-gray-800 mb-6">
          Find Your Perfect Training Opportunity
        </h2>
        <p className="text-xl text-gray-600 mb-10">
          Connecting university students with registered companies for field training,
          internships, industrial practical training, and attachment programs.
        </p>
        <div className="flex gap-4 justify-center">
          <Link href="/register" className="bg-indigo-600 text-white px-8 py-3 rounded-lg text-lg hover:bg-indigo-700">
            Find Opportunities
          </Link>
          <Link href="/internships" className="border border-indigo-600 text-indigo-600 px-8 py-3 rounded-lg text-lg hover:bg-indigo-50">
            Browse Listings
          </Link>
        </div>
      </section>

      <section className="max-w-4xl mx-auto px-6 pb-24">
        <h3 className="text-2xl font-semibold text-center text-gray-700 mb-8">Opportunity Types</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {OPPORTUNITY_TYPES.map((type) => (
            <div key={type.value} className="bg-white rounded-xl p-6 text-center shadow-sm hover:shadow-md transition-shadow">
              <p className="font-medium text-gray-700">{type.label}</p>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
