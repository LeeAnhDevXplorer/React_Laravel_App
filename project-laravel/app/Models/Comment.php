<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;
      // Đặt tên bảng (nếu khác với tên mặc định là 'comments')
      protected $table = 'comments';

      // Các thuộc tính có thể gán (fillable)
      protected $fillable = [
          'task_id',
          'user_id',
          'content',
      ];
  
      // Mối quan hệ với bảng task
      public function task()
      {
          return $this->belongsTo(Task::class);
      }
  
      // Mối quan hệ với bảng user (người viết bình luận)
      public function user()
      {
          return $this->belongsTo(User::class);
      }
}
