import { AllPets } from "../models/allpets.js";


export async function getAllpets(){
    return await AllPets.find({});
}

export async function createPets(data){
    let pets=[];
    pets.push(data)
    return await AllPets.insertMany(pets);

}