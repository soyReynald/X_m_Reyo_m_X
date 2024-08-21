function whereIsIt(verseChapter, book, verseNumber) {
  if (verseChapter == 40 && book == 416, verseNumber == 2 ) {
    var questionInVerse = prompt("Es sabiduría contender con el Omnipotente?El que disputa con Dios, responda a esto.");

    if(questionInVerse === "S") {
      alert("Job 38:8");
    } else {
      alert("Jeremiah 4:1, Isaiah 44:22");
    }
  } else {
    alert ("No verse to locate inserted");
  }
}