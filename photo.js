document.addEventListener('DOMContentLoaded', function () {

    const burgerBtn = document.getElementById('burger-btn');
    const closeBtn = document.getElementById('close-btn');
    const mobileMenu = document.getElementById('mobile-menu');
    const mobileLinks = document.querySelectorAll('.mobile-link');

  
    burgerBtn.addEventListener('click', function () {
        mobileMenu.classList.toggle('translate-x-full');
    });

   
    closeBtn.addEventListener('click', function () {
        mobileMenu.classList.add('translate-x-full');
    });

   
    mobileLinks.forEach(link => {
        link.addEventListener('click', function () {
            mobileMenu.classList.add('translate-x-full');
        });
    });

    
    const toggleBtn = document.getElementById("toggleBtn");
    const extraImages = document.querySelectorAll(".extra");

    let isOpen = false;

    toggleBtn.addEventListener("click", () => {

        isOpen = !isOpen;

        extraImages.forEach((img) => {
            img.classList.toggle("hidden");
        });

        toggleBtn.textContent = isOpen
            ? "Voir moins"
            : "Voir plus";
    });

});