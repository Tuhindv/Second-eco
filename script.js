// ১. প্রোডাক্ট লিস্ট
const products = [
    { name: "Stridex Premium", oldPrice: 2999, newPrice: 1050, stock: 5, sizes: [6, 7, 9], img: "photo-1542291026-7eec264c27ff.jpg" },
    { name: "Sports Edition", oldPrice: 4000, newPrice: 1800, stock: 2, sizes: [7, 8, 10], img: "photo-1483985988355-763728e1935b.jpg" },
    { name: "Casual Sneakers", oldPrice: 1500, newPrice: 900, stock: 10, sizes: [6, 8, 9, 10], img: "photo-1502005229762-cf1b2da7c5d6.jpg" },
    { name: "Stridex Premium", oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], img: "photo-1505740420928-5e560c06d30e.jpg" },
    { name: "Sports Edition", oldPrice: 4000, newPrice: 1800, stock: 2, sizes: [7, 8, 10], img: "photo-1508685096489-7aacd43bd3b1.jpg" },
    { name: "Casual Sneakers", oldPrice: 1500, newPrice: 900, stock: 10, sizes: [6, 8, 9, 10], img: "photo-1517336714731-489689fd1ca8.jpg" },
    { name: "Stridex Premium", oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], img: "photo-1522312346375-d1a52e2b99b3.jpg" },
    { name: "Sports Edition", oldPrice: 4000, newPrice: 1800, stock: 2, sizes: [7, 8, 10], img: "photo-1523275335684-37898b6baf30.jpg" },
    { name: "Casual Sneakers", oldPrice: 1500, newPrice: 900, stock: 10, sizes: [6, 8, 9, 10], img: "photo-1541099649105-f69ad21f3246.jpg" },
    { name: "Stridex Premium", oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], img: "photo-1590658268037-6bf12165a8df.jpg" },
    { name: "Sports Edition", oldPrice: 4000, newPrice: 1800, stock: 2, sizes: [7, 8, 10], img: "photo-1590874103328-eac38a683ce7.jpg" },
    { name: "Casual Sneakers", oldPrice: 1500, newPrice: 900, stock: 10, sizes: [6, 8, 9, 10], img: "photo-1596462502278-27bfdc403348.jpg" },
    { name: "Stridex Premium", oldPrice: 2999, newPrice: 1292, stock: 5, sizes: [6, 7, 9], img: "photo-1598550476439-6847785fcea6.jpg" },
    { name: "Sports Edition", oldPrice: 4000, newPrice: 1800, stock: 2, sizes: [7, 8, 10], img: "photo-1600185365926-3a2ce3cdb9eb.jpg" }
];

const container = document.getElementById('productContainer');
const whatsappNumber = "8801311657122"; 

let cardsHTML = "";

// ২. প্রতিটি প্রোডাক্টের জন্য কার্ড তৈরি
products.forEach(product => {
    const discount = Math.round(((product.oldPrice - product.newPrice) / product.oldPrice) * 100);
    const sizeBtns = product.sizes.map(s => `<button>${s}</button>`).join('');
    
    const message = `হ্যালো, আমি এই পণ্যটি অর্ডার করতে চাই: ${product.name}। দাম: ৳${product.newPrice}।`;
    const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

    // কার্ডের এইচটিএমএল ডিজাইন (এখানে onclick যোগ করা হয়েছে)
    cardsHTML += `
        <div class="product-card">
            <img src="${product.img}" alt="${product.name}" onclick="openLightbox('${product.img}')" style="cursor:pointer;">
            <h3 class="product-name">${product.name}</h3>
            <div class="price-section">
                <span class="price">৳${product.newPrice}</span>
                <span class="old-price">৳${product.oldPrice}</span>
                <span class="discount">${discount}% off</span>
            </div>
            <div class="size-selector">
                <small>Size:</small> ${sizeBtns}
            </div>
            <a href="${whatsappLink}" target="_blank" class="order-btn">Order Now</a>
        </div>
    `;
});

// ৩. কন্টেইনারে সব কার্ড পুশ করা
container.innerHTML = cardsHTML;