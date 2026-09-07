/* ==================================================================
   SCRIPT.JS — Grandhotel
   ------------------------------------------------------------------
   Obsah:
     JS 0  Preklady (EN / SK) a prepínač jazyka
     JS 1  Mobilné menu (hamburger)
     JS 2  Klikateľné karty v hero sekcii — plynulý scroll na sekciu
     JS 2b Room Explorer — klik na banner izby zobrazí detail
     JS 3  Rezervačný formulár (FormSubmit)
   ================================================================== */


const translations = {
  en: {
    page_title: 'Grandhotel — A Boutique Alpine Retreat',
    page_description: 'Grandhotel — a boutique alpine hotel offering accommodation, wellness, massage and healing therapies since 2011.',

    nav_accommodations: 'Accommodations',
    nav_history: 'History',
    nav_wellness: 'Wellness',
    nav_therapies: 'Therapies',
    nav_book: 'Book',

    hero_eyebrow_est: 'Est. /',
    hero_eyebrow_location: 'Location /',
    hero_location_value: 'High Tatras, Slovakia',
    hero_tagline: 'Fifteen years in the High Tatras — a family-run refuge of alpine calm, quiet wellness and mountain air.',

    hero_card1_eyebrow: '01 / Stay',
    hero_card1_title: 'Accommodations',
    hero_card1_arrow: 'View rooms →',
    hero_card2_eyebrow: '02 / Story',
    hero_card2_title: 'Hotel History',
    hero_card2_arrow: 'Our story →',
    hero_card3_eyebrow: '03 / Restore',
    hero_card3_title: 'Wellness & Massage',
    hero_card3_arrow: 'Explore →',
    hero_card4_eyebrow: '04 / Heal',
    hero_card4_title: 'Healing Therapies',
    hero_card4_arrow: 'Discover →',

    acc_eyebrow: '01 / Stay',
    acc_h2: 'Accommodations',
    acc_lead: 'Three room styles — a fireplace apartment, a cosy double facing the forest or lake, and a solo retreat — each designed to feel like a quiet alpine home.',

    room1_title: 'Fireplace Apartment',
    room1_meta: '3 Guests · 85 m² · Fireplace · Terrace · Hot Tub',
    room1_desc: 'A spacious luxury apartment with a private fireplace, terrace and outdoor hot tub, facing the peaks.',
    room1_left: '3 Left',

    room2_title: 'Forest & Lake Room',
    room2_meta: '2 Guests · 42 m² · Balcony',
    room2_desc: 'A calm, cosy double room with a private balcony facing the forest or the lake — simple, warm, unhurried.',
    room2_left: '5 Left',

    room3_title: 'Solo Peak Room',
    room3_meta: '1 Guest · 38 m² · Fireplace · Terrace',
    room3_desc: 'An elegant single room with its own fireplace and terrace — luxury scaled down for travelling alone.',
    room3_left: '2 Left',

    room_details_link: 'Room Details',
    per_night: '/ night',

    re_eyebrow: 'Explore',
    re_h2: 'Explore Each Room',
    re_lead: 'Click a room to see more photos and the full details.',
    view_room_arrow: 'View room →',
    back_to_rooms: '← Back to rooms',

    detail1_eyebrow: '01 / Fireplace Apartment',
    detail1_desc: "Our most spacious room — a luxury apartment built around a private fireplace, with its own terrace and an outdoor hot tub looking straight at the peaks. Ideal for a longer stay or a special occasion.",
    detail2_eyebrow: '02 / Forest & Lake Room',
    detail2_desc: 'A more modest, quietly elegant double room for two — with a private balcony that opens onto either the pine forest or the lake, depending on which side of the hotel you choose.',
    detail3_eyebrow: '03 / Solo Peak Room',
    detail3_desc: "A single room that doesn't compromise on comfort — its own fireplace, its own small terrace, and the same mountain views, simply scaled for travelling alone.",

    amenity_1guest: '1 Guest',
    amenity_2guests: '2 Guests',
    amenity_3guests: '3 Guests',
    amenity_fireplace: 'Private Fireplace',
    amenity_terrace: 'Terrace',
    amenity_hottub: 'Outdoor Hot Tub',
    amenity_panoramic: 'Panoramic Views',
    amenity_balcony: 'Private Balcony',
    amenity_forestlake: 'Forest or Lake View',

    hist_eyebrow: '02 / Story',
    hist_h2: 'Fifteen Years in the High Tatras',
    hist_p1: 'Grandhotel began in 2011 as a small timber guesthouse built by a local family at the edge of the treeline. What started as six rooms for hikers and skiers slowly grew into a boutique alpine hotel — without ever losing its quiet, family-run character.',
    hist_p2: "In 2017 the original lodge was carefully restored and extended, preserving its hand-hewn timber frame while adding panoramic glass facing the mountains. A dedicated wellness wing followed in 2021, built around the region's long tradition of mountain-air climatotherapy and thermal mineral bathing.",
    hist_quote: '"We didn\'t want to build a hotel that hides from the mountains. We wanted one that lets them in."',
    hist_p3: 'Today, fifteen years on, Grandhotel remains family-owned — three generations in, still welcoming guests the same way it welcomed its first six.',

    timeline1_label: 'Six-room lodge founded',
    timeline2_label: 'Restored & expanded',
    timeline3_label: 'Wellness wing opens',
    timeline4_label: '15 years, three generations',

    well_eyebrow: '03 / Restore',
    well_h2: 'Wellness & Massage',
    well_lead: 'Slow, hands-on treatments drawing on alpine herbs, warm stone and the quiet of the mountains.',

    service1_title: 'Alpine Stone Massage',
    service1_desc: 'Warm volcanic stones ease tension built up from hiking and travel.',
    service2_title: 'Herbal Deep Tissue',
    service2_desc: 'Firm, targeted massage with mountain herb oils for tired muscles.',
    service3_title: 'Aromatherapy Relaxation',
    service3_desc: 'A gentle, full-body ritual with pine and alpine botanicals.',
    service4_title: 'Couples Wellness Ritual',
    service4_desc: 'Side-by-side massage followed by private sauna & tea.',
    service5_title: 'Sauna & Panoramic Hot Tub',
    service5_desc: 'Full access to the finnish sauna and mountain-facing hot tub.',
    service5_duration: 'All day',
    service6_title: 'Signature Grandhotel Ritual',
    service6_desc: 'Our full 2-hour treatment — massage, wrap and thermal bath.',

    ther_eyebrow: '04 / Heal',
    ther_h2: 'Healing Therapies',
    ther_lead: "Rooted in the High Tatras' long spa tradition — treatments built around mountain air, mineral water and natural mud.",

    t1_title: 'Climatotherapy',
    t1_desc: "Guided mountain-air sessions using the High Tatras' clean alpine climate to support respiratory health.",
    t2_title: 'Thermal Mineral Baths',
    t2_desc: "Warm mineral-rich waters drawn from the region's natural springs, eased into a private thermal pool.",
    t3_title: 'Herbal Wrap Detox',
    t3_desc: 'Warm alpine herb wraps drawing on centuries-old Tatra herbal traditions to ease and detoxify the body.',
    t4_title: 'Peat & Mud Therapy',
    t4_desc: 'Natural mineral mud applications, a long-standing Slovak spa tradition for joint and muscle relief.',
    t5_title: 'Physiotherapy & Recovery',
    t5_desc: 'One-on-one sessions with our resident physiotherapist for hikers, skiers and recovering guests.',
    t6_title: 'Guided Wellness Plans',
    t6_desc: 'A personalised multi-day therapy plan combining baths, massage and mountain-air walks.',

    book_eyebrow: 'Reservations',
    book_h2: 'Book Your Stay',
    book_lead: "Tell us your dates and what you're looking for — accommodation, wellness, or both — and we'll get back to you within a day.",
    book_email_label: 'Email:',
    book_phone_label: 'Phone:',
    book_address_label: 'Address:',

    form_label_name: 'Name',
    form_label_email: 'Email',
    form_label_checkin: 'Check-in',
    form_label_checkout: 'Check-out',
    form_label_interest: "I'm interested in",
    form_option1: 'Accommodations',
    form_option2: 'Wellness & Massage',
    form_option3: 'Healing Therapies',
    form_option4: 'A bit of everything',
    form_label_message: 'Message',
    form_message_placeholder: 'Number of guests, special requests...',
    form_submit_btn: 'Send Inquiry',
    form_submit_sending: 'Sending…',
    form_status_success: '✓ Thank you — your inquiry has been sent. We will reply within a day.',
    form_status_error: 'Something went wrong. Please try again or email us directly.',
    form_status_placeholder_warning: 'Please set a real email in the form action before going live.',

    footer_text: 'Grandhotel · Est. 2011 · High Tatras, Slovakia',
    nav_toggle_open: 'Open menu',
    nav_toggle_close: 'Close menu'
  },

  sk: {
    page_title: 'Grandhotel — Butikový horský hotel',
    page_description: 'Grandhotel — butikový horský hotel ponúkajúci ubytovanie, wellness, masáže a liečivé terapie od roku 2011.',

    nav_accommodations: 'Ubytovanie',
    nav_history: 'História',
    nav_wellness: 'Wellness',
    nav_therapies: 'Terapie',
    nav_book: 'Rezervácia',

    hero_eyebrow_est: 'Založený /',
    hero_eyebrow_location: 'Lokalita /',
    hero_location_value: 'Vysoké Tatry, Slovensko',
    hero_tagline: 'Pätnásť rokov vo Vysokých Tatrách — rodinné útočisko horského pokoja, tichého wellness a čistého horského vzduchu.',

    hero_card1_eyebrow: '01 / Pobyt',
    hero_card1_title: 'Ubytovanie',
    hero_card1_arrow: 'Zobraziť izby →',
    hero_card2_eyebrow: '02 / Príbeh',
    hero_card2_title: 'História hotela',
    hero_card2_arrow: 'Náš príbeh →',
    hero_card3_eyebrow: '03 / Regenerácia',
    hero_card3_title: 'Wellness a masáže',
    hero_card3_arrow: 'Preskúmať →',
    hero_card4_eyebrow: '04 / Liečba',
    hero_card4_title: 'Liečivé terapie',
    hero_card4_arrow: 'Objaviť →',

    acc_eyebrow: '01 / Pobyt',
    acc_h2: 'Ubytovanie',
    acc_lead: 'Tri typy izieb — apartmán s krbom, útulná dvojizba s výhľadom na les alebo jazero a jednoposteľové útočisko — každá navrhnutá tak, aby pôsobila ako tichý horský domov.',

    room1_title: 'Apartmán s krbom',
    room1_meta: '3 hostia · 85 m² · Krb · Terasa · Vírivka',
    room1_desc: 'Priestranný luxusný apartmán s vlastným krbom, terasou a vonkajšou vírivkou, s výhľadom na štíty.',
    room1_left: 'Voľné: 3',

    room2_title: 'Izba s výhľadom na les a jazero',
    room2_meta: '2 hostia · 42 m² · Balkón',
    room2_desc: 'Pokojná, útulná dvojizba s vlastným balkónom smerujúcim do lesa alebo na jazero — jednoduchá, útulná, bez zhonu.',
    room2_left: 'Voľné: 5',

    room3_title: 'Jednoposteľová izba s výhľadom na štíty',
    room3_meta: '1 hosť · 38 m² · Krb · Terasa',
    room3_desc: 'Elegantná jednoposteľová izba s vlastným krbom a terasou — luxus prispôsobený pre cestovanie osamote.',
    room3_left: 'Voľné: 2',

    room_details_link: 'Detaily izby',
    per_night: '/ noc',

    re_eyebrow: 'Preskúmať',
    re_h2: 'Preskúmajte každú izbu',
    re_lead: 'Kliknite na izbu a zobrazte si viac fotiek a všetky detaily.',
    view_room_arrow: 'Zobraziť izbu →',
    back_to_rooms: '← Späť na izby',

    detail1_eyebrow: '01 / Apartmán s krbom',
    detail1_desc: 'Naša najpriestrannejšia izba — luxusný apartmán postavený okolo vlastného krbu, s vlastnou terasou a vonkajšou vírivkou s priamym výhľadom na štíty. Ideálne pre dlhší pobyt alebo výnimočnú príležitosť.',
    detail2_eyebrow: '02 / Izba s výhľadom na les a jazero',
    detail2_desc: 'Skromnejšia, tíško elegantná dvojizba pre dvoch — s vlastným balkónom smerujúcim buď do borovicového lesa, alebo na jazero, podľa toho, ktorú stranu hotela si vyberiete.',
    detail3_eyebrow: '03 / Jednoposteľová izba s výhľadom na štíty',
    detail3_desc: 'Jednoposteľová izba, ktorá sa nevzdáva komfortu — vlastný krb, vlastná malá terasa a rovnaký výhľad na hory, len prispôsobený pre cestovanie osamote.',

    amenity_1guest: '1 hosť',
    amenity_2guests: '2 hostia',
    amenity_3guests: '3 hostia',
    amenity_fireplace: 'Vlastný krb',
    amenity_terrace: 'Terasa',
    amenity_hottub: 'Vonkajšia vírivka',
    amenity_panoramic: 'Panoramatický výhľad',
    amenity_balcony: 'Vlastný balkón',
    amenity_forestlake: 'Výhľad na les alebo jazero',

    hist_eyebrow: '02 / Príbeh',
    hist_h2: 'Pätnásť rokov vo Vysokých Tatrách',
    hist_p1: 'Grandhotel vznikol v roku 2011 ako malý drevený penzión postavený miestnou rodinou na okraji lesa. To, čo začalo ako šesť izieb pre turistov a lyžiarov, sa postupne rozrástlo na butikový horský hotel — bez toho, aby stratil svoj tichý, rodinný charakter.',
    hist_p2: 'V roku 2017 bola pôvodná chata citlivo zrekonštruovaná a rozšírená — zachovala si svoju ručne tesanú drevenú konštrukciu a pribudli panoramatické presklenia s výhľadom na hory. V roku 2021 nasledovalo samostatné wellness krídlo, postavené na dlhej tradícii regiónu v klimatoterapii a termálnych minerálnych kúpeľoch.',
    hist_quote: '„Nechceli sme postaviť hotel, ktorý sa skrýva pred horami. Chceli sme taký, ktorý ich vpustí dnu."',
    hist_p3: 'Dnes, po pätnástich rokoch, zostáva Grandhotel v rodinnom vlastníctve — už tretia generácia víta hostí rovnako, ako vítala prvých šesť.',

    timeline1_label: 'Založená šesťizbová chata',
    timeline2_label: 'Zrekonštruovaný a rozšírený',
    timeline3_label: 'Otvorené wellness krídlo',
    timeline4_label: '15 rokov, tri generácie',

    well_eyebrow: '03 / Regenerácia',
    well_h2: 'Wellness a masáže',
    well_lead: 'Pomalé, ručné procedúry čerpajúce z horských bylín, teplých kameňov a ticha hôr.',

    service1_title: 'Masáž horskými kameňmi',
    service1_desc: 'Teplé vulkanické kamene uvoľňujú napätie z turistiky a cestovania.',
    service2_title: 'Bylinná hĺbková masáž',
    service2_desc: 'Dôkladná, cielená masáž s horskými bylinnými olejmi pre unavené svaly.',
    service3_title: 'Relaxačná aromaterapia',
    service3_desc: 'Jemný rituál na celé telo s borovicou a horskými bylinami.',
    service4_title: 'Wellness rituál pre páry',
    service4_desc: 'Masáž vedľa seba, po ktorej nasleduje súkromná sauna a čaj.',
    service5_title: 'Sauna a panoramatická vírivka',
    service5_desc: 'Plný prístup do fínskej sauny a vírivky s výhľadom na hory.',
    service5_duration: 'Celý deň',
    service6_title: 'Signature rituál Grandhotel',
    service6_desc: 'Naša kompletná 2-hodinová procedúra — masáž, zábal a termálny kúpeľ.',

    ther_eyebrow: '04 / Liečba',
    ther_h2: 'Liečivé terapie',
    ther_lead: 'Zakorenené v dlhej kúpeľnej tradícii Vysokých Tatier — procedúry postavené na horskom vzduchu, minerálnej vode a prírodnom bahne.',

    t1_title: 'Klimatoterapia',
    t1_desc: 'Riadené pobyty na horskom vzduchu využívajúce čisté horské podnebie Vysokých Tatier na podporu zdravia dýchacích ciest.',
    t2_title: 'Termálne minerálne kúpele',
    t2_desc: 'Teplá minerálmi bohatá voda z prírodných prameňov regiónu, v súkromnom termálnom bazéne.',
    t3_title: 'Bylinný detoxikačný zábal',
    t3_desc: 'Teplé bylinné zábaly čerpajúce zo stáročnej tatranskej bylinnej tradície na uvoľnenie a detoxikáciu tela.',
    t4_title: 'Rašelinovo-bahenná terapia',
    t4_desc: 'Prírodné minerálne bahenné zábaly, dlhoročná slovenská kúpeľná tradícia na uvoľnenie kĺbov a svalov.',
    t5_title: 'Fyzioterapia a regenerácia',
    t5_desc: 'Individuálne sedenia s naším fyzioterapeutom pre turistov, lyžiarov a hostí v rekonvalescencii.',
    t6_title: 'Individuálne wellness plány',
    t6_desc: 'Individuálny viacdňový terapeutický plán kombinujúci kúpele, masáže a prechádzky na horskom vzduchu.',

    book_eyebrow: 'Rezervácie',
    book_h2: 'Rezervujte si pobyt',
    book_lead: 'Napíšte nám svoje termíny a o čo máte záujem — ubytovanie, wellness, alebo oboje — a ozveme sa vám do jedného dňa.',
    book_email_label: 'Email:',
    book_phone_label: 'Telefón:',
    book_address_label: 'Adresa:',

    form_label_name: 'Meno',
    form_label_email: 'Email',
    form_label_checkin: 'Príchod',
    form_label_checkout: 'Odchod',
    form_label_interest: 'Mám záujem o',
    form_option1: 'Ubytovanie',
    form_option2: 'Wellness a masáže',
    form_option3: 'Liečivé terapie',
    form_option4: 'Trochu zo všetkého',
    form_label_message: 'Správa',
    form_message_placeholder: 'Počet hostí, špeciálne požiadavky...',
    form_submit_btn: 'Odoslať dopyt',
    form_submit_sending: 'Odosielam…',
    form_status_success: '✓ Ďakujeme — váš dopyt bol odoslaný. Odpovieme do jedného dňa.',
    form_status_error: 'Niečo sa pokazilo. Skúste to prosím znova, alebo nám napíšte priamo na email.',
    form_status_placeholder_warning: 'Pred spustením nastavte v action atribúte formulára skutočný email.',

    footer_text: 'Grandhotel · Založený 2011 · Vysoké Tatry, Slovensko',
    nav_toggle_open: 'Otvoriť menu',
    nav_toggle_close: 'Zatvoriť menu'
  }
};

