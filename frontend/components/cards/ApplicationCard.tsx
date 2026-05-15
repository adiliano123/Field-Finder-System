import { Application } from '@/types/internship.types';
import { formatDate } from '@/lib/helpers';
import { APPLICATION_STATUSES } from '@/lib/constants';

interface Props {
  application: Application;
}

const colorMap: Record<string, string> = {
  yellow: 'bg-yellow-100 text-yellow-700',
  green: 'bg-green-100 text-green-700',
  red: 'bg-red-100 text-red-700',
};

export default function ApplicationCard({ application }: Props) {
  const status = APPLICATION_STATUSES[application.status];

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6">
      <div className="flex justify-between items-start mb-3">
        <h3 className="font-semibold text-gray-800">{application.internship?.title ?? 'Opportunity'}</h3>
        <span className={`text-xs px-2 py-1 rounded-full font-medium ${colorMap[status.color]}`}>
          {status.label}
        </span>
      </div>
      {application.internship?.company && (
        <p className="text-sm text-indigo-600 mb-1">{application.internship.company.company_name}</p>
      )}
      <p className="text-sm text-gray-400">Applied: {formatDate(application.applied_at)}</p>
    </div>
  );
}
