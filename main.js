// // #1
// var tripleFive = function (i){
// 	for (i = 1; i <= 3; i++) {
// 		console.log("Five!")
// 	}
// }
// // #2 NEED TO FINISH
// var lastLetter = function() {

// }


// // #3
// var square = function (number){
// 	number = number * number
// 	console.log(number)
// }

// // #4
// var negate = function (number){
// 	number = number * -1
// 	console.log(number)
// }

// // #5 I want to develop a loop to cover nunbers1-3 cover in code review
// var toArray = function (number1, number2, number3) {
// 	// for (i = 1; i < 4; i++) {
// 		var myArray = []
// 		number1 = myArray.push(number1)
// 		number2 = myArray.push(number2)
// 		number3 = myArray.push(number3)
// 		console.log(myArray)
// 	// }
// }

// // #6 NEED TO FINISH
// var startsWithA = function(string){
// 	if (string.length[0] = "A" || "a") {
// 		console.log(true)
// 	}
// 	else {
// 		console.log(false)
// 	}
// }

// // #7
// var excite = function(x){
// 	x = x + "!!!"
// 	console.log(x)
// }

// // #8
// var sun = function(sun){

// }

// // #9
// var tiny = function(number){
// 	if (number < 0) {
// 		console.log(false)
// 	}
// 	else if (number < 1) {
// 		console.log(true)
// 	}
// 	else {
// 		console.log(false)
// 	}
// }

// #10
// var getSeconds = function(MM:SS) {

// }



// Function Practice #2

// // #1
// var getName = function(object){
// 	return object.name
// }

// console.log(getName({name: "Luisa", age: 25}))

// // #2 
// var totalLetters = function(array) {
// 	var count = 0
// 	for (i = 0; i < array.length; i++){
// 		count += array[i].length
// 	}
// 	return count
// }
// console.log(totalLetters(['javascript', 'is', 'awesome']))


// // #3 NOT RETURNING key variable
// var keyValue = function(key, variable) {
// 	var object1 = {}
// 		object1[key] = variable
// 		return object1
// 	}
// console.log(keyValue("city", "Denver"))

// #4
// var negativeIndex = function(array, negnum) {
// 	return array[array.length + negnum] 
// }
// console.log(negativeIndex(['a', 'b', 'c', 'd', 'e'], -2))

// #5 RETURNING UNDEFINED
// var removeM = function(str) {
// 	var newstr = ""
// 	for(var i = 0; i < str.length; i++){
// 		if (str.length[i] != "m") {
// 			str[i] += newstr
// 		}
// 	}
// 	return newstr
// }
// console.log(removeM("family"))
// #6
// var printObject = function(array){
// 		array.key = key
// 		array.value = value
// 		console.log(key + " is " + value)
// }
// printObject({ a: 10, b: 20, c: 30 })

// #7 RETURNING UNDEFINED
// var vowels = function(str) {
// 	var arr = []
// 	var object = {
// 		vowel:"a",
// 		vowel:"e",
// 		vowel:"i",
// 		vowel:"o",
// 		vowel:"u"
// 	}
// 	for (var i=0; i < str.length; i++) {
// 		if (str.length[i] === object.vowel) {
// 			str.length[i].push(arr)
// 			return arr
// 		}
// 	}
// }
// console.log(vowels('alabama'))

// #8 Write a function called 'twins' which takes an array and returns true if every adjacent pair of items in the array is the same.
// All arguments return true. 
// var twins = function(twinsArray) {
// 	for (var i = 0; i <= twinsArray.length; i++) {
// 		if (twinsArray[i] === twinsArray[i + 1]) {
// 			return true
// 		}
// 		else {
// 			return false
// 		}
// 	}
// }

// #9 Write a function called 'or' which takes an array of booleans and returns true if any one of them is true. Given an empty array, return false. If you find an item that is true, the function should return true immediately and not continue checking further values.

// var or = function(boolArray) {
// 	for (var i = 0; i <= boolArray.length; i++) {
// 		if (boolArray[i] === true){
// 			return true
// 		}
// 		else if (boolArray[i] === undefined){
// 			return false
// 		}
// 	}
// }

// #10 Write a function called 'unique' which takes an array of strings, and returns a new array consisting of the unique values (no duplicates).
// Only returning the first letter of the string
var unique = function(stringArray) {
	var newArray = [];
	for (var i = 0; i <= stringArray.length; i++) {
		if (stringArray[i] !== newArray[i]) {
			newArray.push(stringArray[i])
			return newArray
		}
	}
}
console.log(unique(['a', 'b', 'a', 'c', 'd', 'd']))



































