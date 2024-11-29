<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class User extends Model
{
    use HasFactory;

    // Đặt tên bảng (nếu khác với tên mặc định là 'users')
    protected $table = 'users';

    // Các thuộc tính có thể gán (fillable)
    protected $fillable = [
        'name',
        'email',
        'password',
        'avatar_url',
        'role',
    ];

    // Mối quan hệ với bảng projects qua bảng trung gian project_user
    public function projects()
    {
        return $this->belongsToMany(Project::class, 'project_user')->withPivot('role')->withTimestamps();
    }

    // Mối quan hệ với bảng comments
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    // Mối quan hệ với bảng notifications
    public function notifications()
    {
        return $this->hasMany(Notification::class);
    }

    // Giải mã mật khẩu
    protected $hidden = [
        'password',
    ];
}
