(function() {
    console.log("🟢 RĘCZNY START: Skrypt ładowany prosto z konsoli (Wersja: JEDEN STRZAŁ)!");

    const przyciski = Array.from(document.querySelectorAll('input[type="submit"], button, input[type="button"]'));
    const przycisk = przyciski.find(el => 
        (el.value && el.value.includes("Rejestruj")) || 
        (el.innerText && el.innerText.includes("Rejestruj"))
    ) || document.querySelector('input[type="submit"]');

    if (!przycisk) {
        console.log("🔴 BŁĄD: Nie widzę przycisku 'Rejestruj' na ekranie.");
        return; 
    }

    console.log("✅ Snajper PWr uzbrojony! Czekam w ukryciu na słowo 'teraz'...");

    const timer = setInterval(() => {
        // Wypatrywanie słowa "teraz"
        if (/\bteraz\b/i.test(document.body.innerText)) {
            // Najpierw całkowicie niszczymy pętlę, żeby mieć 100% pewności, że skrypt nie odpali się drugi raz
            clearInterval(timer); 
            
            // Następnie oddajemy jeden, czysty strzał
            przycisk.click();
            console.log("🔥 BOOM! Znalazłem 'teraz'! Oddano JEDEN celny strzał!");
        }
    }, 20); // Skrypt sprawdza stronę 50 razy na sekundę
})();