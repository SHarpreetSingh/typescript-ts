interface User {
  name: string;
  id: number;
}

class UserAccount {
  name: string;
  id: number;

  constructor(name: string, id: number) {
    this.name = name;
    this.id = id;
  }
}

const user: User = new UserAccount("Murphy", 1);

let a: string = "w";

let y: string | boolean = true;

type UserDetail = {
  name: string;
}

let b: string | UserDetail = "9";

let rgb: true = true;

let numb: [1, 2, 3] = [1, 2, 3, "w"]

type user = [number, string]

const newUser: user = [1, "s"]


// getCoupon: () = []












