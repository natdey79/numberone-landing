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
        
        // Testimonial form translations
        'share_experience': 'Share Your Experience',
        'submit_review': 'Submit Review',
        'review_placeholder': 'Share your experience...',
        'title_placeholder': 'e.g., Life-Changing!',
        'name_placeholder': 'e.g., John D.',
        'review_will_be_reviewed': 'Your review will be reviewed before going live.',
        'modal_comment': 'Your Review',
        'modal_rating': 'Rating',

        // REVIEWS (ENGLISH)
        'test_title_1': '"I Feel Like I\'m 25 Again!"',
        'test_body_1': 'Are you kidding me?! I don\'t know what kind of wizardry is in <strong>Otoko Ichiban</strong>, but this stuff is absolutely ELECTRIC! I hadn\'t had a morning that good in over a decade, and suddenly I\'m waking up like a teenager again. My girlfriend actually laughed out loud with joy—and let\'s just say we didn\'t get out of bed until lunchtime. I feel like I\'ve been given a second youth, and I am riding that high all day long! Best purchase of my life!',
        'test_user_1': '- Mike*******',
        
        'test_title_2': '"The Best Night of Our Marriage—Hands Down!"',
        'test_body_2': 'I am literally smiling just writing this. My wife and I have been in a rut for years, but last night? Last night was FIREWORKS. <strong>Otoko Ichiban</strong> gave me the stamina and confidence to go above and beyond, and we were both giggling like newlyweds. She looked at me afterwards and whispered, \'Where has THAT been all my life?\' I feel like a rockstar, and our relationship has never felt more alive. This isn\'t just a pill; it\'s a PARTY! Thank you, thank you, thank you!',
        'test_user_2': '- DavidR****',
        
        'test_title_3': '"Zero Stress, 100% Pure Fun!"',
        'test_body_3': 'Forget everything you\'ve heard about anxiety—this stuff erased my nerves completely! I popped <strong>Otoko Ichiban</strong>, and within 40 minutes, I wasn\'t thinking about \'if\' I could perform; I was just excited to GET STARTED. The feeling was so strong and natural that I actually started laughing mid-moment because I couldn\'t believe how amazing it felt. My partner said she hasn\'t seen me this happy and playful in years. I\'m on cloud nine and never looking back!',
        'test_user_3': '- TonyK***',
        
        'test_title_4': '"I Finally Feel Like a Superhero!"',
        'test_body_4': 'Hallelujah! I genuinely did not think anything would work for me, but <strong>Otoko Ichiban</strong> knocked my socks off—literally! The energy, the firmness, the sheer endurance—it was like flipping a switch from \'meh\' to \'MEGAWATT.\' I felt so powerful and unstoppable that I actually high-fived myself in the mirror the next morning. My confidence is through the roof, and I can\'t wait for date night tonight. This product made me feel like a KING! Five stars isn\'t enough—I\'d give it ten!',
        'test_user_4': '- JamesB*****',

        // NEW REVIEWS (ENGLISH)
        'test_title_5': '"The Only Brand That Delivers"',
        'test_body_5': 'I\'ve wasted money on cheap imitations and pharmacy names that left me feeling like a furnace. But <strong>Otoko Ichiban</strong>? This is the real deal. No heat, no redness, just pure, reliable performance that lasted through the night and into the morning. I finally found the one.',
        'test_user_5': '- Aaron*****',

        'test_title_6': '"My Secret Weapon"',
        'test_body_6': 'My buddies joke that I\'ve got a second wind. They don\'t know it\'s <strong>Otoko Ichiban</strong> in my drawer. It doesn\'t announce itself—it just works when I need it, for as long as I need it. Smooth onset, zero side effects, and an exit that feels natural. This is my forever brand.',
        'test_user_6': '- Marcus*****',

        'test_title_7': '"Better Than My 20s"',
        'test_body_7': 'I\'m 58 and thought those days were behind me. Then I tried <strong>Otoko Ichiban</strong> on a whim. Forty-five minutes later, I was a believer. Two hours later, I was a legend. It doesn\'t overpromise—it overdelivers. If you\'re on the fence, get off it and get this.',
        'test_user_7': '- Victor*****',

        'test_title_8': '"Finally, Peace of Mind"',
        'test_body_8': 'The anxiety before intimacy used to kill the mood before it even started. <strong>Otoko Ichiban</strong> took that anxiety and crushed it. I don\'t think about timing, dosing, or side effects anymore. I just enjoy the moment—and so does she. That peace of mind is priceless.',
        'test_user_8': '- Derek*****'
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
        
        // Testimonial form translations
        'share_experience': '分享您的体验',
        'submit_review': '提交评价',
        'review_placeholder': '分享您的体验...',
        'title_placeholder': '例如：改变人生！',
        'name_placeholder': '例如：张先生',
        'review_will_be_reviewed': '您的评价将在审核后显示。',
        'modal_comment': '您的评价',
        'modal_rating': '评分',

        // REVIEWS (CHINESE)
        'test_title_1': '"感觉自己又回到了25岁！"',
        'test_body_1': '你在开玩笑吗？！我不知道<strong>Otoko Ichiban</strong>里面有什么魔法，但这个玩意儿简直太给力了！十多年来我都没有过这么美好的早晨，突然间我像青少年一样醒来。我的女朋友高兴得大笑起来——这么说吧，我们直到午饭时间才起床。我感觉自己重获了青春，一整天都沉浸在兴奋之中！这是我一生中买过的最好的东西！',
        'test_user_1': '- Mike*******',

        'test_title_2': '"我们婚姻中最美好的夜晚——毫无疑问！"',
        'test_body_2': '我写这些的时候都在笑。我和妻子多年来一直处于平淡期，但昨晚？昨晚简直是烟花绽放。<strong>Otoko Ichiban</strong>给了我超常的耐力和自信，我们都像新婚夫妇一样咯咯笑。事后她看着我低声说：\'这东西怎么现在才出现在我的生活中？\' 我感觉自己像个摇滚明星，我们的关系从未如此充满活力。这不仅仅是一粒药丸，更是一场狂欢！谢谢，谢谢，再谢谢！',
        'test_user_2': '- DavidR****',

        'test_title_3': '"零压力，百分之百纯粹的快乐！"',
        'test_body_3': '忘掉你听过的所有关于焦虑的说法——这个东西完全消除了我的紧张！我服用了<strong>Otoko Ichiban</strong>，不到40分钟，我根本没去想自己能不能行，我只是兴奋地想要开始！那种感觉如此强烈且自然，我甚至在过程中笑出声来，因为我不敢相信感觉竟如此美妙。我的伴侣说她多年没见我这么快乐和充满活力了。我飘飘欲仙，绝不回头！',
        'test_user_3': '- TonyK***',

        'test_title_4': '"我终于感觉自己像个超级英雄了！"',
        'test_body_4': '哈利路亚！我真的以为对我没用，但<strong>Otoko Ichiban</strong>彻底让我惊叹——字面意义上的！那种能量、坚挺、惊人的持久力——简直就像是把开关从\'一般般\'拨到了\'超级强力\'。我感觉如此强大、不可阻挡，第二天早上我甚至对着镜子跟自己击掌庆祝。我的信心爆棚，迫不及待今晚的约会之夜。这个产品让我感觉像个国王！五星都不够——我要给它十星！',
        'test_user_4': '- JamesB*****',

        // NEW REVIEWS (CHINESE)
        'test_title_5': '"唯一真正有效的品牌"',
        'test_body_5': '我浪费了很多钱在廉价的仿制品和药房品牌上，那些产品让我感觉像在发烧。但<strong>Otoko Ichiban</strong>？这才是真正有效的。没有发热，没有发红，只有纯粹可靠的性能，持续整夜直到清晨。我终于找到了真正有效的产品。',
        'test_user_5': '- Aaron*****',

        'test_title_6': '"我的秘密武器"',
        'test_body_6': '我的哥们们开玩笑说我有了第二春。他们不知道我抽屉里藏着<strong>Otoko Ichiban</strong>。它不会自我宣传——只在我需要的时候发挥作用，想持续多久就持续多久。起效平顺，零副作用，消退也很自然。这是我永远的品牌。',
        'test_user_6': '- Marcus*****',

        'test_title_7': '"比20多岁时还好"',
        'test_body_7': '我58岁了，以为那些日子已经过去了。然后我一时兴起尝试了<strong>Otoko Ichiban</strong>。45分钟后，我深信不疑。两小时后，我成了传奇。它不会过度承诺——只会超预期交付。如果你还在犹豫，别犹豫了，买它。',
        'test_user_7': '- Victor*****',

        'test_title_8': '"终于，安心了"',
        'test_body_8': '亲密前的焦虑曾经在开始之前就毁了气氛。<strong>Otoko Ichiban</strong>消除了那种焦虑。我不再考虑时机、剂量或副作用。我只享受当下——她也一样。那种安心是无价的。',
        'test_user_8': '- Derek*****'
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
        
        // Testimonial form translations
        'share_experience': 'Kongsi Pengalaman Anda',
        'submit_review': 'Hantar Ulasan',
        'review_placeholder': 'Kongsi pengalaman anda...',
        'title_placeholder': 'cth., Mengubah Hidup!',
        'name_placeholder': 'cth., En. John',
        'review_will_be_reviewed': 'Ulasan anda akan disemak sebelum diterbitkan.',
        'modal_comment': 'Ulasan Anda',
        'modal_rating': 'Penilaian',

        // REVIEWS (MALAY)
        'test_title_1': '"Rasa Seperti Berusia 25 Tahun Semula!"',
        'test_body_1': 'Awak bergurau ke?! Saya tidak tahu apa jenis sihir dalam <strong>Otoko Ichiban</strong>, tapi benda ni BETUL-BETUL ELEKTRIK! Dah lebih sedekad saya tak dapat pagi yang sebaik ni, dan tiba-tiba saya bangun macam remaja semula. Teman wanita saya benar-benar ketawa kegembiraan—dan kita boleh katakan kami tidak bangun dari katil sampai tengah hari. Saya rasa seperti diberi umur muda kedua, dan saya menikmati kegembiraan itu sepanjang hari! Pembelian terbaik dalam hidup saya!',
        'test_user_1': '- Mike*******',

        'test_title_2': '"Malam Terbaik dalam Perkahwinan Kami—Tanpa Ragu!"',
        'test_body_2': 'Saya benar-benar tersenyum semasa menulis ini. Saya dan isteri sudah lama dalam kebosanan, tapi malam tadi? Malam tadi adalah BUNGA API! <strong>Otoko Ichiban</strong> memberi saya ketahanan dan keyakinan untuk melakukan lebih daripada biasa, dan kami berdua ketawa kecil seperti pengantin baru. Dia memandang saya selepas itu dan berbisik, \'Mana benda ni sepanjang hidup saya?\' Saya rasa seperti rockstar, dan hubungan kami tidak pernah terasa lebih hidup. Ini bukan sekadar pil; ini PARTI! Terima kasih, terima kasih, terima kasih!',
        'test_user_2': '- DavidR****',

        'test_title_3': '"Sifar Tekanan, 100% Keseronokan Tulen!"',
        'test_body_3': 'Lupakan semua yang anda dengar tentang kebimbangan—benda ni menghapuskan gugup saya sepenuhnya! Saya makan <strong>Otoko Ichiban</strong>, dan dalam masa 40 minit, saya tidak fikir tentang \'kalau\' saya boleh beraksi; saya hanya teruja untuk MULA. Perasaannya begitu kuat dan semula jadi sehingga saya benar-benar mula ketawa di tengah-tengah kerana saya tidak percaya betapa hebatnya ia terasa. Pasangan saya kata dia tak pernah nampak saya gembira dan suka bermain seperti ini sejak bertahun-tahun. Saya berada di awan dan tidak akan menoleh ke belakang!',
        'test_user_3': '- TonyK***',

        'test_title_4': '"Akhirnya Rasa Macam Wira Super!"',
        'test_body_4': 'Haleluya! Saya benar-benar tidak sangka apa-apa akan berkesan untuk saya, tapi <strong>Otoko Ichiban</strong> benar-benar mengagumkan saya! Tenaga, ketegasan, ketahanan yang luar biasa—ia seperti menukar suis dari \'biasa\' ke \'MEGAWATT.\' Saya rasa begitu kuat dan tidak dapat dihalang sehingga saya benar-benar menepuk tangan sendiri di cermin pada keesokan paginya. Keyakinan saya melonjak tinggi, dan saya tidak sabar untuk malam dating malam ini. Produk ini membuat saya rasa seperti RAJA! Lima bintang tidak cukup—saya akan beri sepuluh!',
        'test_user_4': '- JamesB*****',

        // NEW REVIEWS (MALAY)
        'test_title_5': '"Satu-satunya Jenama Yang Berkesan"',
        'test_body_5': 'Saya telah membazir wang pada tiruan murah dan nama farmasi yang membuat saya rasa seperti relau. Tetapi <strong>Otoko Ichiban</strong>? Ini adalah yang sebenar. Tiada rasa panas, tiada kemerahan, hanya prestasi tulen yang boleh dipercayai yang bertahan sepanjang malam hingga ke pagi. Akhirnya saya jumpa yang satu itu.',
        'test_user_5': '- Aaron*****',

        'test_title_6': '"Senjata Rahsia Saya"',
        'test_body_6': 'Rakan-rakan saya bergurau bahawa saya ada angin kedua. Mereka tidak tahu ia <strong>Otoko Ichiban</strong> dalam laci saya. Ia tidak mengumumkan dirinya—ia hanya berfungsi apabila saya perlukannya, selama yang saya perlukan. Permulaan yang lancar, tiada kesan sampingan, dan penamatan yang terasa semula jadi. Ini jenama selama-lamanya saya.',
        'test_user_6': '- Marcus*****',

        'test_title_7': '"Lebih Baik Daripada Usia 20-an Saya"',
        'test_body_7': 'Saya berusia 58 tahun dan fikir hari-hari itu sudah berlalu. Kemudian saya mencuba <strong>Otoko Ichiban</strong> secara spontan. Empat puluh lima minit kemudian, saya percaya. Dua jam kemudian, saya menjadi legenda. Ia tidak berjanji berlebihan—ia memberikan lebih. Jika anda masih ragu-ragu, jangan ragu lagi dan dapatkan ini.',
        'test_user_7': '- Victor*****',

        'test_title_8': '"Akhirnya, Ketenangan Fikiran"',
        'test_body_8': 'Kebimbangan sebelum keintiman sering merosakkan suasana sebelum ia bermula. <strong>Otoko Ichiban</strong> mengambil kebimbangan itu dan menghancurkannya. Saya tidak lagi memikirkan masa, dos, atau kesan sampingan. Saya hanya menikmati detik itu—dan begitu juga dia. Ketenangan fikiran itu tidak ternilai.',
        'test_user_8': '- Derek*****'
    }
};

