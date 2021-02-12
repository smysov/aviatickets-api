import '../styles/main';
import './plugins/index';
import locations from './store/locations';
import formUI from './views/form';
import ticketsUI from './views/tickets';
import currencyUI from './views/currency';
import favoriteUI from './store/favorite';

document.addEventListener('DOMContentLoaded', () => {
	initApp();
	//Elements
	const form = formUI.form;

	//Events
	form.addEventListener('submit', e => {
		e.preventDefault();
		onFormSubmit();
	});

	ticketsUI.container.addEventListener('click', e => {
		if (e.target.classList.contains('ticket__button_green')) {
			const idTicket = locations.lastSearch.filter(
				ticket => ticket.id === e.target.dataset.idFavotite,
			);
			favoriteUI.renderTicketFavorite(idTicket);
		}
	});

	favoriteUI.containerFavorite.addEventListener('click', e => {
		if (e.target.classList.contains('ticket__button_red')) {
			const parent = e.target.closest('.ticket');
			favoriteUI.deleteFavoriteTicket(parent);
		}
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
