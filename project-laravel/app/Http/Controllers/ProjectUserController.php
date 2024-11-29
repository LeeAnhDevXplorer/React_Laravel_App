<?php

namespace App\Http\Controllers;

use App\Models\ProjectUser;
use Illuminate\Http\Request;

class ProjectUserController extends Controller
{
    // Hiển thị danh sách tất cả các mối quan hệ giữa người dùng và dự án
    public function index()
    {
        $projectUsers = ProjectUser::all();  // Lấy tất cả các quan hệ từ bảng
        return response()->json($projectUsers);  // Trả về dưới dạng JSON
    }

    // Thêm mới mối quan hệ giữa người dùng và dự án
    public function store(Request $request)
    {
        // Xác thực dữ liệu
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'user_id' => 'required|exists:users,id',
            'role' => 'required|string',
        ]);

        // Tạo mối quan hệ giữa người dùng và dự án
        $projectUser = ProjectUser::create([
            'project_id' => $validated['project_id'],
            'user_id' => $validated['user_id'],
            'role' => $validated['role'],
        ]);

        return response()->json($projectUser, 201);  // Trả về quan hệ vừa tạo
    }
}
