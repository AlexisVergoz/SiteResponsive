window.onload = () => {
    // On récupère l'élément "fleche-droite"
    let flecheDroite = document.querySelector("#fleche-droite");

    // setInterval(function(){
    // On "simule" un clic sur la flèche droite
    //     flecheDroite.childElementCount();
    // }, 5000)
    // On stocke l'intervalle dans change, ce qui permettra de l'arrêter
    let change = setInterval(avanceImage, 5000);

    // On écoute l'évènement "click" sur flecheDroite
    flecheDroite.addEventListener("click", avanceImage);

    // On récupère l'élément "fleche-gauche"
    let flecheGauche = document.querySelector("#fleche-gauche");

    // On écoute l'évènement "click" sur flecheGauche
    flecheGauche.addEventListener("click", function () {
        //On récupère l'image active
        let image = document.querySelector("#carousel .active");

        // On lui enlève la classe "active"
        image.classList.remove("active");

        // On doit mettre la classe "active" à la figure qui précède ou à la dernière si je suis sur la 1ère figure
        // Si l'élément qui précède l'image n'est pas inexistant
        if (image.previousElementSibling != null) {
            // On met la classe active à l'élément précédent
            image.previousElementSibling.classList.add("active");
        } else {
            // On met la classe active à la dernière figure
            // On va chercher la dernière figure
            let figure = document.querySelector("#carousel figure:last-of-type");

            figure.classList.add("active");
        }
    });
    // gestion du survol
    // On recupère l'élément #carousel
    let carousel = document.querySelector("#carousel");

    // On écoute l'évènement "mouseenter"
    carousel.addEventListener("mouseenter", function () {
        // se declenche quand la souris entre sur le carousel

        // On arrête le défilement
        clearInterval(change);
    });
    // On écoute l'évènement "mouseenter"
    carousel.addEventListener("mouseleave", function () {
        // se declenche quand la souris entre sur le carousel
        // On reprend le défilement
        change = setInterval(avanceImage, 5000)
    });
    // mettre la nav version mobile:
    /*let menu = document.querySelector(".menu-button")
    menu.addEventListener("click", function(){
        let ul = document.querySelector("nav ul");
        ul.style.display = "initial";
    })*/
} // fin window.onload

function avanceImage() {
    // L'utilisateur a fait 1 clic sur la flèche droite
    // On doit déplacer la classe "active" d'une balise figure à la suivante ou à la 1ère si on est à la fin du diaporama
    // On récupère la figure qui a la classe active
    let image = document.querySelector("#carousel .active");

    // On lui enlève la classe active
    image.classList.remove("active");

    // On met la classe active à la balise figure qui suit, ou à la 1ère si la suivante est une span
    // Si l'élément qui suit mon image est une figure
    if (image.nextElementSibling.localName === "figure") {
        // On met la classe active à l'élément suivant notre image
        image.nextElementSibling.classList.add("active");
    } else {
        // On met la classe active à la 1ère figure du carousel
        // On récupère la 1ère figure
        let figure = document.querySelector("#carousel figure:first-of-type");

        // On lui met la classe "active"
        figure.classList.add("active");
    }
}