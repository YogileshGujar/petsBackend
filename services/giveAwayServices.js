import { GiveAwaypets } from "../models/giveAway.js";


export async function giveAwayPets(data){
    let user=[];
    user.push(data)
    return await GiveAwaypets.insertMany(user);

}