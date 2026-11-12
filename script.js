/* =====================================================
   PART A. THE WORDS  (edit meanings and examples here)
   Each word: [term, emoji, meaning, example sentence, category number, intensity 1-3]
   ===================================================== */
const CATEGORIES = [
  'People & Personality',
  'Bakchodi & Chaos',
  'Student Life & Survival',
  'Gossip & Drama',
  'Flirting & Relationships'
];
const INTENSITY = {
  1: { label: 'Mild',     emoji: '😌' },
  2: { label: 'Savage',   emoji: '😈' },
  3: { label: 'Unhinged', emoji: '💀' }
};

const STARTER = [
  // People & Personality
  ['lafangaa', '🛋️', 'Someone who loafs around all day with no work or plan.',
    'Bhai ne 4 saal mein sirf canteen ka samosa aur CR ki biwi ke status dekhe, lafangaa legend 🛋️🫡', 1, 1],
  ['nalla pro max', '📱', 'A totally jobless person, upgraded to the max version.',
    'Placement season mein sabki offer aayi, nalla pro max ki sirf Instagram notification aayi 📱💀', 1, 1],
  ['aalsi aatma', '😴', "A super lazy soul who won't leave the bed for anything.",
    'Aalsi aatma 9 baje ka exam 8:55 pe uthi, pajama mein pahunchi aur topper nikli 😴🏆', 1, 1],
  ['kaleshi creature', '🦖', 'Someone who starts a fight over the smallest thing.',
    'Kaleshi creature ne bench pe 2 inch jagah ke liye poori class ka civil war shuru kar diya 🦖⚔️', 1, 2],
  ['fuddu fellow', '🤪', 'A clueless, easily fooled guy.',
    "Fuddu fellow ne 'free iPhone' wale link pe apna Aadhaar, PAN aur nani ka naam daal diya 🤪📲", 1, 1],
  ['baklol baaz', '🗣️', 'Someone who talks nonsense non-stop.',
    'Baklol baaz ne viva mein 40 min bola, examiner ne bola "beta ab chai pee lo" 🗣️☕', 1, 2],
  ['gandu generation', '🤦', 'A whole batch full of useless, annoying people.',
    'Gandu generation ke group project mein PPT ka title slide bana, baaki sab "will do tonight" 🤦💀', 1, 3],
  ['ullu ka pattha', '🦉', "A fool. Literally 'the owl's child'.",
    'Ullu ka pattha ne exam hall mein calculator ki jagah TV ka remote nikaal liya 🦉📺', 1, 1],
  ['chomu champion', '🏆', 'The one who wins gold medals in silly mistakes.',
    'Chomu champion ne "Submit" ki jagah "Delete account" daba diya, portal ne bhi taali bajayi 🏆👏', 1, 2],
  ['fattu fakir', '🏃💨', 'A scaredy-cat who runs away from every problem.',
    'Fattu fakir ne HOD ko door se dekha aur seedha fire exit se chhalaang maar di 🏃💨🚪', 1, 1],
  ['dhakkan deluxe', '🧠', 'Extra-dumb, top-quality foolishness.',
    'Dhakkan deluxe ne lab mein multimeter se apna phone charge karne ki koshish ki 🧠⚡', 1, 2],
  ['gandu gang', '🚨', 'A group of useless troublemakers.',
    'Gandu gang ne fest ke din stage ka mic le gaye aur Bigg Boss ki audition shuru kar di 🚨🎤', 1, 3],
  ['ghochu gang', '🐑', 'A gang of gullible, clueless friends.',
    'Ghochu gang ne bola "sir ne kal chhutti di", sir ne attendance li, poori gang ghost ban gayi 🐑👻', 1, 1],
  ['nalayak nawab', '👑', 'Useless, but behaves like royalty.',
    "Nalayak nawab ne 'main sab sambhal lunga' bola, phir assignment ki jagah apna selfie jama kar diya 👑🤳", 1, 2],
  // Bakchodi & Chaos
  ['bakchod sabha', '🎪', 'A meeting of friends for endless pointless talk.',
    'Raat 2 baje bakchod sabha mein debate: "agar professor ka WiFi password mil jaye toh kya hoga?" 🎪📶', 2, 1],
  ['bakchodology', '🧪', "The 'science' of timepass and random nonsense.",
    'Bakchodology mein usne thesis likhi: "Back bench se sone ke 47 tareeke" 🧪😴', 2, 1],
  ['bhasadmaxxing', '📢', 'Creating the maximum possible chaos and noise.',
    'Farewell mein bhasadmaxxing level 100: DJ ke saamne professor ne bhi bhangra daal diya 📢🕺', 2, 2],
  ['kaleshology', '🥊', 'The study of fights and drama.',
    'Kaleshology ka syllabus: "kisne mera notes photocopy karke 5 rupay mein bech diya?" 🥊📄', 2, 2],
  ['haramkhor hours', '🌙', 'Late night hours when everyone is awake and up to mischief.',
    'Haramkhor hours mein 3 AM pe poori class ne ek saath assignment, Netflix aur existential crisis shuru kiya 🌙🍿', 2, 3],
  ['dimaag ka dahi', '🥣', 'Brain turned into curd. Totally mentally fried.',
    'Maths ke paper ke baad dimaag ka dahi: usme se ab lassi bhi nikal rahi hai 🥣🥛', 2, 1],
  ['lafda', '🌪️', 'A mess or trouble that someone got into.',
    'Lafda ho gaya: proxy lagane gaya tha, khud ka naam do baar bol diya 🌪️🙈', 2, 1],
  ['sustnami', '🌊', 'A giant tsunami of laziness hitting everyone.',
    'Monday 8 AM lecture pe sustnami aayi: poori class bahh gayi, sirf sir bache 🌊🪑', 2, 1],
  ['chuglipanti', '🐍', 'Talking about people behind their back.',
    'Chuglipanti ka level: tune jo secret bola, wo college ke Wikipedia pe chhap gaya 🐍📰', 2, 2],
  // Student Life & Survival
  ['jugaadu janta', '🛠️', 'Students who find a clever hack for everything.',
    'Jugaadu janta ne lab ka soldering iron se Maggi banayi aur viva mein "innovation" bol diya 🛠️🍜', 3, 1],
  ['padhakupanti', '🤓', 'Acting like a topper and studying too much.',
    'Padhakupanti: exam ke ek din baad bhi library mein baitha hai kyunki "next sem ka syllabus dekh raha hoon" 🤓📚', 3, 1],
  ['magginomics', '🍜', 'The economics of surviving on Maggi.',
    'Magginomics ke hisaab se: 1 packet = 2 din, masala = luxury, anda = IPO 🍜📈', 3, 1],
  ['kangaalcore', '🪙', 'Living the broke life with no money left.',
    'Kangaalcore: canteen wale bhaiya ko bola "udhaar", unhone bola "beta ab teri photo wall pe lagegi" 🪙🖼️', 3, 1],
  ['jhand jeevan', '🫠', 'A messed-up, miserable life.',
    'Backlog + lab file + 62% attendance = jhand jeevan, ab toh sapne mein bhi viva aa raha hai 🫠📉', 3, 2],
  // Gossip & Drama
  ['tea', '☕', 'Gossip or juicy news.',
    'Tea hai: kal fest mein DJ ne gaana bajaya aur 3 breakups ek saath ho gaye 😳☕', 4, 1],
  // Flirting & Relationships
  ['tharakistan', '👀', 'The land of tharkis, the creepy flirts.',
    'College gate ke bahar poora tharakistan jama hai, sabke haath mein "Hi" ka copy-paste ready 👀📱', 5, 2]
];

