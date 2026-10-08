// ============================================================
// CONFIG
// ============================================================
const PHONE = '9647808122983';
const STORAGE_KEY = 'cjUserData';
const COMMENT_STORAGE_KEY = 'cjComments_v3';
const ORDER_STORAGE_KEY = 'cjOrders';
const ADMIN_PASSWORD = '2007ali';

// ============================================================
// 📸 قائمة الصور الثابتة (ستظهر للجميع)
// ============================================================
const DEFAULT_GALLERY = [

    // أضف هنا روابط الصور أو أسماء الملفات (إذا كانت في نفس المجلد)
    'https://i.pinimg.com/control1/1200x/7b/75/f2/7b75f26ae29bc58afd2c448b66f222f0.jpg',
    'https://i.pinimg.com/1200x/bc/6f/2c/bc6f2c4f91ab8f94d705bcb69e5a4d4e.jpg',
    'https://i.pinimg.com/1200x/8f/d0/32/8fd0322cef13abe951e4cb1737a8fb33.jpg',
    'https://i.pinimg.com/control1/736x/d3/62/f7/d362f704bd0574737e92007ab9dcd402.jpg',
    'https://i.pinimg.com/736x/9b/c9/ee/9bc9eec4a53de506ef580b95d9b89b6a.jpg',
    'https://i.pinimg.com/736x/b0/24/9d/b0249d42109b5f09532dc37cedd5b9d3.jpg',
    'https://i.pinimg.com/736x/f4/d4/6b/f4d46b204147d7aa835c7951fcc08f59.jpg',
    'https://i.pinimg.com/control1/1200x/77/23/3a/77233a68dc615927e4d8269ebbc63f3c.jpg',
    'https://i.pinimg.com/control1/736x/5f/a1/03/5fa103f8418014abb66b9513b23db1b0.jpg',
    'https://i.pinimg.com/736x/9c/19/fd/9c19fd8f9ece9d4f018512f4fc5ee51e.jpg',
    'https://i.pinimg.com/736x/5a/df/08/5adf08feb14612ec702c2df6cee40b1c.jpg',
    'https://i.pinimg.com/736x/21/7b/ef/217bef5b7b938145389385fc7337a574.jpg',
    'https://i.pinimg.com/736x/d6/8f/aa/d68faab05c422118375a6047f0fc5962.jpg',
    'https://i.pinimg.com/736x/34/f7/3a/34f73a588529405889a13ac8072c1f0a.jpg',
    'https://i.pinimg.com/736x/62/7a/cd/627acd0861f0042688ea6b6eb20ce534.jpg',
    'https://i.pinimg.com/736x/7d/bd/de/7dbddeb5a8e056231014b56e1c52f600.jpg',
    'https://i.pinimg.com/736x/eb/d8/5c/ebd85c16619b259df8cc353e25b71866.jpg',
    'https://i.pinimg.com/736x/2d/9c/4c/2d9c4cce542e0c8ca7c2bc84c9b1a37b.jpg',
    'https://i.pinimg.com/736x/33/81/c8/3381c82e1ce0e62cadf11db2ffc2d8fa.jpg',
    'https://i.pinimg.com/736x/c9/a1/fa/c9a1fa03759ebddf2660ee5f57bc64f1.jpg',
    'https://i.pinimg.com/736x/fb/3d/39/fb3d39d3685e6b0873a2d263047d269f.jpg',
    'https://i.pinimg.com/736x/53/7b/94/537b94a01ec2cad764c1e8c849e03987.jpg',
    'https://i.pinimg.com/736x/d6/d6/ef/d6d6ef8bf01e0a409b76caf7b20ce94a.jpg',
    'https://i.pinimg.com/736x/9e/03/2f/9e032f26f31eafc500269dd553dac2d1.jpg',
    'https://i.pinimg.com/736x/80/85/36/808536f011b026977578e5a6f83c802a.jpg',
    'https://i.pinimg.com/736x/36/ed/b8/36edb8772a180d771e541051fcc166d2.jpg',
    'https://i.pinimg.com/736x/89/76/8a/89768a3739aa4d68ac1bd92e6ded40ae.jpg',
    'https://i.pinimg.com/736x/01/6e/bc/016ebc3137fadcdad2863135011777b9.jpg',
    'https://i.pinimg.com/control1/736x/d7/b5/72/d7b5723a1360c30061cb5f73aefb6a13.jpg',


    '640271142_17858725986610090_7525605553207615198_n.webp',
    '639904770_17858828157610090_3927473557932810284_n.webp',
    '639729864_17858677932610090_6238559133338407999_n.webp',
    '639711825_17858677845610090_4787035782657899240_n.webp',
    '637718090_17858828133610090_2540132122920132966_n.webp',
    '632576556_17857214205610090_2266553283253144381_n.webp',
    '631664784_17857212783610090_8851446224988687050_n.webp',
    '61a6ef7e93095a3d1e7ee2b3e127bd52.jpg',
    '7c2dde4bb71a43cc5b2a8e680b7c4701.jpg',
    '0ea3000e9862ea92737b715adb5319e0.jpg',
    '4c1bc209eb5e14b4157cc584f92b2720.jpg',
    '7a772450a707d8101d4304f22bb5e26a.jpg'
];

