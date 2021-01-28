var quizzQuestions = {
    quest2: { question: "Which event fires whenever a control loses focus?", answer1: "onclick", answer2: "onblur", answer3: "onmove", correctAnswer: "onblur" },
    quest3: { question: "Which of the following type of variable is visible only within a function where it is defined?", answer1: "global variable", answer2: "local variable", answer3: "Both of the above", correctAnswer: "local variable" },
    quest4: { question: "Which of the following code creates an object?", answer1: "var book = Object();", answer2: "var book = new Object();", answer3: "var book = new OBJECT();", correctAnswer:"var book = new Object();" },
    quest5: { question: "Which of the following function of Array object adds one or more elements to the end of an array and returns the new length of the array?", answer1: "pop()", answer2: "join()", answer3: "push()", correctAnswer: "push()" },
    quest6: { question: "What does the following expression return? 1 + 5 + ” bottles of milk”;", answer1: "15 bottles of milk", answer2: "6 bottles of milk", answer3: "undefined. An exception is thrown", correctAnswer: "6 bottles of milk" },
    quest7: { question: "Which of these is a correct method to create a new array?", answer1: "var myArray = ();", answer2: "var myArray = [];", answer3: "var myArray = new Array[];", correctAnswer: "var myArray = [];" },
    quest8: { question: "Which of these is not a logical operator?", answer1: "!", answer2: "&", answer3: "||", correctAnswer: "&" },
    quest9: { question: "What is the value of x? var a = false; var x = a ? “A” : “B”;", answer1: "false", answer2: "“A”", answer3: "“B”", correctAnswer: "“B”" },
    quest10: { question: "Which of the following variable types does not exist in JavaScript?", answer1: "number", answer2: "double", answer3: "object", correctAnswer: "double" },
    quest11: { question: "How do you write a conditional statement that will *only* execute the contained code if variable x has a value 5 of type *number*?", answer1: "if (x == 5) { … }", answer2: "if x = 5 …", answer3: "if (x === 5) { … }", correctAnswer: "if (x === 5) { … }" },
}
var clickcount=1;
var counter = 1;
var questionCounter = "quest" + (counter + 1);
var btn;
var box;
var i = 0;
var Score = 0;
var myVar ;
function timerr(){
    clickcount--; 
    clearInterval(myVar)
}
function hideQuestion() {
    if (clickcount < 2) {
        
        clickcount++;
    if (counter === 1) { move(); }
    box = document.querySelector(`.question${counter}`),
        btn = document.querySelector(`#button${counter}`);


    if (counter == 10) {
        quizzScore();
        counter++;
        box.classList.add('visuallyhidden');
        box.addEventListener('transitionend', function (e) {
            box.classList.add('hidden');
        }, {
            capture: false,
            once: true,
            passive: false
        })
        console.log(`counter is ${counter}`)
        var test2 = document.querySelector(`.finished`)
        test2.innerHTML = `
        <h3>Congratulations You Finished !</h3>
        <h2> Score: ${Score}</h2>
        <div class="input-group mb-6 score-button" >
            <button onclick ="saveScore()" class="btn btn-outline-secondary" type="button" id="button-addon1">Submit Your Name</button>
            <input type="text" class="form-control" id="scoreName" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div><p id="alert" style="color:white ;width:70%; margin:auto;">Please Write Your Name</p>

        
        `
        test2.classList.remove('hidden');
        setTimeout(function () {
            test2.classList.remove('visuallyhidden');
        }, 1000);
        myVar = setInterval(timerr,1000);


    } else {
        quizzScore();
        if (counter === 1) {
            box.classList.add('visuallyhidden');
            box.addEventListener('transitionend', function (e) {
                box.classList.add('hidden');
            }, {
                capture: false,
                once: true,
                passive: false
            }); counter++;
            questionCounter = "quest" + (counter + 1);
            var test = document.querySelector(`.question${counter}`)
            test.innerHTML = `
        <p>${quizzQuestions[questionCounter].question}</p>
        <div id="question${counter}">
            <input type="radio" id="answer${counter}1" name="answer" value="${quizzQuestions[questionCounter].answer1}">${quizzQuestions[questionCounter].answer1}<br>
            <input type="radio" id="answer${counter}2" name="answer" value="${quizzQuestions[questionCounter].answer2}">${quizzQuestions[questionCounter].answer2}<br>
            <input type="radio" id="answer${counter}3" name="answer" value="${quizzQuestions[questionCounter].answer3}">${quizzQuestions[questionCounter].answer3}<br><br>
            <button onclick="hideQuestion()" id="button${counter}">Submit This Answer</button>   
        `
            test.classList.remove('hidden');
            setTimeout(function () {
                test.classList.remove('visuallyhidden');
            }, 1000);                 myVar = setInterval(timerr,1000);


        }
        else {
            if (document.getElementById(`answer${counter}1`).checked || document.getElementById(`answer${counter}2`).checked ||
                document.getElementById(`answer${counter}3`).checked) {
                box.classList.add('visuallyhidden');
                box.addEventListener('transitionend', function (e) {
                    box.classList.add('hidden');
                }, {
                    capture: false,
                    once: true,
                    passive: false
                }); counter++;
                questionCounter = "quest" + (counter + 1);
                var test = document.querySelector(`.question${counter}`)
                test.innerHTML = `
        <p>${quizzQuestions[questionCounter].question}</p>
        <div id="question${counter}">
            <input type="radio" id="answer${counter}1" name="answer" value="${quizzQuestions[questionCounter].answer1}">${quizzQuestions[questionCounter].answer1}<br>
            <input type="radio" id="answer${counter}2" name="answer" value="${quizzQuestions[questionCounter].answer2}">${quizzQuestions[questionCounter].answer2}<br>
            <input type="radio" id="answer${counter}3" name="answer" value="${quizzQuestions[questionCounter].answer3}">${quizzQuestions[questionCounter].answer3}<br><br>
            <button onclick="hideQuestion()" id="button${counter}">Submit This Answer</button>   
        `
                test.classList.remove('hidden');
                setTimeout(function () {
                    test.classList.remove('visuallyhidden');
                }, 1000);                 myVar = setInterval(timerr,1000);


            }
            else {
                document.getElementById("answerOutput").classList.add("wrong");
                document.getElementById("answerOutput").innerHTML = "Please choose one of the answer"
                myVar = setInterval(timerr,1000);


            }
        }
    }}
};
// document.getElementById(`button${counter}`).addEventListener("dblclick", testFunction);

