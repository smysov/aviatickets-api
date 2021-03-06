import 'materialize-css/dist/css/materialize.min.css';
import 'materialize-css/dist/js/materialize.min.js';

//Init dropdown
const dropdown = document.querySelectorAll('.dropdown-trigger');
M.Dropdown.init(dropdown, {
	// coverTrigger: false,
	constrainWidth: false,
	closeOnClick: false,
});

//Init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(element) {
	return M.FormSelect.getInstance(element);
}

//Init Autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete);

export function getAutocompleteInstance(element) {
	return M.Autocomplete.getInstance(element);
}

//Init Datepicker
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
	showClearBtn: true,
	format: 'yyyy-mm',
});

export function getDatepickerInstance(element) {
	return M.Datepicker.getInstance(element);
}
