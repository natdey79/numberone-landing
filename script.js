/* ============================================================== */
/* --- SPLASH SCREEN --- */
/* ============================================================== */
// DISABLED - Splash screen removed from home.html
/*
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
*/

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
/* --- TRANSLATION DICTIONARY (BOLDED PRODUCT NAME) --- */
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
        'prod_price_label': 'Price:',
        'prod_price_per': '/ box',
        'order_now_btn': 'Order Now',

        // NEW REVIEWS (ENGLISH)
        'test_title_1': '"I Feel Like I\'m 25 Again!"',
        'test_body_1': 'Are you kidding me?! I don\'t know what kind of wizardry is in <strong>Otoko Ichiban</strong>, but this stuff is absolutely ELECTRIC! I hadn\'t had a morning that good in over a decade, and suddenly I\'m waking up like a teenager again. My girlfriend actually laughed out loud with joy—and let\'s just say we didn\'t get out of bed until lunchtime. I feel like I\'ve been given a second youth, and I am riding that high all day long! Best purchase of my life!',
        
        'test_title_2': '"The Best Night of Our Marriage—Hands Down!"',
        'test_body_2': 'I am literally smiling just writing this. My wife and I have been in a rut for years, but last night? Last night was FIREWORKS. <strong>Otoko Ichiban</strong> gave me the stamina and confidence to go above and beyond, and we were both giggling like newlyweds. She looked at me afterwards and whispered, \'Where has THAT been all my life?\' I feel like a rockstar, and our relationship has never felt more alive. This isn\'t just a pill; it\'s a PARTY! Thank you, thank you, thank you!',
        
        'test_title_3': '"Zero Stress, 100% Pure Fun!"',
        'test_body_3': 'Forget everything you\'ve heard about anxiety—this stuff erased my nerves completely! I popped <strong>Otoko Ichiban</strong>, and within 40 minutes, I wasn\'t thinking about \'if\' I could perform; I was just excited to GET STARTED. The feeling was so strong and natural that I actually started laughing mid-moment because I couldn\'t believe how amazing it felt. My partner said she hasn\'t seen me this happy and playful in years. I\'m on cloud nine and never looking back!',
        
        'test_title_4': '"I Finally Feel Like a Superhero!"',
        'test_body_4': 'Hallelujah! I genuinely did not think anything would work for me, but <strong>Otoko Ichiban</strong> knocked my socks off—literally! The energy, the firmness, the sheer endurance—it was like flipping a switch from \'meh\' to \'MEGAWATT.\' I felt so powerful and unstoppable that I actually high-fived myself in the mirror the next morning. My confidence is through the roof, and I can\'t wait for date night tonight. This product made me feel like a KING! Five stars isn\'t enough—I\'d give it ten!'
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
        'prod_price_label': '价格：',
        'prod_price_per': '/ 盒',
        'order_now_btn': '立即订购',

        // NEW REVIEWS (CHINESE)
        'test_title_1': '"感觉自己又回到了25岁！"',
        'test_body_1': '你在开玩笑吗？！我不知道<strong>Otoko Ichiban</strong>里面有什么魔法，但这个玩意儿简直太给力了！十多年来我都没有过这么美好的早晨，突然间我像青少年一样醒来。我的女朋友高兴得大笑起来——这么说吧，我们直到午饭时间才起床。我感觉自己重获了青春，一整天都沉浸在兴奋之中！这是我一生中买过的最好的东西！',

        'test_title_2': '"我们婚姻中最美好的夜晚——毫无疑问！"',
        'test_body_2': '我写这些的时候都在笑。我和妻子多年来一直处于平淡期，但昨晚？昨晚简直是烟花绽放。<strong>Otoko Ichiban</strong>给了我超常的耐力和自信，我们都像新婚夫妇一样咯咯笑。事后她看着我低声说：\'这东西怎么现在才出现在我的生活中？\' 我感觉自己像个摇滚明星，我们的关系从未如此充满活力。这不仅仅是一粒药丸，更是一场狂欢！谢谢，谢谢，再谢谢！',

        'test_title_3': '"零压力，百分之百纯粹的快乐！"',
        'test_body_3': '忘掉你听过的所有关于焦虑的说法——这个东西完全消除了我的紧张！我服用了<strong>Otoko Ichiban</strong>，不到40分钟，我根本没去想自己能不能行，我只是兴奋地想要开始！那种感觉如此强烈且自然，我甚至在过程中笑出声来，因为我不敢相信感觉竟如此美妙。我的伴侣说她多年没见我这么快乐和充满活力了。我飘飘欲仙，绝不回头！',

        'test_title_4': '"我终于感觉自己像个超级英雄了！"',
        'test_body_4': '哈利路亚！我真的以为对我没用，但<strong>Otoko Ichiban</strong>彻底让我惊叹——字面意义上的！那种能量、坚挺、惊人的持久力——简直就像是把开关从\'一般般\'拨到了\'超级强力\'。我感觉如此强大、不可阻挡，第二天早上我甚至对着镜子跟自己击掌庆祝。我的信心爆棚，迫不及待今晚的约会之夜。这个产品让我感觉像个国王！五星都不够——我要给它十星！'
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
        'prod_price_label': 'Harga:',
        'prod_price_per': '/ kotak',
        'order_now_btn': 'Tempah Sekarang',

        // NEW REVIEWS (MALAY)
        'test_title_1': '"Rasa Seperti Berusia 25 Tahun Semula!"',
        'test_body_1': 'Awak bergurau ke?! Saya tidak tahu apa jenis sihir dalam <strong>Otoko Ichiban</strong>, tapi benda ni BETUL-BETUL ELEKTRIK! Dah lebih sedekad saya tak dapat pagi yang sebaik ni, dan tiba-tiba saya bangun macam remaja semula. Teman wanita saya benar-benar ketawa kegembiraan—dan kita boleh katakan kami tidak bangun dari katil sampai tengah hari. Saya rasa seperti diberi umur muda kedua, dan saya menikmati kegembiraan itu sepanjang hari! Pembelian terbaik dalam hidup saya!',

        'test_title_2': '"Malam Terbaik dalam Perkahwinan Kami—Tanpa Ragu!"',
        'test_body_2': 'Saya benar-benar tersenyum semasa menulis ini. Saya dan isteri sudah lama dalam kebosanan, tapi malam tadi? Malam tadi adalah BUNGA API! <strong>Otoko Ichiban</strong> memberi saya ketahanan dan keyakinan untuk melakukan lebih daripada biasa, dan kami berdua ketawa kecil seperti pengantin baru. Dia memandang saya selepas itu dan berbisik, \'Mana benda ni sepanjang hidup saya?\' Saya rasa seperti rockstar, dan hubungan kami tidak pernah terasa lebih hidup. Ini bukan sekadar pil; ini PARTI! Terima kasih, terima kasih, terima kasih!',

        'test_title_3': '"Sifar Tekanan, 100% Keseronokan Tulen!"',
        'test_body_3': 'Lupakan semua yang anda dengar tentang kebimbangan—benda ni menghapuskan gugup saya sepenuhnya! Saya makan <strong>Otoko Ichiban</strong>, dan dalam masa 40 minit, saya tidak fikir tentang \'kalau\' saya boleh beraksi; saya hanya teruja untuk MULA. Perasaannya begitu kuat dan semula jadi sehingga saya benar-benar mula ketawa di tengah-tengah kerana saya tidak percaya betapa hebatnya ia terasa. Pasangan saya kata dia tak pernah nampak saya gembira dan suka bermain seperti ini sejak bertahun-tahun. Saya berada di awan dan tidak akan menoleh ke belakang!',

        'test_title_4': '"Akhirnya Rasa Macam Wira Super!"',
        'test_body_4': 'Haleluya! Saya benar-benar tidak sangka apa-apa akan berkesan untuk saya, tapi <strong>Otoko Ichiban</strong> benar-benar mengagumkan saya! Tenaga, ketegasan, ketahanan yang luar biasa—ia seperti menukar suis dari \'biasa\' ke \'MEGAWATT.\' Saya rasa begitu kuat dan tidak dapat dihalang sehingga saya benar-benar menepuk tangan sendiri di cermin pada keesokan paginya. Keyakinan saya melonjak tinggi, dan saya tidak sabar untuk malam dating malam ini. Produk ini membuat saya rasa seperti RAJA! Lima bintang tidak cukup—saya akan beri sepuluh!'
    }
};

