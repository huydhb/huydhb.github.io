// =============================
// HIỂN THỊ TRÍCH DẪN NGẪU NHIÊN
// - quotes: dữ liệu câu nói
// - Khi DOM sẵn sàng, chọn 1 câu và gán vào #quote-text, #quote-author
// =============================
document.addEventListener("DOMContentLoaded", function () {
  // --- DỮ LIỆU CÁC CÂU NÓI ---
  const quotes = [
    { text: "Học, học nữa, học mãi.", author: "V.I. Lenin" },
    {
      text: "Đầu tư vào tri thức mang lại lợi nhuận cao nhất.",
      author: "Benjamin Franklin",
    },
    {
      text: "Mục đích của việc học là biến những tấm gương thành những ô cửa sổ.",
      author: "Sydney J. Harris",
    },
    {
      text: "Giáo dục là vũ khí mạnh nhất mà bạn có thể sử dụng để thay đổi thế giới.",
      author: "Nelson Mandela",
    },
    {
      text: "Cách duy nhất để làm những điều tuyệt vời là yêu những gì bạn làm.",
      author: "Steve Jobs",
    },
    {
      text: "Hãy học như thể bạn sẽ sống mãi mãi; hãy sống như thể bạn sẽ chết vào ngày mai.",
      author: "Mahatma Gandhi",
    },
  ];

  // --- LẤY PHẦN TỬ DOM ---
  const quoteTextElement = document.getElementById("quote-text");
  const quoteAuthorElement = document.getElementById("quote-author");

  // Nếu thiếu phần tử thì bỏ qua (tránh lỗi)
  if (!quoteTextElement || !quoteAuthorElement || quotes.length === 0) return;

  // --- CHỌN NGẪU NHIÊN VÀ GÁN NỘI DUNG ---
  const randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
  quoteTextElement.innerHTML = `<em>"${randomQuote.text}"</em>`;
  quoteAuthorElement.textContent = `- ${randomQuote.author}`;
});
