function changeName() {
    // Prompt orqali ism olish
    const name = prompt("Ismingizni kiriting:");

    // Agar ism kiritilgan bo'lsa va faqat bo'sh joylardan iborat bo'lmasa
    if (name && name.trim().length > 0) {
        const displayElement = document.getElementById('displayName');
        
        // DOM-ga ismni chiqarish
        displayElement.innerText = name.trim();
        
        // Kichik effekt: Ism o'zgarganda animatsiya berish
        displayElement.classList.add('animate-bounce');
        setTimeout(() => {
            displayElement.classList.remove('animate-bounce');
        }, 1000);

    } else if (name !== null) {
        alert("Iltimos, haqiqiy ism kiriting!");
    }
}
window.onload = () => {
    setTimeout(changeName, 500); 
};