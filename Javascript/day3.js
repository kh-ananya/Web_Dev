

  //// Async and Await

//  function delay(time)
// {
//       return new Promise((resolve,reject)=>
//       {
//          setTimeout(()=>{
//             resolve();
//           },time)
//       })
// }
// async function placeorder()
// {
//        await delay (2000)
//        console.log("Order Taken")
// }
// async function startproduction()
// {
//     await delay(2000)
//     console.log("Order Placed")
// }
// async function printid()
// {
//     await delay(2000)
//     console.log("Production started")
// }
// async function prodctname()
// {
//     await delay(2000)
//     console.log("Id Printed")
// }
// async function prodctdesc()
// {
//     await delay(2000)
//     console.log("Prodct name printed")
// }
// async function main()
// {
//     console.log("Order is going to take place")
//     await placeorder()
//     await startproduction()
//     await printid()
//     await prodctname()
//     await prodctdesc()
//     console.log("prodct desc")
// }
// main();

// async function fetchdata()
// {
//     try { 
//         const url = "https://jsonplaceholder.typicode.com/users "
//         const response = await fetch(url);
//         const data = await response.json();
//         console.log(data)
//     } 
//     catch{(error)=>
//     {
//       console.log("Error Fetching",error)
//     }}
// }
// fetchdata();
  
/// Below is a question performed by async await , promise & callback hell
   

/// By async await

// function delay(time)
// {
//   return new Promise((resolve,reject)=>
//   {
//     setTimeout(()=>
//     {
//       resolve();
//     },time)
//   })
// }
// async function user()
// {
//   await delay(2000);
//   console.log("SignUp")
// }
// async function enterusername()
// {
//   await delay(2000)
//   console.log("Enter UserName")
// }
// async function enterpass()
// {
//   await delay(2000)
//   console.log("Enter Password")
// }
// async function main()
// { console.log("Opening")
//   await user();
//   await enterusername();
//   await enterpass();
//   console.log("Close")
// }
// main();
 
//   By Promise

// const user = ()=>
// {  
//   console.log("OPening")
//   return new Promise((resolve,reject)=>
//   {
//     setTimeout(()=>
//     {
//       resolve()
//     },2000)
//   })
// }
// const enterusername = () =>
// {
//   return new Promise((resolve,reject)=>
//   {
//     setTimeout(()=>
//     {
//       resolve()
//     },2000)
//   })
// }
// const enterpass = () =>
// { 
  
//   return new Promise((resolve,reject)=>
//   {
//     setTimeout(()=>
//     {
//       resolve()
//     },2000)
//   })
// }
// const end = () =>
// {    
//   console.log("Successfull")
//   return new Promise ((resolve,reject)=>
//   {
//     setTimeout (()=>
//     {

//     },2000)
//   })
// }
// user()
// .then(()=>
// {  
//   console.log("SignUp")
//   return enterusername()
// })
// .then(()=>
// {
//   console.log("Enter Username")
//   return enterpass()
// })
// .then(()=>
// {
//   console.log("Enter Password")
//   return end()
// })

  // By callback hell

const user = (callback) =>
{
    setTimeout(()=>
    {
        callback();
    },2000)
}
const signup = (callback) =>
{
    setTimeout(()=>
    {
        callback();
    },2000)
}
const enterusername = (callback) =>
{
    setTimeout(()=>
    {
        callback();
    },2000)
}
const enterpass = (callback) =>
{
    setTimeout(()=>
    {
        callback();
    },3000)
}
console.log("Opening")
user(()=>
{
    console.log("SignUp")
    signup(()=>
    {
        console.log("enter Username")
        enterusername(()=>
        {
            console.log("Enter Password")
            enterpass(()=>
            {
                console.log("SuccessFull")
            })
        })
    })
})