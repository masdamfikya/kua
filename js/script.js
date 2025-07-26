// script.js (versi diperbaiki)
$(document).ready(function(){
    // Tombol hamburger untuk buka/tutup menu mobile
    $('.mobile-menu-btn').click(function() {
    $('.mobile-menu-overlay').toggleClass('active');
    });

    // Tutup menu saat klik tombol close atau link
    $('.mobile-menu-close, .mobile-nav a').click(function() {
    $('.mobile-menu-overlay').removeClass('active');
    });

    // Pastikan menu overlay tersembunyi di desktop
    if (window.innerWidth > 768) {
        $('.mobile-menu-overlay').hide();
    }

    // Slick Carousel
    $('.slideshow').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 3000,
        arrows: true,
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false
                }
            }
        ]
    });

    // Load gambar mobile jika lebar layar kecil
    function loadMobileImages() {
        if (window.innerWidth <= 768) {
            $('.slideshow img').each(function() {
                const src = $(this).attr('src');
                if (!src.includes('-mobile')) {
                    $(this).attr('src', src.replace('.jpg', '-mobile.jpg'));
                }
            });
        }
    }

    $(window).on('load resize', loadMobileImages);

    // Form cek status nikah
    $('#marriageForm').submit(function(e){
        e.preventDefault();
        $('#result').html(`
            <div style="background:#f0f8ff; padding:15px; border-radius:5px;">
                <h4><i class="fas fa-check-circle" style="color:green;"></i> Data Ditemukan</h4>
                <p>Atas nama: <strong>Ahmad Budi</strong></p>
                <p>Tanggal Nikah: <strong>15 Januari 2025</strong></p>
                <p>Nomor Akta: <strong>123/VI/2025</strong></p>
            </div>
        `).show();
    });

    // Update Tanggal Hijriah
    const today = new Date();
    const hijriDate = new Intl.DateTimeFormat('id-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(today);
    $('#hijri-date').text(hijriDate);

    // Jadwal sholat simulasi
    function updatePrayerTimes() {
        const times = {
            'Subuh': '04:30',
            'Dzuhur': '12:00',
            'Ashar': '15:15',
            'Maghrib': '18:05',
            'Isya': '19:20'
        };
        $.each(times, function(prayer, time){
            $(`.prayer-time:contains('${prayer}') div:nth-child(2)`).text(time + ' WIB');
        });
    }
    updatePrayerTimes();
});
