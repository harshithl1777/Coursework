let carCompanies = ['Lexus', 'Toyota', 'Chevy'];
const carsByMake = [['RX'], ['Corolla'], ['Camaro']];

// inference when extracting values
const company = carCompanies[0];
const myCar = carsByMake[0][0];

// prevent invalid values
//* carsByMake.push(100); // error

// help with HOC
carCompanies.map((car: string): string => {
    return car;
});

// multiple typed array
const birthdays = [new Date(), '1998/07/11', 20021221];
//* birthdays.push(true); error


