  // Fonction pour bloquer le défilement
        function blockScroll() {
            const stopScrollDiv = document.querySelector('.stop-scroll');
            const stopPosition = stopScrollDiv.offsetTop;

            // Vérifie si l'utilisateur a défilé au-delà de la zone de blocage
            window.addEventListener('scroll', function() {
                if (window.scrollY >= stopPosition) {
                    window.scrollTo(0, stopPosition);
                }
            });
        }

        blockScroll(); // Appelle la fonction de blocage du défilement
