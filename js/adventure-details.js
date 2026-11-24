
const adventures = {
    "scuba-diving": {
        title: "Scuba Diving",
        category: "WATER ACTIVITY",
        description: "Discover the underwater world and explore beautiful coral reefs, colorful marine life and unforgettable ocean experiences.",
        duration: "3 Hours",
        price: 2500,
        image: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?w=1000"
    },

    "mountain-trekking": {
        title: "Mountain Trekking",
        category: "MOUNTAIN ACTIVITY",
        description: "Experience breathtaking mountain landscapes, fresh air and exciting trekking trails with unforgettable views.",
        duration: "6 Hours",
        price: 1800,
        image: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=1000"
    },

    "forest-camping": {
        title: "Forest Camping",
        category: "NATURE ACTIVITY",
        description: "Enjoy a peaceful camping experience surrounded by nature, beautiful forests and a night under the stars.",
        duration: "1 Night",
        price: 3000,
        image: "https://images.unsplash.com/photo-1473448912268-2022ce9509d8?w=1000"
    }
};


// Get adventure ID from URL
const params = new URLSearchParams(window.location.search);
const adventureId = params.get("id");

const adventure = adventures[adventureId];


// Display adventure details
if (adventure) {

    document.getElementById("adventureTitle").textContent = adventure.title;

    document.getElementById("adventureCategory").textContent = adventure.category;

    document.getElementById("adventureDescription").textContent = adventure.description;

    document.getElementById("adventureDuration").textContent = adventure.duration;

    document.getElementById("adventurePrice").textContent =
        `₹${adventure.price.toLocaleString("en-IN")}`;

    document.getElementById("adventureImage").src = adventure.image;

    document.getElementById("adventureImage").alt = adventure.title;

} else {

    document.querySelector(".details-section").innerHTML = `
        <div class="container text-center py-5">
            <h2>Adventure Not Found</h2>
            <a href="index.html" class="btn btn-primary mt-3">
                Back to Home
            </a>
        </div>
    `;

}


// Price calculation
const peopleCount = document.getElementById("peopleCount");
const totalPrice = document.getElementById("totalPrice");

function calculateTotal() {

    if (!adventure) return;

    let people = Number(peopleCount.value);

    if (!Number.isInteger(people) || people < 1) {
        people = 1;
    }

    totalPrice.textContent =
        `₹${(adventure.price * people).toLocaleString("en-IN")}`;
}

peopleCount.addEventListener("input", calculateTotal);


// Booking button
document.getElementById("bookButton").addEventListener("click", () => {

    const bookingDate = document.getElementById("bookingDate").value;
    const bookingMessage = document.getElementById("bookingMessage");

    if (!adventure) return;

    if (!bookingDate || new Date(bookingDate + "T00:00:00") < new Date(new Date().toDateString())) {
        bookingMessage.textContent = "Please select a valid booking date.";
        bookingMessage.style.color = "red";
        return;
    }

    if (!peopleCount.value || Number(peopleCount.value) < 1 ||
        !Number.isInteger(Number(peopleCount.value))) {
        bookingMessage.textContent = "Please enter a valid number of people.";
        bookingMessage.style.color = "red";
        return;
    }

    bookingMessage.textContent = "Booking details submitted successfully!";
    bookingMessage.style.color = "green";

});
