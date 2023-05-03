import { Adoptpets } from "../models/adoptpets.js";
import { adoptPets } from "../services/adoptServices.js";


export async function createAdoptController(req,res){
    let {email}=req.body
    try{
        let user =await Adoptpets.findOne({email:email});
        if(user){
            return res.status(400).json({error:"This email is Allready exist in our Data"});
        }
        else{
            let data= await adoptPets(req.body);
            return res.status(200).send(data);
        }
       

    }catch(e){
        return res(500).json({error:"Error from controller catch"});
    }
}