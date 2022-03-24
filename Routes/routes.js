const schemaForProfile=require("../models/models");

//here we are exporting the the array of objects to the index.js file
module.exports=[{
    method:"GET",
    path:"/",
    handler:async(request,h)=>{
        return h.response("hello");
    }
},{
    method:"POST",
    path:"/profile",
    handler:async(request,h)=>{
        if(request.payload.password===request.payload.confirmPassword){
        const result=await schemaForProfile.validate(request.payload);
        if(result.error){
            return h.response({error:result.error.message});
        }
        return h.response(result.value);
    }
    return h.response({error:"password didn't matched!!"});
    }
}]