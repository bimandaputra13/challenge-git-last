//console.log("Halo, namaku adalah Sentot Bimanda Putra.. u can call me Bima");

// materi async
//const promise =() =>{
const value = false;
//new promise
const promise = new Promise((resolve,reject) => {
if(value){
   resolve("yeay, data being returned")
}else{
   reject("Data not found")
}
});
//};
promise
 .then((response) => {return response += "(manipulated)"})
 .then((response) => console.log(response))
 .catch((message) => console.log("failure:", message))
 .finally((message) => console.log("Finished"))
// const funcWAiter = async()=>{
//    try {
//       const data = await promise()
//       console.log(data)
//    } catch (message) {
//       console.log("msg error",error)
//    }
   
// }

// funcWAiter(    

// end materi async