function initialize(){
    cart = [0,0]; //NOT 
    // localStorage.setItem('cart',JSON.stringify(cart));
    cart = Array.from(JSON.parse(localStorage.getItem('cart')));

    // if(cart==""){
    //     localStorage.setItem('cart',cart);
    // }
    console.log(cart);
    variationswithCost = ["NOT5VOLT",0.15, "NOT12VOLT",0.3];
    desc_rev_cart = ["The 74LS04 IC chip also known as the hex inverter has 6 inputs with 6 outputs and is used to switch the input signal. For example, sending a 1 through VCC into the input will get a 0 as its correlated output. A signal of 0 through ground as the input will output 1 VCC. ","This NOT gate is great for inverting my inputs with low power","I love the NOT gate as it is small and it has just the right amount of gates","USES low power, efficient, and fits perfectly for my breadboarding uses"];

    cartNOT =[0,0];
    variationNOT = ["NOT5VOLT",0.15, "NOT12VOLT",0.3];
    desc_rev_NOT = ["The 74LS04 IC chip also known as the hex inverter has 6 inputs with 6 outputs and is used to switch the input signal. For example, sending a 1 through VCC into the input will get a 0 as its correlated output. A signal of 0 through ground as the input will output 1 VCC. ","This NOT gate is great for inverting my inputs with low power","I love the NOT gate as it is small and it has just the right amount of gates","USES low power, efficient, and fits perfectly for my breadboarding uses"];

    cartNAND = [0,0];
    variationNAND = ["NAND5VOLT",0.15,"NAND12VOLT",0.3];
    desc_rev_NAND = ["The NAND gate is an AND gate that inverts the output, There are 3 NAND gates on each IC chip, each NAND gate holds 2 inputs and 1 output","I do not need to put a seperate AND gate and NOT gate because I can just use this gate. Very convienient","The 74LS00 NAND gate is one of the few rare gates that when used on a breadboard, it can make any type of gate. Very efficient because it consumes low power and one can make any breadboard project with substituing all their gates with only NAND gates", "NAND gates were very helpful when I did not have an AND gate or NOT gate on hand"];
    cartNOR = [0,0]
    variationNOR = ["NOR5VOLT",0.15 ,"NOR12VOLT",0.3];
    desc_rev_NOR = ["The 74LS02 NOR ic chip has 3 NOR gates, each gate holding 2 inputs and 3 total outputs from the IC chip itself","The NOR gate is one of two gates that can make any gate with combining multiple gates","NOR gate was very useful when I did not have a NOT gate or OR gate on hand","Helped me immensely when creating my breadboard project that required multiple NOT gates and OR gates"];
    cartXOR = [0,0]
    variationXOR = ["XOR5VOLT",0.2,"XOR12VOLT",.7];
    desc_rev_XOR = ["The 74LS86N XOR gate returns a true value when there are an odd number of true inputs to the chip. There are 3 XOR gates on one 5 volt IC CHIP but the 12 volt IC chips contain 6 gates","The XOR gate or otherwise called exclusive XOR gate is very efficient at its job. It can come in handy sometimes when one does not want to make a series of AND and NOT gates to replicate a XOR gates output","Helped me a ton when making my breadboard project that included counting the number of true inputs","Very efficient compared to using multiple AND and NOT gates to replicate its output"]
    cartXNOR = [0,0]
    variationXNOR = ["XNOR5VOLT",0.5,"XNOR12VOLT",1]
    desc_rev_XNOR = ["The 74LS77 XNOR gate returns the inverted output of a XOR gate. The 5 volt version has 3 gates and the 12 volt version has 6 gates","This is very efficient compared to using multiple XOR gates and NOT gates to achieve the same result","Very efficient in my breadboard project that required multiple XOR gates and NOT gates. Even more efficient than using multiple AND, and NOT gates.","IC CHIP that fits a special niche but excels at its purpose"];
    images = new Map([["74ls00.png","NAND"],
    ["74ls86n.png","XOR"],["74ls02-nor-gate-ic.png","NOR"],["xnorgate.png","XNOR"],["output-onlinepngtools.png","NOT"]]
    );
    updateDefaultReviews();
    display();
  } 
