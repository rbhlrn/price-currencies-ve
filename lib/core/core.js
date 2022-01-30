const { formatAmount } = require('./tools');
//Count how many properties an object has
const objectSize = obj => {
  var size = 0,
    key;
  for (key in obj) {
    if (obj.hasOwnProperty(key)) size++;
  }
  return size;
};
//Evaluate currency and date object
const evalCurrencyObject = val => {
  if(val != null){
    const currency = {};
    val['USD'].length > 0 ?
      currency.dollar = {
        iso: 'USD',
        value: formatAmount(val['USD']),
        symbol: '$'
      } : '' ;
    val['EUR'].length > 0 ?
      currency.euro = {
        iso: 'EUR',
        value: formatAmount(val['EUR']),
        symbol: '€'
      } : '';
    val['RUB'].length > 0 ?
      currency.ruble = {
        iso: 'RUB',
        value: formatAmount(val['RUB']),
        symbol: '₽'
      } : '';
    val['TRY'].length > 0 ?
      currency.lira = {
        iso: 'TRY',
        value: formatAmount(val['TRY']),
        symbol: '₺'
      } : '';
    val['CNY'].length > 0 ?
      currency.yuan = {
        iso: 'CNY',
        value: formatAmount(val['CNY']),
        symbol: '¥'
      } : '';
    return objectSize(currency) === 5 ? { error: false, data: currency } : { error: true, message: 'Error getting data'};
  }else{
    return { error: true, message: 'Connection error with BCV'};
  }
};
//Gets a property of the object
const getUnique = (obj, currency) => {
    if(currency === 'dollar' || currency === 'euro' || currency === 'ruble' || currency === 'lira' || currency === 'yuan'){
      const allCurrencies = evalCurrencyObject(obj);
      return allCurrencies.error === false ? {
          error: allCurrencies.error,
          data: {
            iso: allCurrencies.data[currency].iso,
            value: allCurrencies.data[currency].value,
            symbol: allCurrencies.data[currency].symbol
          }
        } : allCurrencies;
    }else{
      return {
        error: true,
        message: 'Path error'
      };
    }
}
module.exports = { evalCurrencyObject, getUnique };