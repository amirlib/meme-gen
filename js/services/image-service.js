var gKeywords = {
  beautiful: { key: 'beautiful', clicks: 0 },
  landscape: { key: 'landscape', clicks: 0 },
  happy: { key: 'happy', clicks: 0 },
  funny: { key: 'funny', clicks: 0 },
  politics: { key: 'politics', clicks: 0 },
  celebrity: { key: 'celebrity', clicks: 0 },
  trump: { key: 'trump', clicks: 0 },
  animal: { key: 'animal', clicks: 0 },
  cute: { key: 'cute', clicks: 0 },
  baby: { key: 'baby', clicks: 0 },
  sleep: { key: 'sleep', clicks: 0 },
  interesting: { key: 'interesting', clicks: 0 },
  caught: { key: 'caught', clicks: 0 },
  why: { key: 'why', clicks: 0 },
  stupid: { key: 'stupid', clicks: 0 },
  history: { key: 'history', clicks: 0 },
  aliens: { key: 'aliens', clicks: 0 },
  dance: { key: 'dance', clicks: 0 },
  movie: { key: 'movie', clicks: 0 },
  evil: { key: 'evil', clicks: 0 },
  celebrate: { key: 'celebrate', clicks: 0 },
  surprised: { key: 'surprised', clicks: 0 },
  obama: { key: 'obama', clicks: 0 },
  sports: { key: 'sports', clicks: 0 },
  love: { key: 'love', clicks: 0 },
  excellent: { key: 'excellent', clicks: 0 },
  leo: { key: 'leo', clicks: 0 },
  matrix: { key: 'matrix', clicks: 0 },
  oprah: { key: 'oprah', clicks: 0 },
  iconic: { key: 'iconic', clicks: 0 },
  laugh: { key: 'laugh', clicks: 0 },
  patrick: { key: 'patrick', clicks: 0 },
  putin: { key: 'putin', clicks: 0 },
  scary: { key: 'scary', clicks: 0 },
  toys: { key: 'toys', clicks: 0 },

};
var gImgs = [
  {
    id: 1,
    url: './images/memes/2.jpg',
    size: { height: 473, width: 650 },
    keywords: [gKeywords.beautiful, gKeywords.landscape, gKeywords.happy],
  },
  {
    id: 2,
    url: './images/memes/003.jpg',
    size: { height: 573, width: 750 },
    keywords: [gKeywords.funny, gKeywords.politics, gKeywords.celebrity, gKeywords.trump],
  },
  {
    id: 3,
    url: './images/memes/004.jpg',
    size: { height: 539, width: 810 },
    keywords: [gKeywords.animal, gKeywords.cute],
  },
  {
    id: 4,
    url: './images/memes/005.jpg',
    size: { height: 655, width: 700 },
    keywords: [gKeywords.animal, gKeywords.cute, gKeywords.baby],
  },
  {
    id: 5, url: './images/memes/5.jpg',
    size: { height: 466, width: 700 },
    keywords: [gKeywords.cute, gKeywords.baby],
  },
  {
    id: 6,
    url: './images/memes/006.jpg',
    size: { height: 425, width: 640 },
    keywords: [gKeywords.animal, gKeywords.sleep],
  },
  {
    id: 7,
    url: './images/memes/8.jpg',
    size: { height: 700, width: 700 },
    keywords: [gKeywords.happy, gKeywords.interesting],
  },
  {
    id: 9,
    url: './images/memes/12.jpg',
    size: { height: 518, width: 638 },
    keywords: [gKeywords.celebrity, gKeywords.caught],
  },
  {
    id: 10,
    url: './images/memes/19.jpg',
    size: { height: 216, width: 233 },
    keywords: [gKeywords.celebrity, gKeywords.why, gKeywords.stupid],
  },
  {
    id: 11,
    url: './images/memes/Ancient-Aliens.jpg',
    size: { height: 436, width: 500 },
    keywords: [gKeywords.celebrity, gKeywords.history, gKeywords.aliens],
  },
  {
    id: 12,
    url: './images/memes/drevil.jpg',
    size: { height: 400, width: 600 },
    keywords: [gKeywords.celebrity, gKeywords.movie, gKeywords.evil],
  },
  {
    id: 13,
    url: './images/memes/img2.jpg',
    size: { height: 507, width: 570 },
    keywords: [gKeywords.happy, gKeywords.dance, gKeywords.celebrate],
  },
  {
    id: 14,
    url: './images/memes/img4.jpg',
    size: { height: 194, width: 259 },
    keywords: [gKeywords.funny, gKeywords.politics, gKeywords.celebrity, gKeywords.trump]
  },
  {
    id: 15,
    url: './images/memes/img5.jpg',
    size: { height: 360, width: 480 },
    keywords: [gKeywords.funny, gKeywords.baby, gKeywords.surprised],
  },
  {
    id: 16,
    url: './images/memes/img6.jpg',
    size: { height: 183, width: 275 },
    keywords: [gKeywords.funny, gKeywords.animal],
  },
  {
    id: 17,
    url: './images/memes/img11.jpg',
    size: { height: 400, width: 500 },
    keywords: [gKeywords.happy, gKeywords.politics, gKeywords.celebrity, gKeywords.obama],
  },
  {
    id: 18,
    url: './images/memes/img12.jpg',
    size: { height: 360, width: 480 },
    keywords: [gKeywords.sports, gKeywords.love, gKeywords.celebrity],
  },
  {
    id: 19,
    url: './images/memes/leo.jpg',
    size: { height: 400, width: 600 },
    keywords: [gKeywords.movie, gKeywords.excellent, gKeywords.celebrity, gKeywords.leo],
  },
  {
    id: 20,
    url: './images/memes/meme1.jpg',
    size: { height: 420, width: 500 },
    keywords: [gKeywords.movie, gKeywords.excellent, gKeywords.celebrity, gKeywords.matrix],
  },
  {
    id: 21,
    url: './images/memes/One-Does-Not-Simply.jpg',
    size: { height: 335, width: 568 },
    keywords: [gKeywords.movie, gKeywords.iconic, gKeywords.celebrity],
  },
  {
    id: 22,
    url: './images/memes/Oprah-You-Get-A.jpg',
    size: { height: 400, width: 400 },
    keywords: [gKeywords.happy, gKeywords.celebrity, gKeywords.oprah],
  },
  {
    id: 23,
    url: './images/memes/patrick.jpg',
    size: { height: 400, width: 600 },
    keywords: [gKeywords.laugh, gKeywords.movie, gKeywords.celebrity, gKeywords.patrick],
  },
  {
    id: 24,
    url: './images/memes/putin.jpg',
    size: { height: 400, width: 600 },
    keywords: [gKeywords.happy, gKeywords.politics, gKeywords.celebrity, gKeywords.happy],
  },
  {
    id: 25,
    url: './images/memes/X-Everywhere.jpg',
    size: { height: 380, width: 500 },
    keywords: [gKeywords.movie, gKeywords.toys, gKeywords.scary],
  },
];

var gFilter = '';
var gDisplayKeywords = [];

function initKeywords() {
  const keywords = [];
  const keys = Object.keys(gKeywords);

  for (var i = 0; i < 10; i++) {
    const idx = getRandomInt(0, keys.length);

    keywords.push(gKeywords[keys[idx]]);
    keys.splice(idx, 1);
  }

  gDisplayKeywords = keywords;
}

function getDisplayKeywords() {
  return JSON.parse(JSON.stringify(gDisplayKeywords));
}

function filterImgs() {
  if (!gFilter) return gImgs;

  return gImgs.filter(img => {
    return img.keywords.some(obj => obj.key.startsWith(gFilter));
  });
}

function getImgById(id) {
  const img = gImgs.find(img => img.id === id);

  if (!img) return;

  return JSON.parse(JSON.stringify(img));
}

function getImgs() {
  const filtered = filterImgs();

  return JSON.parse(JSON.stringify(filtered));
}

function isImgExists(id) {
  return gImgs.some(img => img.id === id);
}

function changeImgFiler(filter) {
  gFilter = filter.trim().split(' ')[0];
}
