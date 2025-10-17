// let a = "ABC"
// a = 123

// let a = 123
// a = "ASD"

// let a = [1, 2, 3, 4, 5, 6]
// a.push("asdasd")

// let a = ["abc"]
// a.push(456)

// let a = [1,2,3,4,"asd","rftg"]
// a.push("aasd")
// a.push(123)
// a.push(true)


// let a = [
//     {
//         id:1,
//         name:"ABC"
//     }
// ]
// a.push({
//     name:"asdas",
//     id:2,
//     age:123
// })


// string
// number
// boolean
// void
// array
// object


// let a:string
// a = 123

// let a:number
// a = "asd"

// let a:boolean
// a = "asd"

// let a:(a:string)=> void
// a = (a)=>{
//     console.log(a)
//     let b = {}
// }

// a(123)

// let a:string | number
// a = "sada"
// a = 12
// a = true


// let a:"Yes" | "No"

// a = "Yes"

// let obj: {
//     id: number,
//     name:string,
//     isActive:boolean,
//     status: "Approved" | "UnApproved"
// }

// obj = {
//     id:1,
//     name:"ABC",
//     isActive: true,
//     status: "Approved"
// }

// type status = "Approved" | "Unapprved"

// let a:status = "Unapprved"

// type obj = {
//     id: number,
//     name: string
// }

// let a: obj = {
//     id: 1,
//     name: "ASDSAD"
// }

// let b: any = [
//     {
//         id: 1,
//         name: "ADS",
//         atasda:"asad"
//     },
//     "asdasd",    
//     23165465
// ]

// type func = (y:number,x?:string)=> void

interface EmpConfig {
    comp: string,
    batch: "A" | "B"
}

interface Employee extends EmpConfig {
    id: number,
    name: string,
    age: number
}



let obj: Employee[] = [
    {
        id: 1,
        name: "ABC",
        age: 30,
        comp: "ASd",
        batch: "A"
    },
    {
        id: 1,
        name: "ABC",
        age: 30,
        comp: "ASd",
        batch: "A"
    }
]