/* ============================================================== */
/* --- LANGUAGE FUNCTION --- */
/* ============================================================== */
function setLanguage(langCode) {
    const dict = translations[langCode];
    if (!dict) return;

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

    document.documentElement.setAttribute('lang', langCode);

    document.querySelectorAll('.lang-img').forEach(img => {
        let currentSrc = img.getAttribute('src');
        let baseName = currentSrc.replace(/^(en|zh|ms)_/, '').replace(/\?v=.*/, '');
        let newSrc = langCode + '_' + baseName + '?v=' + Date.now();
        let clickAttr = img.getAttribute('onclick');
        let classAttr = img.getAttribute('class');
        
        let newImg = document.createElement('img');
        newImg.setAttribute('src', newSrc);
        newImg.setAttribute('class', classAttr);
        newImg.setAttribute('onclick', clickAttr);
        img.parentNode.replaceChild(newImg, img);
    });

    document.querySelectorAll('.lang-ingredient-img').forEach(img => {
        let currentSrc = img.getAttribute('src');
        let baseName = currentSrc.replace(/^(en|zh|ms)_/, '').replace(/\?v=.*/, '');
        let newSrc = langCode + '_' + baseName + '?v=' + Date.now();
        img.setAttribute('src', newSrc);
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
/* --- AUTO-PLAY SLIDER LOGIC --- */
/* ============================================================== */
let slideInterval;
let currentSlide = 0;
const slides = document.querySelectorAll('.testimonial-slide');
const dots = document.querySelectorAll('.dot');

function showSlide(index) {
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    slides[index].classList.add('active');
    dots[index].classList.add('active');
    currentSlide = index;
}

function nextSlide() {
    let next = currentSlide + 1;
    if (next >= slides.length) {
        next = 0;
    }
    showSlide(next);
}

function startAutoPlay() {
    if (slides.length > 0) {
        showSlide(0);
        slideInterval = setInterval(nextSlide, 5000);
    }
}

function stopAutoPlay() {
    clearInterval(slideInterval);
}

function goToSlide(index) {
    stopAutoPlay();
    showSlide(index);
    startAutoPlay();
}

function toggleSliderTestimonial(element) {
    const body = element.querySelector('.testimonial-body');
    if (body) {
        body.classList.toggle('expanded');
    }
}

/* ============================================================== */
/* --- EVENT LISTENERS --- */
/* ============================================================== */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelectorAll('.lang-option').forEach(option => {
        option.addEventListener('click', function(e) {
            e.stopPropagation();
            const lang = this.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
                const wrapper = this.closest('.side-dropdown-wrapper');
                if (wrapper) wrapper.classList.remove('open');
            }
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setTimeout(function() {
        setLanguage(savedLang);
    }, 300);

    startAutoPlay();
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