// ============================================================
// متغيرات عامة
// ============================================================
let selectedProduct = 'لم يتم الاختيار';
let cart = [];
let editingCommentId = null;
let replyingToId = null;
let currentLightboxIndex = 0;
let galleryImagesData = [...DEFAULT_GALLERY]; // نبدأ بالقائمة الافتراضية

// ============================================================
// DOM refs
// ============================================================
const navbar = document.getElementById('navbar');
const themeToggle = document.getElementById('themeToggle');
const overlay = document.getElementById('orderOverlay');
const openOrderBtn = document.getElementById('openOrderBtn');
const iconOrderBtn = document.getElementById('iconOrderBtn');
const closeOrderBtn = document.getElementById('closeOrderBtn');
const custName = document.getElementById('custName');
const custPhone = document.getElementById('custPhone');
const phoneError = document.getElementById('phoneError');
const orderDetails = document.getElementById('orderDetails');
const selectedDisplay = document.getElementById('selectedProductDisplay');
const cartSummary = document.getElementById('cartSummary');
const submitBtn = document.getElementById('submitOrderBtn');
const toast = document.getElementById('toast');
const loadingOverlay = document.getElementById('loadingOverlay');
const userDisplay = document.getElementById('userDisplay');
const productGrid = document.getElementById('productGrid');
const cartCount = document.getElementById('cartCount');
const cartToggleBtn = document.getElementById('cartToggleBtn');
const shareBtn = document.getElementById('shareWhatsAppBtn');
const lightbox = document.getElementById('lightbox');
const lightboxImage = document.getElementById('lightboxImage');
const lightboxClose = document.getElementById('lightboxClose');
const lightboxPrev = document.getElementById('lightboxPrev');
const lightboxNext = document.getElementById('lightboxNext');
const galleryGrid = document.getElementById('galleryGrid');
const adminPanel = document.getElementById('adminPanel');
const adminClose = document.getElementById('adminClose');
const adminCommentList = document.getElementById('adminCommentList');
const adminOrderList = document.getElementById('adminOrderList');
const adminAddOrder = document.getElementById('adminAddOrder');
const newImageUrl = document.getElementById('newImageUrl');
const addImageBtn = document.getElementById('addImageBtn');
const adminGalleryList = document.getElementById('adminGalleryList');

