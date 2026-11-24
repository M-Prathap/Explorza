
const searchInput = document.getElementById("destinationSearch");
const searchButton = document.getElementById("searchButton");

const destinationItems = document.querySelectorAll(".destination-item");
const noResults = document.getElementById("noResults");

function searchDestinations() {

    const searchValue = searchInput.value.trim().toLowerCase();

    let visibleCount = 0;

    destinationItems.forEach((item) => {

        const cityName = item.querySelector("h3").textContent.toLowerCase();

        if (cityName.includes(searchValue)) {

            item.style.display = "";
            visibleCount++;

        } else {

            item.style.display = "none";

        }

    });

    noResults.hidden = visibleCount !== 0;

}

searchButton.addEventListener("click", searchDestinations);

searchInput.addEventListener("input", searchDestinations);

searchInput.addEventListener("keydown", (event) => {

    if (event.key === "Enter") {
        searchDestinations();
    }

});
