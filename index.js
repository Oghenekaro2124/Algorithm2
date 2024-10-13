// Leap year checker
function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    } else {
        return false;
    }
}
// Example and Usage
// let year = parseInt(prompt("Enter a year: "));
// if (isLeapYear(year)) {
//     console.log(`${year} is a leap year.`);
// } else {
//     console.log(`${year} is not a leap year.`);
// }


// Ticket pricing that prompts users to enter their age
function ticketPrice(age) {
    if (age <= 12) {
        return "$10";
    } else if (age >= 13 && age <= 17) {
        return "$15";
    } else {
        return "$20";
    }
}

// // Example Usage
// let age = parseInt(prompt("Enter your age: "));

// if (!isNaN(age)) {
//     console.log(`The ticket price for age ${age} is ${ticketPrice(age)}.`);
// } else {
//     console.log("Please enter a valid age.");
// }


// Recursion Fibonacci Sequence

function fibonacci(n) {
    if (n <= 0) {
        return 0;
    } else if (n === 1) {
        return 1;
    } else {
        return fibonacci(n - 1) + fibonacci(n - 2);
    }
}
// Example Usage
// let n = parseInt(prompt("Enter the position of Fibonacci number: "));
// console.log(`Fibonacci number at position ${n} is ${fibonacci(n)}.`);

// Palidrome Checker

function isPalindrome(s) {
    // Remove spaces, punctuation, and convert to lowercase
    s = s.replace(/[^A-Za-z0-9]/g, '').toLowerCase();

    // Base case
    if (s.length <= 1) {
        return true;
    }

    // Compare first and last characters
    if (s[0] !== s[s.length - 1]) {
        return false;
    }

    // Recursive call on the substring excluding the first and last characters
    return isPalindrome(s.slice(1, -1));
}
// Example Usage
// let str = prompt("Enter a string: ");
// if (isPalindrome(str)) {
//     console.log(`'${str}' is a palindrome.`);
// } else {
//     console.log(`'${str}' is not a palindrome.`);
// }

