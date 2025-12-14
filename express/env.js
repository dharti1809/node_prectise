// export const PORT = isNaN(process.env.PORT) ? 3000 : parseInt(process.env.PORT);

//this file used for validation
import {z, ZodError} from "zod";

// const ageSchema = z.number().min(18).max(100).int();
// const userAge = 21;

//------------------- method 1--------------------------
// const parseuserAge = ageSchema.parse(userAge);
// console.log(parseuserAge);

//------------------- method 3--------------------------

// const { data, error, success } = ageSchema.safeParse(userAge);
// console.log(success);


//------------------- method 2--------------------------
// try{
//     const parseuserAge = ageSchema.parse(userAge);
//     console.log(parseuserAge);
// }catch(error) {

//     // instanceof is a javascript operator that checks if an object is an instance of a specific class or constructor.
//     if(error instanceof ZodError ) {
//         console.log(error.issues[0].message);
//     }else{
//         console.log("Unknown error", error);
//     }
// }

// -------------------- method 4--------------------------
//coerce use to change string into number
const portSchema = z.coerce.number().min(1).max(65535).default(3000);

export const PORT = portSchema.parse(process.env.PORT);   
console.log(PORT);