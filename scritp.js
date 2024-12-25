
document.getElementById('contactForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const nom = document.getElementById('nom').value.trim();
    const prenom = document.getElementById('prenom').value.trim();
    const email = document.getElementById('email').value.trim();
    const objet = document.getElementById('objet').value.trim();
    const message = document.getElementById('message').value.trim();

    if (!nom || !prenom || !email || !objet || !message) {
        alert('Veuillez remplir tous les champs obligatoires.');
        return;
    }

    if (!email.includes('@') || !email.includes('.')) {
        alert('Veuillez entrer une adresse e-mail valide.');
        return;
    }

    alert('Merci pour votre message ! Nous vous répondrons dans les plus brefs délais.');
    this.reset();
});