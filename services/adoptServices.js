import { Adoptpets } from "../models/adoptpets.js";


export async function adoptPets(data){
    let user=[];
    user.push(data)
    return await Adoptpets.insertMany(user);

}