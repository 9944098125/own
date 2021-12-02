const express = require('express');
const app = express();
app.use(express.json());

const python_qa = [
    {
        question:"What is Python ?",
        answer:"Python is an interpreted, high level, general purpose programming language. It's design philosophy emphasizes code 
        with it's significant use of indentation. It's language constructs and it's object oriented approach aims to help developers
        to develop clean, clear and logical codes for small and large scale projects."
    },
    {
        question: "What is OOPS ?",
        answer: "Object Oriented Programming approach is programming paradizm that completely relies on the concept of objects and classes.
        It is used to structure a software program into reusable bits of code or blueprints (usually called as classes), which are generally
        used to create individual instances of objects. Now there are four fundamental concepts in OOPS and they are - ENCAPSULATION, POLYMORPHISM,
        INHERITANCE and DATA-ABSTRACTION."
    },
    {
        question:"What is Polymorphism ?",
        answer: "Polymorphism is an OBJECT ORIENTED programming approach that allows us to perform a task in different ways. For eg- Let's say,
        We have a class Animal, and a method sound() in it. Now, since this is generic class we can't give it implementations like Roar, Meow,
        Oink, etc... So we can use the same sound() method for every animal in common. Here we use the concept of polymorphism."
    },
    {
        question:"What is inheritance ?",
        answer: "Inheritance is a concept/mechanism of aquiring the properties and methods of a parent object."
    },
    {
        question:"What is Encapsulation ?",
        answer: "Encapsulation refers to bundling of data, along with the methods on which that data operates, into a single unit."
    },
    {
        question:"What is Data-Abstraction ?",
        answer:"Data abstraction is the reduction of a particular body of the data into a simplified representation of the whole. Simply, it  
        shows/provides the essential data to the outside public and hides the background details."
    }
]
/* then how shall we indicate the data inside quotes. I am placing id but error is happening, putting those question and ans keys in quotes but error.
Then how can we post the python_qa to the localhost, however we will later deploy this. or shall we create a json file and place these question and 
answers in that and import them here, if that how to do represent the questions and answers keys and values in json file or if we can do it here itself
then how to represent the question and answer keys, however we will put the answers and questions values in quotes as they are strings. But how to 
represent them and how to post them to the localhost:3005. */
/* const databasePath = path.join(__dirname, "----.db");
since we are not using any database I am not using this */

app.post('/python', async (request, response) => {
      response.status(200).send(python_qa);
});

//since we are not using any db, I don't think we shall use initializeDbAndServer method
const port = process.env.PORT || 3005
app.listen(port, () => console.log(`App is running at ${port}`));