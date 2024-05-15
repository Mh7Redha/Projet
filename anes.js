function hidel() {
  var cards = document.getElementsByClassName("cards");
  for (var i = 0; i < cards.length; i++) {
      cards[i].style.display = "unset";
  }

  var cardl = document.getElementsByClassName("cardl");
  for (var j = 0; j < cardl.length; j++) {
      cardl[j].style.display = "none";
  }
}

function hides() {
  var cardl = document.getElementsByClassName("cardl");
  for (var i = 0; i < cardl.length; i++) {
      cardl[i].style.display = "unset";
  }

  var cards = document.getElementsByClassName("cards");
  for (var j = 0; j < cards.length; j++) {
      cards[j].style.display = "none";
  }
}