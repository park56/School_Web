/*console.log(message)

var message = "Hello"

console.log(message)
js는 호이스팅이 가능하다. const, let을 사용할 경우 호이스팅이 방지된다.*/

/*function test() {
    if(true) {
        var a = 0;
    }
    console.log(a)
}
test();
js의 스코프는 함수이다.*/

/*for (let index = 1; index < 3; index++) {
    for (let j = 1; j < 10; j++) {
        console.log(index + " * " +j + " = " + index*j);
    }
    if(index == 2){
        continue
    }
    console.log("")
}*/

/*for(let i = 1; i < 10; i++) {
    console.log(`2X${i}=${2*i}`)
}*/

/*function f1() {

}

console.log(f1)
console.log(f1())*/

/*const obj = {
    id: 1,
    1:1
};
console.log(obj.id);
console.log(obj['id']);
console.log(obj[1]);
obj.name='obj';
console.log(obj.name)
*/

/*let obj = {
    id : 1
}
console.log(obj)
obj.value = 'name';
console.log(obj)
delete obj.id
console.log(obj)*/

/*const obj = {
    id:1,
    arr:[1,2,3]
}

Object.defineProperty(obj, 'value',{
    configurable:false,
    enumerable:true,    // false시 console.log에서 확인 불가
    valueL:'aa',
    writable:false,
    get(){return obj.id},
    set(){return obj.id}
});*/

/*const obj={}
const str='a'
function f() {}

console.log(typeof obj)
console.log(typeof str)
console.log(typeof f)
console.log(typeof Object.getPrototypeOf(obj))
console.log(typeof Object.getPrototypeOf(str))
console.log(typeof Object.getPrototypeOf(f))*/

