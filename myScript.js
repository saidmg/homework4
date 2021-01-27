var quizzQuestions = {
    quest2: { question: "The capital city of Canada is:", answer1: "Ottawa", answer2: "Montreal", answer3: "Toronto", correctAnswer: "Ottawa" },
    quest3: { question: "The largest city in Canada is:", answer1: "Vancouver", answer2: "Toronto", answer3: "Montreal", correctAnswer: "Toronto" },
    quest4: { question: "Canada has _____ provinces.", answer1: 12, answer2: 10, answer3: 15, correctAnswer: 10 },
    quest5: { question: "The smallest province in Canada is:", answer1: "Prince Edward Island", answer2: "New Brunswick", answer3: "Manitoba", correctAnswer: "Prince Edward Island" },
    quest6: { question: "The animal which is a symbol of Canada is the:", answer1: "grizzly bear", answer2: "beaver", answer3: "killer whale", correctAnswer: "beaver" },
    quest7: { question: "The leader of Canada is known as the:", answer1: "prime minister", answer2: "president", answer3: "premier", correctAnswer: "prime minister" },
    quest8: { question: "The current prime minister of Canada is:", answer1: "Justin Trudeau", answer2: "Doug Ford", answer3: "Pierre Trudeau", correctAnswer: "Justin Trudeau" },
    quest9: { question: "Canada became a country in the year:", answer1: "1467", answer2: "1667", answer3: "1867", correctAnswer: "1867" },
    quest10: { question: "The third most commonly spoken language in Canada is:", answer1: "Hindi", answer2: "Mandarin", answer3: "Inuktitut", correctAnswer: "Mandarin" },
    quest11: { question: "Canada's birthday is on:", answer1: "August 4th", answer2: "January 3rd", answer3: "July 1st", correctAnswer: "July 1st" },
}

var counter = 1;
var questionCounter = "quest" + (counter + 1);
var btn;
var box;
var i = 0;
var Score = 0;
function hideQuestion() {
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
            </div><p id="alert" style="background-color:#e94545; color:white ;width:40%; margin:auto;">Please Write Your Name</p>

        
        `
        test2.classList.remove('hidden');
        setTimeout(function () {
            test2.classList.remove('visuallyhidden');
        }, 1000);

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
            }, 1000);
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
                }, 1000);
            }
            else {
                document.getElementById("answerOutput").classList.add("wrong");
                document.getElementById("answerOutput").innerHTML = "Please choose one of the answer"
            }
        }
    }
};
function move() {
    if (i == 0) {
        i = 1;
        var elem = document.getElementById("myBar");
        var width = 100;
        var id = setInterval(frame, 560);
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
            </div><p id="alert" style="background-color:#e94545; color:white ;width:40%; margin:auto;">Please Write Your Name</p>

        
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
                    document.getElementById("answerOutput").innerText = `' ${b.value} ' is a correct answer!`
                    Score += 10
                    console.log(Score)
                }
                else {
                    document.getElementById("answerOutput").classList.add("wrong");
                    if (document.getElementById("answerOutput").classList.contains("correct")) {
                        document.getElementById("answerOutput").classList.remove('correct');
                    }
                    document.getElementById("answerOutput").innerText = `' ${b.value} ' is a Wrong answer!`
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