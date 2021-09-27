const profile = {
    name: 'Harshith',
    age: 17,
    coords: {
        lat: 0,
        long: 11,
    },
    setAge(age: number): void {
        this.age = age;
    }
}

const { age }: { age: number } = profile;
const { coords: { lat, long } } = profile;