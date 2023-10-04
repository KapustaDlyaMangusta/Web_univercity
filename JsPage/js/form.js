export function validateForm(form){
    for (let planeFormKey in form.fields) {
        form.fields[planeFormKey].validationRules.forEach(validationRule => {
            if (!validationRule.predicate(form.fields[planeFormKey].value)){
                form.formValidationErrors.push(validationRule.errorMessage);
            }
        })
    }

    return form.formValidationErrors.length === 0;
}

export function showErrors(form){
    const toastDiv = document.getElementById('toast');
    toastDiv.innerHTML = `
            <div class="toast-header" style="background-color: #9a0b0b">
              <strong class="me-auto text-white fs-5">Validation error</strong>
              <button type="button" class="btn-close px-1" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">
                <ul>
                    ${(form.formValidationErrors.map(error => {
        return `<li class="py-1" style="font-size: 16px">${error}</li>`
    })).join('')}
                </ul>
            </div>
        `;
    const toast = new bootstrap.Toast(toastDiv, {delay: 8000});
    toast.show();

    form.formValidationErrors = [];
}