// List of cities
const cities = [
    { name: "Kenya, Nairobi", image: "/Nairobi.jpg", description: "Nairobi is known as the city of love, with the iconic Eiffel Tower." },
    { name: "Rwanda, Kigali", image: "/Rwanda.jpg", description: "Kigali is a vibrant city, home to Times Square and Central Park." },
    { name: "Uganda, Kampala", image: "/Uganda1.jpg", description: "Kampala blends modern skyscrapers with historic temples." },
    { name: "Ethiopia, Addis Ababa", image: "/Ethiopia.jpg", description: "Addis Ababa is famous for its canals and romantic gondola rides." }
];

let currentIndex = 0;

// Function to change city details
function changeCity() {
    currentIndex = (currentIndex + 1) % cities.length;
    document.getElementById("city-title").textContent = cities[currentIndex].name;
    document.getElementById("city-description").textContent = cities[currentIndex].description;
    document.getElementById("city-image").src = cities[currentIndex].image;
}

// Function to add a city to the list
function addCity() {
    const cityList = document.getElementById("city-list");
    const newCity = document.createElement("li");
    newCity.textContent = "Somalia, Somalia";
    cityList.appendChild(newCity);
}

// Function to remove the last city from the list
function removeCity() {
    const cityList = document.getElementById("city-list");
    if (cityList.children.length > 0) {
        cityList.removeChild(cityList.lastChild);
    }
}