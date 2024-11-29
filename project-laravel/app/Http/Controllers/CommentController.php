<?php

namespace App\Http\Controllers;

use App\Models\Comment;
use Illuminate\Http\Request;

class CommentController extends Controller
{
     // Hiển thị tất cả bình luận của một nhiệm vụ
     public function index($taskId)
     {
         $comments = Comment::where('task_id', $taskId)->get();  // Lấy các bình luận của nhiệm vụ theo ID
         return response()->json($comments);  // Trả về bình luận dưới dạng JSON
     }
 
     // Thêm một bình luận cho nhiệm vụ
     public function store(Request $request, $taskId)
     {
         // Xác thực dữ liệu
         $validated = $request->validate([
             'user_id' => 'required|exists:users,id',
             'content' => 'required|string',
         ]);
 
         // Tạo bình luận mới cho nhiệm vụ
         $comment = Comment::create([
             'task_id' => $taskId,
             'user_id' => $validated['user_id'],
             'content' => $validated['content'],
         ]);
 
         return response()->json($comment, 201);  // Trả về bình luận vừa tạo
     }
}
