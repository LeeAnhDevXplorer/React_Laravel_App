<?php

use App\Http\Controllers\UserController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| API Routes
|--------------------------------------------------------------------------
|
| Here is where you can register API routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "api" middleware group. Make something great!
|
*/

Route::middleware('auth:sanctum')->get('/user', function (Request $request) {
    return $request->user();
});


Route::get('users', [UserController::class, 'index']); // Lấy danh sách người dùng
Route::get('users/{id}', [UserController::class, 'show']); // Lấy thông tin người dùng theo ID
Route::post('users', [UserController::class, 'store']); // Thêm người dùng mới
Route::put('users/{id}', [UserController::class, 'update']); // Cập nhật người dùng
Route::delete('users/{id}', [UserController::class, 'destroy']); // Xóa người dùng
