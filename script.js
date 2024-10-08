document.addEventListener('DOMContentLoaded', () => {
    const addToCartButtons = document.querySelectorAll('.add-to-cart');
    let cartItems = 0;

    addToCartButtons.forEach(button => {
        button.addEventListener('click', () => {
            cartItems++;
            updateCart();
            showNotification('Item added to cart!');
        });
    });

    function updateCart() {
        const cartIcon = document.createElement('div');
        cartIcon.className = 'cart-icon';
        cartIcon.textContent = cartItems;
        
        const existingCartIcon = document.querySelector('.cart-icon');
        if (existingCartIcon) {
            existingCartIcon.remove();
        }
        
        document.querySelector('nav').appendChild(cartIcon);
    }

    function showNotification(message) {
        const notification = document.createElement('div');
        notification.className = 'notification';
        notification.textContent = message;
        
        document.body.appendChild(notification);
        
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form submission
    const contactForm = document.querySelector('#contact form');
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        showNotification('Message sent successfully!');
        contactForm.reset();
    });

});