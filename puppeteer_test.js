const puppeteer = require('puppeteer');

const sleep = ms => new Promise(res => setTimeout(res, ms));

(async()=>{
  const result = {language:{},testimonial:false,mobileMenu:false,errors:[]};
  const browser = await puppeteer.launch({args:['--no-sandbox','--disable-setuid-sandbox']});
  try {
    const page = await browser.newPage();

    async function checkLanguage(url){
      await page.goto(url,{waitUntil:'networkidle2'});
      const before = await page.$$eval('[data-i18n]',els=>els.map(e=>({k:e.getAttribute('data-i18n'),t:e.innerText})));
        const toggleExists = await page.$('.side-dropdown-toggle');
        if (toggleExists) {
          await page.evaluate(() => {
            const t = document.querySelector('.side-dropdown-toggle');
            if (t) t.dispatchEvent(new MouseEvent('click', {bubbles:true}));
          });
          await sleep(250);
          const hasLang = await page.$('a[data-lang="zh"]');
          if (hasLang) {
            await page.evaluate(() => {
              const a = document.querySelector('a[data-lang="zh"]');
              if (a) a.dispatchEvent(new MouseEvent('click', {bubbles:true}));
            });
            await sleep(600);
          const after = await page.$$eval('[data-i18n]',els=>els.map(e=>({k:e.getAttribute('data-i18n'),t:e.innerText})));
          const changed = before.reduce((acc,b)=>{
            const a = after.find(x=>x.k===b.k);
            if (a && a.t !== b.t) acc.push(b.k);
            return acc;
          },[]);
          return {url,success: changed.length>0,changed};
        } else {
          return {url,success:false,error:'no-lang-link'};
        }
      } else {
        return {url,success:false,error:'no-toggle'};
      }
    }

    const homeRes = await checkLanguage('http://localhost:8000/home.html').catch(e=>({url:'home',success:false,error:e.message}));
    const prodRes = await checkLanguage('http://localhost:8000/product.html').catch(e=>({url:'product',success:false,error:e.message}));
    const revRes = await checkLanguage('http://localhost:8000/review.html').catch(e=>({url:'review',success:false,error:e.message}));
    result.language = {home:homeRes,product:prodRes,review:revRes};

    // Test testimonial expand on review
    await page.goto('http://localhost:8000/review.html',{waitUntil:'networkidle2'});
    const hasTestimonial= await page.$('.testimonial-card');
    if (hasTestimonial){
      await page.click('.testimonial-card');
      await sleep(300);
      const expanded = await page.$eval('#testimonial-1', el => {
        const style = window.getComputedStyle(el);
        return !(style.maxHeight === '0px' || style.display === 'none' || el.offsetHeight===0);
      }).catch(()=>false);
      result.testimonial = expanded;
    } else result.testimonial='no-card';

    // Test mobile menu on product page
    await page.setViewport({width:375,height:812});
    await page.goto('http://localhost:8000/product.html',{waitUntil:'networkidle2'});
    const ham = await page.$('#hamburgerToggle') || await page.$('.hamburger-menu');
    if (ham){
      await page.evaluate(el => el.click(), ham);
      await page.waitForTimeout(300);
      const menuOpen = await page.$eval('#mobileMenu', el=>el.classList.contains('open')).catch(()=>false);
      // click mobile nav dropdown
      const mnav = await page.$('.mobile-nav-dropdown > a');
      let mnavOpen=false;
      if (mnav){
        await page.evaluate(el => el.click(), mnav);
        await sleep(200);
        mnavOpen = await page.$eval('.mobile-nav-dropdown',el=>el.classList.contains('open')).catch(()=>false);
      }
      // close by overlay
      const overlay = await page.$('#menuOverlay');
      if (overlay){ await overlay.click(); await page.waitForTimeout(200); }
      result.mobileMenu={menuOpen,mnavOpen};
    } else result.mobileMenu='no-hamburger';

    console.log(JSON.stringify(result,null,2));
    await browser.close();
    process.exit(0);
  } catch (e){
    console.error('ERROR', e);
    await browser.close();
    process.exit(2);
  }
})();