// ============================================================
// Theme (Dark Mode)
// ============================================================
function loadTheme() {
    const saved = localStorage.getItem('cjTheme');
    if (saved === 'dark') {
        document.documentElement.setAttribute('data-theme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    } else {
        document.documentElement.removeAttribute('data-theme');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    }
}
loadTheme();

themeToggle.addEventListener('click', () => {
    const isDark = document.documentElement.getAttribute('data-theme') === 'dark';
    if (isDark) {
        document.documentElement.removeAttribute('data-theme');
        localStorage.setItem('cjTheme', 'light');
        themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('cjTheme', 'dark');
        themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
    }
});

// ============================================================
// User Data Management (محلي)
// ============================================================
function getUserData() {
    try {
        const data = localStorage.getItem(STORAGE_KEY);
        return data ? JSON.parse(data) : null;
    } catch { return null; }
}

function saveUserData(name, phone) {
    const data = { name, phone, savedAt: new Date().toISOString() };
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    updateUserDisplay();
    return data;
}

function updateUserDisplay() {
    const user = getUserData();
    if (user && user.name) {
        userDisplay.textContent = `مرحباً، ${user.name}`;
    } else {
        userDisplay.textContent = 'اطلب';
    }
}
updateUserDisplay();

function loadUserData() {
    const user = getUserData();
    if (user) {
        custName.value = user.name || '';
        custPhone.value = user.phone || '';
        return true;
    }
    return false;
}

// ============================================================
// Cart (محلي)
// ============================================================
function updateCartUI() {
    cartCount.textContent = cart.length;
    if (cart.length > 0) {
        cartSummary.innerHTML = `🛒 السلة: ${cart.join('، ')}`;
    } else {
        cartSummary.innerHTML = '';
    }
}

function addToCart(product) {
    if (!cart.includes(product)) {
        cart.push(product);
        updateCartUI();
        showToast(`✅ تم إضافة ${product} إلى السلة`);
    } else {
        showToast(`⚠️ ${product} موجود بالفعل في السلة`);
    }
}

function clearCart() {
    cart = [];
    updateCartUI();
}

cartToggleBtn.addEventListener('click', () => {
    if (cart.length === 0) {
        showToast('🛒 السلة فارغة');
        return;
    }
    selectedProduct = cart.join('، ');
    selectedDisplay.textContent = selectedProduct;
    openOverlay();
});

document.querySelectorAll('.add-to-cart-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const product = btn.dataset.product;
        addToCart(product);
    });
});

// ============================================================
// Product selection & quick order
// ============================================================
document.querySelectorAll('.product-card').forEach(card => {
    card.addEventListener('click', () => {
        document.querySelectorAll('.product-card').forEach(c => c.classList.remove('selected'));
        card.classList.add('selected');
        selectedProduct = card.dataset.label || 'منتج';
        selectedDisplay.textContent = selectedProduct;

        const user = getUserData();
        if (user && user.name && user.phone) {
            sendToWhatsApp(user.name, user.phone, selectedProduct);
            showToast(`✅ جاري توجيهك إلى واتساب مع معلوماتك المحفوظة`);
        } else {
            showToast(`✅ تم اختيار: ${selectedProduct}`);
            openOverlay();
        }
    });
});

document.querySelectorAll('.quick-order-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.stopPropagation();
        const product = btn.dataset.product;
        selectedProduct = product;
        selectedDisplay.textContent = product;

        const user = getUserData();
        if (user && user.name && user.phone) {
            sendToWhatsApp(user.name, user.phone, product);
            showToast(`✅ جاري توجيهك إلى واتساب`);
        } else {
            showToast(`✅ طلب سريع: ${product}`);
            openOverlay();
        }
    });
});

// ============================================================
// Filter Products
// ============================================================
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;

        document.querySelectorAll('.product-card').forEach(card => {
            if (filter === 'all') {
                card.classList.remove('hidden');
            } else {
                const category = card.dataset.category;
                if (category === filter) {
                    card.classList.remove('hidden');
                } else {
                    card.classList.add('hidden');
                }
            }
        });
    });
});

// ============================================================
// Overlay controls
// ============================================================
function openOverlay() {
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';
    loadUserData();
}

