export const formatBalance = (value) => {
  return Number(value)
    .toFixed(2)
    .replace(/\B(?=(\d{3})+(?!\d))/g, ' ')
    .replace('.', ',');
};

export const formatCurrency = (value) => {
  let newValue;
  switch (value) {
    case 'EUR':
      newValue = '€';
      break;
    case 'USD':
    case 'AUD':
    case 'CAD':
      newValue = '$';
      break;
    case 'GBP':
      newValue = '£';
      break;
    case 'PLN':
      newValue = 'zł';
      break;
    case 'HUF':
      newValue = 'Ft';
      break;
    case 'CHF':
      newValue = 'Fr';
      break;
    case 'UAH':
      newValue = '₴';
      break;
    case 'CZK':
      newValue = 'Kč';
      break;
    case 'JPY':
      newValue = '¥';
      break;

    default:
      newValue = value;
  }

  return newValue;
};

export const formatDate = (value) => {
  const date = new Date(value);
  const options = { day: 'numeric', month: 'short', year: 'numeric' };
  return date.toLocaleDateString('en-US', options);
};
