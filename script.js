// Event Listener untuk Form Login
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Mencegah halaman melakukan reload otomatis

    // Mengambil nilai dari input email dan password
    const emailInput = document.getElementById('inekeayusyafira@gmail.com').value.trim();
    const passwordInput = document.getElementById('syafira662').value.trim();

    // Data simulasi yang sudah terdaftar
    const registeredEmail = "inekeayusyafira@gmail.com";
    const registeredPassword = "syafira662";

    // Validasi login menggunakan struktur percabangan if
    if (emailInput === registeredEmail && passwordInput === registeredPassword) {
        alert("Login berhasil! Anda akan diarahkan ke Menu Utama.");
        window.location.href = "menu.html"; // Mengalihkan ke halaman Menu Utama
    } else {
        if (emailInput !== registeredEmail) {
            alert("Email yang Anda masukkan salah.");
        } else if (passwordInput !== registeredPassword) {
            alert("Kata sandi yang Anda masukkan salah.");
        } else {
            alert("Email dan kata sandi salah. Silakan coba lagi.");
        }
    }
});