function updateDefaultReviews(){
    document.getElementById("description").innerText = desc_rev_cart[0];
    document.getElementById("revOne").innerHTML = "<h2>Review Rating 3</h2>\n<p>"+desc_rev_cart[1]+"</p>";
    document.getElementById("revTwo").innerHTML ="<h2>Review Rating 4</h2>\n<p>"+desc_rev_cart[2]+"</p>";;
    document.getElementById("revThree").innerHTML = "<h2>Review Rating 5</h2>\n<p>"+desc_rev_cart[3]+"</p>";;

}
function addReview(){
    currentRev = document.getElementById("userReview").value
    reviewVal = document.getElementById("reviewNumber").reviewNum.value;
  // create a new div element 
  var newDiv = document.createElement("div"); 
  // and give it some content 
  newDiv.className = "reviewArea";
  newDiv.innerHTML += "<h2>Review Rating: "+reviewVal+"</h2>";
  newDiv.innerHTML += "<p>"+currentRev+"</p>";
  // add the text node to the newly created div

  // add the newly created element and its content into the DOM 
  var currentDiv = document.getElementById("submitReview"); 
  document.body.insertBefore(newDiv, currentDiv); 
//   document.getElementById("spaced").appendChild(newDiv);
}
function updateReview(){
    for (var i=0;i<3;i++){
        if(i=0){
            document.getElementById("description").innerText = desc_rev_cart[0];
        }
    }
}
function display(){
    listtoput = "";

    cartHTML = document.getElementById("cartId");
    listtoput += "Cart: <br/>";
    totalcost = 0
    cart = JSON.parse(localStorage.getItem('cart'));
    document.getElementById("5VOLTPRICE").innerText = "Price For 5VOLT Version: $"+ variationswithCost[1].toString();
    document.getElementById("12VOLTPRICE").innerText = "Price For 12VOLT Version: $"+ variationswithCost[3].toString();

    for(var i =0;i<variationswithCost.length;i+=2){
        listtoput += variationswithCost[i] + " Qty: " + cart[variationswithCost.indexOf(variationswithCost[i])/2] + "; cost: $" + (cart[variationswithCost.indexOf(variationswithCost[i])/2] * variationswithCost[i+1]).toFixed(2) + "<br/>";
        currentval = cart[variationswithCost.indexOf(variationswithCost[i])/2] * variationswithCost[i+1]
        currentval = currentval;
        
        totalcost+= (currentval);
        
    }
    totalcost=  parseFloat(totalcost).toFixed(2);
    listtoput += "Total Cost: $" +totalcost;
    cartHTML.innerHTML=  listtoput;
}
function changeCart(choice){
    amount = parseInt(document.getElementById("amount").value);
    name = document.getElementById("whichChip").value;
    cart = Array.from(JSON.parse(localStorage.getItem('cart')));
    if(choice=="subtract"){
        amount*=-1
    }
    if((cart[variationswithCost.indexOf(name)/2]+amount) >= 0){
        cart[variationswithCost.indexOf(name)/2]+=amount;
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    display();
}
function emptyCart(){
    cart = Array.from(JSON.parse(localStorage.getItem('cart')));
    for(var i=0;i<cart.length;i++){
        cart[i] = 0;
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    display();
}
function updatePage(product,thisprodname){
    shownImage = document.getElementById("productPic");
    shownImageText = document.getElementById("nameOfProd");
//split string based on commas and then give me the last element which is the real product src which then has an associated key to it in a map
    tempOurProdName = images.get(((product.src).split("/")).pop()); 
    tempShownSrc = shownImage.src;
    shownImage.src = product.src; // swap shown image source with our source
    thisProdText = document.getElementById(thisprodname);
    thisProdText.innerText = images.get(((tempShownSrc).split("/")).pop())+"Gate"; 
    shownImageText.innerText = images.get(((product.src).split("/")).pop()) + " Gate"
    thisprodname = tempOurProdName;

    product.src = tempShownSrc;

    // make the divs dynamic so that they each can have an onclick so we combine text and image into one id
    switch(thisprodname){
        case "NOT":
        console.log("not DETAILS In");
        cart = cartNOT;
        variationswithCost = variationNOT;
        document.getElementById("5VOPTION").value = "NOT5VOLT";
        document.getElementById("5VOPTION").innerText = "NOT5VOLT";

        document.getElementById("12VOPTION").value = "NOT12VOLT"
        document.getElementById("12VOPTION").innerText = "NOT12VOLT";
        desc_rev_cart = desc_rev_NOT;
        updateDefaultReviews();
        localStorage.setItem('cart',JSON.stringify(cart));
        
        break;
        case "NAND":
        console.log("NAND DETAILS In");
        cart = cartNAND;
        variationswithCost = variationNAND;
        document.getElementById("5VOPTION").value = "NAND5VOLT";
        document.getElementById("5VOPTION").innerText = "NAND5VOLT";

        document.getElementById("12VOPTION").value = "NAND12VOLT"
        document.getElementById("12VOPTION").innerText = "NAND12VOLT";
        desc_rev_cart = desc_rev_NAND;
        updateDefaultReviews();
        localStorage.setItem('cart',JSON.stringify(cart));
        break;
        case "NOR":
        console.log("nor DETAILS In");

        cart = cartNOR;
        variationswithCost = variationNOR;
        document.getElementById("5VOPTION").value = "NOR5VOLT";
        document.getElementById("5VOPTION").innerText = "NOR5VOLT";

        document.getElementById("12VOPTION").value = "NOR12VOLT"
        document.getElementById("12VOPTION").innerText = "NOR12VOLT";
        desc_rev_cart = desc_rev_NOR;
        updateDefaultReviews();
        localStorage.setItem('cart',JSON.stringify(cart));
        break;
        case "XOR":
        console.log("xor DETAILS In");

        cart = cartXOR;
        variationswithCost = variationXOR;
        document.getElementById("5VOPTION").value = "XOR5VOLT";
        document.getElementById("5VOPTION").innerText = "XOR5VOLT";

        document.getElementById("12VOPTION").value = "XOR12VOLT"
        document.getElementById("12VOPTION").innerText = "XOR12VOLT";
        desc_rev_cart = desc_rev_XOR;
        updateDefaultReviews();
        localStorage.setItem('cart',JSON.stringify(cart));
        break;
        case "XNOR":
        console.log("xnor DETAILS In");

        cart = cartXNOR;
        variationswithCost = variationXNOR;
        document.getElementById("5VOPTION").value = "XNOR5VOLT";
        document.getElementById("5VOPTION").innerText = "XNOR5VOLT";

        document.getElementById("12VOPTION").value = "XNOR12VOLT"
        document.getElementById("12VOPTION").innerText = "XNOR12VOLT";
        desc_rev_cart = desc_rev_XNOR;
        updateDefaultReviews();
        localStorage.setItem('cart',JSON.stringify(cart));
        break;
        default:
        console.log("case defaulted");
    }
    display();
}