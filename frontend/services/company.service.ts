import { api } from './api';
import { CompanyProfile } from '@/types/user.types';

export const companyService = {
  getAll: () => api.get<CompanyProfile[]>('/companies'),
  getById: (id: number) => api.get<CompanyProfile>(`/companies/${id}`),
  updateProfile: (data: Partial<CompanyProfile>) => api.put<CompanyProfile>('/company/profile', data),
  approve: (id: number) => api.patch(`/admin/companies/${id}/approve`),
  reject: (id: number) => api.patch(`/admin/companies/${id}/reject`),
};
