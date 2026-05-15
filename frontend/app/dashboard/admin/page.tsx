'use client';
import { useFetch } from '@/hooks/useFetch';
import { companyService } from '@/services/company.service';
import { internshipService } from '@/services/internship.service';

export default function AdminDashboard() {
  const { data: companies } = useFetch(() => companyService.getAll());
  const { data: internships } = useFetch(() => internshipService.getAll());

  const pending = companies?.filter((c) => !c.is_approved) ?? [];

  return (
    <div className="space-y-8">
      <div>
        <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
        <p className="text-gray-500 mt-1">Manage the Field Finder platform</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Total Companies</p>
          <p className="text-3xl font-bold text-indigo-600 mt-1">{companies?.length ?? 0}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Pending Approvals</p>
          <p className="text-3xl font-bold text-yellow-600 mt-1">{pending.length}</p>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <p className="text-sm text-gray-500">Total Opportunities</p>
          <p className="text-3xl font-bold text-green-600 mt-1">{internships?.length ?? 0}</p>
        </div>
      </div>

      {pending.length > 0 && (
        <div>
          <h3 className="text-lg font-semibold text-gray-700 mb-4">Pending Company Approvals</h3>
          <div className="space-y-3">
            {pending.map((company) => (
              <div key={company.id} className="bg-white rounded-xl border border-gray-200 p-4 flex justify-between items-center">
                <div>
                  <p className="font-medium text-gray-800">{company.company_name}</p>
                  <p className="text-sm text-gray-500">{company.industry} · {company.location}</p>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => companyService.approve(company.id)}
                    className="text-sm bg-green-100 text-green-700 px-3 py-1 rounded-lg hover:bg-green-200">
                    Approve
                  </button>
                  <button onClick={() => companyService.reject(company.id)}
                    className="text-sm bg-red-100 text-red-700 px-3 py-1 rounded-lg hover:bg-red-200">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
