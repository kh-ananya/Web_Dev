// var pi =3.14;
// function examplevar()
// {
//     console.log(pi);
// }
// examplevar()
// console.log(pi);

// var x =12;
// function ex()
// {
//     var y =12;
//     console.log(x);
//     console.log(y);
// }
// ex()
// console.log(y);
// console.log(x);

// console.log(x);
// var x = 9;
// console.log(x);

// function ex()
// {
//     const y =12;
//     if(true)
//     {
//         const x =12;
//     }
//     console.log(y);
//     console.log(x);
// }
//     ex()
//     console.log(y);
//     console.log(x);

    
// let a = 3 ;
// let b = 4;
// function a2(a,b,call)
// {
//     return call(a,b);
// }
// function add(a,b)
// {
//     return(a+b)
// }
// function sub(a,b)
// {
//     return(a-b)
// }
// let res = a2(a,b,add);
// console.log(res);

// Call-Back Hell

const placeOrder=(callback)=>
{
    setTimeout(()=>
    {
        console.log("Order Placed");
        callback();
    },2000)
};
const startpro = (callback)=>
{
    setTimeout(()=>
    {
        console.log("Started")
        callback();
    },5000)
}
const printID=(callback)=>
{
    setTimeout(()=>
    {
        console.log("Id Printed");
        callback();
    },5000)
};
const pname=(callback)=>
{
    setTimeout(()=>
    {
        console.log("Name Printed");
        callback();
    },5000)
};
const pdesc = () =>
{
        console.log("Desc Printed");
    
};
console.log("ORDER ...........");
placeOrder(()=>
{
    console.log("In Production");
    startpro(()=>
    {
        console.log("Printing Items")
        printID(()=>
        {
            pname(()=>
            {
                pdesc();
                console.log("Day Ended")
            })
        })
    })
})

