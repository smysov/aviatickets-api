import currencyUI from './currency';

class TicketsUI {
	constructor(currency) {
		this.container = document.querySelector('.wrapper-tickets');
		this.getCurrencySymbol = currency.getCurrencySymbol.bind(currency);
	}

	renderTickets(tickets) {
		this.clearContainer();

		if (!tickets.length) {
			this.showEmptyMessage();
			return;
		}

		let fragment = '';
		const currency = this.getCurrencySymbol();

		tickets.forEach(ticket => {
			const template = TicketsUI.ticketTemplate(ticket, currency);
			fragment += template;
		});

		this.container.insertAdjacentHTML('afterbegin', fragment);
	}

	clearContainer() {
		this.container.innerHTML = '';
	}

	showEmptyMessage() {
		const template = TicketsUI.emptyMessageTemplate();
		this.container.insertAdjacentHTML('afterbegin', template);
	}

	static emptyMessageTemplate() {
		return `
      <div class="tickets-message">
        <p class="tickets-message__description">
          According to your request
          is not found tickets!
        </p>
      </div> 
    `;
	}

	static ticketTemplate(ticket, currency) {
		return `
        <div class="ticket">
          <div class="ticket__airline">
            <img class="ticket__airline-icon" src="${ticket.airline_logo}">
            <span class="ticket__airline-name">${ticket.airline_name}</span>
          </div>

          <div class="ticket__cities">
            <div class="ticket__town">
              <span class="ticket__city-name">${ticket.origin_name}</span>
              <i class="material-icons">flight_takeoff</i>
            </div>
            <div class="ticket__town">
              <i class="material-icons">flight_land</i>
              <span class="ticket__city-name">${ticket.destination_name}</span>
            </div>
          </div>

          <div class="ticket__data-price">
            <span class="ticket__time-departure">${ticket.departure_at}</span>
            <span class="ticket__price">${currency}${ticket.price}</span>
          </div>
          <div class="ticket__info">
            <span class="ticket__transfers">Пересадок: ${ticket.transfers}</span>
            <span class="ticket__flight-number">Номер рейса: ${ticket.flight_number}</span>
          </div>
          <button data-id-favotite=${ticket.id} class="ticket__button ticket__button_green">add to favorites</button>
        </div>
    `;
	}
}

const ticketsUI = new TicketsUI(currencyUI);
export default ticketsUI;
