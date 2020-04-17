// Obtiene la diferencia de años
export function getDifferenceYear(year) {
    return new Date().getFullYear() - year;
}

// Calcula el total a pagar segun la marca
export function calculateBrand(brand) {
    let increase;

    switch (brand) {
        case 'eropeo':
            increase = 1.30;
            break;
        case 'americano':
            increase = 1.15;
            break;
        case 'asiatico':
            increase = 1.05;
            break;
        default:
            break;
    }

    return increase;

}

// Calculando incremento segun el plan
export function getPlan(plan) {
    return (plan === 'basic') ? 1.20 : 1.50;
}

// Mostrando la primera letra mayuscula
export function capitalize(text) {
    return text.charAt(0).toUpperCase() + text.slice(1);
}