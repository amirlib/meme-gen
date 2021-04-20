var gImgs = [
  { id: 1, url: './images/memes/2.jpg', size: { height: 473, width: 650 }, keywords: ['beautiful', 'landscape', 'happy'] },
  { id: 2, url: './images/memes/003.jpg', size: { height: 573, width: 750 }, keywords: ['funny', 'politics', 'celebrity', 'trump'] },
  { id: 3, url: './images/memes/004.jpg', size: { height: 539, width: 810 }, keywords: ['animal', 'cute'] },
  { id: 4, url: './images/memes/005.jpg', size: { height: 655, width: 700 }, keywords: ['animal', 'cute', 'baby'] },
  { id: 5, url: './images/memes/5.jpg', size: { height: 466, width: 700 }, keywords: ['cute', 'baby'] },
  { id: 6, url: './images/memes/006.jpg', size: { height: 425, width: 640 }, keywords: ['animal', 'sleep'] },
  { id: 7, url: './images/memes/8.jpg', size: { height: 700, width: 700 }, keywords: ['happy', 'interesting'] },
  { id: 8, url: './images/memes/9.jpg', size: { height: 411, width: 622 }, keywords: ['baby', 'evil'] },
  { id: 9, url: './images/memes/12.jpg', size: { height: 518, width: 638 }, keywords: ['celebrity', 'caught'] },
  { id: 10, url: './images/memes/19.jpg', size: { height: 216, width: 233 }, keywords: ['celebrity', 'why', 'stupid'] },
  { id: 11, url: './images/memes/Ancient-Aliens.jpg', size: { height: 436, width: 500 }, keywords: ['celebrity', 'history', 'aliens'] },
  { id: 12, url: './images/memes/drevil.jpg', size: { height: 400, width: 600 }, keywords: ['celebrity', 'movie', 'evil'] },
  { id: 13, url: './images/memes/img2.jpg', size: { height: 507, width: 570 }, keywords: ['happy', 'dance', 'celebrate'] },
  { id: 14, url: './images/memes/img4.jpg', size: { height: 194, width: 259 }, keywords: ['funny', 'politics', 'celebrity', 'trump'] },
  { id: 15, url: './images/memes/img5.jpg', size: { height: 360, width: 480 }, keywords: ['funny', 'baby', 'surprised'] },
  { id: 16, url: './images/memes/img6.jpg', size: { height: 183, width: 275 }, keywords: ['funny', 'animal'] },
  { id: 17, url: './images/memes/img11.jpg', size: { height: 400, width: 500 }, keywords: ['happy', 'politics', 'celebrity', 'obama'] },
  { id: 18, url: './images/memes/img12.jpg', size: { height: 360, width: 480 }, keywords: ['sports', 'love', 'celebrity'] },
  { id: 19, url: './images/memes/leo.jpg', size: { height: 400, width: 600 }, keywords: ['movie', 'excellent', 'celebrity', 'leo'] },
  { id: 20, url: './images/memes/meme1.jpg', size: { height: 420, width: 500 }, keywords: ['movie', 'excellent', 'celebrity', 'matrix'] },
  { id: 21, url: './images/memes/One-Does-Not-Simply.jpg', size: { height: 335, width: 568 }, keywords: ['movie', 'iconic', 'celebrity'] },
  { id: 22, url: './images/memes/Oprah-You-Get-A.jpg', size: { height: 400, width: 400 }, keywords: ['happy', 'celebrity', 'oprah'] },
  { id: 23, url: './images/memes/patrick.jpg', size: { height: 400, width: 600 }, keywords: ['laugh', 'movie', 'celebrity', 'patrick'] },
  { id: 24, url: './images/memes/putin.jpg', size: { height: 400, width: 600 }, keywords: ['happy', 'politics', 'celebrity', 'putin'] },
  { id: 25, url: './images/memes/X-Everywhere.jpg', size: { height: 380, width: 500 }, keywords: ['movie', 'toys', 'scary'] },
];

var gFilter = '';

function filterImgs() {
  if (!gFilter) return gImgs;

  return gImgs.filter(img => {
    return img.keywords.some(key => key.startsWith(gFilter));
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
