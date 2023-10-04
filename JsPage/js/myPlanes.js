import {showEditPlaneForm} from "./editPlane.js";
import { deletePlane, getPlaneById, getPlanes, getPlanesPassengersCount } from "./planes.api.js";

const planeList = document.getElementById('itemsList');
const searchBar = document.getElementById('search');
const selectBar = document.getElementById('select');
const clearButton = document.getElementById('clear');
const countButton = document.getElementById('count');

let sortField = selectBar.value;
let searchQuery = searchBar.value.toLowerCase();

async function search() {
    searchQuery = searchBar.value.toLowerCase();

    await renderItems();
}

async function clearSearch(){
    searchBar.value = '';
    searchQuery = searchBar.value;

    await renderItems();
}
async function selectSortField() {
    sortField = selectBar.value;

    await renderItems();
}

async function alertTotalPassengersCapacity() {
    const totalPassengerCapacity = await getPlanesPassengersCount();

    alert(`Total Passenger Capacity: ${ totalPassengerCapacity }`);
}

export async function renderItems(){
    planeList.innerHTML = '';

    const items = await getPlanes(searchQuery, sortField);

    items.forEach((plane) => {
        const planeDiv = document.createElement('div');
        planeDiv.className = 'card mb-3';
        planeDiv.style.width = '350px';

        planeDiv.innerHTML = `
            <div class="plane card-body" data-plane-id="${plane.planeId}">
                <h5 class="card-title">${plane.name}</h5>
                <p class="card-text">${plane.description}</p>
                <p class="card-text"><small class="text-muted">Fuel Capacity: ${plane.fuelCapacityLiters} liters</small></p>
                <p class="card-text"><small class="text-muted">Passenger Count: ${plane.passengersCount}</small></p>
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

async function onDelete(event){
    await deletePlane(+getPlaneIdByEventTarget(event.target));
    await renderItems();
}

async function onEdit(event){
    let plane = await getPlaneById(+getPlaneIdByEventTarget(event.target));

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
        button.addEventListener('click', onDelete);
    })

    editButtons.forEach(button => {
        button.addEventListener('click', onEdit);
    })
}

document.addEventListener('DOMContentLoaded', renderItems);

searchBar.addEventListener('input', search);
clearButton.addEventListener('click', clearSearch);
selectBar.addEventListener('change', selectSortField);
countButton.addEventListener('click', alertTotalPassengersCapacity);