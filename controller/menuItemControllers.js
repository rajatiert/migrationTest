import mongoose from "mongoose";
import { Menuitem } from "../models/menuItem.js";
import { sampleMenuItem } from "../constant/constant.js";

export const addMenuItem = async ()=>{
    for(let i = 0; i < sampleMenuItem?.length ; i++)
    {
        try{
        const currItem = await new Menuitem(sampleMenuItem[i]);
        currItem.save();
        }catch(error)
        {
            console.log("error saving the item ",error);
        }
    }
}

export const getMenu = async(req, res)=>
{
    try{
        const menu = await Menuitem.find({});
        console.log("menu in cluster = ",menu);
       return res.status(200).json(menu);

    }catch(error){
      
        return res.status(500).json({'msg':error.message});
    }
}


export const getMenuById = async(req, res )=>{
   //console.log("id = ", req?.params?.id);
    try{
        
        const menu = await Menuitem.find({_id:req?.params?.id});
        console.log("menu = ",menu);
        return res.status(200).json(menu);

    }catch(error)
    {
        return res.status(500).json({'msg':error?.message});
    }

}