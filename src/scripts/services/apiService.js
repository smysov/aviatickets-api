import axios from 'axios';
import config from '../config/apiConfig';

/** Endpoints
 * countries - array of the countries
 * cities - array of the cities
 * prices/cheap - array of the prices
 */
class Api {
	constructor(config) {
		this.url = config.url;
	}

	async countries() {
		try {
			const response = await axios.get(`${this.url}/countries`);
			return response.data;
		} catch (error) {
			console.log(error);
			return Promise.reject(error);
		}
	}
	async cities() {
		try {
			const response = await axios.get(`${this.url}/cities`);
			return response.data;
		} catch (error) {
			console.log(error);
			return Promise.reject(error);
		}
	}
	async prices(params) {}
}

const api = new Api(config);

export default api;