interface partType {
    id:number,
    empId:string
}

function partlType(params:Partial<partType>) {
    console.log(params)
}

partlType({id:1})
// partlType(id:1)
// partlType({id:1,n:2})




