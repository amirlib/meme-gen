var gImgs = [
  { id: 1, url: './images/memes/2.jpg', keywords: ['beautiful', 'landscape', 'happy'] },
  { id: 2, url: './images/memes/003.jpg', keywords: ['funny', 'politics', 'celebrity', 'trump'] },
  { id: 3, url: './images/memes/004.jpg', keywords: ['animal', 'cute'] },
  { id: 4, url: './images/memes/005.jpg', keywords: ['animal', 'cute', 'baby'] },
  { id: 5, url: './images/memes/5.jpg', keywords: ['cute', 'baby'] },
  { id: 6, url: './images/memes/006.jpg', keywords: ['animal', 'sleep'] },
  { id: 7, url: './images/memes/8.jpg', keywords: ['happy', 'interesting'] },
  { id: 8, url: './images/memes/9.jpg', keywords: ['baby', 'evil'] },
  { id: 9, url: './images/memes/12.jpg', keywords: ['celebrity', 'caught'] },
  { id: 10, url: './images/memes/19.jpg', keywords: ['celebrity', 'why', 'stupid'] },
  { id: 11, url: './images/memes/Ancient-Aliens.jpg', keywords: ['celebrity', 'history', 'aliens'] },
  { id: 12, url: './images/memes/drevil.jpg', keywords: ['celebrity', 'movie', 'evil'] },
  { id: 13, url: './images/memes/img2.jpg', keywords: ['happy', 'dance', 'celebrate'] },
  { id: 14, url: './images/memes/img4.jpg', keywords: ['funny', 'politics', 'celebrity', 'trump'] },
  { id: 15, url: './images/memes/img5.jpg', keywords: ['funny', 'baby', 'surprised'] },
  { id: 16, url: './images/memes/img6.jpg', keywords: ['funny', 'animal'] },
  { id: 17, url: './images/memes/img11.jpg', keywords: ['happy', 'politics', 'celebrity', 'obama'] },
  { id: 18, url: './images/memes/img12.jpg', keywords: ['sports', 'love', 'celebrity'] },
  { id: 19, url: './images/memes/leo.jpg', keywords: ['movie', 'excellent', 'celebrity', 'leo'] },
  { id: 20, url: './images/memes/meme1.jpg', keywords: ['movie', 'excellent', 'celebrity', 'matrix'] },
  { id: 21, url: './images/memes/One-Does-Not-Simply.jpg', keywords: ['movie', 'iconic', 'celebrity'] },
  { id: 22, url: './images/memes/Oprah-You-Get-A.jpg', keywords: ['happy', 'celebrity', 'oprah'] },
  { id: 23, url: './images/memes/patrick.jpg', keywords: ['laugh', 'movie', 'celebrity', 'patrick'] },
  { id: 24, url: './images/memes/putin.jpg', keywords: ['happy', 'politics', 'celebrity', 'putin'] },
  { id: 25, url: './images/memes/X-Everywhere.jpg', keywords: ['movie', 'toys', 'scary'] },
];

function getImgById(id) {
  const img = gImgs.find(img => img.id === id);

  if (!img) return;

  return JSON.parse(JSON.stringify(img));
}

function getImgs() {
  return JSON.parse(JSON.stringify(gImgs));
}

function isImgExists(id) {
  return gImgs.some(img => img.id === id);
}
