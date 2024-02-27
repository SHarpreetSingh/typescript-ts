// class jUser{
//     ename:string
//     email:string
//    readonly city:string=""

//     constructor(ename:string,email:string){
//         this.email=email
//         this.ename=ename

//     }

    
// }


// protecdted use in class
class jUser {
    public _count =1

    constructor(
        public ename:string,
        public email:string,
        private city:string
    ){

    }

    
}
class u extends jUser {
    isFam:boolean=true
    change(){
        this._count =2

    }
}


const j=new jUser('amn','h@hmail.com','j')
// j.city="delhi"