/* ============================================================== */
/* --- LANGUAGE FUNCTION - SEAMLESS IMAGE SWITCHING --- */
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

    // Handle placeholders with data-i18n-placeholder
    document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
        const key = el.getAttribute('data-i18n-placeholder');
        if (dict[key] !== undefined) {
            el.placeholder = dict[key];
        }
    });

    document.documentElement.setAttribute('lang', langCode);

    // HOME PAGE IMAGES (.lang-img)
    document.querySelectorAll('.lang-img').forEach(img => {
        let currentSrc = img.getAttribute('src');
        let baseName = currentSrc.replace(/^(en|zh|ms)_/, '').replace(/\?v=.*/, '');
        let newSrc = langCode + '_' + baseName + '?v=' + Date.now();
        img.setAttribute('src', newSrc);
    });

    // PRODUCT PAGE IMAGES (.lang-ingredient-img)
    document.querySelectorAll('.lang-ingredient-img').forEach(img => {
        let currentSrc = img.getAttribute('src');
        let baseName = currentSrc.replace(/^(en|zh|ms)_/, '').replace(/\?v=.*/, '');
        let newSrc = langCode + '_' + baseName + '?v=' + Date.now();
        img.setAttribute('src', newSrc);
    });

    // SPLIT POSTER IMAGES (.lang-poster)
    document.querySelectorAll('.lang-poster').forEach(img => {
        let currentSrc = img.getAttribute('src');
        let baseName = currentSrc.replace(/^(en|zh|ms)_/, '').replace(/\?v=.*/, '');
        let newSrc = langCode + '_' + baseName + '?v=' + Date.now();
        img.setAttribute('src', newSrc);
    });

    // UPDATE TESTIMONIALS WHEN LANGUAGE CHANGES
    refreshTestimonials();

    // Update active flag highlight
    document.querySelectorAll('.mobile-lang-flag').forEach(flag => {
        flag.classList.remove('active');
        if (flag.getAttribute('data-lang') === langCode) {
            flag.classList.add('active');
        }
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
    
    if (slides[index]) {
        slides[index].classList.add('active');
    }
    if (dots[index]) {
        dots[index].classList.add('active');
    }
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
        let hasActive = false;
        slides.forEach(slide => {
            if (slide.classList.contains('active')) hasActive = true;
        });
        if (!hasActive) {
            showSlide(0);
        }
        if (slideInterval) {
            clearInterval(slideInterval);
        }
        slideInterval = setInterval(nextSlide, 8000);
    }
}

