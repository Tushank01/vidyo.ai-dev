        function toggleTable() {
            var table = document.getElementsByTagName("table")[0];
            if (table.style.display === "none") {
                table.style.display = "";
            } else {
                table.style.display = "none";
            }
        }


        function updateTooltip(value) {
            var tooltip = document.getElementById("tooltip");
            var scrollbar = document.getElementById("scrollbar");
            var thumbWidth = 15; // Width of the scrollbar thumb
            var position = ((scrollbar.clientWidth - thumbWidth) / (parseInt(scrollbar.max) - parseInt(scrollbar.min)) * value + thumbWidth / 2 - 10) -14;
            tooltip.style.display = "block";
            tooltip.innerText = value + " clips";
            tooltip.style.left = position + "px";

            // Added hover effect based on scrollbar value
            var card = document.querySelectorAll(".card"); // Select all the cards
            if (value < 50) {
                card[0].classList.add("hovered");
                card[1].classList.remove("hovered");
                card[2].classList.remove("hovered");
                card[3].classList.remove("hovered");
            } else if (value >= 50 && value < 130) {
                card[0].classList.remove("hovered");
                card[1].classList.add("hovered");
                card[2].classList.remove("hovered");
                card[3].classList.remove("hovered");
            } else if (value >= 130 && value < 170) {
                card[0].classList.remove("hovered");
                card[1].classList.remove("hovered");
                card[2].classList.add("hovered");
                card[3].classList.remove("hovered");
            } else if (value >= 170) {
                card[0].classList.remove("hovered");
                card[1].classList.remove("hovered");
                card[2].classList.remove("hovered");
                card[3].classList.add("hovered");
            }
        }

        function updateClipCount(value) {
            var clipCountSpan = document.getElementById("clip-count");
            clipCountSpan.innerText = value;
        }

        var firstCard = document.querySelectorAll(".card")[0];
        firstCard.classList.add("hovered");

        
        function toggleDropdown() {
            var dropdownContent = document.querySelector(".dropdown-content");
            dropdownContent.style.display = dropdownContent.style.display === "block" ? "none" : "block";
        }

    function selectOption(option) {
    var dropdownButton = document.querySelector(".drop-down");
    dropdownButton.innerText = option.innerText;
    toggleDropdown();
    var customPrice = document.getElementById("custom-price");
    if (option.innerText === "500 min") {
        customPrice.innerText = "INR 6999";
    } else if (option.innerText === "800 min") {
        customPrice.innerText = "   INR 7955";
    } else if (option.innerText === "1500 min") {
        customPrice.innerText = "INR 8955"; 
    }
    event.preventDefault();
}

