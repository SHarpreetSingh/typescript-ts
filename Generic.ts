interface GenericType<T> {
    id: number
    acc: T
}

function showType(params:GenericType<Boolean>) {
    console.log(params);
}

showType({id: 1,acc: true});


/* another example */

// interface GenericType<T, U> {
//     id: T
//     acc: U
// }

// function showTypeTwo(args: GenericType<Number, Boolean>) {
//     console.log(args);
// }

// showTypeTwo({ id: 1, acc:true});



