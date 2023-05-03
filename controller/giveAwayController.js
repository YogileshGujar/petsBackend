import { GiveAwaypets } from "../models/giveAway.js";
import { giveAwayPets } from "../services/giveAwayServices.js";

   

export async function creategiveAwayController(req,res){
    let {email}=req.body
    try{
        let user =await GiveAwaypets.findOne({email:email});
        if(user){
            return res.status(400).json({error:"This email Allready exist in our Data"});
        }
        else{
            let data= await giveAwayPets(req.body);
            return res.status(200).send(data);
        }
       

    }catch(e){
        return res(500).json({error:"Error from controller catch"});
    }
}   