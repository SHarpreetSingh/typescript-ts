// interface PickType {
//   id: number
//   firstName: string
//   lastName: string
// }

// function showType(args: Omit<PickType, "firstName" | "lastName">) {
//   console.log(args)
// }

// showType({ id: 7 })
// // Output: {id: 7}

// // showType({ firstName: "" })
// // Error: Object literal may only sp


/* Exclude type */
interface FirstType {
    id: number
    firstName: string
    lastName: string
    a: boolean
}

interface SecondType {
    id: number
    address: string
    city: string
}

type ExcludeType = Exclude<keyof FirstType, keyof SecondType>
 
// Output; "firstName" | "lastName"
let remove:ExcludeType="firstName"


