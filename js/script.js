document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            document.querySelector(a.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
        });
    });
    document.getElementById('booking-form').addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email.');
            return;
        }
        alert('Booking submitted! We’ll contact you soon.');
        e.target.reset();
    });
});