function closeOverlay() {
    overlay.classList.remove('active');
    document.body.style.overflow = '';
}

openOrderBtn.addEventListener('click', openOverlay);
iconOrderBtn.addEventListener('click', openOverlay);
closeOrderBtn.addEventListener('click', closeOverlay);
overlay.addEventListener('click', (e) => {
    if (e.target === overlay) closeOverlay();
});

// ============================================================
// Share via WhatsApp
// ============================================================
shareBtn.addEventListener('click', () => {
    const url = window.location.href;
    const text = `مرحباً! أنا مهتم بمنتجات CJ Store 🛍️\nيمكنك زيارة الموقع: ${url}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/${PHONE}?text=${encoded}`, '_blank');
});

// ============================================================
// Phone validation
// ============================================================
custPhone.addEventListener('input', () => {
    const val = custPhone.value.trim();
    const valid = /^(07|01)\d{8,9}$/.test(val);
    if (val && !valid) {
        phoneError.style.display = 'block';
    } else {
        phoneError.style.display = 'none';
    }
});

// ============================================================
// Send to WhatsApp
// ============================================================
function sendToWhatsApp(name, phone, product, details = '') {
    const msg =
        `الاسم: ${name}\nالرقم: ${phone}\nالمنتج: ${product}\nمعلومات الطلب: ${details || 'لا توجد تفاصيل إضافية'}`;
    const encoded = encodeURIComponent(msg);
    const waUrl = `https://wa.me/${PHONE}?text=${encoded}`;
    
    loadingOverlay.classList.add('active');
    saveOrder(name, phone, product, details);
    
    setTimeout(() => {
        window.open(waUrl, '_blank');
        setTimeout(() => {
            loadingOverlay.classList.remove('active');
        }, 1000);
    }, 800);
}

// ============================================================
// Submit order
// ============================================================
submitBtn.addEventListener('click', () => {
    const name = custName.value.trim();
    const phone = custPhone.value.trim();
    const details = orderDetails.value.trim() || 'لا توجد تفاصيل إضافية';

    if (!name || !phone) {
        showToast('⚠️ يرجى إدخال الاسم والرقم');
        return;
    }

    const validPhone = /^(07|01)\d{8,9}$/.test(phone);
    if (!validPhone) {
        phoneError.style.display = 'block';
        showToast('⚠️ يرجى إدخال رقم صحيح');
        return;
    }

    let product = selectedProduct;
    if (cart.length > 0) {
        product = cart.join('، ');
    }

    saveUserData(name, phone);
    saveOrder(name, phone, product, details);
    sendToWhatsApp(name, phone, product, details);
    showToast('📤 تم توجيهك إلى واتساب');
    clearCart();
    closeOverlay();
});

// ============================================================
// Order storage (for admin - محلي)
// ============================================================
function getOrders() {
    try { return JSON.parse(localStorage.getItem(ORDER_STORAGE_KEY)) || []; } catch { return []; }
}

function saveOrders(orders) {
    localStorage.setItem(ORDER_STORAGE_KEY, JSON.stringify(orders));
}

function saveOrder(name, phone, product, details) {
    const orders = getOrders();
    orders.unshift({
        id: Date.now() + '-' + Math.random().toString(36).slice(2, 6),
        name,
        phone,
        product,
        details,
        createdAt: new Date().toLocaleString('ar-EG')
    });
    saveOrders(orders);
    updateAdminOrders();
}

// ============================================================
// Toast
// ============================================================
let toastTimer;

function showToast(text) {
    toast.textContent = text;
    toast.classList.add('show');
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove('show'), 3000);
}

// ============================================================
// Gallery Management (ثابت + إضافة مؤقتة)
// ============================================================

