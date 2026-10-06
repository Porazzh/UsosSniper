const slowo = 'teraz';
const regex = new RegExp(`\\b${slowo}\\b`, 'i');

(function() {
    console.log("skrypt odpalony");

    const przyciski = Array.from(document.querySelectorAll('input[type="submit"], button, input[type="button"]'));
    const przycisk = przyciski.find(el => 
        (el.value && el.value.includes("Rejestruj")) || 
        (el.innerText && el.innerText.includes("Rejestruj"))
    ) || document.querySelector('input[type="submit"]');

    if (!przycisk) {
        console.log("brak 'Rejestruj' na ekranie.");
        return;
    }

    console.log(`Czekam na słowo '${slowo}'`);

    const timer = setInterval(() => {
        if (regex.test(document.body.textContent)) {
            clearInterval(timer); 
            przycisk.click();
            console.log("strzelone");
        }
    }, 20); // 50/s
})();