function stopAutoPlay() {
    if (slideInterval) {
        clearInterval(slideInterval);
        slideInterval = null;
    }
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
    // Handle both side panel and mobile flag language clicks
    document.querySelectorAll('.lang-option, .mobile-lang-flag').forEach(element => {
        element.addEventListener('click', function(e) {
            const lang = this.getAttribute('data-lang');
            if (lang) {
                setLanguage(lang);
                // Close side panel dropdown if open
                const wrapper = this.closest('.side-dropdown-wrapper');
                if (wrapper) wrapper.classList.remove('open');
            }
        });
    });

    const savedLang = localStorage.getItem('preferredLanguage') || 'en';
    setTimeout(function() {
        setLanguage(savedLang);
    }, 300);

    // DOT CLICK HANDLING
    document.querySelectorAll('.dot').forEach((dot) => {
        dot.addEventListener('click', function(e) {
            e.stopPropagation();
            e.preventDefault();
            let index = parseInt(this.getAttribute('data-index'));
            if (isNaN(index)) {
                const dotsArray = document.querySelectorAll('.dot');
                for (let i = 0; i < dotsArray.length; i++) {
                    if (dotsArray[i] === this) {
                        index = i;
                        break;
                    }
                }
            }
            if (!isNaN(index)) {
                goToSlide(index);
            }
        });
    });

    document.querySelectorAll('.dot[onclick]').forEach((dot) => {
        dot.removeAttribute('onclick');
    });

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
    if (priceText) {
        const match = priceText.innerText.match(/(\d+\.?\d*)/);
        if (match) return parseFloat(match[0]);
    }
    return 168.00;
}

