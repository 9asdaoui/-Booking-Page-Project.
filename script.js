// Select all the step menu items (the steps shown at the top) and form steps (content of each step)
const stepMenus = document.querySelectorAll('.formbold-step-menu');  // Select all the step menu items (1, 2, 3, etc.)
const formSteps = document.querySelectorAll('.formbold-form-step');  // Select all the form steps (content of each step)
const backBtn = document.querySelector('.formbold-back-btn');  // Select the 'Back' button
const nextBtn = document.querySelector('.formbold-next-btn');  // Select the 'Next' button

let currentStep = 0;  // Start at the first step (index 0)

// Add 'active' class to the current step and menu (first one is active by default)
stepMenus[currentStep].classList.add('active');
formSteps[currentStep].classList.add('active');

// When the "Next" button is clicked
nextBtn.addEventListener('click', function() {
    // Check if we are not at the last step
    if (currentStep < stepMenus.length - 1) {
        // Remove 'active' class from current step and menu
        stepMenus[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        
        // Move to the next step (increase the current step by 1)
        currentStep++;
        
        // Add 'active' class to the new current step and menu
        stepMenus[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    }
    // Update the button states (enable/disable buttons)
    updateButtons();
});

// When the "Back" button is clicked
backBtn.addEventListener('click', function() {
    // Check if we are not at the first step
    if (currentStep > 0) {
        // Remove 'active' class from current step and menu
        stepMenus[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        
        // Move to the previous step (decrease the current step by 1)
        currentStep--;
        
        // Add 'active' class to the new current step and menu
        stepMenus[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    }
    // Update the button states (enable/disable buttons)
    updateButtons();
});

// Function to update the button states (for disabling next/back when at the first or last step)
function updateButtons() {
    // If we're at the first step, disable the back button
    if (currentStep === 0) {
        backBtn.disabled = true;  // Disable 'Back' button
    } else {
        backBtn.disabled = false;  // Enable 'Back' button
    }
    
    // If we're at the last step, disable the next button
    if (currentStep === stepMenus.length - 1) {
        nextBtn.disabled = true;  // Disable 'Next' button
    } else {
        nextBtn.disabled = false;  // Enable 'Next' button
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

let totalnumber = 0;
function totalres(){
    let number2 = document.getElementById("number2");
    let number1 = document.getElementById("number1");
    totalnumber =  parseInt(number1.textContent) +  parseInt(number2.textContent);
    return totalnumber;
}

function plus1(){

   let number1 = document.getElementById("number1");
   let prix = document.getElementById("Total");
   prix.textContent = parseInt(prix.textContent) + 500;
   number1.textContent = parseInt(number1.textContent) + 1;
  totalres()

}
function plus2(){
    let number2 = document.getElementById("number2");
    let prix = document.getElementById("Total");
   prix.textContent = parseInt(prix.textContent) + 100;
   number2.textContent = parseInt(number2.textContent) + 1;

   totalres()

}


function mins1(){

   let number1 = document.getElementById("number1");
   let prix = document.getElementById("Total");
   if(parseInt(number1.textContent)!= 0){ 
    prix.textContent = parseInt(prix.textContent) - 500;
   number1.textContent = parseInt(number1.textContent) - 1;}

   totalres()
}
function mins2(){
    let number2 = document.getElementById("number2");
    let prix = document.getElementById("Total");
    if(parseInt(number2.textContent)!= 0){
   prix.textContent = parseInt(prix.textContent) - 100;
   number2.textContent = parseInt(number2.textContent) - 1;}

   totalres()
}


function changeS(id) {
    
    let button = document.getElementById("b" + id);

    
    if (button.getAttribute("active") == "true") {
       
        button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;");
        button.setAttribute("active", "false"); 
    } else {
       
        button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #008000; border: 3px solid #2e6c8e;");
        button.setAttribute("active", "true");
    }
}


// let counter = 1;
// function changeS(id) { 
    
//     let button = document.getElementById("b"+id);
    
//     if (counter === 1) {
//         button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #008000; border: 3px solid #2e6c8e;");
//         counter = 2;
//     } else if (counter === 2) {
//         button.setAttribute("style", "border-radius: 5px; width: 50px; height: 50px; font-size: 15pt; color: #2e6c8e; background-color: #a6cde2; border: 3px solid #2e6c8e;");
//         counter = 1; 
//     }
// }

function ticket() {
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
            div.setAttribute("class", "ticket");
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
            card.setAttribute("class","ticket-card")
            let div = document.createElement("div");
            div.setAttribute("class", "ticket");
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

function delet() {
    let tickets = document.getElementsByClassName('ticket-card');  // Get all elements with class 'ticket'
    for (let i = 0; i < tickets.length; i++) {
        tickets[i].innerHTML = '';  // Clear the content of each ticket
    }
}