
/*let minimumVoteinAge = 18
let age = 20
let registeredVote = true

if(age >= minimumVoteinAge && registeredVote === true){
    console.log("Congratulatulations you can vote!")
}

let daughterOfPresident = true
if(age >= minimumVoteinAge || daughterOfPresident){
    console.log("Congratulatulations you can vote!")
}

let currentCount = 1;
/*while (currentCount <= 10){
    console.log(`the current Count is: ${currentCount}`)
    currentCount = currentCount + 1
    currentCount += 1
    currentCount ++
    currentCount += 2

    currentCount -= 1
    currentCount -= 7
    currentCount --
}
console.log("done")*/

/*for (initialization; condition; incrementingSetup;){
    //here comes the code
} */

/*for (let currentCount = 1; currentCount <= 10; currentCount +=1){
    console.log(`the current Count is: ${currentCount}`)
}
console.log("done")

//for (let evenNumber = 2; evenNumber <=20; evenNumber += 2){
    //console.log(evenNumber)
//}

/*let startCount = 2
let endCount = 20
let countSkip = 2

for (let counter = startCount; counter <= endCount; counter += countSkip ){
    console.log (counter)
}*/

/*let members = ['Bence', 'Agota', 'Mario', 'Balazs']

for (let i = 0; i <= members.length-1; i++){
    console.log(i)
    console.log(members[i])
}*/

/*let numbers = [10,20,40,50]
let sum = 0

for(let i = 0; i <= numbers.length-1; i++){
    let num = numbers[i]
    sum = sum += num
}
console.log(sum)*/

let numbers = [10, 40, 20, -20, 50]
let max = numbers [0] //10, 40, 50

for(let i = 0; i <= numbers.length-1; i++){
    let num = numbers[i] //num jelen erteke 10, 40, 20, -20, 50
    if (num > max ){ //10>10, 40>10, 20>40, -20>40, 50>40
        max = num
    }
}
console.log(max)


