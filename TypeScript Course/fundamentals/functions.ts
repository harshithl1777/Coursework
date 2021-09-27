// functions
const add = (num1: number, num2: number): number => {
    return num1 + num2;
}

// classes
class Bird {}
const parrot: Bird = new Bird();

// OR operator
const isNegative = (num: number): boolean | number => {
    if (num < 0) return num;
    return false;
};

// void (function does not return anything)
const logger = (message: string | number): void => {
    console.log(message);
};

// never (when there is no chance of completing the function)
const throwError = (message: string): never => {
    throw new Error(message);
};

// destructuring
const todaysWeather = {
    date: new Date(),
    conditions: 'sunny'
};

const logWeather = ({ date, conditions }: { date: Date, conditions: string }): void => {
    console.log(date, conditions);
}
