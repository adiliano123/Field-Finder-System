'use client';
import { useAuth } from '@/hooks/useAuth';
import { useFetch } from '@/hooks/useFetch';
import { applicationService } from '@/services/application.service';
import { internshipService } from '@/services/internship.service';
import ApplicationCard from '@/components/cards/ApplicationCard';
import InternshipCard from '@/components/cards/InternshipCard';

export default function StudentDashboard() {
  const { user } = useAuth();
  const { data: applications, loading: loadingApps } = useFetch(() => applicationService.getMyApplications());
  const { data: internships, loading: loadingInternships } = useFetch(() => internshipService.getAll());

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Welcome, {user?.name}</h2>
        <p className="text-gray-500 mt-1">Find and apply for training opportunities</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Total Applications</p>
          <p className="text-3xl font-bold text-indigo-600 mt-1">{applications?.length ?? 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Accepted</p>
          <p className="text-3xl font-bold text-green-600 mt-1">
            {applications?.filter((a) => a.status === 'accepted').length ?? 0}
          </p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Pending</p>
          <p className="text-3xl font-bold text-yellow-600 mt-1">
            {applications?.filter((a) => a.status === 'pending').length ?? 0}
          </p>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Recent Applications</h3>
        {loadingApps ? (
          <p className="text-gray-400">Loading...</p>
        ) : applications?.length ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {applications.slice(0, 4).map((app) => <ApplicationCard key={app.id} application={app} />)}
          </div>
        ) : (
          <p className="text-gray-400">No applications yet. Browse opportunities to get started.</p>
        )}
      </div>

      <div>
        <h3 className="text-lg font-semibold text-gray-700 mb-4">Latest Opportunities</h3>
        {loadingInternships ? (
          <p className="text-gray-400">Loading...</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {internships?.slice(0, 4).map((i) => <InternshipCard key={i.id} internship={i} />)}
          </div>
        )}
      </div>
    </div>
  );
}
