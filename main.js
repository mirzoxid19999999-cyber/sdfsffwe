// 1. 4 ta elementdan iborat array yaratish
let mevalar = ["Olma", "Banan", "Gilos", "Shaftoli"];

// 2. Array uzunligini console va alertda chiqarish
console.log("Array uzunligi:", mevalar.length);
alert("Array ichida " + mevalar.length + " ta element bor.");

// 3. Confirm orqali foydalanuvchidan so'rash
let savol = confirm("Arraydan bitta elementni o'chirib tashlaymizmi?");

if (savol) {
    // OK bosilsa, oxirgi elementni olib tashlaymiz
    mevalar.pop();
    console.log("Element o'chirildi. Yangi array:", mevalar);
    alert("Bitta element o'chirildi. Qolgan elementlar soni: " + mevalar.length);
} else {
    // Otmena bosilsa, array o'zgarmaydi
    console.log("O'chirish bekor qilindi. Array o'zgarmadi:", mevalar);
    alert("O'chirish bekor qilindi. Elementlar soni: " + mevalar.length);
}