$(document).ready(function() {

  function Kitten(name, photo, vote) {
    this.name = name;
    this.photo = photo;
    this.vote = vote;
  }

  var tracker = {
    id: 0,
    totalVotes: 0
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
    tracker.totalVotes += 1;
    console.log(tracker.totalVotes);
    kittenArray.forEach(function(kitty1) {
      if('kitten' + randomOne === kitty1.name) {
        kitty1.vote += 1;
        console.log(kitty1.vote);
      }
    });
    renderChart();
    // $nextButton.hide();
    // $buttonDiv.append('<button id="nextButton">Play Again</button>');
    console.log('hi');
    $('#nextButton').on('click', chooseKitten);
  });

  $("#imageTwo").on('click', function() {
    $firstImage.hide();
    tracker.totalVotes += 1;
    console.log(tracker.totalVotes);
    kittenArray.forEach(function(kitty2) {
      if('kitten' + randomTwo === kitty2.name) {
        kitty2.vote += 1;
        console.log(kitty2.vote);
      }
    });
    renderChart();
    // $nextButton.hide();
    // $buttonDiv.append('<button id="nextButton">Play Again</button>');
    console.log('hi');
    $('#nextButton').on('click', chooseKitten);
  });

  function renderChart() {
    var ctx = $("#myChart").get(0).getContext("2d");

    var data = {
      labels: ["Number of Times Voted"],
      datasets: [
      {
        label:'Kitten 1',
        fillColor: 'rgba(38, 255, 32, .5)',
        strokeColor: 'rgba(38, 255, 32, .5)',
        highlightFill: 'rgba(38, 255, 32, .5)',
        highlightStroke: 'rgba(38, 255, 32, .5)',
        data: [kittenArray[0].vote]
      },
      {
        label:'Kitten 2',
        fillColor: 'rgba(62, 123, 194, .5)',
        strokeColor: 'rgba(62, 123, 194, .5)',
        highlightFill: 'rgba(62, 123, 194, .5)',
        highlightStroke: 'rgba(62, 123, 194, .5)',
        data: [kittenArray[1].vote]
      },
      {
        label:'Kitten 3',
        fillColor: 'rgba(255, 211, 147, .5)',
        strokeColor: 'rgba(255, 211, 147, .5)',
        highlightFill: 'rgba(255, 211, 147, .5)',
        highlightStroke: 'rgba(255, 211, 147, .5)',
        data: [kittenArray[2].vote]
      },
      {
        label:'Kitten 4',
        fillColor: 'rgba(240, 161, 255, .5)',
        strokeColor: 'rgba(240, 161, 255, .5)',
        highlightFill: 'rgba(240, 161, 255, .5)',
        highlightStroke: 'rgba(240, 161, 255, .5)',
        data: [kittenArray[3].vote]
      },
      {
        label:'Kitten 5',
        fillColor: 'rgba(242, 255, 79, .5)',
        strokeColor: 'rgba(242, 255, 79, .5)',
        highlightFill: 'rgba(242, 255, 79, .5)',
        highlightStroke: 'rgba(242, 255, 79, .5)',
        data: [kittenArray[4].vote]
      },
      {
        label:'Kitten 6',
        fillColor: 'rgba(245, 79, 41, .5)',
        strokeColor: 'rgba(245, 79, 41, .5)',
        highlightFill: 'rgba(245, 79, 41, .5)',
        highlightStroke: 'rgba(245, 79, 41, .5)',
        data: [kittenArray[5].vote]
      },
      {
        label:'Kitten 7',
        fillColor: 'rgba(99, 73, 33, .5)',
        strokeColor: 'rgba(99, 73, 33, .5)',
        highlightFill: 'rgba(99, 73, 33, .5)',
        highlightStroke: 'rgba(99, 73, 33, .5)',
        data: [kittenArray[6].vote]
      },
      {
        label:'Kitten 8',
        fillColor: 'rgba(166, 79, 250, .5)',
        strokeColor: 'rgba(166, 79, 250, .5)',
        highlightFill: 'rgba(166, 79, 250, .5)',
        highlightStroke: 'rgba(166, 79, 250, .5)',
        data: [kittenArray[7].vote]
      },
      {
        label:'Kitten 9',
        fillColor: 'rgba(19, 214, 224, .5)',
        strokeColor: 'rgba(19, 214, 224, .5)',
        highlightFill: 'rgba(19, 214, 224, .5)',
        highlightStroke: 'rgba(19, 214, 224, .5)',
        data: [kittenArray[8].vote]
      },
      {
        label:'Kitten 10',
        fillColor: 'rgba(255, 203, 20, .5)',
        strokeColor: 'rgba(255, 203, 20, .5)',
        highlightFill: 'rgba(255, 203, 20, .5)',
        highlightStroke: 'rgba(255, 203, 20, .5)',
        data: [kittenArray[9].vote]
      },
      {
        label:'Kitten 11',
        fillColor: 'rgba(99, 176, 75, .5)',
        strokeColor: 'rgba(99, 176, 75, .5)',
        highlightFill: 'rgba(99, 176, 75, .5)',
        highlightStroke: 'rgba(99, 176, 75, .5)',
        data: [kittenArray[10].vote]
      },
      {
        label:'Kitten 12',
        fillColor: 'rgba(198, 190, 250, .5)',
        strokeColor: 'rgba(198, 190, 250, .5)',
        highlightFill: 'rgba(198, 190, 250, .5)',
        highlightStroke: 'rgba(198, 190, 250, .5)',
        data: [kittenArray[11].vote]
      },
      {
        label:'Kitten 13',
        fillColor: 'rgba(250, 199, 168, .5)',
        strokeColor: 'rgba(250, 199, 168, .5)',
        highlightFill: 'rgba(250, 199, 168, .5)',
        highlightStroke: 'rgba(250, 199, 168, .5)',
        data: [kittenArray[12].vote]
      },
      {
        label:'Kitten 14',
        fillColor: 'rgba(142, 176, 85, .5)',
        strokeColor: 'rgba(142, 176, 85, .5)',
        highlightFill: 'rgba(142, 176, 85, .5)',
        highlightStroke: 'rgba(142, 176, 85, .5)',
        data: [kittenArray[13].vote]
      }
      ]
    };

    // $('chartOne').text(kittenArray[0].name);
    // $('chartTwo').text(kittenArray[1].name);
    // $('chartThree').text(kittenArray[2].name);
    // $('chartFour').text(kittenArray[3].name);
    // $('chartFive').text(kittenArray[4].name);
    // $('chartSix').text(kittenArray[5].name);
    // $('chartSeven').text(kittenArray[6].name);
    // $('chartEight').text(kittenArray[7].name);
    // $('chartNine').text(kittenArray[8].name);
    // $('chartTen').text(kittenArray[9].name);
    // $('chartEleven').text(kittenArray[10].name);
    // $('chartTwelve').text(kittenArray[11].name);
    // $('chartThirteen').text(kittenArray[12].name);
    // $('chartFourteen').text(kittenArray[13].name);

    var options = {
      legendTemplate : '<ul class=\"<%=name.toLowerCase()%>-legend\"><% for (var i=0; '
        + 'i<datasets.length; i++){%><li><span style=\"background-color:<%=datasets[i].'
        + 'fillColor%>\"><%if(datasets[i].label){%><%=datasets[i].label%><%}%></span></li><%}%></ul>'
      }



    var myBarChart = new Chart(ctx).Bar(data, options);
    var legend = myBarChart.generateLegend();

    $('#legend').html(legend);
  };

});