function openOrderModal() {
    const modal = document.getElementById('order-modal');
    if (modal) {
        modal.classList.add('show');
        document.body.style.overflow = 'hidden';
        const qtySelect = document.getElementById('cust-qty-original');
        if (qtySelect) {
            qtySelect.value = 1;
        }
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
    const unitPrice = getUnitPrice();
    const total = qtyTotal * unitPrice;
    
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
/* --- TESTIMONIALS FROM GOOGLE APPS SCRIPT (AUTO-PUBLISH) --- */
/* ============================================================== */

// CONFIGURATION - YOUR GOOGLE APPS SCRIPT URL
const GAS_API_URL = 'https://script.google.com/macros/s/AKfycbyrWvEE8dNXNj8QLSzAPJ2Q9iJ-vdTp_Y683g7YvjH_yI3Tsmd4tqQaNi_8sHbfsPUiVQ/exec';
const SHEET_API_URL = GAS_API_URL;
const SHEET_API_POST_URL = GAS_API_URL;

let allTestimonials = [];
let currentTestimonialIndex = 0;
let testimonialInterval = null;
let isTestimonialRunning = false;

// Get current language
function getCurrentLanguage() {
    return document.documentElement.getAttribute('lang') || 'en';
}

// Get translated field based on current language
function getTranslatedField(testimonial, fieldName) {
    const lang = getCurrentLanguage();
    const suffixMap = {
        'en': '_en',
        'zh': '_zh',
        'ms': '_ms'
    };
    const suffix = suffixMap[lang] || '_en';
    const key = fieldName + suffix;
    
    if (testimonial[key] !== undefined && testimonial[key] !== '') {
        return testimonial[key];
    }
    if (testimonial[fieldName + '_en'] !== undefined && testimonial[fieldName + '_en'] !== '') {
        return testimonial[fieldName + '_en'];
    }
    return '';
}

// Fetch testimonials - NO FILTER (auto-publish all)
async function fetchTestimonials() {
    try {
        console.log('Fetching from:', SHEET_API_URL);
        const response = await fetch(SHEET_API_URL);
        if (!response.ok) {
            console.error('Response not OK:', response.status);
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log('Data received:', data);
        
        if (data.error) {
            console.error('API Error:', data.error);
            allTestimonials = getFallbackTestimonials();
            return allTestimonials;
        }
        
        allTestimonials = data;
        return allTestimonials;
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        allTestimonials = getFallbackTestimonials();
        return allTestimonials;
    }
}

// Fallback testimonials
function getFallbackTestimonials() {
    return [
        {
            name: 'Mike*******',
            title_en: 'I Feel Like I\'m 25 Again!',
            title_zh: '感觉自己又回到了25岁！',
            title_ms: 'Rasa Seperti Berusia 25 Tahun Semula!',
            comment_en: 'This stuff is absolutely ELECTRIC!',
            comment_zh: '这个东西简直太给力了！',
            comment_ms: 'Benda ni BETUL-BETUL ELEKTRIK!',
            rating: 5,
            timestamp: new Date().toISOString()
        }
    ];
}

// Shuffle array
function shuffleArray(array) {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

// Get time ago string
function getTimeAgo(timestamp) {
    if (!timestamp) return 'just now';
    const date = new Date(timestamp);
    const now = new Date();
    const diffMs = now - date;
    const diffMins = Math.floor(diffMs / 60000);
    const diffHours = Math.floor(diffMs / 3600000);
    const diffDays = Math.floor(diffMs / 86400000);
    
    const lang = getCurrentLanguage();
    const timeStrings = {
        'en': { just: 'just now', min: 'min ago', hour: 'hour', hours: 'hours', day: 'day', days: 'days' },
        'zh': { just: '刚刚', min: '分钟前', hour: '小时前', hours: '小时前', day: '天前', days: '天前' },
        'ms': { just: 'baru sahaja', min: 'minit lalu', hour: 'jam lalu', hours: 'jam lalu', day: 'hari lalu', days: 'hari lalu' }
    };
    const t = timeStrings[lang] || timeStrings['en'];
    
    if (diffMins < 1) return t.just;
    if (diffMins < 60) return `${diffMins} ${t.min}`;
    if (diffHours < 24) return `${diffHours} ${diffHours > 1 ? t.hours : t.hour}`;
    return `${diffDays} ${diffDays > 1 ? t.days : t.day}`;
}

// Create testimonial bubble
function createTestimonialBubble(testimonial) {
    const stars = '⭐'.repeat(parseInt(testimonial.rating) || 5);
    const timeAgo = getTimeAgo(testimonial.timestamp);
    const name = testimonial.name || 'Anonymous';
    const title = getTranslatedField(testimonial, 'title');
    const comment = getTranslatedField(testimonial, 'comment');
    
    return `
        <div class="chat-message">
            <div class="chat-header">
                <span class="chat-rating">${stars}</span>
                <span class="chat-title">"${title || 'Great Product!'}"</span>
            </div>
            <div class="chat-body">
                <p>${comment || 'I love this product!'}</p>
            </div>
            <div class="chat-footer">
                <span class="chat-user">─ ${name}</span>
                <span class="chat-time">${timeAgo}</span>
            </div>
        </div>
    `;
}

// Display next testimonial
function displayNextTestimonial(showAll = false) {
    const container = document.getElementById('testimonial-chat-container');
    if (!container || allTestimonials.length === 0) {
        if (container) {
            container.innerHTML = '<div style="text-align:center; color:#666; padding:40px 0;">No testimonials yet. Be the first to share!</div>';
        }
        return;
    }
    
    if (showAll) {
        container.innerHTML = '';
        const shuffled = shuffleArray([...allTestimonials]);
        const displayCount = Math.min(shuffled.length, 10);
        for (let i = 0; i < displayCount; i++) {
            const testimonial = shuffled[i];
            const bubble = createTestimonialBubble(testimonial);
            const messageWrapper = document.createElement('div');
            messageWrapper.className = 'message-wrapper';
            messageWrapper.innerHTML = bubble;
            container.appendChild(messageWrapper);
        }
        container.scrollTop = container.scrollHeight;
        return;
    }
    
    if (currentTestimonialIndex >= allTestimonials.length) {
        allTestimonials = shuffleArray(allTestimonials);
        currentTestimonialIndex = 0;
    }
    
    const testimonial = allTestimonials[currentTestimonialIndex];
    const bubble = createTestimonialBubble(testimonial);
    
    const messageWrapper = document.createElement('div');
    messageWrapper.className = 'message-wrapper';
    messageWrapper.innerHTML = bubble;
    
    const loadingMsg = container.querySelector('.loading-message');
    if (loadingMsg) loadingMsg.remove();
    
    container.appendChild(messageWrapper);
    container.scrollTop = container.scrollHeight;
    currentTestimonialIndex++;
}

// Refresh testimonials
function refreshTestimonials() {
    const reviewSection = document.getElementById('section-review');
    if (reviewSection && reviewSection.style.display !== 'none') {
        const container = document.getElementById('testimonial-chat-container');
        if (container) {
            container.innerHTML = `
                <div class="loading-message" style="text-align:center; color:#666; padding:40px 0;">
                    <i class="fas fa-spinner fa-spin" style="font-size:24px;"></i>
                    <p style="margin-top:10px;">Loading testimonials...</p>
                </div>
            `;
        }
        currentTestimonialIndex = 0;
        isTestimonialRunning = false;
        if (testimonialInterval) {
            clearTimeout(testimonialInterval);
            testimonialInterval = null;
        }
        startTestimonialChat();
    }
}

// Start testimonial chat
async function startTestimonialChat() {
    if (isTestimonialRunning) return;
    isTestimonialRunning = true;
    
    const container = document.getElementById('testimonial-chat-container');
    if (!container) return;
    
    container.innerHTML = `
        <div class="loading-message" style="text-align:center; color:#666; padding:40px 0;">
            <i class="fas fa-spinner fa-spin" style="font-size:24px;"></i>
            <p style="margin-top:10px;">Loading testimonials...</p>
        </div>
    `;
    
    await fetchTestimonials();
    
    container.innerHTML = '';
    
    if (allTestimonials.length === 0) {
        container.innerHTML = '<div style="text-align:center; color:#666; padding:40px 0;">No testimonials yet. Be the first to share!</div>';
        isTestimonialRunning = false;
        return;
    }
    
    allTestimonials = shuffleArray(allTestimonials);
    currentTestimonialIndex = 0;
    displayNextTestimonial(true);
    
    if (testimonialInterval) {
        clearTimeout(testimonialInterval);
    }
    scheduleNextTestimonial();
}

// Schedule next testimonial
function scheduleNextTestimonial() {
    if (testimonialInterval) {
        clearTimeout(testimonialInterval);
    }
    const delay = 8000 + Math.random() * 5000;
    testimonialInterval = setTimeout(() => {
        displayNextTestimonial(false);
        scheduleNextTestimonial();
    }, delay);
}

// Submit testimonial form - USING GET TO BYPASS CORS
async function submitTestimonial(event) {
    event.preventDefault();
    
    let name = document.getElementById('testimonial-name').value.trim();
    const title = document.getElementById('testimonial-title').value.trim();
    const comment = document.getElementById('testimonial-comment').value.trim();
    const rating = document.getElementById('testimonial-rating').value;
    const lang = getCurrentLanguage();
    
    if (!name || !title || !comment) {
        alert('Please fill in all fields.');
        return;
    }
    
    // FORMAT NAME: Keep only first 5 letters, rest are asterisks
    name = name.replace(/\*+$/, '').trim();
    let nameLetters = name.replace(/[^a-zA-Z]/g, '');
    let displayName = nameLetters.substring(0, 5);
    while (displayName.length < 5) {
        displayName += displayName.charAt(0) || 'X';
    }
    displayName = displayName + '*****';
    
    // Detect language
    const detectedLang = detectLanguage(comment + ' ' + title);
    
    const submitBtn = document.querySelector('#testimonial-form .btn-submit');
    const originalText = submitBtn.textContent;
    submitBtn.textContent = '⏳ Translating...';
    submitBtn.disabled = true;
    
    try {
        const titleEn = detectedLang === 'en' ? title : await translateText(title, 'en');
        const titleZh = detectedLang === 'zh' ? title : await translateText(title, 'zh');
        const titleMs = detectedLang === 'ms' ? title : await translateText(title, 'ms');
        
        const commentEn = detectedLang === 'en' ? comment : await translateText(comment, 'en');
        const commentZh = detectedLang === 'zh' ? comment : await translateText(comment, 'zh');
        const commentMs = detectedLang === 'ms' ? comment : await translateText(comment, 'ms');
        
        // Build URL with query parameters (GET method bypasses CORS)
        const params = new URLSearchParams({
            name: displayName,
            title_en: titleEn,
            title_zh: titleZh,
            title_ms: titleMs,
            comment_en: commentEn,
            comment_zh: commentZh,
            comment_ms: commentMs,
            rating: rating
        });
        
        console.log('Sending data via GET:', params.toString());
        
        // Send as GET request (bypasses CORS completely)
        const response = await fetch(SHEET_API_POST_URL + '?' + params.toString(), {
            method: 'GET'
        });
        
        const result = await response.json();
        console.log('Response:', result);
        
        if (result.success === true) {
            const successMessages = {
                'en': '✅ Thank you! Your testimonial has been published.',
                'zh': '✅ 谢谢！您的评价已发布。',
                'ms': '✅ Terima kasih! Testimoni anda telah diterbitkan.'
            };
            alert(successMessages[lang] || successMessages['en']);
            document.getElementById('testimonial-form').reset();
            closeTestimonialForm();
            // Refresh testimonials to show the new one
            refreshTestimonials();
        } else {
            alert('Error: ' + (result.error || 'Something went wrong. Please try again.'));
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Something went wrong. Please try again.');
    } finally {
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    }
}

// Detect language function
function detectLanguage(text) {
    if (/[\u4e00-\u9fa5]/.test(text)) {
        return 'zh';
    }
    const malayWords = ['saya', 'anda', 'kami', 'mereka', 'ini', 'itu', 'dan', 'atau', 'tetapi', 'kerana', 'sebab', 'jika', 'untuk', 'dengan', 'daripada', 'kepada', 'bahawa', 'sebagai', 'oleh', 'pada'];
    const words = text.toLowerCase().split(/\s+/);
    for (let word of words) {
        if (malayWords.includes(word)) {
            return 'ms';
        }
    }
    return 'en';
}

// Translate function
async function translateText(text, targetLang) {
    if (!text || text.trim() === '') return text;
    try {
        const url = `https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=${targetLang}&dt=t&q=${encodeURIComponent(text)}`;
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            if (data && data[0] && data[0][0] && data[0][0][0]) {
                return data[0][0][0];
            }
        }
    } catch (e) {
        console.warn('Translation API failed:', e);
    }
    return text;
}

// Open/close testimonial form
function openTestimonialForm() {
    document.getElementById('testimonial-modal').classList.add('show');
    document.body.style.overflow = 'hidden';
}

function closeTestimonialForm() {
    document.getElementById('testimonial-modal').classList.remove('show');
    document.body.style.overflow = 'auto';
}

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('testimonial-modal');
    if (modal) {
        modal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeTestimonialForm();
            }
        });
    }
    
    const observer = new MutationObserver(function() {
        const reviewSection = document.getElementById('section-review');
        if (reviewSection && reviewSection.style.display !== 'none') {
            startTestimonialChat();
        }
    });
    
    const reviewSection = document.getElementById('section-review');
    if (reviewSection) {
        observer.observe(reviewSection, { attributes: true, attributeFilter: ['style'] });
    }
});

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

