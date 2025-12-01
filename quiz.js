// Fonction pour vérifier la réponse
function checkAnswer() {
    // Définir la réponse correcte
    const correctAnswer = "4";

    // Récupérer la réponse sélectionnée par l'utilisateur
    const selectedOption = document.querySelector('input[name="quiz"]:checked');

    // Vérifier si l'utilisateur a sélectionné une option
    if (!selectedOption) {
        document.getElementById("feedback").textContent = "Please select an answer!";
        return;
    }

    const userAnswer = selectedOption.value;

    // Comparer avec la réponse correcte
    if (userAnswer === correctAnswer) {
        document.getElementById("feedback").textContent = "Correct! Well done.";
        document.getElementById("feedback").style.color = "green";
    } else {
        document.getElementById("feedback").textContent = "That's incorrect. Try again!";
        document.getElementById("feedback").style.color = "red";
    }
}

// Ajouter l'écouteur d'événement au bouton
document.getElementById("submit-answer").addEventListener("click", checkAnswer);
