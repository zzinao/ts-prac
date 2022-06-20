//create by object literal
const person1 = { name: 'zzinao', age: 12 }

//person1 is not 'object' type.
//person1 is "{name: string, age :number}" type

//create by Object.create
const person2 = Object.create({ name: 'zzinao', age: 12 })

let objj: object = {}

objj = { name: 'zzinao' }

objj = [{ name: 'zzinao' }]

// objj = 12 //error
// objj = true; //
// objj = 100n;
// objj = Symbol();
// objj = null

declare function create(o: object | null): void
create({ prop: 0 })
create(null)
// create(42);
// create("string")
// create(false) // errors
