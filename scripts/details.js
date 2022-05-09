
let main = document.getElementById("payment");
main.innerHTML = show_upi();


document.getElementById("upi").addEventListener("click",myupi);
function myupi(){
    // console.log("my");
    document.getElementById("payment").innerHTML = show_upi();
}

function show_upi(){
    
    return `
    <div id="upiid">
    <div id="t1" style="margin-left:35px">
        <p>Pay Using UPI ID  
            <span id="spn">Applied: Extra 5% off with Your Order</span>
        </p>
    </div>
    <div id="h5" style="margin-left: 35px;">
    <h5>Enter UPI ID(Google Pay, BHIM, PhonePe & more) </h5>
    </div>
    <div class="col-9" >
        <input type="number" id="upi1" class="form-control form-control-md" style="margin-left:35px;" placeholder="Enter your UPI ID" required/>
        <button id="btnP">PLACE ORDER</button>
    </div>
    <div id="easy">
        <img id="i1" src="img/noun_trusted_27146262x_6Ekja92.webp" alt="">
        <span <p>100% Payment Protection, Easy Return Policy</span></p>
    </div>
    <div id="card">
        
        <img src="img/visa2x.webp" id="i2" alt="">
        <img src="img/master_card2x.webp" id="i3" alt="">
        <img src="img/american_express2x.webp" id="i4" alt="">
        <img src="img/rupay2x.webp" alt="" id="i5">
        <img src="img/net_banking2x.webp" alt="" id="i6">
    </div>
    <div id="icon">
        <i class="fa-solid fa-square-check" style="color:#00afef;"></i>
    <h6>By placing this order,you agree to Mamaearth's <span id="term">"Terms and Conditions</span> and <span id="cond">Privacy Policy</span></h6>
       </div>

</div>`
}


document.getElementById("credit").addEventListener("click",mycredit);

function mycredit(){
    document.getElementById("payment").innerHTML = show_credit();
}

function show_credit(){

    return `<div id="creditcard">
    <div id="t1" style="margin-left:35px">
        <p>Pay Using Credit Or Debit Cards 
            <span id="spn" style="margin-left:5px;" >Applied: Extra 5% off with Your Order</span>
        </p>
    </div>
    
      <div class="col-9" >
        <input type="text" id="cvv" class="form-control form-control-md" style="margin-left:35px;" placeholder="Card Number" required/>
    </div>
    <div id="details">
       <input type="text" id="mm" style="margin-left:35px;" placeholder="MM / YY" required>
    
       <input type="text" id="cv"   placeholder="CVV" required> 
       <img src="img/creditCardImage.webp" id="i7" style="height:43px;" alt="">
       <div class="col-9" >
        <input type="text" id="name" class="form-control form-control-md" style="margin-left:35px; margin-top: 10px;" placeholder="Name on the card" required/>
    </div>
       
    </div>
    <div class="col-9">
        <button id="btnP">PLACE ORDER</button>
    </div>
    <div id="easy">
        <img id="i1" src="img/noun_trusted_27146262x_6Ekja92.webp" alt="">
        <span <p>100% Payment Protection, Easy Return Policy</span></p>
    </div>
    <div id="card">
        
        <img src="img/visa2x.webp" id="i2" alt="">
        <img src="img/master_card2x.webp" id="i3" alt="">
        <img src="img/american_express2x.webp" id="i4" alt="">
        <img src="img/rupay2x.webp" alt="" id="i5">
        <img src="img/net_banking2x.webp" alt="" id="i6">
    </div>
    <div id="icon">
        <i class="fa-solid fa-square-check" style="color:#00afef;"></i>
    <h6>By placing this order,you agree to Mamaearth's <span id="term">"Terms and Conditions</span> and <span id="cond">Privacy Policy</span></h6>
       </div>

</div> `
}




document.getElementById("net").addEventListener("click",mynetbanking);

function mynetbanking(){
    document.getElementById("payment").innerHTML = show_net();
}

