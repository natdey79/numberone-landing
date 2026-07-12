/* ============================================================== */
/* --- SPLASH SCREEN --- */
/* ============================================================== */
document.addEventListener('DOMContentLoaded', function() {
    const splashElement = document.getElementById('productSplash');
    if (splashElement) {
        let countdown = 3;
        const timerElement = document.getElementById('splashTimer');
        const interval = setInterval(function() {
            countdown--;
            if (countdown > 0) {
                timerElement.innerText = countdown;
            } else {
                clearInterval(interval);
                splashElement.classList.add('hide-splash');
                document.body.style.overflow = 'auto';
            }
        }, 1000);
    }
});

/* ============================================================== */
/* --- SINGLE PAGE NAVIGATION --- */
/* ============================================================== */
function showSection(sectionId) {
    document.querySelectorAll('.page-section').forEach(el => {
        el.style.display = 'none';
    });
    const target = document.getElementById(sectionId);
    if (target) {
        target.style.display = 'block';
    }
    document.querySelectorAll('.side-dropdown-wrapper.open').forEach(w => w.classList.remove('open'));
}

/* ============================================================== */
/* --- TRANSLATION DICTIONARY --- */
/* ============================================================== */
const translations = {
    'en': {
        'nav_home': 'Home', 'nav_product': 'Product', 'nav_review': 'Reviews', 'nav_contact': 'Contact', 'nav_about': 'About Us', 'nav_language': 'Language',
        'lang_en': 'English (EN)', 'lang_zh': '中文 (ZH)', 'lang_ms': 'Bahasa Melayu (MS)',
        'prod_title': 'Number One / Otoko Ichiban',
        'prod_quote': '"Man\'s pride, life\'s quality!<br>Otoko Ichiban – Let every man be more confident and stronger!"',
        'prod_info_title': 'Product Information', 'prod_name_label': 'Product Name:', 'prod_name_val': '男一番 (OTOKO ICHIBAN)', 'prod_type_label': 'Type:', 'prod_type_val': "Men's Oral Dissolving Film", 'prod_qty_label': 'Quantity:', 'prod_qty_val': '3 sheets per box (10 pills per sheet)',
        'intro_headline': 'Built for Endurance. Zero Excuses.', 'intro_subtitle': 'Discover the formula crafted for stamina and confidence.',
        'wa_btn_text': 'Inquire on WhatsApp',
        'modal_title': 'Order Information', 'modal_name': 'Name', 'modal_phone': 'Phone Number', 'modal_address': 'Delivery Address', 'modal_flavor': 'Select Flavors & Quantities', 'modal_qty': 'Total Quantity:', 'modal_total': 'Total:', 'modal_cancel': 'Cancel', 'modal_submit': 'Submit',
        'test_title_1': '"Back to my 20s!"', 'test_body_1': 'I was feeling sluggish and my drive was at an all-time low. After taking <strong>Otoko Ichiban</strong>, the difference is night and day. The <strong>natural ingredients</strong> give me clean energy without any jitters or crashes. What surprised me most is how fast it works—I believe the <strong>ultra-thin, quick-dissolve coating</strong> (0.01mm) makes it absorb immediately. My stamina and performance have never been better. My partner has definitely noticed the change!',
        'test_title_2': '"Saved my relationship confidence."', 'test_body_2': 'I was hesitant to try pills, but <strong>Otoko Ichiban</strong> is entirely <strong>natural material</strong>, so I felt safe giving it a shot. It doesn\'t just boost physical desire; it completely restores your mental confidence. The rapid-release design means I feel the effects within minutes, and it lasts all night. If you want to feel like the \'Number One Man\' again, this is it.',
        'test_title_3': '"Unbelievable absorption speed."', 'test_body_3': 'I\'ve tried other herbal supplements that take hours to kick in—or never do. <strong>Otoko Ichiban</strong> is different. The <strong>0.01mm ultra-thin coating</strong> dissolves the second it touches my tongue, delivering the natural herbal extract straight into my system. My sexual desire skyrockets within 20 minutes. It\'s potent, reliable, and 100% natural. Highly recommended for men over 40.',
        'test_title_4': '"This stuff actually works."', 'test_body_4': 'Finally, a male enhancement pill that delivers. Pure <strong>natural materials</strong>, zero chemical aftertaste, and the <strong>ultra-thin coating</strong> means it works faster than any capsule I\'ve ever taken. My drive is through the roof, and the results speak for themselves. <strong>Otoko Ichiban</strong> is the real deal.'
    },
    'zh': {
        'nav_home': '主页', 'nav_product': '产品', 'nav_review': '评价', 'nav_contact': '联系我们', 'nav_about': '关于我们', 'nav_language': '语言',
        'lang_en': '英语 (EN)', 'lang_zh': '中文 (ZH)', 'lang_ms': '马来语 (MS)',
        'prod_title': 'Number One / 男一番',
        'prod_quote': '"男人的骄傲，生活的品质！<br>男一番 – 让每个男人更自信、更强大！"',
        'prod_info_title': '产品信息', 'prod_name_label': '产品名称：', 'prod_name_val': '男一番 (OTOKO ICHIBAN)', 'prod_type_label': '类型：', 'prod_type_val': '男士口服膜片', 'prod_qty_label': '数量：', 'prod_qty_val': '每盒3片，每片10粒',
        'intro_headline': '为耐力而生。零借口。', 'intro_subtitle': '探索为耐力和自信而打造的配方。',
        'wa_btn_text': '通过 WhatsApp 咨询',
        'modal_title': '订单信息', 'modal_name': '姓名', 'modal_phone': '电话号码', 'modal_address': '送货地址', 'modal_flavor': '选择口味和数量', 'modal_qty': '总数量：', 'modal_total': '总计：', 'modal_cancel': '取消', 'modal_submit': '提交',
        'test_title_1': '"重回20岁状态！"', 'test_body_1': '我一直感到疲惫，性欲处于低谷。服用 <strong>Otoko Ichiban</strong> 后，差别如白天与黑夜。<strong>天然成分</strong>让我获得清爽能量，没有任何紧张或疲劳感。最让我惊讶的是它的快速效果——我相信 <strong>超薄速溶包衣</strong>（0.01mm）让它瞬间吸收。我的耐力和表现从未如此出色。我的伴侣明显注意到了变化！',
        'test_title_2': '"重拾我的关系信心。"', 'test_body_2': '我起初对服药很犹豫，但 <strong>Otoko Ichiban</strong> 完全由 <strong>天然材料</strong> 构成，所以我放心尝试。它不仅增强了身体欲望，还彻底恢复了我的心理自信。速释设计让我几分钟内就能感受到效果，而且它持续整晚。如果你想再次成为“第一男人”，这就是答案。',
        'test_title_3': '"难以置信的吸收速度。"', 'test_body_3': '我尝试过其他草本补充剂，需要几个小时才能见效，甚至根本没有效果。<strong>Otoko Ichiban</strong> 不同。<strong>0.01mm 超薄包衣</strong>在接触舌头的瞬间溶解，将天然草本精华直接送入体内。我的性欲在20分钟内飙升。它强力、可靠，而且100%天然。强烈推荐给40岁以上的男性。',
        'test_title_4': '"这东西真的有效。"', 'test_body_4': '终于有一种男性增强药丸真正有效。纯正 <strong>天然材料</strong>，没有化学余味，<strong>超薄包衣</strong>让它比任何胶囊都更快见效。我的欲望飞涨，效果毋庸置疑。<strong>Otoko Ichiban</strong> 是货真价实的选择。'
    },
    'ms': {
        'nav_home': 'Laman Utama', 'nav_product': 'Produk', 'nav_review': 'Ulasan', 'nav_contact': 'Hubungi', 'nav_about': 'Tentang Kami', 'nav_language': 'Bahasa',
        'lang_en': 'Inggeris (EN)', 'lang_zh': 'Cina (ZH)', 'lang_ms': 'Melayu (MS)',
        'prod_title': 'Number One / Otoko Ichiban',
        'prod_quote': '"Kebanggaan lelaki, kualiti hidup!<br>Otoko Ichiban – Biarkan setiap lelaki lebih yakin dan lebih kuat!"',
        'prod_info_title': 'Maklumat Produk', 'prod_name_label': 'Nama Produk:', 'prod_name_val': '男一番 (OTOKO ICHIBAN)', 'prod_type_label': 'Jenis:', 'prod_type_val': 'Filem Oral Pelarut Lelaki', 'prod_qty_label': 'Kuantiti:', 'prod_qty_val': '3 helai setiap kotak (10 biji setiap helai)',
        'intro_headline': 'Dibina untuk Ketahanan. Tiada Alasan.', 'intro_subtitle': 'Temui formula yang direka untuk daya tahan dan keyakinan.',
        'wa_btn_text': 'Tanya di WhatsApp',
        'modal_title': 'Maklumat Pesanan', 'modal_name': 'Nama', 'modal_phone': 'Nombor Telefon', 'modal_address': 'Alamat Penghantaran', 'modal_flavor': 'Pilih Perisa & Kuantiti', 'modal_qty': 'Jumlah Kuantiti:', 'modal_total': 'Jumlah:', 'modal_cancel': 'Batal', 'modal_submit': 'Hantar',
        'test_title_1': '"Kembali seperti usia 20-an saya!"', 'test_body_1': 'Saya berasa lesu dan dorongan saya berada di tahap terendah. Selepas mengambil <strong>Otoko Ichiban</strong>, perubahannya bagaikan siang dan malam. <strong>Bahan semula jadi</strong> memberikan tenaga bersih tanpa gementar atau keletihan. Apa yang paling mengejutkan adalah betapa cepatnya ia berfungsi—saya percaya <strong>salutan pantas larut ultra-nipis</strong> (0.01mm) membuatnya diserap serta-merta. Ketahanan dan prestasi saya tidak pernah sehebat ini. Pasangan saya pasti menyedari perubahannya!',
        'test_title_2': '"Menyelamatkan keyakinan hubungan saya."', 'test_body_2': 'Saya ragu-ragu untuk mencuba pil pada mulanya, tetapi <strong>Otoko Ichiban</strong> sepenuhnya dibuat daripada <strong>bahan semula jadi</strong>, jadi saya berasa selamat mencubanya. Ia bukan sahaja meningkatkan nafsu fizikal, ia memulihkan keyakinan mental saya sepenuhnya. Reka bentuk pelepasan cepat bermakna saya merasakan kesannya dalam beberapa minit, dan ia bertahan sepanjang malam. Jika anda mahu berasa seperti “Lelaki Nombor Satu” lagi, ini dia.',
        'test_title_3': '"Kelajuan penyerapan yang luar biasa."', 'test_body_3': 'Saya telah mencuba suplemen herba lain yang mengambil masa berjam-jam untuk berfungsi—atau langsung tidak. <strong>Otoko Ichiban</strong> berbeza. <strong>Salutan ultra-nipis 0.01mm</strong> larut sebaik ia menyentuh lidah saya, menghantar ekstrak herba semula jadi terus ke dalam sistem saya. Nafsu seks saya meroket dalam 20 minit. Ia kuat, boleh dipercayai, dan 100% semula jadi. Sangat disyorkan untuk lelaki berusia lebih 40 tahun.',
        'test_title_4': '"Produk ini memang berkesan."', 'test_body_4': 'Akhirnya, pil peningkatan lelaki yang benar-benar memberi hasil. Bahan <strong>semula jadi</strong> tulen, tiada rasa selepas kimia, dan <strong>salutan ultra-nipis</strong> menjadikannya berfungsi lebih cepat daripada mana-mana kapsul yang pernah saya ambil. Dorongan saya meningkat, dan hasilnya jelas. <strong>Otoko Ichiban</strong> adalah pilihan sebenar.'
    }
};

