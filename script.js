const stepMenus = document.querySelectorAll('.formbold-step-menu');
const formSteps = document.querySelectorAll('.formbold-form-step');
const backBtn = document.querySelector('.formbold-back-btn');
const nextBtn = document.querySelector('.formbold-next-btn');
let currentStep = 0;

stepMenus[currentStep].classList.add('active');
formSteps[currentStep].classList.add('active');

nextBtn.addEventListener('click', () => {
    if (currentStep < stepMenus.length - 1) {
        stepMenus[currentStep].classList.remove('active');
        formSteps[currentStep].classList.remove('active');
        currentStep++;
        stepMenus[currentStep].classList.add('active');
        formSteps[currentStep].classList.add('active');
    }
    updateButtons();
});

backBtn.addEventListener('click', () => {
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
    backBtn.style.display = currentStep === 0 ? 'none' : 'block';
    nextBtn.style.display = currentStep === stepMenus.length - 1 ? 'none' : 'block';
}
