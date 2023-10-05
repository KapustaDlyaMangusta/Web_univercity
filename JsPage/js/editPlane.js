import {showErrors, validateForm} from "./form.js";
import {renderItems} from "./myPlanes.js";
import { updatePlane } from "./planes.api.js";

const editPlaneForm = {
    fields: {
        name: {
            value: '',
            validationRules: [
                {
                    predicate: (value) => value.length > 0,
                    errorMessage: 'Name is required.'
                },
                {
                    predicate: (value) => value.length < 20,
                    errorMessage: 'Name is too long.'
                }
            ]
        },
        fuelCapacityLiters: {
            value: 0,
            validationRules: [
                {
                    predicate: (value) => value > 0,
                    errorMessage: 'Fuel capacity is required.'
                },
                {
                    predicate: (value) => value < 100000,
                    errorMessage: 'Fuel capacity max value is 100000.'
                }
            ]
        },
        passengersCount: {
            value: 0,
            validationRules: [
                {
                    predicate: (value) => value > 0,
                    errorMessage: 'Passengers count is required.'
                },
                {
                    predicate: (value) => value < 900,
                    errorMessage: 'Passengers count max value is 900.'
                }
            ]
        },
        description:  {
            value: '',
            validationRules: [
                {
                    predicate: (value) => value.length < 100,
                    errorMessage: 'Description is too long.'
                }
            ]
        }
    },
    formValidationErrors: []
}

let modalInstance;
let plane;

export function showEditPlaneForm(editPlane){
    const modal = document.getElementById('popup');
    const modalBody = document.getElementById('popupBody');

    plane = editPlane;

    modalBody.innerHTML = `
        <form id="editPlaneForm">
            <div class="mb-3">
                <label for="editName" class="form-label fs-5">Name:</label>
                <input type="text" class="form-control fs-5" name="name" id="editName" value="${plane.name}"/>
            </div>

            <div class="mb-3">
                <label for="editFuelCapacityLiters" class="form-label fs-5">Fuel Capacity (in liters):</label>
                <input type="number" class="form-control fs-5" name="fuelCapacityLiters" id="editFuelCapacityLiters" value="${plane.fuelCapacityLiters}"/>
            </div>

            <div class="mb-3">
                <label for="editPassengersCount" class="form-label fs-5">PassengersCount</label>
                <input type="number" class="form-control fs-5" name="passengersCount" id="editPassengersCount" value="${plane.passengersCount}"/>
            </div>

            <div class="mb-3">
                <label for="editDescription" class="form-label fs-5">Description:</label>
                <textarea class="form-control fs-5" id="editDescription" name="description" rows="3" placeholder="Description..."> ${plane.description}</textarea>
            </div>

            <button type="submit" class="btn btn-primary w-100 fs-4">Edit</button>
        </form>`;

    modalInstance = new bootstrap.Modal(modal);


    modal.addEventListener('show.bs.modal', () => {
        updateFormValues();

        setupFormBehavior();
    })

    modal.addEventListener('hide.bs.modal', () => {
        const form = document.getElementById('editPlaneForm');

        form.removeEventListener('input', bindInputs);
    })

    modalInstance.show();
}

function updateFormValues(){
    editPlaneForm.fields.name.value = plane.name;
    editPlaneForm.fields.fuelCapacityLiters.value  = plane.fuelCapacityLiters;
    editPlaneForm.fields.passengersCount.value  = plane.passengersCount;
    editPlaneForm.fields.description.value  = plane.description;
}

function setupFormBehavior(){
    const form = document.getElementById('editPlaneForm');

    form.addEventListener('input', bindInputs);

    form.addEventListener('submit', submitForm)
}

function bindInputs(event) {
    const target = event.target;
    const name = target.name;

    editPlaneForm.fields[name].value = target.value;
}

async function submitForm(event) {
    event.preventDefault();

    if (!validateForm(editPlaneForm)) {
        showErrors(editPlaneForm);
        return;
    }

    plane.fuelCapacityLiters = editPlaneForm.fields.fuelCapacityLiters.value;
    plane.name = editPlaneForm.fields.name.value;
    plane.passengersCount = editPlaneForm.fields.passengersCount.value;
    plane.description = editPlaneForm.fields.description.value;

    modalInstance.hide();

    await updatePlane(plane);

    await renderItems();
}