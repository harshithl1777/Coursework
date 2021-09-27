interface Plane {
    company: string,
    model: string,
    year: number,
    functional: boolean
};

const boeing787 = {
    company: 'Boeing',
    model: '787', 
    year: 2006,
    functional: true
};

const printPlane = (plane: Plane): void => {
    console.log(`Company: ${plane.company}`);
    console.log(`Model: ${plane.model}`);
    console.log(`Year: ${plane.year}`);
    console.log(`Functional: ${plane.functional}`);
}

printPlane(boeing787);