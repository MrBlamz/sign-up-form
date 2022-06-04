const passwordInput = document.getElementById('password');
const passwordConfirmInput = document.getElementById('password-confirmation');

// Keys are the inputs id
const touched = {
  password: false,
  'password-confirmation': false,
};

const ERROR_CLASS = 'form__input--error';

const setError = () => {
  passwordInput.classList.add(ERROR_CLASS);
  passwordConfirmInput.classList.add(ERROR_CLASS);
};

const clearError = () => {
  passwordInput.classList.remove(ERROR_CLASS);
  passwordConfirmInput.classList.remove(ERROR_CLASS);
};

const handleChange = (event) => {
  const { id } = event.target;

  if (!touched[id]) touched[id] = true;

  const isSameValue = passwordInput.value !== passwordConfirmInput.value;
  const allInputsTouched = Object.values(touched).every(
    (value) => value === true
  );

  if (isSameValue && allInputsTouched) {
    setError();
  } else {
    clearError();
  }
};

passwordInput.addEventListener('change', handleChange);
passwordConfirmInput.addEventListener('change', handleChange);
