// Dictionary of translations (Global scope)
const translations = {
    'en': {
        'announcement': 'Welcome to our store',
        'nav_home': 'Home',
        'nav_contact': 'Contact Us',
        'prod_title': 'Number One / Otoko Ichiban',
        'prod_quote': '"Man\'s pride, life\'s quality!<br>Otoko Ichiban – Let every man be more confident and stronger!"',
        'prod_info_title': 'Product Information',
        'prod_name_label': 'Product Name:',
        'prod_name_val': '男一番 (OTOKO ICHIBAN)',
        'prod_type_label': 'Type:',
        'prod_type_val': "Men's Oral Dissolving Film",
        'prod_qty_label': 'Quantity:',
        'prod_qty_val': '3 pieces per box',
        'prod_features_label': 'Key Features:',
        'prod_feat_1': 'Quick Absorption',
        'prod_feat_2': 'Herbal Formula',
        'prod_feat_3': 'Long Lasting',
        'prod_feat_4': 'Premium Quality',
        'wa_btn_text': 'Inquire on WhatsApp',
        'modal_title': 'Order Information',
        'modal_name': 'Name',
        'modal_phone': 'Phone Number',
        'modal_address': 'Delivery Address',
        'modal_flavor': 'Select Flavors & Quantities',
        'modal_qty': 'Total Quantity:',
        'modal_total': 'Total:',
        'modal_cancel': 'Cancel',
        'modal_submit': 'Submit'
    },
    'zh': {
        'announcement': '欢迎来到我们的商店',
        'nav_home': '主页',
        'nav_contact': '联系我们',
        'prod_title': 'Number One / 男一番',
        'prod_quote': '"男人的骄傲，生活的品质！<br>男一番 – 让每个男人更自信、更强大！"',
        'prod_info_title': '产品信息',
        'prod_name_label': '产品名称：',
        'prod_name_val': '男一番 (OTOKO ICHIBAN)',
        'prod_type_label': '类型：',
        'prod_type_val': '男士口服膜片',
        'prod_qty_label': '数量：',
        'prod_qty_val': '每盒3片',
        'prod_features_label': '主要特点：',
        'prod_feat_1': '快速吸收',
        'prod_feat_2': '植物配方',
        'prod_feat_3': '持久强劲',
        'prod_feat_4': '品质保证',
        'wa_btn_text': '通过 WhatsApp 咨询',
        'modal_title': '订单信息',
        'modal_name': '姓名',
        'modal_phone': '电话号码',
        'modal_address': '送货地址',
        'modal_flavor': '选择口味和数量',
        'modal_qty': '总数量：',
        'modal_total': '总计：',
        'modal_cancel': '取消',
        'modal_submit': '提交'
    },
    'ms': {
        'announcement': 'Selamat datang ke kedai kami',
        'nav_home': 'Laman Utama',
        'nav_contact': 'Hubungi Kami',
        'prod_title': 'Number One / Otoko Ichiban',
        'prod_quote': '"Kebanggaan lelaki, kualiti hidup!<br>Otoko Ichiban – Biarkan setiap lelaki lebih yakin dan lebih kuat!"',
        'prod_info_title': 'Maklumat Produk',
        'prod_name_label': 'Nama Produk:',
        'prod_name_val': '男一番 (OTOKO ICHIBAN)',
        'prod_type_label': 'Jenis:',
        'prod_type_val': 'Filem Oral Pelarut Lelaki',
        'prod_qty_label': 'Kuantiti:',
        'prod_qty_val': '3 keping setiap kotak',
        'prod_features_label': 'Ciri-ciri Utama:',
        'prod_feat_1': 'Penyerapan Pantas',
        'prod_feat_2': 'Formula Herba',
        'prod_feat_3': 'Tahan Lama',
        'prod_feat_4': 'Kualiti Premium',
        'wa_btn_text': 'Tanya di WhatsApp',
        'modal_title': 'Maklumat Pesanan',
        'modal_name': 'Nama',
        'modal_phone': 'Nombor Telefon',
        'modal_address': 'Alamat Penghantaran',
        'modal_flavor': 'Pilih Perisa & Kuantiti',
        'modal_qty': 'Jumlah Kuantiti:',
        'modal_total': 'Jumlah:',
        'modal_cancel': 'Batal',
        'modal_submit': 'Hantar'
    }
};

let currentLanguage = 'en'; 

// LANGUAGE FUNCTIONS
function toggleLangMenu() {
    const dropdown = document.getElementById('lang-dropdown');
    dropdown.classList.toggle('show');
}

window.onclick = function(event) {
    if (!event.target.closest('.lang-switcher')) {
        document.getElementById('lang-dropdown').classList.remove('show');
    }
}

function setLanguage(langCode, event) {
    event.preventDefault(); 
    currentLanguage = langCode; 
    
    document.querySelectorAll('.lang-dropdown a').forEach(el => el.classList.remove('active-lang'));
    event.target.closest('a').classList.add('active-lang');

    const labelMap = {'en': 'EN', 'zh': '中文', 'ms': 'MS'};
    document.getElementById('current-lang-label').innerText = labelMap[langCode];
    document.getElementById('lang-dropdown').classList.remove('show');

    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
        const key = el.getAttribute('data-i18n');
        if(translations[langCode][key]) {
            el.innerHTML = translations[langCode][key];
        }
    });
}

// --- IMAGE LIGHTBOX FUNCTIONS ---
function openLightbox(imgElement) {
    document.getElementById('lightbox-image').src = imgElement.src;
    document.getElementById('lightbox-overlay').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    document.getElementById('lightbox-overlay').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// --- WHATSAPP ORDER MODAL FUNCTIONS ---
// Automatically pulls the price from the HTML displayed price
function getUnitPrice() {
    const priceText = document.querySelector('.product-price').innerText;
    // Extracts 168.00 from "RM168.00 MYR"
    const match = priceText.match(/(\d+\.?\d*)/);
    return match ? parseFloat(match[0]) : 0;
}

function openOrderModal() {
    document.getElementById('order-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
    updateTotalPrice(); 
}

function closeOrderModal() {
    document.getElementById('order-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

function updateTotalPrice() {
    const qty