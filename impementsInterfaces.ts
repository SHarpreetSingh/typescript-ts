interface Printble{
    print():void
}

class Documentr implements Printble {
    print() {
        console.log("printimg")
    }
}

const doc = new Documentr()
doc.print()

console.log(doc.print())




