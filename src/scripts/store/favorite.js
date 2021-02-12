import currencyUI from '../views/currency';

class FavoriteUI {
	constructor(currency) {
		this.containerFavorite = document.querySelector('.wrapper-favorite');
		this.currencySymbol = currency.getCurrencySymbol.bind(currency);
	}

	renderTicketFavorite(ticket) {
    let fragment = '';
    const template = this.templateFavorite(ticket, this.currencySymbol());
		fragment += template;
		this.containerFavorite.insertAdjacentHTML('afterbegin', fragment);
	}

  templateFavorite(ticket, currency) {
    const [
      {
        airline_logo,
        airline_name,
        origin_name,
        destination_name,
        departure_at,
        price,
        transfers,
        flight_number,
        id
      },
    ] = ticket;
    
		return `
        <div class="ticket">
          <div class="ticket__airline">
            <img class="ticket__airline-icon" src="${airline_logo}">
            <span class="ticket__airline-name">${airline_name}</span>
          </div>

          <div class="ticket__cities">
            <div class="ticket__town">
              <span class="ticket__city-name">${origin_name}</span>
              <i class="material-icons">flight_takeoff</i>
            </div>
            <div class="ticket__town">
              <i class="material-icons">flight_land</i>
              <span class="ticket__city-name">${destination_name}</span>
            </div>
          </div>

          <div class="ticket__data-price">
            <span class="ticket__time-departure">${departure_at}</span>
            <span class="ticket__price">${currency}${price}</span>
          </div>
          <div class="ticket__info">
            <span class="ticket__transfers">Пересадок: ${transfers}</span>
            <span class="ticket__flight-number">Номер рейса: ${flight_number}</span>
          </div>
          <button data-id-favotite=${id} class="ticket__button ticket__button_red">delete</button>
        </div>
    `;
  }

    deleteFavoriteTicket(parent) {
      parent.remove()
    }
}

const favoriteUI = new FavoriteUI(currencyUI);
export default favoriteUI;
