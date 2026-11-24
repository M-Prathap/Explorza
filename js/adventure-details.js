
const adventures = {

    "scuba-diving": {
        title: "Scuba Diving",
        category: "WATER ACTIVITY",

        shortDescription: "Explore the underwater world and discover marine life.",

        description: "Experience the beauty of underwater exploration. Discover colorful coral reefs, amazing marine creatures and unforgettable ocean views. This adventure is perfect for people who love exploring new experiences.",

        price: 2500,
        duration: "3 Hours",
        difficulty: "Beginner Friendly",
        group: "2-10 People",

        images: [
            "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000",
            "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=800",
            "https://images.unsplash.com/photo-1518509562904-e7ef99cdcc86?w=800"
        ],

        highlights: [
            "Underwater Exploration",
            "Professional Guide",
            "Marine Life Discovery",
            "Safety Equipment"
        ],

        included: [
            "Professional instructor",
            "Safety equipment",
            "Basic training",
            "Activity guidance"
        ],

        excluded: [
            "Personal expenses",
            "Travel transportation",
            "Food and beverages"
        ]
    },


    "mountain-trekking": {
        title: "Mountain Trekking",
        category: "MOUNTAIN ACTIVITY",

        shortDescription: "Explore beautiful mountain trails and breathtaking views.",

        description: "Enjoy an exciting trekking experience through beautiful mountain landscapes. Walk through scenic trails, experience fresh mountain air and capture unforgettable views along the journey.",

        price: 1800,
        duration: "6 Hours",
        difficulty: "Moderate",
        group: "2-12 People",

        images: [
            "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000",
            "https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?w=800",
            "https://images.unsplash.com/photo-1470770841072-f978cf4d019e?w=800"
        ],

        highlights: [
            "Mountain Trails",
            "Scenic Landscapes",
            "Expert Guide",
            "Photography Spots"
        ],

        included: [
            "Professional trek guide",
            "Safety assistance",
            "Basic first aid",
            "Trekking guidance"
        ],

        excluded: [
            "Personal expenses",
            "Travel transportation",
            "Food and beverages"
        ]
    },


    "forest-camping": {
        title: "Forest Camping",
        category: "NATURE ACTIVITY",

        shortDescription: "Experience peaceful nights surrounded by nature.",

        description: "Escape from busy city life and enjoy a peaceful forest camping experience. Spend time surrounded by beautiful trees, enjoy nature and experience an unforgettable night under the stars.",

        price: 3000,
        duration: "1 Night",
        difficulty: "Easy",
        group: "2-8 People",

        images: [
            "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1000",
            "https://images.unsplash.com/photo-1504280390367-361c6d9f38f4?w=800",
            "https://images.unsplash.com/photo-1448375240586-882707db888b?w=800"
        ],

        highlights: [
            "Forest Experience",
            "Night Camping",
            "Campfire Experience",
            "Nature Exploration"
        ],

        included: [
            "Camping tent",
            "Basic camping equipment",
            "Campfire setup",
            "Activity guidance"
        ],

        excluded: [
            "Personal expenses",
            "Travel transportation",
            "Additional food"
        ]
    }

};


// Read URL parameter
const params = new URLSearchParams(window.location.search);

const adventureId = params.get("id");

const adventure = adventures[adventureId];


// Display adventure information
if (!adventure) {

    document.querySelector(".details-section").innerHTML = `
        <div class="container text-center py-5">
            <h2>Adventure Not Found</h2>
            <a href="adventures.html" class="btn btn-primary mt-3">
                Back to Adventures
            </a>
        </div>
    `;

} else {

    document.title = `${adventure.title} | Explorza`;

    document.getElementById("breadcrumbTitle").textContent = adventure.title;

    document.getElementById("adventureTitle").textContent = adventure.title;

    document.getElementById("adventureCategory").textContent = adventure.category;

    document.getElementById("adventureShortDescription").textContent =
        adventure.shortDescription;

    document.getElementById("adventureDescription").textContent =
        adventure.description;

    document.getElementById("adventurePrice").textContent =
        `₹${adventure.price.toLocaleString("en-IN")}`;

    document.getElementById("mainImage").src = adventure.images[0];

    document.getElementById("secondImage").src = adventure.images[1];

    document.getElementById("thirdImage").src = adventure.images[2];


    // Adventure Highlights
    const highlightsGrid = document.getElementById("highlightsGrid");

    const highlightIcons = ["✦", "✓", "★", "◆"];

    highlightsGrid.innerHTML = `
        <div class="col-md-6">
            <div class="highlight-card">
                <span>⏱</span>
                <div>
                    <small>Duration</small>
                    <strong>${adventure.duration}</strong>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="highlight-card">
                <span>⛰</span>
                <div>
                    <small>Difficulty</small>
                    <strong>${adventure.difficulty}</strong>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="highlight-card">
                <span>👥</span>
                <div>
                    <small>Group Size</small>
                    <strong>${adventure.group}</strong>
                </div>
            </div>
        </div>

        <div class="col-md-6">
            <div class="highlight-card">
                <span>★</span>
                <div>
                    <small>Experience</small>
                    <strong>Guided Adventure</strong>
                </div>
            </div>
        </div>
    `;


    // Included and Excluded Lists
    function displayList(elementId, items, symbol) {

        document.getElementById(elementId).innerHTML =
            items.map(item => `
                <li>
                    <span>${symbol}</span>
                    ${item}
                </li>
            `).join("");

    }

    displayList("includedList", adventure.included, "✓");

    displayList("excludedList", adventure.excluded, "✕");


    // Booking price calculation
    const peopleCount = document.getElementById("peopleCount");

    const totalPrice = document.getElementById("totalPrice");

    function calculateTotal() {

        const people = Number(peopleCount.value);

        const validPeople = Number.isInteger(people)
            ? Math.min(20, Math.max(1, people))
            : 1;

        totalPrice.textContent =
            `₹${(adventure.price * validPeople).toLocaleString("en-IN")}`;

    }

    peopleCount.addEventListener("input", calculateTotal);


    // Set minimum booking date to today
    const bookingDate = document.getElementById("bookingDate");

    const today = new Date();

    const localDate = new Date(
        today.getTime() - today.getTimezoneOffset() * 60000
    ).toISOString().split("T")[0];

    bookingDate.min = localDate;


    // Booking button
    document.getElementById("bookButton").addEventListener("click", () => {

        const date = bookingDate.value;

        const people = Number(peopleCount.value);

        const bookingMessage = document.getElementById("bookingMessage");

        if (!date || date < localDate) {

            bookingMessage.textContent = "Please select a valid date.";

            return;
        }

        if (!Number.isInteger(people) || people < 1 || people > 20) {

            bookingMessage.textContent = "Please select between 1 and 20 guests.";

            return;
        }

        bookingMessage.textContent =
            `Demo booking successful! ${people} guest(s) selected.`;

    });

}
