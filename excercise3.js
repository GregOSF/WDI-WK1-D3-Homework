var securityQuestions = [{question: "What is the name of your favorite pet?", expectedAnswer: "BusterNutter"},
{question: "What is the color of my hat?", expectedAnswer: "Beige"},
{question: "Is the sky blue?", expectedAnswer: "Yes"}];

for (i=0; i < securityQuestions.length; i++ ) {
    var askQues = prompt(securityQuestions[i].question)

    if (askQues !== securityQuestions[i].expectedAnswer) {
        alert("WRONG ANSWER")
    } else {
        alert("RIGHT ANSWER")
    }

} 