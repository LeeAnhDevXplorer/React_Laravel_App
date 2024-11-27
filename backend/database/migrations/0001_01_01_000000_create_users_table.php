<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up()
    {
        Schema::create('users', function (Blueprint $table) {
            $table->id(); // Khóa chính tự động tăng
            $table->string('name'); // Tên người dùng
            $table->string('email')->unique(); // Email duy nhất
            $table->string('password'); // Mật khẩu
            $table->string('avatar_url')->nullable(); // URL ảnh đại diện
            $table->enum('role', ['admin', 'member']); // Vai trò người dùng
            $table->timestamps(); // Thời gian tạo và cập nhật
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        // Chỉ xóa bảng 'users' khi rollback migration
        Schema::dropIfExists('users');
    }
};
