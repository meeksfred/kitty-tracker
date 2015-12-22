function Kitten(name, photo, vote) {
  this.name = name;
  this.photo = photo;
  this.vote = vote;
}

var tracker = {
  id: 0,
  totalVotes: 0,
  votedKittens: []
}

var randomOne;
var randomTwo;
var $firstImage = $('#imageOne');
var $secondImage = $('#imageTwo');
var $nextButton = $('#nextButton');
var $buttonDiv = $('#theButton');

var k1 = new Kitten('kitten1', 'images/1.jpg', 0);
var k2 = new Kitten('kitten2', 'images/2.jpg', 0);
var k3 = new Kitten('kitten3', 'images/3.jpg', 0);
var k4 = new Kitten('kitten4', 'images/4.jpg', 0);
var k5 = new Kitten('kitten5', 'images/5.jpg', 0);
var k6 = new Kitten('kitten6', 'images/6.jpg', 0);
var k7 = new Kitten('kitten7', 'images/7.jpg', 0);
var k8 = new Kitten('kitten8', 'images/8.jpg', 0);
var k9 = new Kitten('kitten9', 'images/9.jpg', 0);
var k10 = new Kitten('kitten10', 'images/10.jpg', 0);
var k11 = new Kitten('kitten11', 'images/11.jpg', 0);
var k12 = new Kitten('kitten12', 'images/12.jpg', 0);
var k13 = new Kitten('kitten13', 'images/13.jpg', 0);
var k14 = new Kitten('kitten14', 'images/14.jpg', 0);
var kittenArray = [];
kittenArray.push(k1, k2, k3, k4, k5, k6, k7, k8, k9, k10, k11, k12, k13, k14);

function chooseKitten() {
  randomOne = (Math.floor(Math.random() * (14 - 1 + 1)) + 1);
  randomTwo = (Math.floor(Math.random() * (14 - 1 + 1)) + 1);

  while (randomOne === randomTwo) {
    randomTwo = (Math.floor(Math.random() * (14 - 1 + 1)) + 1);
    }

  $firstImage.show();
  $secondImage.show();
  $firstImage.attr({src:'images/' + randomOne + '.jpg', height:200, width:200});
  $secondImage.attr({src:'images/' + randomTwo + '.jpg', height:200, width:200});
}


chooseKitten();


$('#imageOne').on('click', function() {
  $secondImage.hide();
  kittenArray.forEach(function(kitty1) {
    if('kitten' + randomOne === kitty1.name) {
      kitty1.vote += 1;
      console.log(kitty1.vote);
    }
  });
  // $nextButton.hide();
  // $buttonDiv.append('<button id="nextButton">Play Again</button>');
  console.log('hi');
  $('#nextButton').on('click', chooseKitten);
});

$("#imageTwo").on('click', function() {
  $firstImage.hide();
  kittenArray.forEach(function(kitty2) {
    if('kitten' + randomTwo === kitty2.name) {
      kitty2.vote += 1;
      console.log(kitty2.vote);
    }
  });
  // $nextButton.hide();
  // $buttonDiv.append('<button id="nextButton">Play Again</button>');
  console.log('hi');
  $('#nextButton').on('click', chooseKitten);
});



