//return connection objet

import obj from "../config/config";
const db_password:any = `admin`;
const db_name:any=`mernstack`;
const db_url:any=`mongodb+srv://admin:${db_password}@miniprojectdb.nzphu.mongodb.net/${db_name}?retryWrites=true&w=majority`;

export default function getConnection(){
    try{
        return obj.mernClient.connect(db_url); 
    }catch(error){
        console.log("connection failed");
    }
};