function starterWords() {
  return STARTER.map(([term, emoji, meaning, example, cat, level]) => ({
    term, emoji, meaning, example, category: CATEGORIES[cat - 1], intensity: level, likes: 0, liked: false
  }));
}

/* =====================================================
   PART B. SAVING (browser storage, wrapped in try/catch)
   ===================================================== */
const KEY = 'bawalbasha-v1';
let words;

function load() {
  try {
    const saved = JSON.parse(localStorage.getItem(KEY));
    if (Array.isArray(saved) && saved.length) return saved;
  } catch (e) { /* storage blocked, use the starter list */ }
  return starterWords();
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(words)); } catch (e) { /* ignore */ }
}
words = load();

/* =====================================================
   PART C. HELPERS
   ===================================================== */
const $ = id => document.getElementById(id);
const esc = s => String(s).replace(/[&<>"]/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const clean = s => s.trim().toLowerCase();
const titleCase = s => s.replace(/\b\w/g, c => c.toUpperCase());
const catIndex = w => Math.max(0, CATEGORIES.indexOf(w.category));
const emojiOf = w => w.emoji || '✨';
const ROT = [-1.4, 1.1, -0.6, 1.6, -1.1, 0.7];
const TAPE_ROT = [-4, 3, -2, 5, -5, 2];

/* =====================================================
   PART D. CARTOON FRIENDS AND DOODLE PROPS (SVG)
   ===================================================== */
const INK = '#2B2233';
const PASTEL = ['#FFB6D5', '#D8C8FF', '#FFE88C', '#AEDCFF', '#C9F28F'];
const S = `stroke="${INK}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"`;

const FRIENDS = {
  // wrapped in a blanket, sleeping
  sleepy: () => `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg"><g ${S}>
    <path d="M14 130C10 94 30 76 60 76C90 76 110 94 106 130Z" fill="#D8C8FF"/>
    <path d="M32 100q8 7 16 0M72 100q8 7 16 0" fill="none"/>
    <circle cx="60" cy="48" r="30" fill="#F2C9A5"/>
    <path d="M30 46C26 20 50 12 62 18C78 10 96 26 90 46C84 36 74 32 66 33C56 37 40 36 30 46Z" fill="${INK}"/>
    <path d="M46 20l-5-10M64 16l3-10M80 22l8-8" fill="none"/>
    <path d="M42 54q6 5 12 0M66 54q6 5 12 0" fill="none"/>
    <ellipse cx="60" cy="68" rx="5" ry="4" fill="#FF8FA3"/>
    <circle cx="38" cy="62" r="5" fill="#FFB6D5" stroke="none" opacity=".85"/><circle cx="82" cy="62" r="5" fill="#FFB6D5" stroke="none" opacity=".85"/>
    </g><text x="88" y="26" font-family="Caveat,cursive" font-size="24" font-weight="700" fill="${INK}">Zzz</text></svg>`,

  // slurping noodles
  maggi: () => `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg"><g ${S}>
    <path d="M16 130C14 98 32 84 60 84C88 84 106 98 104 130Z" fill="#FFE88C"/>
    <circle cx="60" cy="46" r="29" fill="#D9A074"/>
    <path d="M31 42C30 18 54 12 66 16C84 14 92 30 89 42C80 30 62 26 52 30C44 32 36 36 31 42Z" fill="${INK}"/>
    <circle cx="48" cy="50" r="3.5" fill="${INK}" stroke="none"/><circle cx="72" cy="50" r="3.5" fill="${INK}" stroke="none"/>
    <path d="M50 62Q60 72 70 62Z" fill="#fff"/>
    <path d="M60 66q-5 12 3 20q6 6 0 14" fill="none" stroke="#F2B84B" stroke-width="4"/>
    <path d="M28 98Q60 134 92 98Z" fill="#fff"/>
    <path d="M38 106q6-6 12 0t12 0t12 0" fill="none" stroke="#F2B84B"/>
    </g></svg>`,

  // headphones and phone
  vibe: () => `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg"><g ${S}>
    <path d="M16 130C14 98 32 84 60 84C88 84 106 98 104 130Z" fill="#AEDCFF"/>
    <circle cx="60" cy="48" r="29" fill="#F2C9A5"/>
    <circle cx="60" cy="16" r="11" fill="${INK}"/>
    <path d="M32 44C34 24 86 24 88 44C78 34 42 34 32 44Z" fill="${INK}"/>
    <path d="M30 52C28 12 92 12 90 52" fill="none" stroke-width="6"/>
    <rect x="22" y="46" width="13" height="22" rx="6" fill="#C9F28F"/><rect x="85" y="46" width="13" height="22" rx="6" fill="#C9F28F"/>
    <path d="M47 58c-6-4-3-9 0-6c3-3 6 2 0 6zM73 58c-6-4-3-9 0-6c3-3 6 2 0 6z" fill="#FF6F8E" stroke-width="2"/>
    <path d="M50 66Q60 76 70 66" fill="none"/>
    <rect x="76" y="94" width="24" height="36" rx="5" fill="#fff"/>
    <path d="M88 112c-5-4-2-9 0-6c2-3 5 2 0 6z" fill="#FF6F8E" stroke="none"/>
    </g></svg>`,

  // coffee zombie
  chai: () => `<svg viewBox="0 0 120 130" xmlns="http://www.w3.org/2000/svg"><g ${S}>
    <path d="M16 130C14 98 32 84 60 84C88 84 106 98 104 130Z" fill="#FFB6D5"/>
    <circle cx="60" cy="48" r="29" fill="#A9704A"/>
    <path d="M32 40L38 14L48 30L58 10L66 30L80 12L86 40C76 30 44 30 32 40Z" fill="${INK}"/>
    <circle cx="47" cy="50" r="7" fill="#fff"/><circle cx="73" cy="50" r="7" fill="#fff"/>
    <circle cx="48" cy="51" r="2.5" fill="${INK}" stroke="none"/><circle cx="72" cy="51" r="2.5" fill="${INK}" stroke="none"/>
    <path d="M40 60q7 5 14 0M66 60q7 5 14 0" fill="none" stroke="#6B4A8E" stroke-width="2.5"/>
    <path d="M48 71q4-4 8 0t8 0t8 0" fill="none"/>
    <path d="M36 98L40 124Q60 132 80 124L84 98Z" fill="#fff"/>
    <path d="M84 104q14 0 10 14q-3 7-12 6" fill="none"/>
    <text x="60" y="118" text-anchor="middle" font-size="13" font-family="Caveat,cursive" font-weight="700" fill="${INK}" stroke="none">3AM</text>
    <path d="M50 90q-4-6 0-10M62 90q-4-6 0-10" fill="none"/>
    </g></svg>`
};
const FRIEND_KEYS = Object.keys(FRIENDS);

const PROPS = {
  star:     c => `<svg viewBox="0 0 100 100"><path d="M50 8L61 38L93 40L68 60L77 92L50 74L23 92L32 60L7 40L39 38Z" fill="${c}"/></svg>`,
  heart:    c => `<svg viewBox="0 0 100 100"><path d="M50 86C8 56 14 18 38 18C46 18 50 26 50 32C50 26 54 18 62 18C86 18 92 56 50 86Z" fill="${c}"/></svg>`,
  arrow:    c => `<svg viewBox="0 0 100 100" fill="none"><path d="M10 78C24 28 62 18 84 52M84 52L68 50M84 52L82 36"/></svg>`,
  smiley:   c => `<svg viewBox="0 0 100 100"><circle cx="50" cy="50" r="38" fill="${c}"/><circle cx="38" cy="42" r="4" fill="currentColor"/><circle cx="62" cy="42" r="4" fill="currentColor"/><path d="M32 60Q50 78 68 60" fill="none"/></svg>`,
  squiggle: c => `<svg viewBox="0 0 120 40" fill="none"><path d="M4 22Q16 2 28 22T52 22T76 22T100 22T116 22"/></svg>`,
  cup:      c => `<svg viewBox="0 0 100 100"><path d="M22 36L28 80Q50 90 72 80L78 36Z" fill="${c}"/><path d="M78 44Q98 44 92 64Q88 70 76 68" fill="none"/><path d="M38 26Q34 18 40 10M54 26Q50 18 56 10" fill="none"/></svg>`,
  books:    c => `<svg viewBox="0 0 100 100"><rect x="12" y="62" width="76" height="16" rx="3" fill="${c}"/><rect x="18" y="44" width="64" height="16" rx="3" fill="#fff" transform="rotate(-4 50 52)"/><rect x="24" y="26" width="54" height="16" rx="3" fill="${c}" transform="rotate(5 50 34)"/></svg>`,
  slipper:  c => `<svg viewBox="0 0 100 100"><path d="M14 72C8 48 30 34 54 38C86 42 94 62 84 74C70 84 28 84 14 72Z" fill="${c}"/><path d="M40 42L56 70M62 44L50 72" fill="none"/></svg>`,
  phone:    c => `<svg viewBox="0 0 100 100"><rect x="30" y="8" width="40" height="84" rx="9" fill="${c}"/><rect x="36" y="18" width="28" height="56" rx="3" fill="#fff"/><path d="M50 56C40 48 44 38 50 44C56 38 60 48 50 56Z" fill="#FF6F8E"/></svg>`,
  maggi:    c => `<svg viewBox="0 0 100 100"><path d="M18 20L26 14L34 20L42 14L50 20L58 14L66 20L74 14L82 20L82 80L74 86L66 80L58 86L50 80L42 86L34 80L26 86L18 80Z" fill="${c}"/><path d="M30 46q8-8 16 0t16 0t8 0" fill="none"/><text x="50" y="68" text-anchor="middle" font-size="17" font-family="Caveat,cursive" font-weight="700" fill="currentColor" stroke="none">maggi</text></svg>`
};
const PROP_KEYS = Object.keys(PROPS);

const DOODLE_WORDS = ['LAFDA', 'CHOMU', 'BAKCHODI', 'TEA SPILLED', 'NALLA', 'JUGAAD', 'MAGGI TIME', '3AM THOUGHTS',
  'PROXY', 'BUNK', 'canteen ka samosa', 'no cap', 'fr fr', 'chai > everything', 'sustnami', 'sir aa gaye!', 'kal se pakka padhunga',
  'attendance 74.9%', 'backlog loading...'];
const DOODLE_EMOJI = ['💀', '😭', '🤡', '🫠', '🗿', '🫶🏻', '🔥', '✨', '🍜', '☕', '📚', '🎓', '📱', '🥲', '🫡'];

/* ---------- colourful logo letters ---------- */
document.querySelectorAll('.logo-title span:not(.space)').forEach((el, i) => {
  el.style.setProperty('--c', PASTEL[i % PASTEL.length]);
  el.style.setProperty('--y', [0, -5, 3, -3, 4][i % 5] + 'px');
  el.style.setProperty('--r', [-4, 3, -2, 4, -3][i % 5] + 'deg');
});

/* ---------- hero friends with their funny captions ---------- */
const CAPTIONS = { sleepy: '5 more mins…', maggi: 'bhai, maggi?', vibe: 'main toh vibe mein hoon', chai: 'chai.exe loading' };
$('friends').innerHTML = FRIEND_KEYS.map(k =>
  '<figure class="friend">' + FRIENDS[k]() + '<figcaption class="bubble">' + CAPTIONS[k] + '</figcaption></figure>'
).join('');

/* ---------- scattered background doodles ---------- */
function mulberry32(a) {
  return function () {
    a |= 0; a = a + 0x6D2B79F5 | 0;
    let t = Math.imul(a ^ a >>> 15, 1 | a);
    t = t + Math.imul(t ^ t >>> 7, 61 | t) ^ t;
    return ((t ^ t >>> 14) >>> 0) / 4294967296;
  };
}

let lastW = 0, lastH = 0;
function scatterDoodles() {
  const layer = $('doodles');
  layer.style.height = '0px';                       // measure the page without the layer
  const W = document.documentElement.clientWidth;
  const H = Math.max(document.body.scrollHeight, window.innerHeight);
  layer.style.height = H + 'px';
  if (W === lastW && Math.abs(H - lastH) < 40) return;   // nothing changed, keep doodles as they are
  lastW = W; lastH = H;

  const rnd = mulberry32(2026);
  const pick = arr => arr[Math.floor(rnd() * arr.length)];
  const count = Math.min(90, Math.round((W * H) / (300 * 300)));
  let html = '';

  for (let i = 0; i < count; i++) {
    const roll = rnd();
    const rot = Math.round((rnd() - 0.5) * 50);
    let size, kind, inner, extra = '';
    if (roll < 0.38) {                               // props: stars, cups, books, slippers...
      kind = 'prop'; size = 46 + rnd() * 50;
      inner = PROPS[pick(PROP_KEYS)](pick(PASTEL));
    } else if (roll < 0.52) {                        // little cartoon friends
      kind = 'friend-bg'; size = 80 + rnd() * 50;
      inner = FRIENDS[pick(FRIEND_KEYS)]();
    } else if (roll < 0.76) {                        // handwritten slang
      kind = 'word'; size = 0;
      inner = esc(pick(DOODLE_WORDS));
      extra = 'font-size:' + Math.round(26 + rnd() * 30) + 'px;';
    } else {                                         // floating emojis
      kind = 'emo'; size = 0;
      inner = pick(DOODLE_EMOJI);
      extra = 'font-size:' + Math.round(28 + rnd() * 26) + 'px;animation-delay:' + (-rnd() * 7).toFixed(1) + 's;';
    }
    const w = size ? size : 0;
    const x = Math.round(rnd() * Math.max(10, W - (w || 90)));
    const y = Math.round(rnd() * Math.max(10, H - (w || 60)));
    html += '<div class="dd ' + kind + '" style="left:' + x + 'px;top:' + y + 'px;--r:' + rot + 'deg;' +
      (w ? 'width:' + Math.round(w) + 'px;' : '') + extra + '">' + inner + '</div>';
  }
  layer.innerHTML = html;
}

let scatterTimer;
function scheduleScatter() {
  clearTimeout(scatterTimer);
  scatterTimer = setTimeout(scatterDoodles, 250);
}

/* =====================================================
   PART E. FILTERS, SEARCH AND SORT
   ===================================================== */
let catFilter = 'All';
let intFilter = 0;          // 0 means all levels
let editing = null;         // the term being edited, or null
let armedDelete = null;     // the term waiting for a second tap to delete
let justAdded = null;

function visibleWords() {
  const q = clean($('search').value);
  const list = words.filter(w =>
    (catFilter === 'All' || w.category === catFilter) &&
    (intFilter === 0 || w.intensity === intFilter) &&
    (q === '' || w.term.includes(q) || w.meaning.toLowerCase().includes(q))
  );
  const sort = $('sort').value;
  list.sort((a, b) => {
    if (sort === 'likes' && b.likes !== a.likes) return b.likes - a.likes;
    if (sort === 'intensity' && b.intensity !== a.intensity) return b.intensity - a.intensity;
    return a.term.localeCompare(b.term);
  });
  return list;
}

function chip(label, count, on, kind, value) {
  return '<button class="chip" type="button" aria-pressed="' + on + '" data-kind="' + kind + '" data-value="' + esc(value) + '">' +
    esc(label) + ' <small>' + count + '</small></button>';
}
function renderChips() {
  $('cat-chips').innerHTML =
    chip('All', words.length, catFilter === 'All', 'cat', 'All') +
    CATEGORIES.map(c => chip(c, words.filter(w => w.category === c).length, catFilter === c, 'cat', c)).join('');
  $('int-chips').innerHTML =
    chip('All', words.length, intFilter === 0, 'int', 0) +
    [1, 2, 3].map(l => chip(INTENSITY[l].emoji + ' ' + INTENSITY[l].label, words.filter(w => w.intensity === l).length, intFilter === l, 'int', l)).join('');
}

function cardHtml(w, i, extraClass) {
  const sure = armedDelete === w.term;
  const lv = INTENSITY[w.intensity] || INTENSITY[1];
  return '<article class="card c-' + catIndex(w) + (extraClass || '') + '" data-term="' + esc(w.term) + '" style="--rot:' + ROT[i % 6] + 'deg;--tape-rot:' + TAPE_ROT[i % 6] + 'deg">' +
    '<span class="lvl lvl' + w.intensity + '">' + lv.emoji + ' ' + lv.label + '</span>' +
    '<h3>' + esc(titleCase(w.term)) + ' ' + esc(emojiOf(w)) + '</h3>' +
    '<p class="cat">📌 ' + esc(w.category) + '</p>' +
    '<p class="meaning">' + esc(w.meaning) + '</p>' +
    (w.example ? '<p class="eg"><b>e.g.</b> “' + esc(w.example) + '”</p>' : '') +
    '<div class="actions">' +
      '<button class="like" type="button" aria-pressed="' + !!w.liked + '" aria-label="Love ' + esc(w.term) + '" data-act="like" data-term="' + esc(w.term) + '">♥ ' + w.likes + '</button>' +
      '<span class="spacer"></span>' +
      '<button class="mini" type="button" data-act="edit" data-term="' + esc(w.term) + '">Edit</button>' +
      '<button class="mini danger' + (sure ? ' sure' : '') + '" type="button" data-act="delete" data-term="' + esc(w.term) + '">' + (sure ? 'Sure? Tap again' : 'Delete') + '</button>' +
    '</div></article>';
}

function renderList() {
  const list = visibleWords();
  $('count').textContent = 'showing ' + list.length + ' of ' + words.length + ' words';
  if (!list.length) {
    $('list').innerHTML = '<p class="empty">Nothing found 🫠<br>Try another word, or add this one yourself below!</p>';
  } else {
    $('list').innerHTML = list.map((w, i) => cardHtml(w, i, w.term === justAdded ? ' pop' : '')).join('');
  }
}

/* ---------- word of the day, hall of fame, stats ---------- */
function renderWotd() {
  if (!words.length) { $('wotd').innerHTML = ''; return; }
  const day = Math.floor(Date.now() / 86400000);
  const w = words[day % words.length];
  $('wotd').innerHTML = '<div class="card wotd c-' + catIndex(w) + '" style="--rot:-1deg;--tape-rot:-3deg">' +
    '<span class="wotd-tag">⭐ Word of the day</span>' +
    '<span class="lvl lvl' + w.intensity + '">' + INTENSITY[w.intensity].emoji + ' ' + INTENSITY[w.intensity].label + '</span>' +
    '<h3>' + esc(titleCase(w.term)) + ' ' + esc(emojiOf(w)) + '</h3>' +
    '<p class="cat">📌 ' + esc(w.category) + '</p>' +
    '<p class="meaning">' + esc(w.meaning) + '</p>' +
    (w.example ? '<p class="eg"><b>e.g.</b> “' + esc(w.example) + '”</p>' : '') + '</div>';
}

function renderFame() {
  const top = words.filter(w => w.likes > 0).sort((a, b) => b.likes - a.likes).slice(0, 5);
  const medals = ['🥇', '🥈', '🥉', '4️⃣', '5️⃣'];
  $('fame-list').innerHTML = top.length
    ? top.map((w, i) => '<li><button type="button" data-fame="' + esc(w.term) + '"><span class="medal">' + medals[i] + '</span>' +
        '<span class="nm">' + esc(titleCase(w.term)) + ' ' + esc(emojiOf(w)) + '</span><span class="hearts">♥ ' + w.likes + '</span></button></li>').join('')
    : '<li><p class="hint">No votes yet. Be the first to love a word ♥</p></li>';
}

function renderStats() {
  const hearts = words.reduce((a, w) => a + w.likes, 0);
  $('stats').innerHTML =
    '<span class="stat">📖 ' + words.length + ' words</span>' +
    '<span class="stat">🗂️ ' + CATEGORIES.length + ' categories</span>' +
    '<span class="stat">♥ ' + hearts + ' loves</span>' +
    '<span class="stat">♾️ bakchodi</span>';
}

function render() {
  renderStats(); renderWotd(); renderFame(); renderChips(); renderList();
  scheduleScatter();
}

/* =====================================================
   PART F. CLICKS
   ===================================================== */
function onChip(e) {
  const b = e.target.closest('.chip'); if (!b) return;
  if (b.dataset.kind === 'cat') catFilter = b.dataset.value;
  else intFilter = Number(b.dataset.value);
  armedDelete = null; justAdded = null;
  renderChips(); renderList(); scheduleScatter();
}
$('cat-chips').addEventListener('click', onChip);
$('int-chips').addEventListener('click', onChip);

$('list').addEventListener('click', e => {
  const b = e.target.closest('[data-act]'); if (!b) return;
  const w = words.find(x => x.term === b.dataset.term); if (!w) return;
  const act = b.dataset.act;
  justAdded = null;

  if (act === 'like') {
    w.liked = !w.liked;
    w.likes = Math.max(0, w.likes + (w.liked ? 1 : -1));
    save(); renderStats(); renderFame(); renderList();
  } else if (act === 'edit') {
    startEdit(w);
  } else if (act === 'delete') {
    if (armedDelete === w.term) {
      words = words.filter(x => x !== w);
      armedDelete = null;
      if (editing === w.term) stopEdit();
      save(); render();
      say('Deleted "' + titleCase(w.term) + '". Gone.');
    } else {
      armedDelete = w.term; renderList();
      setTimeout(() => { if (armedDelete === w.term) { armedDelete = null; renderList(); } }, 3500);
    }
  }
});

$('fame-list').addEventListener('click', e => {
  const b = e.target.closest('[data-fame]'); if (!b) return;
  $('search').value = b.dataset.fame;
  catFilter = 'All'; intFilter = 0;
  renderChips(); renderList(); scheduleScatter();
  $('words').scrollIntoView({ behavior: 'smooth', block: 'start' });
});

$('search').addEventListener('input', () => { armedDelete = null; justAdded = null; renderList(); scheduleScatter(); });
$('search').addEventListener('keydown', e => { if (e.key === 'Enter') $('words').scrollIntoView({ behavior: 'smooth', block: 'start' }); });
$('sort').addEventListener('change', () => { renderList(); });

/* =====================================================
   PART G. ADD AND EDIT FORM
   ===================================================== */
$('f-category').innerHTML = CATEGORIES.map(c => '<option>' + esc(c) + '</option>').join('');

function say(text) { $('msg').textContent = text; }
function getLevel() { return Number(document.querySelector('input[name="f-int"]:checked').value); }
function setLevel(n) { document.querySelector('input[name="f-int"][value="' + n + '"]').checked = true; }

function startEdit(w) {
  editing = w.term;
  $('form-title').textContent = 'Edit "' + titleCase(w.term) + '" ✏️';
  $('f-term').value = w.term;
  $('f-emoji').value = w.emoji || '';
  $('f-meaning').value = w.meaning;
  $('f-example').value = w.example || '';
  $('f-category').value = w.category;
  setLevel(w.intensity);
  $('f-submit').textContent = 'Save changes ✅';
  $('f-cancel').hidden = false;
  say('');
  $('add').scrollIntoView({ behavior: 'smooth', block: 'center' });
  $('f-meaning').focus({ preventScroll: true });
}

function stopEdit() {
  editing = null;
  $('form').reset();
  $('form-title').textContent = 'Add your own slang ✍️';
  $('f-submit').textContent = 'Stick it in 📌';
  $('f-cancel').hidden = true;
}
$('f-cancel').addEventListener('click', () => { stopEdit(); say(''); });

$('form').addEventListener('submit', e => {
  e.preventDefault();
  const term = clean($('f-term').value);
  const emoji = $('f-emoji').value.trim();
  const meaning = $('f-meaning').value.trim();
  const example = $('f-example').value.trim();
  const category = $('f-category').value;
  const intensity = getLevel();
  if (!term || !meaning) { say('The word and its meaning are both needed, bestie.'); return; }

  const clash = words.find(w => w.term === term && w.term !== editing);
  if (clash) { say('"' + titleCase(term) + '" is already in here. Hit its Edit button instead.'); return; }

  if (editing) {
    const w = words.find(x => x.term === editing);
    Object.assign(w, { term, emoji, meaning, example, category, intensity });
    say('Updated "' + titleCase(term) + '" 🫡');
    stopEdit();
    justAdded = term;
  } else {
    words.push({ term, emoji, meaning, example, category, intensity, likes: 0, liked: false });
    $('form').reset();
    say('Added "' + titleCase(term) + '". W move 🫶🏻');
    justAdded = term;
  }
  catFilter = 'All'; intFilter = 0; $('search').value = '';
  save(); render();
  const el = document.querySelector('.card[data-term="' + CSS.escape(term) + '"]');
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
});

/* =====================================================
   PART H. RESET, FLOATING BUTTON, START
   ===================================================== */
let resetArmed = false;
$('reset').addEventListener('click', () => {
  if (!resetArmed) {
    resetArmed = true;
    $('reset').textContent = 'This wipes your changes. Tap again to confirm';
    setTimeout(() => { resetArmed = false; $('reset').textContent = 'Reset to the starter 30'; }, 4000);
    return;
  }
  resetArmed = false;
  words = starterWords();
  catFilter = 'All'; intFilter = 0; justAdded = null; $('search').value = '';
  stopEdit(); save(); render();
  $('reset').textContent = 'Reset to the starter 30';
  say('Back to the starter 30.');
});

// floating "add a word" button: jumps to the form and hides once the form is on screen
$('fab').addEventListener('click', () => { $('add').scrollIntoView({ behavior: 'smooth', block: 'center' }); $('f-term').focus({ preventScroll: true }); });
if ('IntersectionObserver' in window) {
  new IntersectionObserver(entries => { $('fab').classList.toggle('hide', entries[0].isIntersecting); }, { threshold: 0.2 }).observe($('add'));
}

window.addEventListener('resize', scheduleScatter);
window.addEventListener('load', scheduleScatter);
if ('ResizeObserver' in window) new ResizeObserver(scheduleScatter).observe($('page'));

render();