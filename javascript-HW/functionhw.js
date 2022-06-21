// Create a function that will get the sum of the numbers between 1 and n and return the answer summation(5) 

// should return 15 because 1+2+3+4+5=15
// Create a function to get the sum of all the even numbers in a group summationEven(5) // should return 6 because 2+4=6


function summation(num){

    sum = 0

    for(i =0; i<=num; i++){

       sum+= i;
           }

    return sum }

console.log(summation(5))


function summationEven(num){

    sum = 0

    for(i =0; i<=num; i++){

        if (i  %2 ==0){
            sum+= i;
        }
       
           }

    return sum }

console.log(summationEven(5))