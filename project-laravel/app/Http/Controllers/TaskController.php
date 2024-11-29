<?php

namespace App\Http\Controllers;

use App\Models\Task;
use Illuminate\Http\Request;

class TaskController extends Controller
{
    // Hiển thị danh sách tất cả nhiệm vụ
    public function index()
    {
        $tasks = Task::all();  // Lấy tất cả nhiệm vụ từ bảng
        return response()->json($tasks);  // Trả về dưới dạng JSON
    }

    // Thêm mới một nhiệm vụ
    public function store(Request $request)
    {
        // Xác thực dữ liệu
        $validated = $request->validate([
            'project_id' => 'required|exists:projects,id',
            'assigned_to' => 'required|exists:users,id',
            'name' => 'required|string|max:255',
            'due_date' => 'nullable|date',
            'status' => 'required|in:to_do,in_progress,done',
            'priority' => 'required|in:low,medium,high',
        ]);

        // Tạo nhiệm vụ mới và lưu vào cơ sở dữ liệu
        $task = Task::create([
            'project_id' => $validated['project_id'],
            'assigned_to' => $validated['assigned_to'],
            'name' => $validated['name'],
            'description' => $request->description,
            'due_date' => $validated['due_date'],
            'status' => $validated['status'],
            'priority' => $validated['priority'],
        ]);

        return response()->json($task, 201);  // Trả về nhiệm vụ vừa tạo
    }
}