// document.getElementById(`button${counter}`).addEventListener("dblclick", testFunction); 
// function testFunction(){
//     alert('it Worked!')
// }
var width;
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
         width = 100;
        var id = setInterval(frame, 584 );
        function frame() {
            if (width <= 0 || counter == 11) {
                if (width <= 0) {


                    box = document.querySelector(`.question${counter}`),
                        box.classList.add('visuallyhidden');
                    box.addEventListener('transitionend', function (e) {
                        box.classList.add('hidden');
                    }, {
                        capture: false,
                        once: true,
                        passive: false
                    })
                    console.log(`counter is ${counter}`)
                    counter = 11;
                    var test2 = document.querySelector(`.finished`)
                    test2.innerHTML = `
        <h3>Time IS UP! Hard Luck!</h3>
        <h2> Score: ${Score}</h2>
        <div class="input-group mb-6 score-button" >
            <button onclick ="saveScore()" class="btn btn-outline-secondary" type="button" id="button-addon1">Submit Your Name</button>
            <input type="text" class="form-control" id="scoreName" placeholder="" aria-label="Example text with button addon" aria-describedby="button-addon1">
            </div><p id="alert" style=" color:white ;width:70%; margin:auto;">Please Write Your Name</p>

        
        `
                    test2.classList.remove('hidden');
                    setTimeout(function () {
                        test2.classList.remove('visuallyhidden');
                    }, 1000);

                }
                clearInterval(id);
                i = 0;
            } else {
                width--;
                elem.style.width = width + "%";
                elem.innerHTML = width + "%";
            }
        }
    }
}
function quizzScore() {

    if (counter >= 2) {
        for (var i = 1; i < 4; i++) {
            var b = document.getElementById(`answer${counter}${i}`)
            if (b.checked) {
                console.log(b.value)
                if (b.value == quizzQuestions[questionCounter].correctAnswer) {
                    console.log(`${b.value} is a correct answer!`)
                    if (document.getElementById("answerOutput").classList.contains("wrong")) {
                        document.getElementById("answerOutput").classList.remove('wrong');
                    }
                    document.getElementById("answerOutput").classList.add("correct");
                    document.getElementById("answerOutput").innerText = `' ${b.value} ' is a correct answer! => Score increased by 10 pts`
                    Score += 10
                    console.log(Score)
                }
                else {
                    document.getElementById("answerOutput").classList.add("wrong");
                    width = width-5;
                    if (document.getElementById("answerOutput").classList.contains("correct")) {
                        document.getElementById("answerOutput").classList.remove('correct');
                    }
                    document.getElementById("answerOutput").innerText = `' ${b.value} ' is a Wrong answer! => Time decreased by 5 %`
                }
            }
        }
    }
}
var justOnce = 1
var testObject = {}
var nbrOfTimes
var arraytest = []
function saveScoreBefore() {
    if (justOnce === 1) {
        if (localStorage.getItem('arraytest')) {
            var retrievedObject = localStorage.getItem('arraytest');
            for (var t = 0; t < JSON.parse(retrievedObject).length; t++) {
                var theName = JSON.parse(retrievedObject)[t].quiz.name;
                var theScore = JSON.parse(retrievedObject)[t].quiz.score;
                const li = document.createElement('li')
                li.setAttribute('class', 'list-group-item')
                li.textContent = `${theName}  : ${theScore} pts`
                document.getElementById('list-group').appendChild(li)
            }
            justOnce++
        }
    }
}

function saveScore() {
    if (counter === 11) {
        if (document.getElementById("scoreName").value === "") {
            document.getElementById("alert").innerText = "Please Write Your Name"
        }
        else {
            var userName = document.getElementById('scoreName').value
            if (localStorage.getItem('arraytest')) {
                var retrievedObject = localStorage.getItem('arraytest');
                arraytest = JSON.parse(retrievedObject)
            }
            arraytest.push({ 'quiz': { 'name': `${userName}`, 'score': `${Score}` } });
            localStorage.setItem('arraytest', JSON.stringify(arraytest));
            location.reload();

        }
    }
}