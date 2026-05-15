'use client';
import { useAuth } from '@/hooks/useAuth';
import { useFetch } from '@/hooks/useFetch';
import { internshipService } from '@/services/internship.service';
import Link from 'next/link';
import InternshipCard from '@/components/cards/InternshipCard';

export default function CompanyDashboard() {
  const { user } = useAuth();
  const { data: opportunities, loading } = useFetch(() => internshipService.getAll());

  return (
    <div className="space-y-8">
      <div className="flex justify-between items-start">
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Company Dashboard</h2>
          <p className="text-gray-500 mt-1">Welcome, {user?.name}</p>
        </div>
        <Link href="/dashboard/company/opportunities/new"
          className="bg-indigo-600 text-white px-4 py-2 rounded-lg hover:bg-indigo-700 text-sm font-medium">
          + Post Opportunity
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Active Listings</p>
          <p className="text-3xl font-bold text-indigo-600 mt-1">{opportunities?.length ?? 0}</p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Your Opportunities</h3>
        {loading ? (
          <p className="text-gray-400">Loading...</p>
        ) : opportunities?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {opportunities.map((i) => <InternshipCard key={i.id} internship={i} />)}
          </div>
        ) : (
          <p className="text-gray-400">No opportunities posted yet.</p>
        )}
      </div>
    </div>
  );
}
