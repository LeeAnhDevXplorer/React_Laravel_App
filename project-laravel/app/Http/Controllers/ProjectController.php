<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
      // Hiển thị danh sách tất cả các dự án
      public function index()
      {
          $projects = Project::all();  // Lấy tất cả dự án từ bảng
          return response()->json($projects);  // Trả về dưới dạng JSON
      }
  
      // Hiển thị thông tin chi tiết của một dự án theo ID
      public function show($id)
      {
          $project = Project::findOrFail($id);  // Tìm dự án theo ID
          return response()->json($project);  // Trả về thông tin chi tiết dự án
      }
  
      // Thêm mới một dự án
      public function store(Request $request)
      {
          // Xác thực dữ liệu
          $validated = $request->validate([
              'name' => 'required|string|max:255',
              'description' => 'nullable|string',
              'start_date' => 'required|date',
              'end_date' => 'nullable|date',
              'status' => 'required|in:in_progress,completed',
          ]);
  
          // Tạo dự án mới và lưu vào cơ sở dữ liệu
          $project = Project::create([
              'name' => $validated['name'],
              'description' => $validated['description'],
              'start_date' => $validated['start_date'],
              'end_date' => $validated['end_date'],
              'status' => $validated['status'],
          ]);
  
          return response()->json($project, 201);  // Trả về dự án vừa tạo
      }
}
