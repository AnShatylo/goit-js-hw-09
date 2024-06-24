const form = document.querySelector('.feedback-form');
const formData = {
  email: '',
  message: '',
};

document.addEventListener('DOMContentLoaded', function () {
  const formLocalStorage = localStorage.getItem('feedback-form-state');

  if (formLocalStorage) {
    const parsedFormData = JSON.parse(formLocalStorage);
    for (const key in parsedFormData) {
      formData[key] = parsedFormData[key];
    }
  }

  const formElements = form.querySelectorAll('[name]');
  formElements.forEach(element => {
    const nameValue = element.getAttribute('name');
    if (formData.hasOwnProperty(nameValue)) {
      element.value = formData[nameValue];
    }
  });
});

form.addEventListener('input', getFormData);
form.addEventListener('submit', formSubmit);

function getFormData(e) {
  const nameValue = e.target.getAttribute('name');
  formData[nameValue] = e.target.value;

  localStorage.setItem('feedback-form-state', JSON.stringify(formData));
}

function formSubmit(e) {
  e.preventDefault();

  if (formData.email === '' || formData.message === '') {
    alert('Fill please all fields');
  } else {
    console.log(formData);
    localStorage.removeItem('feedback-form-state');
    formData.email = '';
    formData.message = '';
    form.reset();
  }
}