// دالة عرض المعرض (من المصفوفة الثابتة)
function renderGallery() {
    if (!galleryGrid) return;
    if (galleryImagesData.length === 0) {
        galleryGrid.innerHTML = '<p style="grid-column:1/-1;text-align:center;color:var(--text-muted);">📸 لا توجد صور في المعرض. أضف بعض الصور في الكود أو من لوحة التحكم.</p>';
        return;
    }
    galleryGrid.innerHTML = galleryImagesData.map(src => `
        <div class="gallery-item">
            <img src="${src}" alt="صورة المعرض" loading="lazy" />
        </div>
    `).join('');
    initLightbox();
}

// دالة عرض المعرض في لوحة التحكم
function renderAdminGallery() {
    if (!adminGalleryList) return;
    if (galleryImagesData.length === 0) {
        adminGalleryList.innerHTML = '<p style="color:var(--text-muted);grid-column:1/-1;">لا توجد صور في المعرض.</p>';
        return;
    }
    adminGalleryList.innerHTML = galleryImagesData.map((src, index) => `
        <div class="admin-gallery-item">
            <img src="${src}" alt="صورة ${index+1}" />
            <button class="del-gallery" data-index="${index}" title="حذف الصورة">✕</button>
        </div>
    `).join('');

    adminGalleryList.querySelectorAll('.del-gallery').forEach(btn => {
        btn.addEventListener('click', () => {
            const index = parseInt(btn.dataset.index);
            if (confirm(`هل تريد حذف هذه الصورة؟ (سيتم حذفها من العرض فقط)`)) {
                galleryImagesData.splice(index, 1);
                renderGallery();
                renderAdminGallery();
                showToast('🗑️ تم حذف الصورة من المعرض');
            }
        });
    });
}

// دالة إضافة صورة جديدة (مؤقتة - تضاف للمصفوفة)
if (addImageBtn) {
    addImageBtn.addEventListener('click', () => {
        const url = newImageUrl.value.trim();
        if (!url) {
            showToast('⚠️ الرجاء إدخال رابط الصورة');
            return;
        }
        if (!url.startsWith('http://') && !url.startsWith('https://')) {
            showToast('⚠️ الرابط يجب أن يبدأ بـ http:// أو https://');
            return;
        }
        
        galleryImagesData.push(url);
        renderGallery();
        renderAdminGallery();
        newImageUrl.value = '';
        showToast('✅ تم إضافة الصورة (ستظهر للجميع)');
    });
}

// ============================================================
// Lightbox
// ============================================================
function initLightbox() {
    const items = document.querySelectorAll('.gallery-item img');
    galleryImagesData = Array.from(items).map(img => img.src);
    
    items.forEach((img, index) => {
        img.addEventListener('click', () => {
            currentLightboxIndex = index;
            openLightbox(index);
        });
    });
}

function openLightbox(index) {
    lightboxImage.src = galleryImagesData[index];
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
}

function prevImage() {
    currentLightboxIndex = (currentLightboxIndex - 1 + galleryImagesData.length) % galleryImagesData.length;
    lightboxImage.src = galleryImagesData[currentLightboxIndex];
}

function nextImage() {
    currentLightboxIndex = (currentLightboxIndex + 1) % galleryImagesData.length;
    lightboxImage.src = galleryImagesData[currentLightboxIndex];
}

lightboxClose.addEventListener('click', closeLightbox);
lightboxPrev.addEventListener('click', prevImage);
lightboxNext.addEventListener('click', nextImage);
lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
});
document.addEventListener('keydown', (e) => {
    if (!lightbox.classList.contains('active')) return;
    if (e.key === 'Escape') closeLightbox();
    if (e.key === 'ArrowRight') prevImage();
    if (e.key === 'ArrowLeft') nextImage();
});

// ============================================================
// Comments with ratings (محلي)
// ============================================================
let selectedRating = 0;

function getComments() {
    try { return JSON.parse(localStorage.getItem(COMMENT_STORAGE_KEY)) || []; } catch { return []; }
}

function saveComments(comments) {
    localStorage.setItem(COMMENT_STORAGE_KEY, JSON.stringify(comments));
    updateAdminComments();
    updateStats();
}

