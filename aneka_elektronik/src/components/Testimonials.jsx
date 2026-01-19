import React from 'react';
import { Star } from 'lucide-react';

const Testimonials = () => {
    const reviews = [
        {
            name: "Budi Santoso",
            text: "Servis TV saya cepat sekali selesai. Gambarnya kembali jernih seperti baru. Sangat profesional!",
            rating: 5
        },
        {
            name: "Siti Aminah",
            text: "Magicom saya rusak tidak bisa panas, sekarang sudah normal lagi. Harganya juga transparan.",
            rating: 5
        },
        {
            name: "Rahmat Hidayat",
            text: "Pelayanan ramah dan teknisinya sangat mengerti apa yang dikerjakan. Rekomen untuk servis setrika.",
            rating: 5
        }
    ];

    return (
        <section id="testimonials" className="section">
            <div className="container">
                <h2 className="section-title">Happy Customers</h2>
                <p className="section-subtitle">Read what our clients say about their experience.</p>

                <div className="grid-3">
                    {reviews.map((review, index) => (
                        <div key={index} className="review-card">
                            <div className="stars">
                                {[...Array(review.rating)].map((_, i) => (
                                    <Star key={i} size={16} fill="#FFD700" color="#FFD700" />
                                ))}
                            </div>
                            <p className="review-text">"{review.text}"</p>
                            <h4 className="review-author">- {review.name}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
