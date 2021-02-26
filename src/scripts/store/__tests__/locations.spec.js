import locationsInstance, { Locations } from '../locations';
import { formatDate } from '../../helpers/date';
import api, { Api } from '../../services/apiService';

const countries = [{ code: 'RUS', name: 'Russia' }];
const cities = [{ country_code: 'RUS', name: 'Moscow', code: 'MSK' }];
const airlines = [{ country_code: 'RUS', name: 'Airlines', code: 'AVIA' }];

jest.mock('../../services/apiService', () => {
	const mockApi = {
		countries: jest.fn(() => Promise.resolve([{ code: 'RUS', name: 'Russia' }])),
		cities: jest.fn(() =>
			Promise.resolve([{ country_code: 'RUS', name: 'Moscow', code: 'MSK' }]),
		),
		airlines: jest.fn(() =>
			Promise.resolve([{ country_code: 'RUS', name: 'Airlines', code: 'AVIA' }]),
		),
	};

	return {
		Api: jest.fn(() => mockApi),
	};
});

const apiService = new Api();

describe('Locations store test', () => {
	beforeEach(() => {
		locationsInstance.countries = locationsInstance.serializeCountries(countries);
		locationsInstance.cities = locationsInstance.serializeCities(cities);
	});

	it('Check that locationInstance is instance of Locations class', () => {
		expect(locationsInstance).toBeInstanceOf(Locations);
	});

	it('Success Locations instance create', () => {
		const instance = new Locations(api, { formatDate });
		expect(instance.countries).toBe(null);
		expect(instance.cities).toBe(null);
		expect(instance.shortCities).toEqual({});
		expect(instance.lastSearch).toEqual({});
		expect(instance.airlines).toEqual({});
		expect(instance.formatDate).toEqual(formatDate);
	});

	it('Check correct countries serialize', () => {
		const result = locationsInstance.serializeCountries(countries);
		const expectedData = {
			RUS: { code: 'RUS', name: 'Russia' },
		};

		expect(result).toEqual(expectedData);
	});

	it('Check countries serialize with incorrect data', () => {
		const result = locationsInstance.serializeCountries(null);
		const expectedData = {};

		expect(result).toEqual(expectedData);
	});

	it('Check correct cities serialize', () => {
		const result = locationsInstance.serializeCities(cities);
		const expectedData = {
			MSK: {
				country_code: 'RUS',
				name: 'Moscow',
				code: 'MSK',
				country_name: 'Russia',
				full_name: 'Moscow, Russia',
			},
		};

		expect(result).toEqual(expectedData);
	});

	it('Check correct get city name by code', () => {
		const result = locationsInstance.getCityNameByCode('MSK');
		expect(result).toBe('Moscow');
	});

	it('Check correct init method', () => {
		const instance = new Locations(apiService, { formatDate });
		expect(instance.init()).resolves.toEqual([countries, cities, airlines]);
	});
});
