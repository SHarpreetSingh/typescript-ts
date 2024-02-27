function identty(val:string):string{
    return val
}

function anyType(val:any):any{
    return val
}

function generics<Type>(arg:Type):Type {
    console.log(arg.length); // we can pass araay in it 
    return arg
}

function identty2<T>(arg:T):T{
    return arg
}

generics(3)

function identty3<T>(arg:T[]):T[]{
    console.log(arg.length)
    return arg;
}

// function identtyfour<T>(arg:[]T):[]T{
//     return arg
// }

function loggingIdentity<Type>(arg: Array<Type>): Array<Type> {
    console.log(arg.length); // Array has a .length, so no more error
    return arg;
}
 

