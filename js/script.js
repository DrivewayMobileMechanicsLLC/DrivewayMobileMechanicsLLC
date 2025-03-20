// Official JavaScript for Driveway Mobile Mechanics LLC
document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(anchor.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
    // Booking form handling
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Thank you for your booking! We will contact you within 24 hours.');
        form.reset();
    });
});
