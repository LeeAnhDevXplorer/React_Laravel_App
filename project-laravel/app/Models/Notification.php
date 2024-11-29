<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Notification extends Model
{
    use HasFactory;
    // Đặt tên bảng (nếu khác với tên mặc định là 'notifications')
    protected $table = 'notifications';

    // Các thuộc tính có thể gán (fillable)
    protected $fillable = [
        'user_id',
        'content',
        'read',
    ];

    // Mối quan hệ với bảng user (người nhận thông báo)
    public function user()
    {
        return $this->belongsTo(User::class);
    }
}
