import { serve } from "https://deno.land/std@0.140.0/http/server.ts";
const home = await Deno.readFile("./index.html");

const listener = async(req,res,content)=>{
    const url = req.url.split("/")[3];
    if(url === "style.css"){
        res = await Deno.readFile("./style.css");
        content = "text/css";
    }
    else {
        res = home;
        content = "text/html; charset=utf-8"
    }
    return new Response(res,{headers:{"content-type":content}});
    
}




serve(listener);