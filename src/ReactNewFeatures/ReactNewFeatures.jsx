import React from 'react'
function ReactNewFeatures() {

    //1 Takes a function as an argument
    // const numbers = [1, 2, 3, 4, 5]
    // const result = numbers.map(function (num) {
    //     return num * 2
    // })
    // console.log(result,"resultresultresult");

    //2  Return another fucntion

    // const numbers = [1, 2, 3, 4, 5]
    // function greet(message) {
    //     return function (name) {
    //         return `${message} ${name}`
    //     }
    // }

    // const sayHello = greet("Hello")
    // const userName = sayHello("Dilpavittar")
    // console.log(userName, "resultresultresult");


    //  Return both function and arguments

    // const numbers = [1, 2, 3, 4, 5]
    // function greet(fn) {
    //     return function (...args) {
    //         console.log("Calling function with args:", args);
    //         return fn(...args)
    //     }
    // }

    // function add(a, b) {
    //     return a + b
    // }

    // const addNumbers = greet(add);
    // const result = addNumbers(1, 3)

    // shello copy

    // const originnal = {
    //     name: "Ajit",
    //     skills: ["React js"]
    // }

    // const shelloCopy = { ...originnal }
    // shelloCopy.name = "Harmeet";
    // shelloCopy.skills.push("Node js")

    // console.log(originnal, "resultresultresult");

    /// Deep Copy

    // const originnal = {
    //     name: "dilpavittar",
    //     skills: ["React js", "Node js"]
    // }

    // const deepCopy = JSON.parse(JSON.stringify(originnal))

    // deepCopy.name = "Nagi"
    // deepCopy.skills.push("Python")
    // console.log(deepCopy, "Copy");

    function outer() {
        const name = "Dilpavittar"
        return function inner() {
            console.log("Hello", name)
        }
        return inner();
    }
    const greet = outer();
    greet();
    return (
        <div>
            <h1>Learning</h1>
        </div>
    )
}

export default ReactNewFeatures
