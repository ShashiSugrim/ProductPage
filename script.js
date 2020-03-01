function initialize(){
    cart = [0,0,0] //AND,OR,NOT
  } 
function addReview(){
    currentRev = document.getElementById("userReview").value

  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  newDiv.className = "reviewArea";
  newDiv.innerHTML = currentRev;
  // add the text node to the newly created div

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("submitReview"); 
  document.body.insertBefore(newDiv, currentDiv); 

}
function display(){
    listtoput = "";
    var numAND = cart[0];
    var numOR = cart[1];
    var numNOT = cart[2];

    cart = document.getElementById("cartId");
    listtoput += 1 + numAND + " AND CHIPS<br/>" ;
    listtoput += 2 + numOR + " OR CHIPS<br/>";
    listtoput += 3 + numNOT + " NOT CHIPS<br/>";

    cart.innerHTML=  listtoput;
}
function addCart(){
    amount = document.getElementById("amount").value;
    name = document.getElementById("whichChip").value;
    if (name=="AND"){
        cart[0]+=amount;
    } else if (name =="OR"){
        cart[1]+=amount;
    } else if (name == "NOT"){
        cart[2] += amount;
    }
    display();
}