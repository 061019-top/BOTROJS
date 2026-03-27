// Cấu hình nội dung/toast theo từng loại
const config = {
  success: {
    title: "Thành công",
    description: "Dữ liệu đã được lưu thành công.",
    icon: "✔",
  },
  error: {
    title: "Có lỗi xảy ra",
    description: "Không thể kết nối máy chủ. Vui lòng thử lại.",
    icon: "✖",
  },
  warning: {
    title: "Cảnh báo",
    description: "Phiên đăng nhập sắp hết hạn sau 5 phút.",
    icon: "⚠",
  },
  info: {
    title: "Thông tin",
    description: "Hệ thống sẽ bảo trì lúc 23:00 tối nay.",
    icon: "ℹ",
  },
};

// Nơi chứa các toast (được render cố định góc phải trên)
const toastContainer = document.getElementById("toastContainer");

// Thời lượng toast hiển thị (đồng bộ với animation thanh progress)
const TOAST_DURATION = 3900;

// Tạo và hiển thị 1 toast
// type: "success" | "error" | "warning" | "info"
function showToast(type) {
  const item = config[type];
  if (!item) return;

  // Tạo thẻ toast DOM
  const toast = document.createElement("article");
  toast.className = `toast ${type}`;

  // Render nội dung của toast
  toast.innerHTML = `
    <div class="icon">${item.icon}</div>
    <div class="content">
      <div class="title">${item.title}</div>
      <div class="desc">${item.description}</div>
    </div>
    <!-- Thanh tiến trình nằm ở đáy toast -->
    <div class="progress"></div>
  `;

  // Set CSS variable để progress bar co dần đúng với thời lượng toast
  toast.style.setProperty("--life", `${TOAST_DURATION}ms`);

  // Đưa toast vào container ngay đầu danh sách (toast mới lên trên)
  toastContainer.prepend(toast);

  // Fade/slide khi gần hết thời gian
  window.setTimeout(() => {
    toast.style.opacity = "0";
    toast.style.transform = "translateX(24px)";
    toast.style.transition = "all 0.22s ease";
  }, TOAST_DURATION - 220);

  // Xóa toast khỏi DOM để tránh phình bộ nhớ
  window.setTimeout(() => {
    toast.remove();
  }, TOAST_DURATION);
}

// Lắng nghe click cho 4 nút trigger
document.querySelectorAll(".trigger").forEach((button) => {
  button.addEventListener("click", () => {
    showToast(button.dataset.type);
  });
});

// Tự hiển thị vài toast ban đầu (giống ảnh demo) để bạn thấy ngay UI
["error", "warning", "info"].forEach((type, idx) => {
  window.setTimeout(() => showToast(type), idx * 130);
});
