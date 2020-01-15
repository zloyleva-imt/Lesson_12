console.log('App was loaded...');

// var a = 'GLOBAL VAR';

// function foo(text){
//     console.log(this);
//     console.log(this.a, text);
// }

// var obj = {
//     a: 'inside obj',
//     foo: foo
// }

// var objOther = {
//     a: 'inside objOther',
// }

// // foo();
// // obj.foo();

// // var bar = obj.foo;
// // bar();

// // bar.call(objOther,param1,param2)
// // bar.apply(objOther,param)
// // var x = bar.bind(objOther)
// // x()

// // function one(){
// //     console.log(this);
// //     two.call(obj)
// // }
// // function two(){
// //     console.log(this);
// //     three()
// // }
// // function three(){
// //     console.log(this);
// //     console.log('asdfasdf')
// // }

// // one()

// function doFoo(fn,context){
//     fn.call(context)
// }

// obj.foo();
// // doFoo(obj.foo,objOther);

// // setTimeout(obj.foo.bind(), 1000)

// function doFooReturnArrow(){
//     // return () => {
//     //     console.log(this.a)
//     // }
//     return function(){
//         console.log(this.a)
//     }
// }

// var barDoFooReturnArrow = doFooReturnArrow.call(obj)

// barDoFooReturnArrow.call(objOther)

// bar(a)
// bar.call(this,a)

// const arrRows = document.getElementsByClassName('person_row')

// function avg(arr, gender){
//     return (function (arrFilterd){
//         return arrFilterd.reduce()/arrFilterd.length
//     })(arr.filter())
// }

// avg(arrRows, 'male')

// '10,20,35,fghdf,25,78,tyu,56,wert'

