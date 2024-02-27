// let value: unknown = "hello"
// let lengh: number;

// if (typeof value == "string") {
//     console.log("va", lengh=value.length)
// } else {
//     lengh = 0
// }
// console.log(value.length);

function nerverChecking():never{
    throw new Error("function is never retruns anything");
}

nerverChecking()


