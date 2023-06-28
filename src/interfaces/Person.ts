export interface Person {
    userId: string,
    name: string,
    kanaName: string,
    dateOfBirth: string,
    age: number,
    gender: string,
}
  
export interface PersonScale {
    userIdWithName: string,
    kanaName: string,
    dateOfBirthWithAge: string,
    gender: string,
}

export const toPersonScale = (persons: Person[]) => {
    const listResult: PersonScale[] = [];
    for(let i = 0;i < persons.length; i++){
        const person: Person = persons[i];
        const PersonScale: PersonScale = {
            userIdWithName: '['+person.userId+'] '+person.name ,
            kanaName: person.kanaName,
            dateOfBirthWithAge: person.dateOfBirth+'('+person.age+')',
            gender: person.gender
        }
        listResult.push(PersonScale);
    }
    return listResult;
}