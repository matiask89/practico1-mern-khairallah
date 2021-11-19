const countries = require('./countries.json');


/** Get all the data of one single country given the ISO3 code.
 * @param  {string} isoCode
 * @returns {Object}
 */
function getCountryByIso3(isoCode){
    
    const id = countries.findIndex(element => element.iso3 ===isoCode);
    var arg = countries[id];
    return arg;
}

/**
 * Get a country translated name given his ISO3 code and tranlated language.
 * @param  {string} isoCode
 * @param  {string} language example: "es"
 * @returns {string}
 */
function getCountryTranslatedName(isoCode, language){
    const id = countries.findIndex(element => element.iso3 === isoCode);
    var pais = countries [id];
    return pais.translations[language];
}
/**Get an array of all the countries with the specified subregion
 * @param  {string} subregion
 * @returns {Array}
 */
function getCountriesBySubregion(subregion){
    var sa = countries.filter(region => region.subregion === subregion);
    return sa;
}

function main() {
    
    console.log(
        '///// Ejercicio 1 /////\n', 
        getCountryByIso3("ARG"),
        '\n'); 
    console.log(
        '///// Ejercicio 2 /////\n',
        getCountryTranslatedName('ARG', 'ja'),
        '\n');
    console.log(
        '///// Ejercicio 3 /////\n',
        getCountriesBySubregion('South America'),
        '\n');

}

main();