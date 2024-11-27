<?php

use App\Http\Controllers\UserController;
use Illuminate\Support\Facades\Route;

Route::get('/', function () {
    return view('welcome');
});

Route::prefix('users')->group(function () {
    Route::get('/', [UserController::class, 'index']);         // Lấy tất cả người dùng
    Route::post('/', [UserController::class, 'store']);    // Tạo mới người dùng
    Route::get('{id}', [UserController::class, 'show']);       // Lấy thông tin người dùng theo ID
    Route::put('{id}', [UserController::class, 'update']);     // Cập nhật thông tin người dùng
    Route::delete('{id}', [UserController::class, 'destroy']); // Xóa người dùng
});
