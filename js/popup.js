 // Fonction pour montrer la pop-up avec une image spécifique
        function showPopup(event, imageUrl) {
            const popup = document.getElementById('popup');
            const popupImage = document.getElementById('popup-image');
            popupImage.src = imageUrl; // Met à jour l'image de la pop-up
            popup.style.display = 'block';
            positionPopup(event);
        }

        // Fonction pour cacher la pop-up
        function hidePopup() {
            const popup = document.getElementById('popup');
            popup.style.display = 'none';
        }

        // Fonction pour positionner la pop-up
        function positionPopup(event) {
            const popup = document.getElementById('popup');
            const offset = 10; // Décalage de la pop-up par rapport à la souris
            popup.style.left = event.pageX + offset + 'px';
            popup.style.top = event.pageY + offset + 'px';
        }

        // Écouteur pour ajuster la position de la pop-up lors du déplacement de la souris
        document.querySelectorAll('.hover-darken').forEach(image => {
            image.addEventListener('mousemove', positionPopup);
        });
