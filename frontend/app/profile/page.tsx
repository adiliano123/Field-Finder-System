'use client';
import { useAuth } from '@/hooks/useAuth';
import { useRole } from '@/hooks/useRole';

export default function ProfilePage() {
  const { user } = useAuth();
  const { role } = useRole();

  return (
    <div className="max-w-2xl mx-auto px-6 py-8">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Profile</h2>
      <div className="bg-white rounded-xl border border-gray-200 p-6 space-y-4">
        <div className="flex items-center gap-4 mb-6">
          <div className="w-16 h-16 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-bold text-2xl">
            {user?.name?.charAt(0).toUpperCase()}
          </div>
          <div>
            <p className="text-xl font-semibold text-gray-800">{user?.name}</p>
            <p className="text-sm text-gray-500 capitalize">{role}</p>
          </div>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">Email</label>
          <p className="text-gray-800">{user?.email}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">Role</label>
          <p className="text-gray-800 capitalize">{role}</p>
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-500 mb-1">Member Since</label>
          <p className="text-gray-800">{user?.created_at ? new Date(user.created_at).toLocaleDateString() : '-'}</p>
        </div>
      </div>
    </div>
  );
}
