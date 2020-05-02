export class Ingredient{
   constructor(
    public _id:String,
    public created_at:Date,
    public name_es:String,
    public name_en:String,
    public model :String,
    public view_model:String,
    public type :String,
    public color : String,
    public description_es : String,
    public description_en : String,
   ){
       
   }
}

// {"name_es":"Jugo de limon",
//     "name_en":"Lemon juice",
//     "model":"liquid_model",
//     "view_model":"lemonjuice.svg",
//     "type":"liquid",
//     "color":"#ffeb0d",
//     "description_es": "Jugo de limon exprimido",
//     "description_en":"English description unavailable"
//     }