/* ============================================================== */
/* --- LANGUAGE FUNCTION (DESTROY & REBUILD METHOD) --- */
/* ============================================================== */
function setLanguage(langCode) {
    const dict = translations[langCode];
    if (!dict) return;

    // 1. Update Text
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        if (dict[key] !== undefined) {
            if (dict[key].includes('<')) {
                el.innerHTML = dict[key];
            } else {
                el.textContent = dict[key];
            }
        }
    });

    // 2. Update the HTML lang attribute (triggers background swap in CSS)
    document.documentElement.setAttribute('lang', langCode);

    // 3. Destroy and Rebuild the Image Gallery
    document.querySelectorAll('.lang-img').forEach(img => {
        let currentSrc = img.getAttribute('src');
        
        // Get the base name (remove the en_/zh_/ms_ prefix)
        let baseName = currentSrc.replace(/^(en|zh|ms)_/, '').replace(/\?v=.*/, '');
        let newSrc = langCode + '_' + baseName + '?v=' + Date.now();
        
        // Get the onclick event
        let clickAttr = img.getAttribute('onclick');
        let classAttr = img.getAttribute('class');
        
        // Create a completely new image element
        let newImg = document.createElement('img');
        newImg.setAttribute('src', newSrc);
        newImg.setAttribute('class', classAttr);
        newImg.setAttribute('onclick', clickAttr);
        
        // Replace the old image with the new one
        img.parentNode.replaceChild(newImg, img);
    });

    localStorage.setItem('preferredLanguage', langCode);
}

