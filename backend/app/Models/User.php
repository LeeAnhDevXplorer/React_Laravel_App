<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    // Đặt tên bảng nếu tên bảng không theo quy ước (bảng 'users' sẽ tự động được Laravel nhận diện)
    // protected $table = 'users';

    // Định nghĩa các trường có thể được gán hàng loạt (mass assignable)
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar_url',
        'role',
    ];

    // Đảm bảo rằng mật khẩu sẽ được mã hóa khi tạo mới hoặc cập nhật
    protected $hidden = [
        'password',
    ];

    // Tự động quản lý các trường thời gian như `created_at` và `updated_at`
    public $timestamps = true;
}
