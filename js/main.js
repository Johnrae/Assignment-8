(function (){

   //========================================================//
  //----------------------(Question 1)----------------------//
 //========================================================//

  // console.log(items.length)

  //   items.forEach(function(item){
  //     console.log(item.price);
  //   })


  ///////// created the array of prices //////////////

  var prices = items.map( function(item){
    return item.price;
  });

  // console.log(prices);

  ///////// added prices together //////////////

  var sum = prices.reduce( function (prev , next) {
    return prev + next;
  });
  // console.log(sum);

  ///////// divide by total # of items //////////////

  var avg = sum / items.length;
  // console.log(avg);

 ///////// convert to 2 decimal places //////////////

  var convertedAvg = avg.toFixed(2);
  // console.log(convertedAvg);

  ///////// make it a string /////////////
  
  var str = 'The average price is $' + convertedAvg;
  // console.log(str);

  ///////// put it on da page //////////////
  
  var answer1 = document.querySelector('#answer1');

  var textNode = document.createTextNode(str);

  answer1.appendChild(textNode);

}());

   //========================================================//
  //----------------------(Question 2)----------------------//
 //========================================================//

(function (){ // open fun

  // Filter prices

  var affordable = items.filter(function(item){
    if (item.price > 14 && item.price < 18 ){
      return item;
  }});

    // console.log(affordable);

  // mapping title

    var affordableTitle = affordable.map(function(item){
      return item.title
    })
    // console.log(affordableTitle)

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
  


  



}()); // close fun

   //========================================================//
  //----------------------(Question 3)----------------------//
 //========================================================//

(function (){   

  /////////////////   Filter + Map GBP   ///////////////////
    var curCode = items.filter(function(item){
      if(item.currency_code === 'GBP'){
        return item};
    });
        // console.log(curCode)

    var gbpTitle = curCode.map(function(item){
      return item.title;
    });
        // console.log(gbpTitle);

          // ASSIGN ARRAY

    var place = gbpTitle.shift()

          // ON DA PAGE

    var answer3 = document.querySelector('#answer3');

    var textNode = document.createTextNode(place);

    answer3.appendChild(textNode); 


}());

   //========================================================//
  //----------------------(Question 4)----------------------//
 //========================================================//

(function (){

    // Create a list & add to document(HTML) at given selector
 function addList(selector, list) {
   var container = document.querySelector(selector);
   var ul = document.createElement('ul');

   list.forEach(function(item){
     var li = document.createElement('li');
     var node = document.createTextNode(item);

     li.appendChild(node);
     ul.appendChild(li);
   });

   container.appendChild(ul);
 };

  var material = items.filter(function(item){
    
      return item.materials.indexOf('wood') !== -1;
    
  })

  var ans4 = material.map(function(item){
    return item.title + ' is made of wood.';
  });

  addList("#answer4",ans4)

}());

   //========================================================//
  //----------------------(Question 5)----------------------//
 //========================================================//

(function (){

  // Create a list & add to document(HTML) at given selector
 function addList(selector, list) {
   var container = document.querySelector(selector);
   var ul = document.createElement('ul');

   list.forEach(function(item){
     var li = document.createElement('li');
     var node = document.createTextNode(item);

     li.appendChild(node);
     ul.appendChild(li);
   });

   container.appendChild(ul);
 };

 function addParagraph(selector, text) {
    var container = document.querySelector(selector);
    var p = document.createElement('p');
    var node = document.createTextNode(text);
    p.appendChild(node);
    container.appendChild(p);
   };

   //filtering material lengths

 var ssh = items.filter(function(item){
  return item.materials.length >= 8;
 })
 // console.log(ssh)

//adding list to html

  ssh.forEach(function(item){
    addParagraph('#answer5', item.title + ' has ' + item.materials.length + ' materials:');
    addList('#answer5', item.materials );


  });




}());
   //========================================================//
  //----------------------(Question 6)----------------------//
 //========================================================//
(function (){

 function addParagraph(selector, text) {
    var container = document.querySelector(selector);
    var p = document.createElement('p');
    var node = document.createTextNode(text);
    p.appendChild(node);
    container.appendChild(p);
   };

    //

  var madeBy = items.filter(function(item){
    return item['who_made'] === 'i_did';
  });

  addParagraph('#answer6', madeBy.length + ' were made by their sellers');



}());