/* ============================================================== */
/* --- MOBILE MENU TOGGLE --- */
/* ============================================================== */
function toggleMobileMenu() {
    const panel = document.getElementById('sidePanel');
    const overlay = document.getElementById('mobile-overlay');
    
    if (panel) {
        panel.classList.toggle('open');
    }
    if (overlay) {
        overlay.classList.toggle('open');
    }
}

/* ============================================================== */
/* --- EVENT LISTENERS --- */
/* ============================================================== */
document.addEventListener('DOMContentLoaded', function() {
    // Language selection (click on span)
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent closing the menu prematurely
            const lang = this.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
                // Close the dropdown
                const wrapper = this.closest('.side-dropdown-wrapper');
                if (wrapper) wrapper.classList.remove('open');
            }
        });
    });

    // Load saved language
    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setTimeout(function() {
        setLanguage(savedLang);
    }, 300);
});

/* ============================================================== */
/* --- LIGHTBOX --- */
/* ============================================================== */
function openLightbox(imgElement) {
    const overlay = document.getElementById('lightbox-overlay');
    const image = document.getElementById('lightbox-image');
    if (overlay && image) {
        image.src = imgElement.src;
        overlay.classList.add('show');
        document.body.style.overflow = 'hidden';
    }
}
function closeLightbox() {
    const overlay = document.getElementById('lightbox-overlay');
    if (overlay) {
        overlay.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

/* ============================================================== */
/* --- WHATSAPP MODAL --- */
/* ============================================================== */
function getUnitPrice() {
    const priceText = document.querySelector('.product-price');
    if (!priceText) return 0;
    const match = priceText.innerText.match(/(\d+\.?\d*)/);
    return match ? parseFloat(match[0]) : 0;
}

function openOrderModal() {
    const modal = document.getElementById('order-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        updateTotalPrice();
    }
}

function closeOrderModal() {
    const modal = document.getElementById('order-modal');
    if (modal) {
        modal.classList.remove('show');
        document.body.style.overflow = 'auto';
    }
}

function updateTotalPrice() {
    const qtyOrig = parseInt(document.getElementById('cust-qty-original')?.value) || 0;
    const qtyChoc = parseInt(document.getElementById('cust-qty-chocolate')?.value) || 0;
    const qtyTotal = qtyOrig + qtyChoc;
    const total = qtyTotal * getUnitPrice();
    
    const totalQtyEl = document.getElementById('total-qty');
    const totalPriceEl = document.getElementById('total-price');
    if (totalQtyEl) totalQtyEl.innerText = qtyTotal;
    if (totalPriceEl) totalPriceEl.innerText = total.toFixed(2);
}

function submitOrderToWhatsApp() {
    const name = document.getElementById('cust-name')?.value.trim() || '';
    const phone = document.getElementById('cust-phone')?.value.trim() || '';
    const address = document.getElementById('cust-address')?.value.trim() || '';
    const qtyOrig = parseInt(document.getElementById('cust-qty-original')?.value) || 0;
    const qtyChoc = parseInt(document.getElementById('cust-qty-chocolate')?.value) || 0;
    const unitPrice = getUnitPrice();
    const totalQty = qtyOrig + qtyChoc;
    const total = totalQty * unitPrice;
    const productName = document.querySelector('.product-title')?.innerText || 'Number One';

    if (!name || !phone || !address) {
        alert("Please fill in all required fields.");
        return;
    }
    if (totalQty === 0) {
        alert("Please select at least 1 item to order.");
        return;
    }

    const phoneNumber = "601137424783";
    let flavorText = "";
    if(qtyOrig > 0) flavorText += `- Original: ${qtyOrig}\n`;
    if(qtyChoc > 0) flavorText += `- Chocolate: ${qtyChoc}\n`;

    const message = `✨ *NEW ORDER REQUEST* ✨\n\n` +
                    `📦 *Product:* ${productName}\n` +
                    `👤 *Name:* ${name}\n` +
                    `📞 *Phone:* ${phone}\n` +
                    `📍 *Address:* ${address}\n` +
                    `🍫 *Flavors:*\n${flavorText}` +
                    `🔢 *Total Quantity:* ${totalQty}\n` +
                    `💰 *Total Price:* RM${total.toFixed(2)}\n\n` +
                    `⏳ Please confirm my order. Thank you!`;

    window.open(`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`, '_blank');
    closeOrderModal();
}

/* ============================================================== */
/* --- TESTIMONIAL TOGGLE --- */
/* ============================================================== */
function toggleTestimonial(id) {
    const element = document.getElementById(id);
    if (!element) return;
    element.classList.toggle('expanded');
}

/* ============================================================== */
/* --- SIDE PANEL TOGGLE --- */
/* ============================================================== */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.side-dropdown-toggle').forEach(toggle => {
        toggle.addEventListener('click', function(e) {
            e.preventDefault();
            const wrapper = this.closest('.side-dropdown-wrapper');
            if (!wrapper) return;
            document.querySelectorAll('.side-dropdown-wrapper.open').forEach(w => {
                if (w !== wrapper) w.classList.remove('open');
            });
            wrapper.classList.toggle('open');
        });
    });

    document.addEventListener('click', function(e) {
        if (!e.target.closest('.side-dropdown-wrapper')) {
            document.querySelectorAll('.side-dropdown-wrapper.open').forEach(w => w.classList.remove('open'));
        }
    });
});