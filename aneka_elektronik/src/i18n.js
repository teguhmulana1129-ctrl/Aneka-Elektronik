import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

const resources = {
    en: {
        translation: {
            "nav": {
                "home": "Home",
                "services": "Services",
                "why_us": "Why Choose Us",
                "process": "How It Works",
                "testimonials": "Testimonials",
                "contact": "Contact"
            },
            "hero": {
                "title": "Professional Electronics Repair Services",
                "subtitle": "TV, Rice Cooker & Electric Iron Repair",
                "cta_book": "Book Service Now",
                "cta_contact": "Contact Technician"
            },
            "services": {
                "title": "Our Expertise",
                "subtitle": "Specialized care for your essential home electronics.",
                "learn_more": "Learn more",
                "professional": "Professional Service",
                "need_repair": "Need this repair?",
                "technician_ready": "Our technicians are ready to help. Book an appointment or contact us via WhatsApp.",
                "back_to_services": "Back to Services",
                "back_to_home": "Back to Home",
                "not_found": "Service Not Found",
                "items": {
                    "tv-repair": {
                        "title": "TV Repair",
                        "desc": "Expert repair for LED, LCD, and Smart TVs. Screen replacement, motherboard repair, and power issues.",
                        "details": "We provide comprehensive TV repair services for all major brands including Samsung, LG, Sony, and Sharp. Our technicians are skilled in diagnosing complex issues such as backlight failure, color distortion, sound issues, and connectivity problems. We use genuine parts to ensure longevity and picture quality restoration.",
                        "long": "<h3>Why Choose Our TV Repair Service?</h3><p>Television technology is constantly evolving, and so are our repair methods. Whether you have a modern 4K OLED screen or a trusty LCD model, we have the tools and expertise to fix it.</p><ul><li><strong>Screen Issues:</strong> Cracked screens, dead pixels, and black screen problems.</li><li><strong>Audio Problems:</strong> No sound, distorted audio, or broken speakers.</li><li><strong>Power Failures:</strong> TV won't turn on, random restarts, or power supply board failures.</li><li><strong>Smart Features:</strong> Wi-Fi connectivity issues and software glitches.</li></ul>"
                    },
                    "rice-cooker-repair": {
                        "title": "Rice Cooker Repair",
                        "desc": "Fixing heating issues, sensor faults, and digital control problems for all Magicom brands.",
                        "details": "Is your rice cooker not cooking properly or keeping rice warm? We fix common issues like thermal fuse blowouts, broken heating plates, and malfunctioning control panels. We service standard magicoms as well as advanced digital rice cookers from brands like Yong Ma, Cosmos, and Philips.",
                        "long": "<h3>Expert Care for Your Rice Cooker</h3><p>A good rice cooker is the heart of an Asian kitchen. Don't let a breakdown disrupt your meals.</p><ul><li><strong>Heating Element Repair:</strong> Ensures your rice cooks evenly every time.</li><li><strong>Thermostat Calibration:</strong> Prevents burnt or undercooked rice.</li><li><strong>Control Board & Sensor Logic:</strong> Fixing error codes on digital models.</li><li><strong>Lid & Latch Repair:</strong> Ensuring a perfect seal for optimal pressure.</li></ul>"
                    },
                    "electric-iron-repair": {
                        "title": "Electric Iron Repair",
                        "desc": "Fast service for heating elements, thermostat calibration, and cord replacement.",
                        "details": "From steam irons to dry irons, we handle it all. If your iron isn't heating up, is leaking water, or has a damaged cord, bring it to us. We also offer descaling services to remove mineral buildup and improve steam performance for a smoother ironing experience.",
                        "long": "<h3>Smooth Out the Wrinkles</h3><p>A faulty iron isn't just annoying; it can ruin your clothes. We restore your iron to its best condition.</p><ul><li><strong>Heating Issues:</strong> Replacing burnt-out elements for consistent heat.</li><li><strong>Thermostat Fixes:</strong> Accurate temperature control for delicate fabrics.</li><li><strong>Steam System Maintenance:</strong> Unclogging vents and fixing leakages.</li><li><strong>Safety Checks:</strong> Repairing frayed cords and loose connections.</li></ul>"
                    }
                }
            },
            "why_us": {
                "title": "Why Choose Us",
                "subtitle": "We prioritize quality, trust, and your satisfaction.",
                "features": {
                    "technicians": {
                        "title": "Experienced Technicians",
                        "desc": "Skilled professionals with years of expertise in electronics repair."
                    },
                    "warranty": {
                        "title": "Service Warranty",
                        "desc": "We stand by our work with a reliable warranty on all repairs."
                    },
                    "fast": {
                        "title": "Fast Response",
                        "desc": "Quick diagnosis and efficient repair times to get you back to normal."
                    },
                    "pricing": {
                        "title": "Transparent Pricing",
                        "desc": "No hidden fees. We provide clear quotes before starting any work."
                    },
                    "handling": {
                        "title": "Careful Handling",
                        "desc": "We treat your devices with the utmost care and respect."
                    }
                }
            },
            "process": {
                "title": "How It Works",
                "subtitle": "A simple, transparent process designed for your convenience.",
                "steps": {
                    "contact": {
                        "title": "Contact Us",
                        "desc": "Reach out via WhatsApp or our form to schedule."
                    },
                    "diagnosis": {
                        "title": "Diagnosis",
                        "desc": "We inspect your device and identify the issue."
                    },
                    "repair": {
                        "title": "Repair",
                        "desc": "Expert technicians fix your device with precision."
                    },
                    "testing": {
                        "title": "Testing",
                        "desc": "Rigorous quality checks to ensure full functionality."
                    },
                    "support": {
                        "title": "Support",
                        "desc": "Enjoy your fixed device with our warranty backing."
                    }
                }
            },
            "testimonials": {
                "title": "Happy Customers",
                "subtitle": "Read what our clients say about their experience.",
                "reviews": [
                    {
                        "name": "Budi Santoso",
                        "text": "My TV repair was finished very quickly. The picture is clear as new. Very professional!"
                    },
                    {
                        "name": "Siti Aminah",
                        "text": "My rice cooker wasn't heating up, now it's normal again. Transparent pricing too."
                    },
                    {
                        "name": "Rahmat Hidayat",
                        "text": "Friendly service and the technician really knows what they are doing. Highly recommended for iron repair."
                    }
                ]
            },
            "contact": {
                "title": "Get In Touch",
                "subtitle": "Ready to fix your device? Contact us today.",
                "info": {
                    "call": "Call / WhatsApp",
                    "area": "Service Area",
                    "hours": "Working Hours",
                    "chat_wa": "Chat on WhatsApp",
                    "location": "Jakarta Selatan & Surrounding Areas",
                    "address": "Jalan Radio Dalam No. 123",
                    "days": "Mon - Sat: 08:00 - 18:00",
                    "closed": "Sunday: Closed"
                },
                "form": {
                    "name": "Name",
                    "name_placeholder": "Your Name",
                    "phone": "Phone Number",
                    "phone_placeholder": "Your Phone Number",
                    "device": "Device Type",
                    "issue": "Issue Description",
                    "issue_placeholder": "Describe the problem...",
                    "submit": "Send Message to WhatsApp"
                }
            },
            "about": {
                "title": "About Aneka Elektronik",
                "p1": "Aneka Elektronik is a dedicated electronics repair service provider committed to bringing your essential home appliances back to life. With years of specialized experience in TV, Rice Cooker, and Electric Iron repairs, we understand how important these devices are to your daily routine.",
                "p2": "Our mission is simple: to provide reliable, transparent, and high-quality repair services that you can trust. We believe in fixing over replacing, helping you save money while reducing electronic waste. Our team of skilled technicians treats every device with the precision and care it deserves."
            },
            "chatbot": {
                "title": "Aneka Elektronik",
                "input_placeholder": "Type message here...",
                "initial_message": "Hello! How can I assist you with your electronics repair today?"
            },
            "footer": {
                "desc": "Your trusted partner for home electronics repair.",
                "rights": "All rights reserved."
            }
        }
    },
    id: {
        translation: {
            "nav": {
                "home": "Beranda",
                "services": "Layanan",
                "why_us": "Keunggulan",
                "process": "Prosedur",
                "testimonials": "Testimoni",
                "contact": "Kontak"
            },
            "hero": {
                "title": "Layanan Perbaikan Elektronik Profesional",
                "subtitle": "Perbaikan TV, Rice Cooker & Setrika Listrik",
                "cta_book": "Pesan Layanan Sekarang",
                "cta_contact": "Hubungi Teknisi"
            },
            "services": {
                "title": "Keahlian Kami",
                "subtitle": "Perawatan khusus untuk perangkat elektronik rumah tangga Anda.",
                "learn_more": "Pelajari lebih lanjut",
                "professional": "Layanan Profesional",
                "need_repair": "Butuh Perbaikan Ini?",
                "technician_ready": "Teknisi kami siap membantu Anda. Silakan jadwalkan perbaikan atau hubungi kami melalui WhatsApp.",
                "back_to_services": "Kembali ke Layanan",
                "back_to_home": "Kembali ke Beranda",
                "not_found": "Layanan Tidak Ditemukan",
                "items": {
                    "tv-repair": {
                        "title": "Perbaikan TV",
                        "desc": "Perbaikan ahli untuk TV LED, LCD, dan Smart TV. Penggantian layar, perbaikan motherboard, dan kendala daya.",
                        "details": "Kami menyediakan layanan perbaikan TV komprehensif untuk semua merek ternama termasuk Samsung, LG, Sony, dan Sharp. Teknisi kami ahli dalam mendiagnosis masalah kompleks seperti kerusakan lampu latar (backlight), distorsi warna, masalah suara, dan gangguan konektivitas. Kami menggunakan suku cadang asli untuk menjamin keawetan dan pemulihan kualitas gambar.",
                        "long": "<h3>Mengapa Memilih Layanan Perbaikan TV Kami?</h3><p>Teknologi televisi terus berkembang, demikian pula metode perbaikan kami. Baik Anda memiliki layar 4K OLED modern maupun model LCD andalan, kami memiliki peralatan dan keahlian untuk memperbaikinya.</p><ul><li><strong>Masalah Layar:</strong> Layar retak, pixel mati, dan kendala layar hitam.</li><li><strong>Masalah Audio:</strong> Tidak ada suara, suara terdistorsi, atau speaker rusak.</li><li><strong>Kegagalan Daya:</strong> TV tidak mau menyala, restart mendadak, atau kerusakan modul power supply.</li><li><strong>Fitur Pintar:</strong> Gangguan koneksi Wi-Fi dan kendala pada perangkat lunak.</li></ul>"
                    },
                    "rice-cooker-repair": {
                        "title": "Perbaikan Rice Cooker",
                        "desc": "Mengatasi kendala pemanas, kerusakan sensor, dan masalah kontrol digital untuk semua merek Magicom.",
                        "details": "Apakah rice cooker Anda tidak memasak dengan benar atau gagal menjaga nasi tetap hangat? Kami memperbaiki masalah umum seperti thermal fuse yang putus, pelat pemanas rusak, dan gangguan pada panel kontrol. Kami melayani tipe Magicom standar maupun rice cooker digital canggih dari merek seperti Yong Ma, Cosmos, dan Philips.",
                        "long": "<h3>Penanganan Ahli untuk Rice Cooker Anda</h3><p>Rice cooker yang baik adalah jantung dari dapur Asia. Jangan biarkan kerusakan mengganggu waktu makan keluarga Anda.</p><ul><li><strong>Perbaikan Elemen Pemanas:</strong> Memastikan nasi Anda matang merata setiap saat.</li><li><strong>Kalibrasi Termostat:</strong> Mencegah nasi gosong atau kurang matang.</li><li><strong>Logika Sensor & Modul Kontrol:</strong> Memperbaiki kode galat (error codes) pada model digital.</li><li><strong>Perbaikan Tutup & Pengunci:</strong> Memastikan segel sempurna untuk tekanan optimal.</li></ul>"
                    },
                    "electric-iron-repair": {
                        "title": "Perbaikan Setrika Listrik",
                        "desc": "Layanan cepat untuk elemen pemanas, kalibrasi termostat, dan penggantian kabel.",
                        "details": "Mulai dari setrika uap hingga setrika kering, kami menangani semuanya. Jika setrika Anda tidak panas, membocorkan air, atau memiliki kabel yang rusak, percayakan kepada kami. Kami juga menawarkan layanan pembersihan kerak untuk menghilangkan timbunan mineral dan meningkatkan performa uap agar menyetrika lebih halus.",
                        "long": "<h3>Menyetrika Tanpa Kendala</h3><p>Setrika yang rusak bukan sekadar gangguan, tetapi juga dapat merusak pakaian Anda. Kami mengembalikan kondisi setrika Anda ke performa terbaiknya.</p><ul><li><strong>Masalah Pemanasan:</strong> Mengganti elemen yang terbakar untuk panas yang konsisten.</li><li><strong>Perbaikan Termostat:</strong> Kontrol suhu yang akurat untuk kain yang halus.</li><li><strong>Perawatan Sistem Uap:</strong> Membersihkan saluran udara dan memperbaiki kebocoran.</li><li><strong>Pemeriksaan Keamanan:</strong> Memperbaiki kabel yang terkelupas dan sambungan longgar.</li></ul>"
                    }
                }
            },
            "why_us": {
                "title": "Mengapa Memilih Kami",
                "subtitle": "Kami memprioritaskan kualitas, kepercayaan, dan kepuasan Anda.",
                "features": {
                    "technicians": {
                        "title": "Teknisi Berpengalaman",
                        "desc": "Tenaga profesional ahli dengan pengalaman bertahun-tahun dalam perbaikan elektronik."
                    },
                    "warranty": {
                        "title": "Garansi Layanan",
                        "desc": "Kami menjamin pekerjaan kami dengan garansi yang tertanggung untuk semua perbaikan."
                    },
                    "fast": {
                        "title": "Respon Cepat",
                        "desc": "Diagnosis cepat dan waktu perbaikan yang efisien untuk memulihkan fungsi perangkat Anda."
                    },
                    "pricing": {
                        "title": "Harga Transparan",
                        "desc": "Tanpa biaya tersembunyi. Kami memberikan penawaran harga yang jelas sebelum pengerjaan."
                    },
                    "handling": {
                        "title": "Penanganan Cermat",
                        "desc": "Kami memperlakukan perangkat Anda dengan penuh kehati-hatian dan rasa hormat."
                    }
                }
            },
            "process": {
                "title": "Cara Kerja Kami",
                "subtitle": "Prosedur yang sederhana dan transparan demi kenyamanan Anda.",
                "steps": {
                    "contact": {
                        "title": "Hubungi Kami",
                        "desc": "Hubungi melalui WhatsApp atau formulir untuk penjadwalan."
                    },
                    "diagnosis": {
                        "title": "Diagnosis",
                        "desc": "Kami memeriksa perangkat Anda dan mengidentifikasi kerusakannya."
                    },
                    "repair": {
                        "title": "Perbaikan",
                        "desc": "Teknisi ahli memperbaiki perangkat Anda dengan presisi."
                    },
                    "testing": {
                        "title": "Pengujian",
                        "desc": "Pemeriksaan kualitas yang ketat untuk memastikan fungsi normal kembali."
                    },
                    "support": {
                        "title": "Dukungan",
                        "desc": "Gunakan kembali perangkat Anda dengan ketenangan berkat dukungan garansi kami."
                    }
                }
            },
            "testimonials": {
                "title": "Pelanggan Puas",
                "subtitle": "Baca apa kata klien kami tentang pengalaman mereka.",
                "reviews": [
                    {
                        "name": "Budi Santoso",
                        "text": "Servis TV saya cepat sekali selesai. Gambarnya kembali jernih seperti baru. Sangat profesional!"
                    },
                    {
                        "name": "Siti Aminah",
                        "text": "Magicom saya rusak tidak bisa panas, sekarang sudah normal lagi. Harganya juga transparan."
                    },
                    {
                        "name": "Rahmat Hidayat",
                        "text": "Pelayanan ramah dan teknisinya sangat mengerti apa yang dikerjakan. Rekomendasi untuk servis setrika."
                    }
                ]
            },
            "contact": {
                "title": "Hubungi Kami",
                "subtitle": "Siap memperbaiki perangkat Anda? Hubungi kami hari ini.",
                "info": {
                    "call": "Telepon / WhatsApp",
                    "area": "Wilayah Layanan",
                    "hours": "Jam Operasional",
                    "chat_wa": "Chat di WhatsApp",
                    "location": "Jakarta Selatan & Sekitarnya",
                    "address": "Jalan Radio Dalam No. 123",
                    "days": "Senin - Sabtu: 08:00 - 18:00",
                    "closed": "Minggu: Tutup"
                },
                "form": {
                    "name": "Nama",
                    "name_placeholder": "Nama Lengkap Anda",
                    "phone": "Nomor Telepon",
                    "phone_placeholder": "Nomor Telepon Anda",
                    "device": "Jenis Perangkat",
                    "issue": "Deskripsi Masalah",
                    "issue_placeholder": "Jelaskan kendala Anda...",
                    "submit": "Kirim Pesan ke WhatsApp"
                }
            },
            "about": {
                "title": "Tentang Aneka Elektronik",
                "p1": "Aneka Elektronik adalah penyedia jasa perbaikan elektronik yang berdedikasi untuk menghidupkan kembali peralatan rumah tangga utama Anda. Berbekal pengalaman khusus selama bertahun-tahun dalam perbaikan TV, Rice Cooker, dan Setrika Listrik, kami memahami betapa pentingnya perangkat-perangkat ini bagi rutinitas harian Anda.",
                "p2": "Misi kami sederhana: menyediakan layanan perbaikan yang handal, transparan, dan berkualitas tinggi yang dapat Anda percayai. Kami mengutamakan perbaikan daripada penggantian, guna membantu Anda menghemat biaya sekaligus mengurangi limbah elektronik. Tim teknisi ahli kami menangani setiap perangkat dengan presisi dan kehati-hatian yang semestinya."
            },
            "chatbot": {
                "title": "Aneka Elektronik",
                "input_placeholder": "Ketik pesan di sini...",
                "initial_message": "Halo! Ada yang bisa saya bantu terkait perbaikan elektronik Anda hari ini?"
            },
            "footer": {
                "desc": "Mitra terpercaya Anda untuk perbaikan elektronik rumah tangga.",
                "rights": "Hak cipta dilindungi undang-undang."
            }
        }
    }
};

i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources,
        fallbackLng: 'en',
        interpolation: {
            escapeValue: false
        }
    });

export default i18n;
