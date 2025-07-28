$(document).ready(function(){
    // Inisialisasi Slick Carousel
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

    // Toggle Mobile Menu
    $('.mobile-menu-btn').on('click', function(){
        console.log('Toggle menu clicked'); // Debug
        $('.mobile-menu-overlay').toggleClass('active');
        $('.main-container').toggleClass('active');
    });

    $('.mobile-menu-close').on('click', function(){
        $('.mobile-menu-overlay').removeClass('active');
        $('.main-container').removeClass('active');
    });

    // Close mobile menu when clicking a link
    $('.mobile-nav a').on('click', function(){
        $('.mobile-menu-overlay').removeClass('active');
        $('.main-container').removeClass('active');
    });

    // Form Cek Status Nikah
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
    const hijriDate = new Intl.DateTimeFormat('id-ID-u-ca-islamic', {
        day: 'numeric',
        month: 'long',
        year: 'numeric'
    }).format(today);
    $('#hijri-date').text(hijriDate);

    // Simulasi Jadwal Sholat
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
