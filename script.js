 // Fungsi untuk membalik kartu saat diklik disini yaaa
    function flipCard() {
        const card = document.querySelector('.card-container');
        card.classList.toggle('flipped');
    }

    // Fungsi untuk animasi gembok terbuka/tertutup secara bergantian nyaa
    function animateLock() {
        const lockIcon = document.getElementById('animated-lock');
        if (!lockIcon) return; // untuk menghentikan iconnyya guys

        let isLocked = true;

        // Set interval untuk mengganti ikon setiap 1.5 detik nyaa guys
        setInterval(() => {
            if (isLocked) {
                // Ubah menjadi Terbuka, biar kebuka
                lockIcon.classList.remove('fa-lock');
                lockIcon.classList.add('fa-lock-open');
            } else {
                // Ubah menjadi Terkunci, ini biar tertutup
                lockIcon.classList.remove('fa-lock-open');
                lockIcon.classList.add('fa-lock');
            }
            isLocked = !isLocked; // Balik status nya
        }, 1500); // 1.5 detik
    }

    // Jalankan animasi gembok setelah halaman dimuat
    window.onload = animateLock;