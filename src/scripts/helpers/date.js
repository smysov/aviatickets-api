import { format } from 'date-fns';

/**
 * 
 * @param {String} str - variable in the form of a string
 * @param {*} type  - template as a string
 */

export function formatDate(str, type) {
	const date = new Date(str);
	return format(date, type);
}
