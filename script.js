const stepMenus = document.querySelectorAll('.formbold-step-menu');
const formSteps = document.querySelectorAll('.formbold-form-step');
const backBtn = document.querySelector('.formbold-back-btn');
const nextBtn = document.querySelector('.formbold-next-btn');

let currentStep = 0;

stepMenus[currentStep].classList.add('active');
formSteps[currentStep].classList.add('active');

nextBtn.addEventListener('click', function() {
    if (currentStep < stepMenus.length - 1) {
        stepMenus[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        
        currentStep++;
        
        stepMenus[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    }
    updateButtons();
});

backBtn.addEventListener('click', function() {
    if (currentStep > 0) {
        stepMenus[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        
        currentStep--;
        
        stepMenus[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    }
    updateButtons();
});

function updateButtons() {
    if (currentStep === 0) {
    } else {
        backBtn.disabled = false;
    }
    
    if (currentStep === stepMenus.length - 1) {
        nextBtn.disabled = true; 
    } else {
        nextBtn.disabled = false; 
    }
}

function updateButtons() {
   
    if (currentStep === 0) {
        backBtn.style.display = 'none';
    } else {
        backBtn.style.display = 'block';
    }

 
    if (currentStep === stepMenus.length - 1) {
        nextBtn.style.display = 'none';
    } else {
        nextBtn.style.display = 'block';
    }
}

let TotalNumber = 0;
function TotalRes(){
    let number2 = document.getElementById("number2");
    let number1 = document.getElementById("number1");
    TotalNumber =  parseInt(number1.textContent) +  parseInt(number2.textContent);
    return TotalNumber;
}

function Plus1(){
    let adultnum = parseInt(document.getElementById("number1").textContent);
    let kidsnum = parseInt(document.getElementById("number2").textContent);
    if (adultnum + kidsnum < 8){
   let number1 = document.getElementById("number1");
   let prix = document.getElementById("Total");
   prix.textContent = parseInt(prix.textContent) + 500;
   number1.textContent = parseInt(number1.textContent) + 1;
  TotalRes()
    }
}
function Plus2(){
    let adultnum = parseInt(document.getElementById("number1").textContent);
    let kidsnum = parseInt(document.getElementById("number2").textContent);
    if (adultnum + kidsnum < 8){
    let number2 = document.getElementById("number2");
    let prix = document.getElementById("Total");
   prix.textContent = parseInt(prix.textContent) + 100;
   number2.textContent = parseInt(number2.textContent) + 1;

   TotalRes()
    }
}


function Mins1(){

   let number1 = document.getElementById("number1");
   let prix = document.getElementById("Total");
   if(parseInt(number1.textContent)!= 0){ 
    prix.textContent = parseInt(prix.textContent) - 500;
   number1.textContent = parseInt(number1.textContent) - 1;}

   TotalRes()
}
function Mins2(){
    let number2 = document.getElementById("number2");
    let prix = document.getElementById("Total");
    if(parseInt(number2.textContent)!= 0){
   prix.textContent = parseInt(prix.textContent) - 100;
   number2.textContent = parseInt(number2.textContent) - 1;}

   TotalRes()
}

let countes = 0;
function ChangeS(id) {
    let adultnum = parseInt(document.getElementById("number1").textContent);
    let kidsnum = parseInt(document.getElementById("number2").textContent);
    
    let button = document.getElementById("b" + id);

     
    if (button.getAttribute("active") == "true") {
       
        button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;");
        button.setAttribute("active", "false"); 
        countes--;
    } else {
       if(countes < adultnum+kidsnum){
        button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #008000; border: 3px solid #2e6c8e;");
        button.setAttribute("active", "true");
        countes++;
    } else {
        alert("You can't choose more seats.");
    }
}
}


// let counter = 1;
// function ChangeS(id) { 
    
//     let button = document.getElementById("b"+id);
    
//     if (counter === 1) {
//         button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #008000; border: 3px solid #2e6c8e;");
//         counter = 2;
//     } else if (counter === 2) {
//         button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;");
//         counter = 1; 
//     }
// }

function Ticket() {
      let prix = parseInt(document.getElementById("Total").textContent);
      if(prix != 0){
        let adultnum = parseInt(document.getElementById("number1").textContent);
        let kidsnum = parseInt(document.getElementById("number2").textContent);
        
        for (let i=0  ; i < adultnum ; i++){
            let Depar = document.getElementById("depar").value;
            let Arriv = document.getElementById("arrive").value;
            let Date = document.getElementById("date").value;
            
        
            let card = document.getElementById("card");
            let div = document.createElement("div");
            div.setAttribute("class", "Ticket");
            card.appendChild(div);
        
            let from = document.createElement("p");
            from.innerHTML = "from : "
            let fspan = document.createElement("span");
            fspan.setAttribute("id", "from");
            fspan.textContent = Depar;
            from.appendChild(fspan);
            div.appendChild(from);
        
            let to = document.createElement("p");
            to.innerHTML = "to : "
            let tspan = document.createElement("span");
            tspan.setAttribute("id", "to");
            tspan.textContent = Arriv;
            to.appendChild(tspan);
            div.appendChild(to);
        
            let date = document.createElement("p");
            date.innerHTML = "Date de réservation :"
            let dspan = document.createElement("span");
            dspan.setAttribute("id", "edate");
            dspan.textContent = Date;
            date.appendChild(dspan);
            div.appendChild(date);
        
            let Prix = document.createElement("p");
            Prix.innerHTML = "Prix : "
            let pspan = document.createElement("span");
            pspan.setAttribute("id", "prix");
            pspan.textContent = "500";
            Prix.appendChild(pspan);
            div.appendChild(Prix);
        
        
            let qrContainer = document.createElement("div");
            qrContainer.setAttribute("id", "qrcode");
            div.appendChild(qrContainer);
        
            let qrData = `From: ${Depar}, To: ${Arriv}, Date: ${Date}, Price: ${prix}`;
        
            new QRCode(qrContainer, {
                text: qrData,
                width: 100,    
                height: 100,   
            });
            
         }
        for (let i=0  ; i < kidsnum ; i++){
            let Depar = document.getElementById("depar").value;
            let Arriv = document.getElementById("arrive").value;
            let Date = document.getElementById("date").value;
            
        
            let card = document.getElementById("card");
            card.setAttribute("class","Ticket-card")
            let div = document.createElement("div");
            div.setAttribute("class", "Ticket");
            card.appendChild(div);
        
            let from = document.createElement("p");
            from.innerHTML = "from : "
            let fspan = document.createElement("span");
            fspan.setAttribute("id", "from");
            fspan.textContent = Depar;
            from.appendChild(fspan);
            div.appendChild(from);
        
            let to = document.createElement("p");
            to.innerHTML = "to : "
            let tspan = document.createElement("span");
            tspan.setAttribute("id", "to");
            tspan.textContent = Arriv;
            to.appendChild(tspan);
            div.appendChild(to);
        
            let date = document.createElement("p");
            date.innerHTML = "Date de réservation :"
            let dspan = document.createElement("span");
            dspan.setAttribute("id", "edate");
            dspan.textContent = Date;
            date.appendChild(dspan);
            div.appendChild(date);
        
            let Prix = document.createElement("p");
            Prix.innerHTML = "Prix : "
            let pspan = document.createElement("span");
            pspan.setAttribute("id", "prix");
            pspan.textContent = "100";
            Prix.appendChild(pspan);
            div.appendChild(Prix);
        
        
            let qrContainer = document.createElement("div");
            qrContainer.setAttribute("id", "qrcode");
            div.appendChild(qrContainer);
        
            let qrData = `From: ${Depar}, To: ${Arriv}, Date: ${Date}, Price: ${prix}`;
        
            new QRCode(qrContainer, {
                text: qrData,
                width: 100,    
                height: 100,   
            });
        }
        
}
}

function Delet() {
    let Tickets = document.getElementsByClassName('Ticket-card'); 
    for (let i = 0; i < Tickets.length; i++) {
        Tickets[i].innerHTML = ''; 
    }
}