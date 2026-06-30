
export type Status = "новый" | "собран" | "возврат";

export  const STATUS_CONFIG: Record<Status , {
    color:string;
    text:string;
    img:string;
}> = {
    "новый":{
        "color":"text-gray-500",
        "text":"Это новый товар",
        "img":"/file.svg"
    },
    "собран":{
        "color":"text-green-500",
        "text":"Это уже собранный товар",
        "img":"/globe.svg",
    },
    "возврат":{
        "color":"text-red-500",
        "text":"Этот товар на возврат",
        "img":"/window.svg",
    },
   } 
   