class Music {
  constructor(title, singer, img, file) {
    this.title = title;
    this.singer = singer;
    this.img = img;
    this.file = file;
  }

  getName() {
    return this.title + "-" + this.singer;
  }
}
const musicList = [
  new Music("John Cena Theme Song", "John Cena", "1.jpg", "1.mp3"),
  new Music("Rey Mysterio Theme Song", "Rey Mysterio", "2.jpg", "2.mp3"),
  new Music("Randy Orton Theme Song", "Randy Orton", "3.jpg", "3.mp3"),
];