/* Aktuálny jazyk */
let currentLang = localStorage.getItem('grandhotel-lang') || 'en';

function t(key) {
  return (translations[currentLang] && translations[currentLang][key])
    || (translations.en && translations.en[key])
    || key;
}

function applyLanguage(lang) {
  currentLang = lang;
  localStorage.setItem('grandhotel-lang', lang);
  document.documentElement.lang = lang;

  document.querySelectorAll('[data-i18n]').forEach(el => {
    el.textContent = t(el.dataset.i18n);
  });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
    el.placeholder = t(el.dataset.i18nPlaceholder);
  });

  const titleEl = document.getElementById('page-title');
  if (titleEl) titleEl.textContent = t('page_title');
  const descEl = document.getElementById('page-description');
  if (descEl) descEl.setAttribute('content', t('page_description'));

  const toggleBtn = document.getElementById('nav-toggle-btn');
  if (toggleBtn) {
    const isOpen = toggleBtn.getAttribute('aria-expanded') === 'true';
    toggleBtn.setAttribute('aria-label', isOpen ? t('nav_toggle_close') : t('nav_toggle_open'));
  }

  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.lang === lang);
  });
}

document.querySelectorAll('.lang-btn').forEach(btn => {
  btn.addEventListener('click', () => applyLanguage(btn.dataset.lang));
});

