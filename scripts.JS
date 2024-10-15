// scripts.js
document.getElementById('toggleIngredients').addEventListener('click', function() {
    const ingredients = document.getElementById('ingredients');
    ingredients.classList.toggle('hidden');
    this.textContent = ingredients.classList.contains('hidden') ? 'Show Ingredients' : 'Hide Ingredients';
});

document.getElementById('toggleSteps').addEventListener('click', function() {
    const steps = document.getElementById('steps');
    steps.classList.toggle('hidden');
    this.textContent = steps.classList.contains('hidden') ? 'Show Steps' : 'Hide Steps';
});

document.getElementById('startCooking').addEventListener('click', function() {
    const steps = document.querySelectorAll('#steps ol li');
    let currentStep = 0;

    const nextStep = () => {
        if (currentStep > 0) {
            steps[currentStep - 1].classList.remove('highlight');
        }
        if (currentStep < steps.length) {
            steps[currentStep].classList.add('highlight');
            currentStep++;
        }
    };

    nextStep();

    this.textContent = 'Next Step';
    this.removeEventListener('click', arguments.callee);
    this.addEventListener('click', nextStep);
});
