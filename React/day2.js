// const addveggies=(callback)=>
// {
//     setTimeout(()=>
//     {
//         // const veggies = "vegiies"
//         console.log("Veggies Prepared")
//         callback()
//     },2000);
// }
// const addtikki=(veggies,callback)=>
// {
//     setTimeout(()=>
//     {
//         console.log("Tikki Prepared")
//         callback()
//     },2000);
// }
// const makeburger=(veggies,tikki,callback)=>
// {
//     setTimeout(()=>
//     {
//         console.log("Burger Prepared")
//         callback()
//     },2000)
// }
// addveggies((veggies)=>
// {
//     console.log("Preparing for tikki")
//     addtikki(veggies, (tikki)=>
//     {
//         console.log("Preparing for burger")
//         makeburger(veggies,tikki,(burger)=>
//         {
//             console.log("Burger is Ready")
//         })
//     })
// })o
const placeorder = () =>
{   
    return new Promise((reject,resolve) =>
    {
        setTimeout(()=>
        {
         resolve()
        },2000)
    })
}
const startprod = () =>
{   
    return new Promise((reject,resolve) =>
    {
        setTimeout(()=>
        {
         resolve()
        },2000)
    })
}
const printID = () =>
{   
    return new Promise((reject,resolve) =>
    {
        setTimeout(()=>
        {
         resolve()
        },2000)
    })
}
const pname = () =>
{   
    return new Promise((reject,resolve) =>
    {
        setTimeout(()=>
        {
         resolve()
        },2000)
    })
}
const pdesc = () =>
{   
    return new Promise((reject,resolve) =>
    {
        setTimeout(()=>
        {
         resolve()
        },2000)
    })
}


placeorder()
.then(()=>
{
    console.log("Prodct is in Prodn")
    return startprod();
})
.then(()=>
{
    console.log("Id Printing")
    return printID();
})
.then(()=>
{
    console.log("PName Printing")
    return pname();
})
.then(()=>
{
    console.log("ProDesc Printing")
    return pdesc();
})
.catch((error)=>
{
   console.log("Error",error)
})