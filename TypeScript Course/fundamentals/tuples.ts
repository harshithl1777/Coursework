const drink = {
    color: 'blue',
    carbonated: true,
    sugarLevel: 40
};

// tuple version
const pepsi: [string, boolean, number] = ['brown', true, 40];

// type aliases for tuples
type Drink = [string, boolean, number];
const fanta: Drink = ['orange', true, 30];