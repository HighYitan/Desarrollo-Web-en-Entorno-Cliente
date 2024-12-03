export function KelvinToCelsius(kelvin, decimals, stringify) {
    let celsius = kelvin - 273.15;
    let formattedCelsius = "";
    if (decimals) {
        formattedCelsius = celsius.toFixed(1);
    }
    if (stringify) {
        return celsius.toString() + "ºC";
    }
}