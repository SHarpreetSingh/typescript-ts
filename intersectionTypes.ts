const message:string = "hello worlbd!";
// console.log(message);

type LeftType = {
    id:number,
    left:string
}

type RightType = {
    id:number,
    right:string
}

type IntersectionType = LeftType & RightType

function showType(args:IntersectionType){
    console.log(args);
}

showType({id:1,left:"Test"})


