var format = require('date-fns/format');

var locales = {
  ru: require('date-fns/locale/ru'),
};

module.exports = function(date, formatStr) {
  return format(date, formatStr, {
    locale: locales[window.__localeId__], // or global.__localeId__
  });
};
