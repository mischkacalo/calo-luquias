// Function to give and display a randomly generated task 
function generateTask() {
    const tasks = [
        "Create an outfit inspired by the 80s.",
        "Style an outfit for a rainy day.",
        "Design a look for a red carpet event.",
        "Put together a casual weekend outfit.",
        "Create a monochrome outfit using only shades of one color.",
        "Design a beachwear look for summer vibes.",
        "Style a winter outfit for a snowy day.",
        "Create a sporty look for a workout session.",
        "Put together an outfit for a formal dinner party.",
        "Style an outfit based on your favorite season."
    ];
    document.getElementById('task').innerText = tasks[Math.floor(Math.random() * tasks.length)];
}

// Make clothing items clickable 
document.querySelectorAll('.clothing-item').forEach(item => {
    item.addEventListener('click', (e) => {
        console.log('Clothing item clicked:', e.target.src); // Debug log
        const itemType = e.target.classList.contains('top') ? 'top' : 
                         e.target.classList.contains('bottom') ? 'bottom' : 
                         'accessory';
        updateModel(e.target.src, itemType);
    });
});

// Function to update the model's outfit
function updateModel(src, type) {
    console.log(`Updating model with ${type}: ${src}`); // Debug log
    const model = document.getElementById('model-container');
    let existingLayer = model.querySelector(`#${type}-layer img`);
    if (existingLayer) {
        existingLayer.src = src; // Replace the existing layer if it exists
    } else {
        const img = document.createElement('img');
        img.src = src;
        img.className = type; // Assign type as class (top, bottom, accessory)
        img.style.position = "absolute";
        img.style.width = "100%";
        img.style.height = "100%";
        img.style.objectFit = "contain";
        model.querySelector(`#${type}-layer`).appendChild(img);
    }
}

// Button to rest outfit 
document.getElementById('resetButton').addEventListener('click', () => {
    console.log('Reset button clicked'); // Debug log
    const layers = document.querySelectorAll('#model-container img:not(#model-base)');
    layers.forEach(layer => layer.remove());
});
