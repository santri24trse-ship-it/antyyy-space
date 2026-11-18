
// welcome message
console.log("Welcome to Antyyy's Space ♡");

// smooth navigation
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        console.log("Exploring Antyyy's Space!");
    });
});
