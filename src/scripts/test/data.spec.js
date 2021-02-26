import { formatDate } from '../helpers/date';

describe('formateDate', () => {
  it('check format', () => {
    expect(formatDate(1577014368252, 'yyyy')).toBe('2019');
  })
  it('check date 11.01.1991', () => {
    expect(formatDate('11.01.1991', 'MM.dd.yyyy')).toBe('11.01.1991');
  })
})