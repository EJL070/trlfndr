import { serve } from "https://deno.land/std@0.140.0/http/server.ts";

const listener = async(req,res)=>{
    const url = req.url.split("/")[3]
    return new Response(url);
    
}


//   if (pathname.startsWith("/style.css")) {
//     // Read the style.css file from the file system.
//     const file = await Deno.readFile("./style.css");
//     // Respond to the request with the style.css file.
//     return new Response(file, {
//       headers: {
//         "content-type": "text/css",
//       },
//     });
//   }

//   return new Response(
//     `<html>
//       <head>
//         <link rel="stylesheet" href="style.css" />
//       </head>
//       <body>
//         <h1>Example</h1>
//       </body>
//     </html>`,
//     {
//       headers: {
//         "content-type": "text/html; charset=utf-8",
//       },
//     },
//   );
// }

serve(listener);