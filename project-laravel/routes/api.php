<?php

use App\Http\Controllers\CommentController;
use App\Http\Controllers\NotificationController;
use App\Http\Controllers\ProjectController;
use App\Http\Controllers\ProjectUserController;
use App\Http\Controllers\TaskController;
use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;



Route::prefix('users')->group(function () {
    // Lấy tất cả người dùng
    Route::get('/', [UserController::class, 'index']);

    // Lấy thông tin chi tiết của một người dùng
    Route::get('/{id}', [UserController::class, 'show']);

    // Tạo một người dùng mới
    Route::post('/', [UserController::class, 'store']);

    // Cập nhật thông tin người dùng
    Route::put('/{id}', [UserController::class, 'update']);

    // Xóa một người dùng
    Route::delete('/{id}', [UserController::class, 'destroy']);
});

Route::prefix('projects')->group(function () {
    // Lấy tất cả dự án
    Route::get('/', [ProjectController::class, 'index']);

    // Lấy thông tin chi tiết của một dự án
    Route::get('/{id}', [ProjectController::class, 'show']);

    // Tạo một dự án mới
    Route::post('/', [ProjectController::class, 'store']);

    // Cập nhật thông tin dự án
    Route::put('/{id}', [ProjectController::class, 'update']);

    // Xóa một dự án
    Route::delete('/{id}', [ProjectController::class, 'destroy']);
});

Route::prefix('project-users')->group(function () {
    // Lấy tất cả người dùng trong dự án
    Route::get('/', [ProjectUserController::class, 'index']);

    // Lấy thông tin người dùng trong dự án
    Route::get('/{id}', [ProjectUserController::class, 'show']);

    // Thêm người dùng vào dự án
    Route::post('/', [ProjectUserController::class, 'store']);

    // Cập nhật vai trò của người dùng trong dự án
    Route::put('/{id}', [ProjectUserController::class, 'update']);

    // Xóa người dùng khỏi dự án
    Route::delete('/{id}', [ProjectUserController::class, 'destroy']);
});

Route::prefix('tasks')->group(function () {
    // Lấy tất cả nhiệm vụ
    Route::get('/', [TaskController::class, 'index']);

    // Lấy thông tin chi tiết của một nhiệm vụ
    Route::get('/{id}', [TaskController::class, 'show']);

    // Tạo một nhiệm vụ mới
    Route::post('/', [TaskController::class, 'store']);

    // Cập nhật thông tin nhiệm vụ
    Route::put('/{id}', [TaskController::class, 'update']);

    // Xóa một nhiệm vụ
    Route::delete('/{id}', [TaskController::class, 'destroy']);
});

Route::prefix('comments')->group(function () {
    // Lấy tất cả bình luận
    Route::get('/', [CommentController::class, 'index']);

    // Lấy thông tin chi tiết của một bình luận
    Route::get('/{id}', [CommentController::class, 'show']);

    // Thêm bình luận vào nhiệm vụ
    Route::post('/', [CommentController::class, 'store']);

    // Cập nhật bình luận
    Route::put('/{id}', [CommentController::class, 'update']);

    // Xóa bình luận
    Route::delete('/{id}', [CommentController::class, 'destroy']);
});

Route::prefix('notifications')->group(function () {
    // Lấy tất cả thông báo
    Route::get('/', [NotificationController::class, 'index']);

    // Lấy thông tin chi tiết của một thông báo
    Route::get('/{id}', [NotificationController::class, 'show']);

    // Tạo một thông báo mới
    Route::post('/', [NotificationController::class, 'store']);

    // Cập nhật thông báo (đánh dấu đã đọc)
    Route::put('/{id}', [NotificationController::class, 'update']);

    // Xóa thông báo
    Route::delete('/{id}', [NotificationController::class, 'destroy']);
});
