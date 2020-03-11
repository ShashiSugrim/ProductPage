function initialize(){
    cart = [0,0]; //NOT 
    variationswithCost = ["NOT5VOLT",0.15, "NOT12VOLT",0.3];

    cartNOT =[0,0];
    variationNOT = ["NOT5VOLT",0.15, "NOT12VOLT",0.3];

    cartNAND = [0,0];
    variationNAND = ["NAND5VOLT",0.15,"NAND12VOLT",0.3];

    cartNOR = [0,0]
    variationNOR = ["NOR5VOLT",0.15 ,"NOR12VOLT",0.3];

    cartXOR = [0,0]
    variationXOR = ["XOR5VOLT",0.2,"XOR12VOLT",.7];

    cartXNOR = [0,0]
    variationXNOR = ["XNOR5VOLT",0.5,"XNOR12VOLT",1]

    images = new Map([["NAND","74ls00.png"],
    ["XOR","74ls86n.png"],["NOR","74ls02-nor-gate-ic.png"],["XNOR","xnorgate.png"],["NOT","output-onlinepngtools.png"]]
    );

  } 
function addReview(){
    currentRev = document.getElementById("userReview").value
    reviewVal = document.getElementById("reviewNumber").reviewNum.value;
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  newDiv.className = "reviewArea";
  newDiv.innerHTML += "<h2>Review Rating: "+reviewVal+"</h2>";
  newDiv.innerHTML += currentRev;
  // add the text node to the newly created div

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("submitReview"); 
  document.body.insertBefore(newDiv, currentDiv); 

}
function display(){
    listtoput = "";

    cartHTML = document.getElementById("cartId");
    listtoput += "Cart: <br/>";
    totalcost = 0
    for(var i =0;i<variationswithCost.length;i+=2){
        listtoput += variationswithCost[i] + " Qty: " + cart[variationswithCost.indexOf(variationswithCost[i])/2] + " cost: $" + (cart[variationswithCost.indexOf(variationswithCost[i])/2] * variationswithCost[i+1]).toFixed(2) + "<br/>";
        totalcost+= parseFloat((cart[variationswithCost.indexOf(variationswithCost[i])/2] * variationswithCost[i+1]).toFixed(2));

    }

    listtoput += "Total Cost: $" +totalcost;
    cartHTML.innerHTML=  listtoput;
}
function changeCart(choice){
    amount = parseInt(document.getElementById("amount").value);
    name = document.getElementById("whichChip").value;
    if(choice=="subtract"){
        amount*=-1
    }
    cart[variationswithCost.indexOf(name)/2]+=amount;
    display();
}
function emptyCart(){
    for(var i=0;i<cart.length;i++){
        cart[i] = 0;
    }
    display();
}
function updatePage(productId,productNameId){
    thisprodname = images.get(document.getElementById(productId).src);
    console.log(thisprodname);
    shownImag = document.getElementById("nameOfProd");
    shownImagText = shownImag.innerText;
    shownImageSrc = document.getElementById("productPic").src;

    ourImage = document.getElementById(productId);
    ourImageText = document.getElementById(productNameId).innerText;
    ourImageSrc = ourImage.src;

    document.getElementById("productPic").src = ourImageSrc;
    document.getElementById("nameOfProd").innerText = ourImageText;
    document.getElementById(productNameId).innerText  =  shownImagText;
    document.getElementById(productId).src = shownImageSrc;
    document.getElementById(productId).innerText = shownImagText;

    switch(thisprodname){
        case "NOT":
        console.log("not DETAILS In");
        cart = cartNOT;
        variationswithCost = variationNOT;
        document.getElementById("5VOPTION").value = "NOT5VOLT";
        document.getElementById("5VOPTION").innerText = "NOT5VOLT";

        document.getElementById("12VOPTION").value = "NOT12VOLT"
        document.getElementById("12VOPTION").innerText = "NOT12VOLT";

        break;
        case "NAND":
        console.log("NAND DETAILS In");
        cart = cartNAND;
        variationswithCost = variationNAND;
        document.getElementById("5VOPTION").value = "NAND5VOLT";
        document.getElementById("5VOPTION").innerText = "NAND5VOLT";

        document.getElementById("12VOPTION").value = "NAND12VOLT"
        document.getElementById("12VOPTION").innerText = "NAND12VOLT";
        break;
        case "NOR":
        console.log("nor DETAILS In");

        cart = cartNOR;
        variationswithCost = variationNOR;
        document.getElementById("5VOPTION").value = "NOR5VOLT";
        document.getElementById("5VOPTION").innerText = "NOR12VOLT";

        document.getElementById("12VOPTION").value = "NOR5VOLT"
        document.getElementById("12VOPTION").innerText = "NOR12VOLT";
        break;
        case "XOR":
        console.log("xor DETAILS In");

        cart = cartXOR;
        variationswithCost = variationXOR;
        document.getElementById("5VOPTION").value = "XOR5VOLT";
        document.getElementById("5VOPTION").innerText = "XOR5VOLT";

        document.getElementById("12VOPTION").value = "XOR5VOLT"
        document.getElementById("12VOPTION").innerText = "XOR12VOLT";
        break;
        case "XNOR":
        console.log("xnor DETAILS In");

        cart = cartXNOR;
        variationswithCost = variationXNOR;
        document.getElementById("5VOPTION").value = "XNOR5VOLT";
        document.getElementById("5VOPTION").innerText = "XNOR5VOLT";

        document.getElementById("12VOPTION").value = "XNOR12VOLT"
        document.getElementById("12VOPTION").innerText = "XNOR12VOLT";
        break;
        default:
        console.log("case defaulted");
    }
    display();
}