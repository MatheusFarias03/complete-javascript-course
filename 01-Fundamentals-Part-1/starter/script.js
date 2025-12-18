
function lectureTwelve() {
    // Let is used to create variables to change later.
    let age = 2025;
    age = 2026;
    console.log(age);

    /*  
     * Const variables do change in any point in the future. It needs needs to
     * have a value when creating it.
     */
    const birthYear = 2000;
    // birthYear = 2001; // This won't work.
    console.log(birthYear);

    /* 
     * var is the old way to define variables. It works the same way as let.
     * The instructor will teach it later on Section 7.
     */
    var job = 'programmer';
    job = 'developer';
    console.log(job);
}

function lectureThirteen() {
    /* Operator allows us to transform values or combine multiple values and do
     * any kind of work with values.
     */
    const now = 2037
    const ageMatheus = now - 2000;
    const ageBob = now - 1972;
    console.log(ageBob, ageMatheus);

    console.log(ageMatheus * 2, ageMatheus / 10, 2 ** 3);

    const firstName = 'Matheus';
    const lastName = 'Matsumoto';
    console.log(firstName + ' ' + lastName);

    // Assignment operators.
    let x = 10 + 5;
    x += 10;
    x *= 4;
    x++;
    x--;
    console.log(x);

    // Comparison operators.
    console.log(ageBob > ageMatheus); // < , >, <=, >=
    console.log(ageMatheus >= 18);

    const isFullAge = ageMatheus >= 18;
}

function lectureFourteen() {
    let x, y;
    x = y = 25 - 10 - 5;
    console.log(x, y);

    const ageAdam = 20;
    const ageEve = 18;
    const averageAge = (ageAdam + ageEve) / 2
    console.log(averageAge);
}

function lectureSeventeen() {
    const firstName = 'Matheus';
    const job = 'programmer';
    const birthYear = 2000; 
    const currentYear = 2025;
    const age = currentYear - birthYear;

    const matheus = "I'm " + firstName + ", a " +  age + " years old " + job;
    console.log(matheus);

    // Template strings.
    const matheusNew = `I'm ${firstName}, a ${age} years old ${job}.`
    console.log(matheusNew);

    console.log(`String
    with
    multiple
    lines`);
}

function lectureEighteen(age) {
    if (age >= 18) {
        console.log('You are good to access the website.');
    } else {
        console.log(`Wait ${18 - age} year(s), my friend...`);
    }

    let centuryBorn;
    if (2025 - age > 2000) {
        centuryBorn = 21;
    } else {
        centuryBorn = 20;
    }
    console.log(centuryBorn);
}

function lectureTwenty() {
    // Type conversion.
    const inputYear = '2000';
    console.log(inputYear + 18);
    console.log(Number(inputYear) + 18);
    console.log(Number('Matheus')) // Returns NaN.
    console.log(typeof(Number('Matheus'))); // NaN is invalid number.
    console.log(String(23), 23);

    // Type coersion.
    console.log('I am ' + 23 + ' years old'); // It converts Number to String.
    console.log('23' - '10' - 3); // It converts String to Number.
    console.log('23' + '10' + 3); // It converts Number to String.
}

function lectureTwentyOne() {
    // Truthy and Falsy.
    // 5 falsy values: 0, '', undefined, null, and NaN.
    console.log(Boolean(0))
    console.log(Boolean(undefined))
    console.log(Boolean('Matheus'))
    console.log(Boolean({}))

    const money = 0;
    if (money) {
        console.log('Do not spend it all.');
    } else {
        console.log('You should get a job');
    }

    let height;
    if (height) {
        console.log(`Yay height is defined!`);
    } else {
        console.log('height is UNDEFINED');
    }
}

function lectureTwentyTwo() {
    const age = 18;
    // Strict equality operator (i.e. it does not do type coersion).
    if (age === 18) console.log('You just became an adult');

    // Loose equality operator (i.e. it does type coersion).
    if (age == '18') console.log('String to 18!');

    // For best practices, use the strict quality operator.

    // Getting a value from the webpage:
    let favourite = prompt("What is your favourite number?");
    console.log(favourite);

    favourite = Number(favourite);
    if (favourite === 69) {
        console.log("69!!!");
    } else if (favourite === 67) {
        console.log("67!!!");
    } else {
        console.log("Number is not 67 or 69");
    }

    if (favourite !== 67) {
        console.log("Why not 67???");
    }
}

function lectureTwentyFour() {
    const hasDriverLicense = true;
    const hasGoodVision = true;

    console.log(hasDriverLicense && hasGoodVision);
    console.log(hasDriverLicense || hasGoodVision);
    
    const shouldDrive = hasDriverLicense && hasGoodVision;
    if (shouldDrive) {
        console.log("The person is able to drive.")
    } else {
        console.log("The person is not able to drive.")
    }
}

function lectureTwentySix() {
    const day = 'monday';
    switch(day){
        case 'monday': // day === 'monday'
            console.log("Plan course structure");
            console.log("Go to coding meetup");
            break;
        case 'tuesday':
            console.log("Prepare theory video.");
            break;
        default:
            console.log("Nothing to do :D");
            break;
    }
}

function lectureTwentyEigth() {
    const age = 23;
    age >= 18 ? console.log("I can drink beer 🍺") : console.log("I like to drink water 💧");
    const drink = age >= 18 ? "beer 🍺" : "water 💧";
    console.log(drink);
}

function main() {
    lectureTwentyEigth();
}
main()