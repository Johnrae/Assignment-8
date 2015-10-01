(function (){

  //========================================================//
  //----------------------(Question 1)----------------------//
  //========================================================//

  // console.log(items.length)

  //   items.forEach(function(item){
  //     console.log(item.price);
  //   })


  // created the array of prices

  var prices = items.map( function(item){
    return item.price;
  });

  console.log(prices);

  //added prices together

  var sum = prices.reduce( function (prev , next) {
    return prev + next;
  });
  console.log(sum);

  // divide by total # of items

  var avg = sum / items.length;
  console.log(avg);

  // convert to 2 decimal places

  var convertedAvg = avg.toFixed(2);
  console.log(convertedAvg);

  // make it a string
  
  var str = 'The average price is $' + convertedAvg;
  console.log(str);

  // put it on da page
  
  var answer1 = document.querySelector('#answer1');

  var textNode = document.createTextNode(str);

  answer1.appendChild(textNode);

  //========================================================//
  //----------------------(Question 2)----------------------//
  //========================================================//

  // Filter prices

  var affordable = items.filter(function(item){
    if (item.price > 14 && item.price < 18 ){
      return item;
  }});

    console.log(affordable);

  // mapping title

    var affordableTitle = affordable.map(function(item){
      return item.title
    })
    console.log(affordableTitle)

  //assign array

  var answerA = affordableTitle.shift();
  var answerB = affordableTitle.shift();
  var answerC = affordableTitle.shift();
 
//A
  var answer2a = document.querySelector('#answer2a');

  var textNode = document.createTextNode(answerA);

  answer2a.appendChild(textNode);
//B

   var answer2b = document.querySelector('#answer2b');

  var textNode = document.createTextNode(answerB);

  answer2b.appendChild(textNode);
  

//C
 var answer2c = document.querySelector('#answer2c');

  var textNode = document.createTextNode(answerC);

  answer2c.appendChild(textNode);
  


  




  //========================================================//
  //----------------------(Question 3)----------------------//
  //========================================================//

    





  //========================================================//
  //----------------------(Question 4)----------------------//
  //========================================================//






  //========================================================//
  //----------------------(Question 5)----------------------//
  //========================================================//







  //========================================================//
  //----------------------(Question 6)----------------------//
  //========================================================//




})();