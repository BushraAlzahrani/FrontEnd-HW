
// Q1

const friends = ["Melissa", "Marc", "Andrew", "Nick"];

friends.forEach(function(friend) {
  console.log("I have a friend named " + friend);
});

namelowercase = friends.map(function(name){return  name.charAt(0).toLowerCase() + name.slice(1)})

console.log(namelowercase);


// Q2
const numbers = [1, 5, 8]

const numbersSquared = numbers.map(num => num * num);

console.log(numbersSquared);


// Q3

const instructors = ["Alex", "Daniel", "Morgan", "Ben", "Micah", "Jims"];

const nameisawesome=instructors.map(name => name + " is awesome");

console.log(nameisawesome);

// Q4

const nums = [25, 6, 8, 3];

evenNumbers = 0

evencount = nums.reduce ((per, curr) =>  {if(curr % 2 == 0){evenNumbers++}},0);
 
console.log(evenNumbers);

// Q5

const people = ["jerks", "nice people", "jerks", "nice people", "nice people"];


jerks = people.filter(value=> value.includes("jerk") )

console.log(jerks);

// Arrow Methods Q1

const avg= (array) => {
    let total = 0;
    let count = 0;

    array.forEach(function(item) {
        total += item;
        count++;
    });

    return total / count;
}


console.log(avg([8, 2, 2, 4]));



//Arrow Methods Q2
const reverse = (str) => {
  
  return str.split("").reverse().join("");
};
console.log(reverse("caterpillar"));



//Objects Exercise: The Movie Database


 function Movie(title, duration){
    this.title =title;
    this.duration= duration;
    this.stars = [];
    

    this.moviestars = function(star){
        this.stars.push(star);

    }

    this.info = function(){
             console.log(`${this.title} lasts for ${this.duration} minutes. Stars: ${this.stars}`)
    }

}

movie = new Movie('Puff the Magic Dragon','30')
movie.moviestars("Puff")
movie.moviestars("Jackie","Living Sneezes")
movie.moviestars("Living Sneezes")
movie.info(movie)

