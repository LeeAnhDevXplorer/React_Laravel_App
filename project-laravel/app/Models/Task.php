<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Task extends Model
{
    use HasFactory;
    
    // Đặt tên bảng (nếu khác với tên mặc định là 'tasks')
    protected $table = 'tasks';

    // Các thuộc tính có thể gán (fillable)
    protected $fillable = [
        'project_id',
        'assigned_to',
        'name',
        'description',
        'due_date',
        'status',
        'priority',
    ];

    // Mối quan hệ với bảng project
    public function project()
    {
        return $this->belongsTo(Project::class);
    }

    // Mối quan hệ với bảng user (người thực hiện nhiệm vụ)
    public function assignedTo()
    {
        return $this->belongsTo(User::class, 'assigned_to');
    }

    // Mối quan hệ với bảng comments
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }
}
