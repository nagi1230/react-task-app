import React from 'react'

function DsaPractice() {
    // Program for printing table of a number

    // const inputValue = 5;
    // for (let i = 1; i < 11; i++) {
    //     console.log(i * inputValue, "multiplication");
    // }

    /// Program for Sum of squares of first n natural numbers;
    /// Let’s take n = 5  
    // result  1 2+2 2+3 2+4 2+5 2=1+4+9+16+25=55

    // const n = 3
    // var sum = 0
    // for (let i = 1; i <= n; i++) {
    //     sum += i * i;
    // }
    // console.log(sum, "multiplication");

    //// Swap Two Numbers

    let a = 5;
    let b = 10;
    // [a, b] = [b, 
    // a]; // Using array destructuring to swap values
    // console.log(a, b, "a and b after swap");



    for (let i = 0; i < 1; i++) {
        let temp = a;
        a = b;
        b = temp;
    }

    // console.log("a:", a); // expecting 10
    // console.log("b:", b); // expecting 5


    const original = {
        name: "Harmeet",
        skills: ["Node js"]
    }

    const deepCopy = JSON.parse(JSON.stringify(original));

    deepCopy.name = "Dilpavittar"
    deepCopy.skills.push("React js developer");

    // console.log(original.name ,"check");
    // console.log(original.skills,"check");
    return (
        <div>
            <h1>DSA Practice</h1>
        </div>
    )
}

export default DsaPractice
