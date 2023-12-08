// Inisialisasi slide yang sedang ditampilkan
var currentSlide = 0;

// Buat loop yang akan terus berjalan
setInterval(function() {
    // Ubah slide yang sedang ditampilkan
    currentSlide++;

    // Ubah properti CSS dari slide yang sedang ditampilkan
    document.getElementById("slide" + currentSlide).style.display = "block";
    document.getElementById("slide" + (currentSlide - 1)).style.display = "none";

    // Jika slide yang sedang ditampilkan adalah slide3, maka kembalikan ke slide1
    if (currentSlide === 3) {
        currentSlide = 0;
    }
}, 3000);

// Tambahkan event listener ke tombol untuk menghentikan slide otomatis
document.getElementById("stop").addEventListener("click", function() {
    // Hentikan loop
    clearInterval(setInterval(function() {
        // Ubah slide yang sedang ditampilkan
        currentSlide++;

        // Ubah properti CSS dari slide yang sedang ditampilkan
        document.getElementById("slide" + currentSlide).style.display = "block";
        document.getElementById("slide" + (currentSlide - 1)).style.display = "none";

        // Jika slide yang sedang ditampilkan adalah slide3, maka kembalikan ke slide1
        if (currentSlide === 3) {
            currentSlide = 0;
        }
    }, 3000));
});
