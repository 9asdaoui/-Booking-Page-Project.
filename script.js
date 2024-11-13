const stepMenus = document.querySelectorAll('.formbold-step-menu');
const formSteps = document.querySelectorAll('.formbold-form-step');
const backBtn = document.querySelector('.formbold-back-btn');
const nextBtn = document.querySelector('.formbold-next-btn');

let currentStep = 0;

stepMenus[currentStep].classList.add('active');
formSteps[currentStep].classList.add('active');

function next() {
    if (currentStep < stepMenus.length - 1) {
        stepMenus[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        
        currentStep++;
        
        stepMenus[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    }
    updateButtons();
    console.log(span);

};

function back() {
    if (currentStep > 0) {
        stepMenus[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        
        currentStep--;
        
        stepMenus[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    }
    updateButtons();
};
updateButtons();

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

    if (currentStep === 2) {
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

    if (adultnum + kidsnum < 16){
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

    if (adultnum + kidsnum < 16){
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
        button.setAttribute("style", "border-radius: 8px; width: 60px; height: 40px; font-size: 15pt; color: #ffffff; background-color: #6cb1d9; border: 2px solid #6cb1d9; transition: background-color 0.3s ease;");
        button.setAttribute("active", "false");
        countes--;
    } else {
        if (countes < adultnum + kidsnum) {
            button.setAttribute("style", "border-radius: 8px; width: 60px; height: 40px; font-size: 15pt; color: #ffffff; background-color: #07b607; border: 3px solid #92cb92; transition: background-color 0.3s ease;");
            button.setAttribute("active", "true");
            countes++;
        } else {
            alert("You can't choose more seats.");
        }
    }
}
let span;
function check(id){
    span = document.getElementById("btn" + id).textContent;
}




function Ticket() {
      let prix = parseInt(document.getElementById("Total").textContent);
      if(prix != 0){

        let adultnum = parseInt(document.getElementById("number1").textContent);
        let kidsnum = parseInt(document.getElementById("number2").textContent);
        let Depar = document.getElementById("depar").value;
        let Arriv = document.getElementById("arrive").value;
        let Date = document.getElementById("date").value;  

        let parentDiv = document.getElementById('activebtn'); 
        let elements = parentDiv.querySelectorAll('[active="true"]');
        

        for (let i=0  ; i < adultnum ; i++){

        
            let card = document.getElementById("card");
            let div = document.createElement("div");
            div.setAttribute("class", "Ticket");
            div.setAttribute("id", "Ticket"+i);
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
            date.innerHTML = "Date :"
            let dspan = document.createElement("span");
            dspan.setAttribute("id", "edate");
            dspan.textContent = Date;
            date.appendChild(dspan);
            div.appendChild(date);


            let time = document.createElement("p");
            time.innerHTML = "Time : "
            let timespan = document.createElement("span");
            timespan.setAttribute("id", "time");
            timespan.textContent = span;
            time.appendChild(timespan);
            div.appendChild(time);

            let seat = document.createElement("p");
            seat.innerHTML = "seat number : "
            let seatspan = document.createElement("span");
            seatspan.setAttribute("id", "seat");
            seatspan.textContent = elements[i].textContent;
            seat.appendChild(seatspan);
            div.appendChild(seat);


            let Prix = document.createElement("p");
            Prix.innerHTML = "Prix : "
            let pspan = document.createElement("span");
            pspan.setAttribute("id", "prix");
            pspan.textContent = "500 DH";
            Prix.appendChild(pspan);
            div.appendChild(Prix);
        
        
            let qrContainer = document.createElement("div");
            qrContainer.setAttribute("id", "qrcode");
            div.appendChild(qrContainer);
        
            let qrData = `From: ${Depar}, To: ${Arriv}, Date: ${Date}, Price: 500, Seat: ${elements[i].textContent}`;
        
            new QRCode(qrContainer, {
                text: qrData,
                width: 100,    
                height: 100,   
            });
            
            let button = document.createElement("button");
            button.innerHTML = "⇓";
            button.setAttribute("type", "button");
            button.setAttribute("id", "downloadButton" + i);
            button.setAttribute("onclick", `downloadCardAsPDF(${i})`);
            div.appendChild(button);


            
         }
        for (let i=adultnum  ; i < kidsnum+adultnum; i++){

            
            let card = document.getElementById("card");
            card.setAttribute("class","Ticket-card")
            let div = document.createElement("div");
            div.setAttribute("class", "Ticket");
            div.setAttribute("id", "Ticket"+i);
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
            date.innerHTML = "Date :"
            let dspan = document.createElement("span");
            dspan.setAttribute("id", "edate");
            dspan.textContent = Date;
            date.appendChild(dspan);
            div.appendChild(date);

            let time = document.createElement("p");
            time.innerHTML = "Time : "
            let timespan = document.createElement("span");
            timespan.setAttribute("id", "time");
            timespan.textContent = span
            time.appendChild(timespan);
            div.appendChild(time);
            
            let seat = document.createElement("p");
            seat.innerHTML = "seat number : "
            let seatspan = document.createElement("span");
            seatspan.setAttribute("id", "seat");
            seatspan.textContent = elements[i].textContent;
            seat.appendChild(seatspan);
            div.appendChild(seat);

        
            let Prix = document.createElement("p");
            Prix.innerHTML = "Prix : "
            let pspan = document.createElement("span");
            pspan.setAttribute("id", "prix");
            pspan.textContent = "100 DH";
            Prix.appendChild(pspan);
            div.appendChild(Prix);
        
        
            let qrContainer = document.createElement("div");
            qrContainer.setAttribute("id", "qrcode");
            div.appendChild(qrContainer);
        
            let qrData = `From: ${Depar}, To: ${Arriv}, Date: ${Date}, Price: 100, Seat: ${elements[i].textContent}`;
        
            new QRCode(qrContainer, {
                text: qrData,
                width: 100,    
                height: 100,   
            });
            

            let button = document.createElement("button");
            button.innerHTML = "⇓";
            button.setAttribute("type", "button");
            button.setAttribute("onclick", `downloadCardAsPDF(${i})`);
            div.appendChild(button);
        }       
}
}

function downloadCardAsPDF(i) {
    const cardElement = document.getElementById("Ticket"+i);
    const options = {
        margin: 0.1, 
        filename: 'ticket.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 1.5 }, 
        jsPDF: { unit: 'in', format: [5.5, 3.5], orientation: 'portrait' }
    };
    html2pdf().set(options).from(cardElement).save();    
}




function Delet() {
    let Tickets = document.getElementsByClassName('Ticket-card'); 
    for (let i = 0; i < Tickets.length; i++) {
        Tickets[i].innerHTML = ''; 
    }
}

function switsh(){
    let temp = document.getElementById("depar").value;
    document.getElementById("depar").value=  document.getElementById("arrive").value;
    document.getElementById("arrive").value= temp;
}

function DateValidation() {

    let date = document.getElementById("date").value;

    const inputDate = new Date(date);

    const comparisonDate = new Date("2024-11-20");

    if (inputDate < comparisonDate) {
        let page = document.getElementById("searchP");
        page.setAttribute("style", "display: none;");
    } else{
        let page = document.getElementById("searchP");
        page.setAttribute("style", "");
    }
}


