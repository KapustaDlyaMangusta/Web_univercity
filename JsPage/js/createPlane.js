import { renderItems } from './myPlanes.js';
import { showErrors, validateForm } from "./form.js";
import { createPlane } from "./planes.api.js";

const createPlaneForm = {
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
    description: {
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

const form = document.getElementById('planeForm');
form.addEventListener('input', function (event) {
  const target = event.target;
  const name = target.name;

  createPlaneForm.fields[name].value = target.value;
});

form.addEventListener('submit', async event => {
  event.preventDefault();

  if (!validateForm(createPlaneForm)) {
    showErrors(createPlaneForm);
    return;
  }

  const request = {
    fuelCapacityLiters: createPlaneForm.fields.fuelCapacityLiters.value,
    name: createPlaneForm.fields.name.value,
    passengersCount: createPlaneForm.fields.passengersCount.value,
    description: createPlaneForm.fields.description.value
  };

  await createPlane(request);

  await renderItems();
  form.reset();

  const planesTab = document.getElementById('nav-home-tab');
  bootstrap.Tab.getInstance(planesTab).show();
})