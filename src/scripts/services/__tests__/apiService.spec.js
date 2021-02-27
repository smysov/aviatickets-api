import apiInstance, { Api } from '../apiService';
import config from '../../config/apiConfig';
import axios from 'axios';

jest.mock('axios');

const cities = [{ country_code: 'RUS', name: 'Moscow', code: 'MSK' }];
const countries = [{ code: 'RUS', name: 'Russia' }];
const airlines = [{ country_code: 'RUS', name: 'Airlines', code: 'AVIA' }];

describe('Test API Service', () => {
	it('Check that apiInstance is instance of Api class', () => {
		expect(apiInstance).toBeInstanceOf(Api);
  });
  
  it('Succes Api instance create', () => {
    const instance = new Api(config);
    expect(instance.url).toBe(config.url)
  })

	it('Success fetch cities', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve({ data: cities }));
		await expect(apiInstance.cities()).resolves.toEqual(cities);
		expect(axios.get).toHaveBeenCalledWith(`${config.url}/cities`);
	});

	it('Fetch cities failure', async () => {
		const errorMessage = 'Api error';
		axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
		expect(axios.get).rejects.toThrow(errorMessage);
	});

	it('Success fetch counties', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve({ data: countries }));
		await expect(apiInstance.countries()).resolves.toEqual(countries);
		expect(axios.get).toHaveBeenCalledWith(`${config.url}/countries`);
	});

	it('Fetch counties failure', async () => {
		const errorMessage = 'Api error';
		axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
		expect(axios.get).rejects.toThrow(errorMessage);
	});

	it('Success fetch airlines', async () => {
		axios.get.mockImplementationOnce(() => Promise.resolve({ data: airlines }));
		await expect(apiInstance.airlines()).resolves.toEqual(airlines);
		expect(axios.get).toHaveBeenCalledWith(`${config.url}/airlines`);
	});

	it('Fetch airlines failure', async () => {
		const errorMessage = 'Api error';
		axios.get.mockImplementationOnce(() => Promise.reject(new Error(errorMessage)));
		expect(axios.get).rejects.toThrow(errorMessage);
	});
});
