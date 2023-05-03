import { AllPets } from "../models/allpets.js";
import { createPets, getAllpets } from "../services/allPetsServices.js";


export async function getAllpetsController(req,res){
    try{
        let AllPets =await getAllpets();
        return res.status(200).json(AllPets);

    }catch(e){
        return res(500).json({error:"Error from controller catch"});
    }
}

export async function createPetsController(req,res){
    let {name}=req.body
    try{
        let pets =await AllPets.findOne({name:name});
        if(pets){
            return res.status(400).json({error:"This Pet name is Allready exist in our Data"});
        }
        else{
            let data= await createPets(req.body);
            return res.status(200).send(data);
        }
       

    }catch(e){
        return res(500).json({error:"Error from controller catch"});
    }
}