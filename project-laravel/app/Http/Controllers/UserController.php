<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;

class UserController extends Controller
{
    // Hiển thị danh sách tất cả người dùng
    public function index()
    {
        $users = User::all();  // Lấy tất cả người dùng từ bảng
        return response()->json($users);  // Trả về dưới dạng JSON
    }

    // Hiển thị thông tin chi tiết một người dùng theo ID
    public function show($id)
    {
        $user = User::findOrFail($id);  // Tìm người dùng theo ID
        return response()->json($user);  // Trả về thông tin chi tiết người dùng
    }

    // Thêm mới một người dùng
    public function store(Request $request)
    {
        // Xác thực dữ liệu (bạn có thể thêm các quy tắc xác thực nếu cần)
        $validated = $request->validate([
            'name' => 'required|string|max:255',
            'email' => 'required|email|unique:users,email',
            'password' => 'required|string|min:8',
        ]);

        // Tạo người dùng mới và lưu vào cơ sở dữ liệu
        $user = User::create([
            'name' => $validated['name'],
            'email' => $validated['email'],
            'password' => bcrypt($validated['password']),  // Mã hóa mật khẩu
            'role' => $request->role,  // Nếu có trường role trong request
        ]);

        return response()->json($user, 201);  // Trả về người dùng vừa tạo
    }
}