/* ============================================================== */
/* --- YOUTUBE SHORTS VIDEO PLAYER --- */
/* ============================================================== */

let youtubePlayer = null;
const YOUTUBE_VIDEO_ID = 'R1igrTdxEAg';

function onYouTubeIframeAPIReady() {
    const playerContainer = document.getElementById('youtube-main-player');
    if (!playerContainer) return;
    
    youtubePlayer = new YT.Player('youtube-main-player', {
        height: '100%',
        width: '100%',
        videoId: YOUTUBE_VIDEO_ID,
        playerVars: {
            'autoplay': 1,
            'mute': 1,
            'loop': 1,
            'playlist': YOUTUBE_VIDEO_ID,
            'controls': 1,
            'showinfo': 0,
            'rel': 0,
            'modestbranding': 1,
            'playsinline': 1,
            'enablejsapi': 1,
            'fs': 1,
            'iv_load_policy': 3
        },
        events: {
            'onReady': function(event) {
                event.target.playVideo();
            },
            'onStateChange': function(event) {
                if (event.data === YT.PlayerState.ENDED) {
                    event.target.playVideo();
                }
            }
        }
    });
}

// Pause video when tab is hidden
document.addEventListener('visibilitychange', function() {
    if (!youtubePlayer) return;
    if (document.hidden) {
        youtubePlayer.pauseVideo();
    } else {
        youtubePlayer.playVideo();
    }
});

// Clean up
window.addEventListener('beforeunload', function() {
    if (youtubePlayer) {
        youtubePlayer.destroy();
    }
});