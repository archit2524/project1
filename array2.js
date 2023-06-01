const array = [1,2,3,4,5,6,7,8,9];
console.log(array)
console.log(array.length)
//push
   array.push(10)

console.log(array.push(10))

//unshift
array.unshift()
console.log(array.unshift(0))


//pop
array.pop()
console.log(array.pop(10))

//shift
array.shift()
console.log(array.shift())

array[0] = {array:80}
console.log(array)

//indexof
const names = ['archit','Mahesh','Suresh']
 names.indexOf('Mahesh');
 console.log(names.indexOf('Mahesh',3))

 names.lastIndexOf('Archit')
  console.log(names.lastIndexOf('Archit',2))

  names.includes('Archit')
  console.log(names.lastIndexOf('Suresh'))


  //find array
  let  cities = [
     { name1: 'mumbai', population:3433143},
     { name1: 'Ahmedabad', population:434322},
     { name1: 'chennai' , population: 329834289},

  ]
       console.log(cities.filter(cities=>Ahmedabad))  
















