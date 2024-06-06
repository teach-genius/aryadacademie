$(document).ready(function() {
    // Ajoutez un effet de défilement en douceur pour les liens de navigation
    $('nav a').click(function(event) {
        event.preventDefault();
        $('html, body').animate({
            scrollTop: $(this.hash).offset().top
        }, 1000);
    });

    // Ajoutez un effet de survol pour le bouton d'appel à l'action
    $('.cta-button').mouseover(function() {
        $(this).css('background-color', '#0056b3');
    });
    $('.cta-button').mouseout(function() {
        $(this).css('background-color', '#007BFF');
    });

    // Ajoutez autant de scripts JavaScript que vous voulez
});
