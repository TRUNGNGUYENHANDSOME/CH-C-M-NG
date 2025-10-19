// Lấy các phần tử từ HTML
const clickArea = document.getElementById('click-area');
const nameScreen = document.getElementById('name-screen');
const startScreen = document.getElementById('start-screen');
const wishScreen = document.getElementById('wish-screen');
const nameInput = document.getElementById('nameInput');
const submitName = document.getElementById('submitName');
const wishText = document.getElementById('wishText');

// ✅ Thêm 2 dòng này
const music = document.getElementById("bgMusic");
const flowerContainer = document.getElementById('flower-container');

// Khi click toàn màn hình, chuyển sang nhập tên
clickArea.addEventListener('click', () => {
  startScreen.classList.remove('active');
  nameScreen.classList.add('active');
  
  // ✅ phát nhạc sớm để tránh bị chặn autoplay
  music.volume = 1;
  music.play().catch(err => console.log("Không thể phát nhạc:", err));
});

// Khi người dùng nhập tên và bấm xác nhận
submitName.addEventListener('click', () => {
  const name = nameInput.value.trim() || "bạn";
  nameScreen.classList.remove('active');
  wishScreen.classList.add('active');
  
  // Đoạn lời chúc
  const text = `TRUNG NGUYÊN ĐẸP TRAI Chúc ${name} và toàn thể phụ nữ Việt Nam một ngày 20/10 thật vui vẻ, xinh đẹp và hạnh phúc 🌸. 
  Mong mọi niềm vui, may mắn luôn bên bạn và những người thân yêu 💐. Hãy luôn rạng rỡ và yêu đời mỗi ngày!`;
  // Hiệu ứng đánh chữ
  typeText(text, wishText, () => {
    // Sau khi hiện hết chữ, đợi 2s rồi chuyển sang trang hoa
    setTimeout(() => {
      wishScreen.classList.remove('active');
      
      // ✅ Thay vì chuyển trang mới -> hiện iframe hoa
      flowerContainer.style.display = 'block';
    }, 1000);
  });
});

// Hàm đánh chữ từng ký tự
function typeText(text, element, callback) {
  element.textContent = "";
  let i = 0;
  const speed = 40; // tốc độ gõ chữ (ms)
  const timer = setInterval(() => {
    if (i < text.length) {
      element.textContent += text.charAt(i);
      i++;
    } else {
      clearInterval(timer);
      if (callback) callback();
    }
  }, speed);
}
