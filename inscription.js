function inscription(event){
    //récupérons tous les champs et les spans
    var nom = document.getElementById('name');
    var email = document.getElementById('email');
    var password = document.getElementById('password');
    var password_confirm = document.getElementById('passwordconfirm');

    var name_span = document.getElementById('name-error')
    var email_span = document.getElementById("email-error")
    var pwd_span = document.getElementById("password-error")
    var pwd_confirm_span = document.getElementById("password-confirm-error")

    // pwd_confirm_span.style.color = pwd_span.style.color = email_span.style.color = name_span.style.color = "red";


    if (name_span) name_span.textContent = '';
    if (email_span) email_span.textContent = '';
    if (pwd_span) pwd_span.textContent = '';
    if (pwd_confirm_span) pwd_confirm_span.textContent = '';

    // nom
    if (!nom || !nom.value || !nom.value.trim()) {
        if (name_span) name_span.textContent = 'Le nom est requis.';
    }

    // email
    if (!email || !email.value || !email.value.trim()) {
        if (email_span) email_span.textContent = "L'email est requis.";
    } else {
        var re = /^\S+@\S+\.\S+$/;
        if (!re.test(email.value.trim())) {
            if (email_span) email_span.textContent = "Le format de l'email est invalide.";
        }
    }

    // mot de passe
    if (!password || !password.value) {
        if (pwd_span) pwd_span.textContent = 'Le mot de passe est requis.';
    }

    // mot de passe confirmation
    if (!password_confirm || !password_confirm.value) {
        if (pwd_confirm_span) pwd_confirm_span.textContent = 'La confirmation du mot de passe est requise.';
    }

    // verifions si les mots de passe correspondent
    if (password && password_confirm && password.value && password_confirm.value) {
        if (password.value !== password_confirm.value) {
            if (pwd_confirm_span) pwd_confirm_span.textContent = 'Les mots de passe ne correspondent pas.';
        }
    }

    var hasError = (name_span && name_span.textContent !== '') || (email_span && email_span.textContent !== '') || (pwd_span && pwd_span.textContent !== '') || (pwd_confirm_span && pwd_confirm_span.textContent !== '');
    if (hasError) {
        if (event && event.preventDefault) event.preventDefault();
        
            if (name_span && name_span.textContent) {
                if (nom) nom.focus();
            } else if (email_span && email_span.textContent) {
                if (email) email.focus();
            } else if (pwd_span && pwd_span.textContent) {
                if (password) password.focus();
            } else if (pwd_confirm_span && pwd_confirm_span.textContent) {
                if (password_confirm) password_confirm.focus();
            }
        
        return false;
    }
    return true;
}

document.addEventListener('DOMContentLoaded', function(){
    var form = document.getElementById('form');
    if (!form) return;
    if (form._validationAttached) return;
    form._validationAttached = true;
    form.addEventListener('submit', function(e){
        var ok = inscription(e);
        if (!ok) e.preventDefault();
    });
});
