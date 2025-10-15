import { createClient } from "@supabase/supabase-js";

const anonKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImJ0cmRzaXh3bGdteWlrZndmbWZwIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjA1Mzc0MzUsImV4cCI6MjA3NjExMzQzNX0.VlM1lymTXWGuwp5unqSIVzIw6uNkTgbLrJcxT2p1AWM";
const supabaseUrl = "https://btrdsixwlgmyikfwfmfp.supabase.co";

const supabase = createClient(supabaseUrl, anonKey);

/*
supabase.storage.from("images").upload(file.name,file,{
            upsert: false,
            cacheControl: '3600',
        }).then(
            ()=>{
                const publicUrl = supabase.storage.from("images").getPublicUrl(file.name).data.publicUrl
                console.log(publicUrl)
            }
        )
*/

export default function mediaUpload(file){
    return new Promise(
        (resolve, reject)=>{
            if(file ==  null){
                reject("No file selected")
            }else{
                const timestamp = new Date().getTime();
                const fileName = timestamp+file.name;

                supabase.storage
                .from("images")
                .upload(fileName,file,{
                        upsert: false,
                        cacheControl: '3600',
                }).then(
                    ()=>{
                        const publicUrl = supabase.storage
                            .from("images")
                            .getPublicUrl(fileName).data.publicUrl

                        resolve(publicUrl)
                    }
                ).catch(
                    ()=>{
                        reject("An error coccured")
                    }
                )
            }
        }
    )
}