function renderComments() {
    const comments = getComments().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (!comments.length) {
        commentList.innerHTML = '<div style="color:var(--text-muted);padding:10px 0;">لا توجد تعليقات بعد. كن أول من يترك تعليقًا.</div>';
        return;
    }
    commentList.innerHTML = comments.map(c => {
        const stars = '⭐'.repeat(c.rating || 0) + '☆'.repeat(5 - (c.rating || 0));
        return `
            <div class="comment-item" data-id="${c.id}">
                <strong>${c.name}</strong>
                <div class="stars-small">${stars}</div>
                <p>${c.message}</p>
                ${c.reply ? `<div class="reply">📩 رد: ${c.reply}</div>` : ''}
                <small>${c.email ? c.email + ' • ' : ''}${c.createdAt}</small>
                <div>
                    <button class="del" data-id="${c.id}">🗑️ حذف</button>
                    <button class="edit-btn" data-id="${c.id}">✏️ تعديل</button>
                    <button class="reply-btn" data-id="${c.id}">💬 رد</button>
                </div>
            </div>
        `;
    }).join('');

    document.querySelectorAll('.del').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const filtered = getComments().filter(c => c.id !== id);
            saveComments(filtered);
            renderComments();
            showToast('🗑️ تم حذف التعليق');
        });
    });

    document.querySelectorAll('.edit-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const comments = getComments();
            const comment = comments.find(c => c.id === id);
            if (comment) {
                document.getElementById('commentName').value = comment.name;
                document.getElementById('commentMessage').value = comment.message;
                document.getElementById('commentEmail').value = comment.email || '';
                selectedRating = comment.rating || 0;
                updateStarsUI();
                editingCommentId = id;
                document.getElementById('editCommentBtn').style.display = 'inline-block';
                showToast('✏️ جارٍ التعديل...');
            }
        });
    });

    document.querySelectorAll('.reply-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            replyingToId = id;
            document.getElementById('commentMessage').focus();
            document.getElementById('commentMessage').placeholder = `رد على التعليق...`;
            showToast('💬 اكتب ردك ثم أرسل');
        });
    });
}

document.querySelectorAll('#ratingStars i').forEach(star => {
    star.addEventListener('click', () => {
        selectedRating = parseInt(star.dataset.value);
        updateStarsUI();
    });
    star.addEventListener('mouseover', () => {
        const val = parseInt(star.dataset.value);
        document.querySelectorAll('#ratingStars i').forEach(s => {
            const sv = parseInt(s.dataset.value);
            s.classList.toggle('active', sv <= val);
        });
    });
    star.addEventListener('mouseout', updateStarsUI);
});

function updateStarsUI() {
    document.querySelectorAll('#ratingStars i').forEach(s => {
        const val = parseInt(s.dataset.value);
        s.classList.toggle('active', val <= selectedRating);
    });
}

const commentForm = document.getElementById('commentForm');
const commentStatus = document.getElementById('commentStatus');
const commentList = document.getElementById('commentList');
const clearCommentsBtn = document.getElementById('clearCommentsBtn');
const editCommentBtn = document.getElementById('editCommentBtn');
const replyCommentBtn = document.getElementById('replyCommentBtn');

commentForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('commentName').value.trim();
    const email = document.getElementById('commentEmail').value.trim();
    const message = document.getElementById('commentMessage').value.trim();

    if (!name || !message) {
        commentStatus.textContent = '⚠️ يرجى إدخال الاسم والرسالة';
        return;
    }

    const comments = getComments();

    if (editingCommentId) {
        const index = comments.findIndex(c => c.id === editingCommentId);
        if (index !== -1) {
            comments[index].name = name;
            comments[index].email = email;
            comments[index].message = message;
            comments[index].rating = selectedRating || comments[index].rating;
            if (replyingToId) {
                const parent = comments.find(c => c.id === replyingToId);
                if (parent) parent.reply = message;
                replyingToId = null;
            }
            saveComments(comments);
            renderComments();
            commentStatus.textContent = '✅ تم تعديل التعليق';
            editingCommentId = null;
            document.getElementById('editCommentBtn').style.display = 'none';
        }
    } else if (replyingToId) {
        const parent = comments.find(c => c.id === replyingToId);
        if (parent) {
            parent.reply = message;
            saveComments(comments);
            renderComments();
            commentStatus.textContent = '✅ تم إضافة الرد';
            replyingToId = null;
            document.getElementById('commentMessage').placeholder = 'رسالتك...';
        }
    } else {
        const comment = {
            id: Date.now() + '-' + Math.random().toString(36).slice(2, 6),
            name,
            email,
            message,
            rating: selectedRating || 0,
            reply: null,
            createdAt: new Date().toLocaleString('ar-EG'),
        };

        comments.unshift(comment);
        saveComments(comments);
        renderComments();
        commentStatus.textContent = '✅ تم حفظ التعليق وإرساله إلى البريد';
        selectedRating = 0;
        updateStarsUI();
    }

    commentForm.reset();
    document.getElementById('editCommentBtn').style.display = 'none';
    document.getElementById('commentMessage').placeholder = 'رسالتك...';

    const subject = encodeURIComponent(`تعليق جديد من ${name}`);
    const body = encodeURIComponent(
        `اسم المرسل: ${name}\nالبريد الإلكتروني: ${email || 'غير مذكور'}\nالتقييم: ${selectedRating || 0} نجوم\n\nالرسالة:\n${message}`
    );
    const mailto = `mailto:albiaty2007ali@gmail.com?subject=${subject}&body=${body}`;
    const a = document.createElement('a');
    a.href = mailto;
    a.style.display = 'none';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
});

editCommentBtn.addEventListener('click', () => {
    editingCommentId = null;
    document.getElementById('editCommentBtn').style.display = 'none';
    commentForm.reset();
    showToast('❌ تم إلغاء التعديل');
});

replyCommentBtn.addEventListener('click', () => {
    replyingToId = null;
    document.getElementById('commentMessage').placeholder = 'رسالتك...';
    document.getElementById('commentMessage').focus();
    showToast('❌ تم إلغاء الرد');
});

clearCommentsBtn.addEventListener('click', () => {
    const comments = getComments();
    if (!comments.length) {
        showToast('لا توجد تعليقات');
        return;
    }
    const last = comments[0];
    if (last && confirm(`هل تريد حذف تعليق "${last.name}"؟`)) {
        const filtered = comments.filter(c => c.id !== last.id);
        saveComments(filtered);
        renderComments();
        showToast('🗑️ تم حذف تعليقك');
    }
});

// ============================================================
// Admin Panel
// ============================================================
function openAdmin() {
    const password = prompt('🔐 أدخل كلمة المرور للوصول إلى لوحة التحكم:');
    if (password === ADMIN_PASSWORD) {
        adminPanel.classList.add('active');
        updateAdminComments();
        updateAdminOrders();
        updateStats();
        renderAdminGallery();
    } else if (password !== null) {
        showToast('⚠️ كلمة المرور غير صحيحة');
    }
}

function closeAdmin() {
    adminPanel.classList.remove('active');
}

adminClose.addEventListener('click', closeAdmin);
adminPanel.addEventListener('click', (e) => {
    if (e.target === adminPanel) closeAdmin();
});

document.querySelector('.brand').addEventListener('dblclick', openAdmin);

if (window.location.hash === '#admin') {
    setTimeout(openAdmin, 500);
}