applyLanguage(currentLang);

/* ============================================================
   JS 1: Mobilné menu (hamburger)
   ============================================================ */
const navToggle = document.getElementById('nav-toggle-btn');
const navList = document.getElementById('nav-list');
navToggle.addEventListener('click', () => {
  const open = navList.classList.toggle('open');
  navToggle.setAttribute('aria-expanded', open);
  navToggle.setAttribute('aria-label', open ? t('nav_toggle_close') : t('nav_toggle_open'));
});
navList.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  navList.classList.remove('open');
  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.setAttribute('aria-label', t('nav_toggle_open'));
}));

/* ============================================================
   JS 2: Klikateľné karty v hero sekcii 
   ============================================================ */
document.querySelectorAll('.hero-card').forEach(card => {
  card.addEventListener('click', () => {
    const target = document.getElementById(card.dataset.target);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
});

/* ============================================================
   JS 2b: ROOM EXPLORER 
   ============================================================ */
(function () {
  const bannerGrid = document.getElementById('room-banner-grid');
  if (!bannerGrid) return;

  document.querySelectorAll('.room-banner').forEach(banner => {
    banner.addEventListener('click', () => {
      const detail = document.getElementById('room-detail-' + banner.dataset.room);
      if (!detail) return;
      bannerGrid.hidden = true;
      document.querySelectorAll('.room-detail').forEach(d => { d.hidden = true; });
      detail.hidden = false;
      detail.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });

  document.querySelectorAll('.back-to-rooms').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.room-detail').forEach(d => { d.hidden = true; });
      bannerGrid.hidden = false;
      bannerGrid.scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
  });
})();

/* ============================================================
   JS 3: Rezervačný formulár — cez FormSubmit AJAX
   ============================================================ */
(function () {
  const form = document.getElementById('book-form');
  const submitBtn = document.getElementById('book-submit');
  const statusEl = document.getElementById('form-status');

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    const action = form.getAttribute('action');
    if (!action || action.includes('PASTE_YOUR_EMAIL_HERE')) {
      statusEl.textContent = t('form_status_placeholder_warning');
      return;
    }
    submitBtn.disabled = true;
    submitBtn.textContent = t('form_submit_sending');
    statusEl.textContent = '';
    const ajaxUrl = action.replace('formsubmit.co/', 'formsubmit.co/ajax/');
    const data = new FormData(form);
    fetch(ajaxUrl, {
      method: 'POST',
      headers: { 'Accept': 'application/json' },
      body: data
    })
      .then(res => res.json())
      .then(() => {
        statusEl.textContent = t('form_status_success');
        form.reset();
      })
      .catch(() => {
        statusEl.textContent = t('form_status_error');
      })
      .finally(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = t('form_submit_btn');
      });
  });
})();
