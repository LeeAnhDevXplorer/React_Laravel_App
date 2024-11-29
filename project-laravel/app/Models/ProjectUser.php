<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class ProjectUser extends Model
{
    use HasFactory;
     // Đặt tên bảng (nếu khác với tên mặc định là 'project_user')
     protected $table = 'project_user';

     // Các thuộc tính có thể gán (fillable)
     protected $fillable = [
         'project_id',
         'user_id',
         'role',
     ];
 
     // Mối quan hệ với bảng project
     public function project()
     {
         return $this->belongsTo(Project::class);
     }
 
     // Mối quan hệ với bảng user
     public function user()
     {
         return $this->belongsTo(User::class);
     }
}
