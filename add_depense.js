// Initialisation de la date du jour
document.addEventListener('DOMContentLoaded', function() {
    // Définir la date d'aujourd'hui comme valeur par défaut
    const today = new Date();
    const formattedDate = today.toISOString().split('T')[0];
    document.getElementById('date_depense').value = formattedDate;
    
    // Gestion de l'annulation
    document.getElementById('btn-annuler').addEventListener('click', function() {
        if(confirm('Voulez-vous vraiment annuler ? Toutes les données saisies seront perdues.')) {
            document.getElementById('form-depense').reset();
            // Remettre la date d'aujourd'hui
            document.getElementById('date_depense').value = formattedDate;
        }
    });
    
    // Gestion de la soumission du formulaire
    document.getElementById('form-depense').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Validation des champs
        const nomDepense = document.getElementById('nom_depense').value.trim();
        const montant = document.getElementById('montant_depense').value;
        const date = document.getElementById('date_depense').value;
        const categorie = document.getElementById('id_cat').value;
        
        if (!nomDepense || !montant || !date || !categorie) {
            alert('Veuillez remplir tous les champs obligatoires.');
            return;
        }
        
        // Simulation d'envoi des données
        const depense = {
            nom_depense: nomDepense,
            montant_depense: montant,
            date_depense: date,
            id_cat: categorie
        };
        
        console.log('Dépense à ajouter:', depense);
        
        // Ici, normalement, on enverrait les données au serveur
        // simulation de l'envoi
        
        // Redirection vers la page de liste après validation
        alert('Dépense ajoutée avec succès !');
        window.location.href = 'liste-depenses.html';
    });
});