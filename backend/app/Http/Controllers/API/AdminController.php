<?php

namespace App\Http\Controllers\API;

use App\Http\Controllers\Controller;
use App\Models\Company;
use App\Models\Internship;
use App\Models\User;
use Illuminate\Http\Request;

class AdminController extends Controller
{
    public function stats()
    {
        return response()->json([
            'total_students'    => User::where('role', 'student')->count(),
            'total_companies'   => User::where('role', 'company')->count(),
            'pending_companies' => Company::where('is_approved', false)->count(),
            'total_internships' => Internship::count(),
        ]);
    }

    public function companies()
    {
        return response()->json(Company::with('user:id,name,email')->get());
    }

    public function approveCompany($id)
    {
        $company = Company::findOrFail($id);
        $company->update(['is_approved' => true]);
        return response()->json(['message' => 'Company approved.', 'company' => $company]);
    }

    public function rejectCompany($id)
    {
        $company = Company::findOrFail($id);
        $company->update(['is_approved' => false]);
        return response()->json(['message' => 'Company rejected.', 'company' => $company]);
    }

    public function students()
    {
        return response()->json(
            User::where('role', 'student')->with('student')->get()
        );
    }

    public function deleteUser($id)
    {
        User::findOrFail($id)->delete();
        return response()->json(['message' => 'User deleted.']);
    }
}
