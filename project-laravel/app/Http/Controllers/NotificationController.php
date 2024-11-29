<?php

namespace App\Http\Controllers;

use App\Models\Notification;
use Illuminate\Http\Request;

class NotificationController extends Controller
{
    // Hiển thị tất cả thông báo của người dùng
    public function index($userId)
    {
        $notifications = Notification::where('user_id', $userId)->get();  // Lấy thông báo của người dùng
        return response()->json($notifications);  // Trả về thông báo dưới dạng JSON
    }

    // Thêm mới thông báo cho người dùng
    public function store(Request $request)
    {
        // Xác thực dữ liệu
        $validated = $request->validate([
            'user_id' => 'required|exists:users,id',
            'content' => 'required|string',
        ]);

        // Tạo thông báo mới và lưu vào cơ sở dữ liệu
        $notification = Notification::create([
            'user_id' => $validated['user_id'],
            'content' => $validated['content'],
            'read' => false,  // Thông báo mới sẽ có trạng thái là chưa đọc
        ]);

        return response()->json($notification, 201);  // Trả về thông báo vừa tạo
    }
}
