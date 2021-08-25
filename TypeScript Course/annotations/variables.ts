// Basic types
const apples: number = 5;
const hasName: boolean = true;
const city: String = 'Mississauga';
const nothing: null = null;

// Arrays
const ages: number[] = [4, 17, 48, 24, 60];
const cars: String[] = ['Mazda', 'Nissan', 'Lexus'];
const ofAge: boolean[] = [true, false, true];

// Object
const person: { name: String, age: number } = {
    name: 'Vikram',
    age: 17
}

// Function
const getIntroString: (personName: String, age: number) => String = (personName: String, age: number) => {
    return `${personName} is ${age} years old.`;
}

console.log(getIntroString(person.name, person.age));

