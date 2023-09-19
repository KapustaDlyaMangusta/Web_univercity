const planes = [
    {
        fuelCapacityLiters: 50000,
        name: 'Boeing 747',
        passengerCount: 416,
        description: 'Large commercial aircraft'
    },
    {
        fuelCapacityLiters: 30000,
        name: 'Airbus A380',
        passengerCount: 853,
        description: 'Largest passenger airplane'
    },
    {
        fuelCapacityLiters: 20000,
        name: 'Boeing 787',
        passengerCount: 242,
        description: 'Long-range aircraft'
    },
    {
        fuelCapacityLiters: 15000,
        name: 'Airbus A320',
        passengerCount: 150,
        description: 'Short-haul aircraft'
    },
    {
        fuelCapacityLiters: 10000,
        name: 'Embraer E190',
        passengerCount: 114,
        description: 'Regional aircraft'
    },
    {
        fuelCapacityLiters: 4000,
        name: 'Cessna 172',
        passengerCount: 4,
        description: 'Small single-engine aircraft'
    },
    {
        fuelCapacityLiters: 8000,
        name: 'Bombardier CRJ-900',
        passengerCount: 90,
        description: 'Regional passenger aircraft'
    },
    {
        fuelCapacityLiters: 6000,
        name: 'Cessna 208',
        passengerCount: 13,
        description: 'Light transport aircraft'
    },
    {
        fuelCapacityLiters: 3000,
        name: 'Piper PA-28',
        passengerCount: 4,
        description: 'Training aircraft'
    },
    {
        fuelCapacityLiters: 5000,
        name: 'Beechcraft King Air',
        passengerCount: 8,
        description: 'Business travel aircraft'
    }
];

document.addEventListener("DOMContentLoaded", function () {
   setItems();
});


const planeList = document.getElementById('itemsList');
const searchBar = document.getElementById('search');
const selectBar = document.getElementById('select');

let sortField = selectBar.value;
let searchQuery = searchBar.value.toLowerCase();

function setItems(){
    planeList.innerHTML = '';

    let items = planes;

    if(searchQuery !== ''){
        items = items.filter(plane => plane.name.toLowerCase().includes(searchQuery));
    }

    if(sortField !== 'None'){
        items.sort((a, b) => (a[sortField] > b[sortField]) ? 1 : ((b[sortField] > a[sortField]) ? -1 : 0))
    }

    items.forEach(function (plane) {
        const planeDiv = document.createElement('div');
        planeDiv.className = 'card mb-3';
        planeDiv.style.width = '350px';

        planeDiv.innerHTML = `
            <div class="card-body">
                <h5 class="card-title">${plane.name}</h5>
                <p class="card-text">${plane.description}</p>
                <p class="card-text"><small class="text-muted">Fuel Capacity: ${plane.fuelCapacityLiters} liters</small></p>
                <p class="card-text"><small class="text-muted">Passenger Count: ${plane.passengerCount}</small></p>
            </div>
        `;
        planeList.appendChild(planeDiv);
    });
}

function search(){
    searchQuery = searchBar.value.toLowerCase();

    setItems();
}

function clearSearch(){
    searchBar.value = '';
    searchQuery = searchBar.value;

    setItems();
}
function selectSortField() {
    sortField = selectBar.value;

    setItems();
}

function alertTotalPassengersCapacity(){
    const totalPassengerCapacity = planes.filter(plane =>
        plane.name.toLowerCase().includes(searchQuery))
        .reduce((sum, plane) => sum + plane.passengerCount, 0);

    alert(`Total Passenger Capacity: ${totalPassengerCapacity}`);
}

