import Link from 'next/link';
import { Internship } from '@/types/internship.types';
import { formatDate, isDeadlinePassed } from '@/lib/helpers';
import { OPPORTUNITY_TYPES } from '@/lib/constants';

interface Props {
  internship: Internship;
}

export default function InternshipCard({ internship }: Props) {
  const typeLabel = OPPORTUNITY_TYPES.find((t) => t.value === internship.type)?.label ?? internship.type;
  const expired = isDeadlinePassed(internship.deadline);

  return (
    <div className="bg-white rounded-xl border border-gray-200 p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-3">
        <span className="text-xs bg-indigo-100 text-indigo-700 px-2 py-1 rounded-full font-medium">{typeLabel}</span>
        {expired && <span className="text-xs bg-red-100 text-red-600 px-2 py-1 rounded-full">Expired</span>}
      </div>
      <h3 className="font-semibold text-gray-800 text-lg mb-1">{internship.title}</h3>
      {internship.company && (
        <p className="text-sm text-indigo-600 mb-2">{internship.company.company_name}</p>
      )}
      <p className="text-sm text-gray-500 mb-1">{internship.location} · {internship.duration}</p>
      <p className="text-sm text-gray-400 mb-4">Deadline: {formatDate(internship.deadline)}</p>
      <Link href={`/internships/${internship.id}`}
        className="text-sm text-indigo-600 font-medium hover:underline">
        View Details →
      </Link>
    </div>
  );
}
