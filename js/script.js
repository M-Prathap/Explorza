
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


/* =========================
   ADVENTURES GRID PAGE
========================= */

// Get selected city from URL
const params = new URLSearchParams(window.location.search);
const selectedCity = params.get("city");
const cityTitle = document.getElementById("cityTitle");

if (cityTitle) {
    if (selectedCity) {
        cityTitle.textContent = `Explore Adventures in ${selectedCity}`;
    } else {
        cityTitle.textContent = "All Destinations";
    }
}


// Adventure category filtering
const categoryFilter = document.getElementById("categoryFilter");

if (categoryFilter) {

    const adventureItems = document.querySelectorAll(".adventure-item");

    const emptyMessage = document.getElementById("emptyMessage");

    categoryFilter.addEventListener("change", function () {

        const selectedCategory = this.value;

        let visibleCount = 0;

        adventureItems.forEach((item) => {

            const category = item.dataset.category;

            if (
                selectedCategory === "all" ||
                category === selectedCategory
            ) {

                item.style.display = "";
                visibleCount++;

            } else {

                item.style.display = "none";

            }

        });

        emptyMessage.hidden = visibleCount !== 0;

    });

}
