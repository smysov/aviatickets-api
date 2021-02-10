import '../styles/main';
import './plugins/index';
import locations from './store/locations';
import formUI from './views/form';
import ticketsUI from './views/tickets';
import currencyUI from './views/currency';

document.addEventListener('DOMContentLoaded', () => {
	initApp();
	//Elements
	const form = formUI.form;

	//Events
	form.addEventListener('submit', e => {
		e.preventDefault();
		onFormSubmit();
	});

	//Handlers
	async function initApp() {
		await locations.init();
		formUI.setAutocomleteData(locations.shortCitiesList);
	}

	async function onFormSubmit() {
		//To collect data from the field
		const origin = locations.getCityCodeByKey(formUI.originValue);
		const destination = locations.getCityCodeByKey(formUI.destinationValue);
		const depart_date = formUI.departDateValue;
		const return_date = formUI.returnDateValue || null;
		const currency = currencyUI.currencyValue;

		//Collect data in an object
		await locations.fetchTickets({
			origin,
			destination,
			depart_date,
			return_date,
			currency,
		});

		ticketsUI.renderTickets(locations.lastSearch);
	}
});
