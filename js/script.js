// Enhanced JavaScript for Driveway Mobile Mechanics LLC
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
    // Booking form
    const form = document.getElementById('booking-form');
    form.addEventListener('submit', e => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        if (!/^\S+@\S+\.\S+$/.test(email)) {
            alert('Please enter a valid email address.');
            return;
        }
        alert('Booking submitted! We’ll contact you soon.');
        form.reset();
    });
    // Cost calculator
    const calcService = document.getElementById('calc-service');
    const distance = document.getElementById('distance');
    const calcResult = document.getElementById('calc-result');
    function updateCalc() {
        const base = parseInt(calcService.value);
        const miles = parseInt(distance.value) || 0;
        const total = base + (miles * 2); // $2/mile travel fee
        calcResult.textContent = total;
    }
    calcService.addEventListener('change', updateCalc);
    distance.addEventListener('input', updateCalc);
});