function show_net(){
    return` <div id="netbanking">
    <div id="t1" style="margin-left:35px">
        <p>Net Banking
            <span id="spn">Applied: Extra 5% off with Your Order</span>
        </p>
    </div>
    <div id="bank">
        <div id="hdfc">
     <img src="img/hdfc-logo.webp" alt="">
     <h5>HDFC</h5>
       </div>
         <div id="hdfc">
     <img src="img/sbi-logo.webp" alt="">
     <h5>SBI</h5>
         </div>
       <div id="hdfc">
     <img src="img/icici-logo.webp" alt="">
     <h5>ICICI</h5>
      </div>
        <div id="hdfc">
     <img src="img/axis-logo.webp" alt="">
     <h5>AXIS</h5>
       </div>
  </div>
    <div class="col-9" >
        <select id="select" class="form-select form-select-md" style="margin-left:35px;margin-top:25px">
            <option selected>Select Bank</option>
            <option value="1">SBI Bank</option>
            <option value="2">HDFC Bank</option>
            <option value="3">Axis Bank</option>
            <option value="4">ICICI Bank</option>
            <option value="5">Canara Bank</option>
        </select>
        <button id="btnP">PLACE ORDER</button>
    </div>
    <div id="easy">
        <img id="i1" src="img/noun_trusted_27146262x_6Ekja92.webp" alt="">
        <span <p>100% Payment Protection, Easy Return Policy</span></p>
    </div>
    <div id="card">
        
        <img src="img/visa2x.webp" id="i2" alt="">
        <img src="img/master_card2x.webp" id="i3" alt="">
        <img src="img/american_express2x.webp" id="i4" alt="">
        <img src="img/rupay2x.webp" alt="" id="i5">
        <img src="img/net_banking2x.webp" alt="" id="i6">
    </div>
    <div id="icon">
        <i class="fa-solid fa-square-check" style="color:#00afef;"></i>
    <h6>By placing this order,you agree to Mamaearth's <span id="term">"Terms and Conditions</span> and <span id="cond">Privacy Policy</span></h6>
       </div>

</div> `
}


document.getElementById("wallets").addEventListener("click",mywallets);

function mywallets(){
    document.getElementById("payment").innerHTML = show_wallets();
}

function show_wallets(){
    return `<div id="wallets1">
    <div id="t1" style="margin-left:35px">
        <p>Pay Using Online Wallets
            <span id="spn">Applied: Extra 5% off with Your Order</span>
        </p>
    </div>
    <div id="online">
       
     <a href="/">
         <img src="img/phonepe.png" alt="">
        </a>
       <a href="/"> 
     <img src="img/azpay.png" alt="">
    </a> 
      <a href="/">
     <img src="img/freecharge.png" alt="">
    </a>
        <a href="/">
     <img src="img/mobikwik.png" alt="">
    </a>
  </div>
    <div class="col-9" >
       
        <button id="btnP">PLACE ORDER</button>
    </div>
    <div id="easy">
        <img id="i1" src="img/noun_trusted_27146262x_6Ekja92.webp" alt="">
        <span <p>100% Payment Protection, Easy Return Policy</span></p>
    </div>
    <div id="card">
        
        <img src="img/visa2x.webp" id="i2" alt="">
        <img src="img/master_card2x.webp" id="i3" alt="">
        <img src="img/american_express2x.webp" id="i4" alt="">
        <img src="img/rupay2x.webp" alt="" id="i5">
        <img src="img/net_banking2x.webp" alt="" id="i6">
    </div>
    <div id="icon">
        <i class="fa-solid fa-square-check" style="color:#00afef;"></i>
    <h6>By placing this order,you agree to Mamaearth's <span id="term">"Terms and Conditions</span> and <span id="cond">Privacy Policy</span></h6>
       </div>

</div> `
}




document.getElementById("cash").addEventListener("click",cashOn);

function cashOn(){
    document.getElementById("payment").innerHTML = show_cashOn();
}
function show_cashOn(){
    return `<div id="cash_on">
    <div id="t1" style="margin-left:35px">
        <p>Cash On Delivery</p>
    </div>
    <div id="para">
        <p>Do you know you get an <span id="bold" style=" font-weight: bold;">Extra 5% Off </span>when you pay online? For everyone’s safety, we advise paying online to limit contact and help stop the spread of the virus.</p>
    </div>
    
    <div class="col-9" >
       
        <button id="btnP">PLACE ORDER</button>
    </div>
    <div id="easy">
        <img id="i1" src="img/noun_trusted_27146262x_6Ekja92.webp" alt="">
        <span <p>100% Payment Protection, Easy Return Policy</span></p>
    </div>
    <div id="card">
        
        <img src="img/visa2x.webp" id="i2" alt="">
        <img src="img/master_card2x.webp" id="i3" alt="">
        <img src="img/american_express2x.webp" id="i4" alt="">
        <img src="img/rupay2x.webp" alt="" id="i5">
        <img src="img/net_banking2x.webp" alt="" id="i6">
    </div>
    <div id="icon">
        <i class="fa-solid fa-square-check" style="color:#00afef;"></i>
    <h6>By placing this order,you agree to Mamaearth's <span id="term">"Terms and Conditions</span> and <span id="cond">Privacy Policy</span></h6>
       </div>

</div> `
}
