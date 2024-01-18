import { Menu } from "../models/menu.js";
import { idsArray } from "../constant/constant.js";
import mongoose from "mongoose";

export const addMenu = async ()=>{
    const currMenu = await new Menu({
        day:"Friday",
        itemsLinked:idsArray
    });
    currMenu.save();
}

export const getMenuIds  = async(req , res)=>{

    try{

        const menu  = await Menu.find({});
        return res.status(200).json(menu);

    }catch(error)
    {
        return res.status(500).json({"msg":error?.message});
    }

}