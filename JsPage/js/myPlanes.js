import {showEditPlaneForm} from "./editPlane.js";

export const planes = [
    {
        planeId: 1,
        fuelCapacityLiters: 50000,
        name: 'Boeing 747',
        passengerCount: 416,
        description: 'Large commercial aircraft'
    },
    {
        planeId: 2,
        fuelCapacityLiters: 30000,
        name: 'Airbus A380',
        passengerCount: 853,
        description: 'Largest passenger airplane'
    },
    {
        planeId: 3,
        fuelCapacityLiters: 20000,
        name: 'Boeing 787',
        passengerCount: 242,
        description: 'Long-range aircraft'
    },
    {
        planeId: 4,
        fuelCapacityLiters: 15000,
        name: 'Airbus A320',
        passengerCount: 150,
        description: 'Short-haul aircraft'
    },
    {
        planeId: 5,
        fuelCapacityLiters: 10000,
        name: 'Embraer E190',
        passengerCount: 114,
        description: 'Regional aircraft'
    },
    {
        planeId: 6,
        fuelCapacityLiters: 4000,
        name: 'Cessna 172',
        passengerCount: 4,
        description: 'Small single-engine aircraft'
    },
    {
        planeId: 7,
        fuelCapacityLiters: 8000,
        name: 'Bombardier CRJ-900',
        passengerCount: 90,
        description: 'Regional passenger aircraft'
    },
    {
        planeId: 8,
        fuelCapacityLiters: 6000,
        name: 'Cessna 208',
        passengerCount: 13,
        description: 'Light transport aircraft'
    },
    {
        planeId: 9,
        fuelCapacityLiters: 3000,
        name: 'Piper PA-28',
        passengerCount: 4,
        description: 'Training aircraft'
    },
    {
        planeId: 10,
        fuelCapacityLiters: 5000,
        name: 'Beechcraft King Air',
        passengerCount: 8,
        description: 'Business travel aircraft'
    }
];

const planeList = document.getElementById('itemsList');
const searchBar = document.getElementById('search');
const selectBar = document.getElementById('select');
const clearButton = document.getElementById('clear');
const countButton = document.getElementById('count');

let sortField = selectBar.value;
let searchQuery = searchBar.value.toLowerCase();

function search(){
    searchQuery = searchBar.value.toLowerCase();

    renderItems();
}

function clearSearch(){
    searchBar.value = '';
    searchQuery = searchBar.value;

    renderItems();
}
function selectSortField() {
    sortField = selectBar.value;

    renderItems();
}

function alertTotalPassengersCapacity(){
    const totalPassengerCapacity = planes.filter(plane =>
        plane.name.toLowerCase().includes(searchQuery))
        .reduce((sum, plane) => sum + plane.passengerCount, 0);

    alert(`Total Passenger Capacity: ${totalPassengerCapacity}`);
}

export function renderItems(){
    planeList.innerHTML = '';

    let items = [...planes];

    if(searchQuery !== ''){
        items = items.filter(plane => plane.name.toLowerCase().includes(searchQuery));
    }

    if(sortField !== 'None'){
        items.sort((a, b) => (a[sortField] > b[sortField]) ? 1 : ((b[sortField] > a[sortField]) ? -1 : 0))
    }

    items.forEach((plane) => {
        const planeDiv = document.createElement('div');
        planeDiv.className = 'card mb-3';
        planeDiv.style.width = '350px';

        planeDiv.innerHTML = `
            <div class="plane card-body" data-plane-id="${plane.planeId}">
                <h5 class="card-title">${plane.name}</h5>
                <p class="card-text">${plane.description}</p>
                <p class="card-text"><small class="text-muted">Fuel Capacity: ${plane.fuelCapacityLiters} liters</small></p>
                <p class="card-text"><small class="text-muted">Passenger Count: ${plane.passengerCount}</small></p>
                <div class="d-flex justify-content-start gap-3">
                    <button type="button" class="plane-edit-button btn btn-outline-primary" style="width: 80px">Edit</button>
                    <button type="button" class="plane-delete-button btn btn-outline-danger" style="width: 80px">Delete</button>
                </div>
            </div>
        `;
        planeList.appendChild(planeDiv);
    });

    updateButtonsBehavior();
}

function deletePlane(event){
    planes.splice(planes.findIndex(p => p.planeId === +getPlaneIdByEventTarget(event.target)), 1);
    renderItems();
}

function editPlane(event){
    let plane = planes[planes.findIndex(p => p.planeId === +getPlaneIdByEventTarget(event.target))];

    showEditPlaneForm(plane);
}

function getPlaneIdByEventTarget(target){
    const planeDiv = target.closest('.plane');
    return planeDiv.getAttribute('data-plane-id');
}

function updateButtonsBehavior(){
    const deleteButtons = document.querySelectorAll('.plane-delete-button');
    const editButtons = document.querySelectorAll('.plane-edit-button');
    deleteButtons.forEach(button => {
        button.addEventListener('click', deletePlane);
    })

    editButtons.forEach(button => {
        button.addEventListener('click', editPlane);
    })
}

document.addEventListener('DOMContentLoaded', renderItems);

searchBar.addEventListener('input', search);
clearButton.addEventListener('click', clearSearch);
selectBar.addEventListener('change', selectSortField);
countButton.addEventListener('click', alertTotalPassengersCapacity);