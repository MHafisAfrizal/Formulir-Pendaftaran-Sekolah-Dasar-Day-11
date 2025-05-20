// script.js

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("registrationForm");

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    // Ambil nilai dari input
    const nama = document.getElementById("nama").value.trim();
    const tanggalLahir = document.getElementById("tanggalLahir").value;
    const jenisKelamin = document.querySelector('input[name="jenisKelamin"]:checked');
    const alamat = document.getElementById("alamat").value.trim();
    const orangTua = document.getElementById("orangTua").value.trim();
    const telepon = document.getElementById("telepon").value.trim();

    // Validasi dasar
    if (!nama || !tanggalLahir || !jenisKelamin || !alamat || !orangTua || !telepon) {
      alert("Harap isi semua kolom dengan lengkap.");
      return;
    }

    // Validasi nomor telepon
    const phoneRegex = /^[0-9]{10,15}$/;
    if (!phoneRegex.test(telepon)) {
      alert("Nomor telepon tidak valid. Gunakan hanya angka 10-15 digit.");
      return;
    }

    // Simulasi penyimpanan dan notifikasi
    alert(`Pendaftaran berhasil!\n\nData yang dikirim:\n\n` +
      `Nama: ${nama}\n` +
      `Tanggal Lahir: ${tanggalLahir}\n` +
      `Jenis Kelamin: ${jenisKelamin.value}\n` +
      `Alamat: ${alamat}\n` +
      `Nama Orang Tua: ${orangTua}\n` +
      `Telepon: ${telepon}`
    );

    // Reset form setelah submit
    form.reset();
  });
});
