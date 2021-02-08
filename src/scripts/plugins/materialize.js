import 'materialize-css/sass/materialize.scss';
import 'materialize-css/dist/js/materialize.min.js';

//Init select
const select = document.querySelectorAll('select');
M.FormSelect.init(select);

export function getSelectInstance(element) {
	return M.FormSelect.getInstance(element);
}

//Init Autocomplete
const autocomplete = document.querySelectorAll('.autocomplete');
M.Autocomplete.init(autocomplete, {
	data: {
		Apple: null,
		Microsoft: null,
		Google: 'https://placehold.it/250x250',
	},
});

export function getAutocompleteInstance(element) {
	return M.Autocomplete.getInstance(element);
}

//Init Datepicker
const datepickers = document.querySelectorAll('.datepicker');
M.Datepicker.init(datepickers, {
	showClearBtn: true,
});

export function getDatepickerInstance(element) {
	return M.Datepicker.getInstance(element);
}