function updateAdminComments() {
    const comments = getComments().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (!comments.length) {
        adminCommentList.innerHTML = '<p style="color:var(--text-muted);">لا توجد تعليقات</p>';
        return;
    }
    adminCommentList.innerHTML = comments.map(c => `
        <div class="admin-comment-item">
            <div>
                <strong>${c.name}</strong> - ${c.message.substring(0, 50)}${c.message.length > 50 ? '...' : ''}
                <small>${c.createdAt}</small>
                ${c.rating ? `⭐ ${c.rating}` : ''}
            </div>
            <button class="del-btn" data-id="${c.id}">حذف</button>
        </div>
    `).join('');

    adminCommentList.querySelectorAll('.del-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const filtered = getComments().filter(c => c.id !== id);
            saveComments(filtered);
            updateAdminComments();
            renderComments();
            showToast('🗑️ تم حذف التعليق');
        });
    });
}

function updateAdminOrders() {
    const orders = getOrders().sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    if (!orders.length) {
        adminOrderList.innerHTML = '<p style="color:var(--text-muted);">لا توجد طلبات</p>';
        return;
    }
    adminOrderList.innerHTML = orders.map(o => `
        <div class="admin-order-item">
            <div>
                <strong>${o.name}</strong> - ${o.product.substring(0, 30)}${o.product.length > 30 ? '...' : ''}
                <small>${o.createdAt}</small>
            </div>
            <button class="del-order" data-id="${o.id}">حذف</button>
        </div>
    `).join('');

    adminOrderList.querySelectorAll('.del-order').forEach(btn => {
        btn.addEventListener('click', () => {
            const id = btn.dataset.id;
            const filtered = getOrders().filter(o => o.id !== id);
            saveOrders(filtered);
            updateAdminOrders();
            showToast('🗑️ تم حذف الطلب');
        });
    });
}

function updateStats() {
    const comments = getComments();
    const orders = getOrders();
    document.getElementById('statComments').textContent = comments.length;
    document.getElementById('statOrders').textContent = orders.length;
    document.getElementById('statVisitors').textContent = getVisitors();
}

function getVisitors() {
    let count = parseInt(localStorage.getItem('cjVisitors')) || 0;
    if (!sessionStorage.getItem('cjVisited')) {
        count++;
        localStorage.setItem('cjVisitors', count);
        sessionStorage.setItem('cjVisited', 'true');
    }
    return count;
}

adminAddOrder.addEventListener('click', () => {
    const name = prompt('👤 اسم العميل:');
    if (!name) return;
    const phone = prompt('📱 رقم الهاتف:');
    if (!phone) return;
    const product = prompt('🛍️ المنتج:');
    if (!product) return;
    const details = prompt('📝 تفاصيل إضافية:') || 'لا توجد';
    saveOrder(name, phone, product, details);
    showToast('✅ تم إضافة الطلب');
});

// ============================================================
// Intersection Observer for fade-up
// ============================================================
const fadeEls = document.querySelectorAll('.fade-up');
const obs = new IntersectionObserver((entries) => {
    entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
    });
}, { threshold: 0.15 });
fadeEls.forEach(el => obs.observe(el));

// ============================================================
// Parallax effect
// ============================================================
window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;
    const hero = document.getElementById('hero');
    if (hero) {
        const offset = scrollY * 0.4;
        hero.style.backgroundPositionY = `${-offset}px`;
    }
});

// ============================================================
// Web Notifications
// ============================================================
if ('Notification' in window && Notification.permission === 'default') {
    Notification.requestPermission();
}

function sendNotification(title, body) {
    if ('Notification' in window && Notification.permission === 'granted') {
        new Notification(title, { body, icon: '581154154_17844465294610090_5311287597297863583_n.jpg' });
    }
}

// ============================================================
// Initialization
// ============================================================
function init() {
    renderGallery();
    renderComments();
    updateCartUI();
    updateStats();
    updateUserDisplay();
    document.getElementById('editCommentBtn').style.display = 'none';
    selectedDisplay.textContent = 'لم يتم الاختيار';
    loadTheme();

    console.log('✅ CJ Store loaded successfully with static gallery!');
    console.log('📌 User data:', getUserData());
    console.log('🖼️ Gallery images:', galleryImagesData.length);
}

document.addEventListener('DOMContentLoaded', init);