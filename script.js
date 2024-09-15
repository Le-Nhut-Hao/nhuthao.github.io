document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contact-form');
    
    form.addEventListener('submit', function(event) {
        event.preventDefault(); // Ngăn chặn hành động gửi form mặc định
        
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const message = document.getElementById('message').value;
        
        alert(`Tên: ${name}\nEmail: ${email}\nTin Nhắn: ${message}`);
        
        // Thực hiện xử lý form tại đây, ví dụ gửi dữ liệu đến máy chủ
    });
});
