<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Project extends Model
{
    use HasFactory;
    // Đặt tên bảng (nếu khác với tên mặc định là 'projects')
    protected $table = 'projects';

    // Các thuộc tính có thể gán (fillable)
    protected $fillable = [
        'name',
        'description',
        'start_date',
        'end_date',
        'status',
    ];

    // Mối quan hệ với bảng users qua bảng trung gian project_user
    public function users()
    {
        return $this->belongsToMany(User::class, 'project_user')->withPivot('role')->withTimestamps();
    }

    // Mối quan hệ với bảng tasks
    public function tasks()
    {
        return $this->hasMany(Task::class);
    }
}
