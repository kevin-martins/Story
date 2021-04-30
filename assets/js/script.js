//#region Variables

const leftImageDoc = document.getElementById("leftImage");
const rightTitleDoc = document.getElementById('rightStoryTitle');
const storyTextDoc = document.getElementById('storyText');
const userAnswersDoc = document.getElementById('userAnswers');
const playerStateDoc = document.getElementById('playerState');
const chapterDoc = document.getElementById('chapter');
const pageNumberDoc = document.getElementById('pageNumber');

//#endregion

//#region Get data from .json

async function getStoryData() {
    const res = await fetch('assets/json/story.json');
    return await res.json();
}

//#endregion

//#region Left Page

const leftImage = image => {
    return leftImageDoc.src = image;
}

//#endregion

//#region Right Page

const rightTitle = title => {
    return rightTitleDoc.innerHTML = title;
}

const storyText = text => {
    return storyTextDoc.innerHTML = text;
}

const playerState = state => {
    return playerStateDoc.innerHTML = state;
}

const userQuestions = (questions) => {
    var buttonChoice = '';
    for (let i = 0; i < questions.length; i++) {
        buttonChoice +=  `<div class="questions">
                            <button onclick="getThePage(${questions[i].target})">${questions[i].question}</button>
                        </div>`;
    }
    return userAnswersDoc.innerHTML = buttonChoice;
}

const chapter = str => {
    return chapterDoc.innerHTML = str;
}

const pageNumber = nbr => {
    return pageNumberDoc.innerHTML = nbr + 1;
}

//#endregion

//Button function: Parse .json file to find specific element
function getThePage(id) {
    getStoryData().then((pages) => {
        for (let page of pages) {
            if (page.id == id) {
                storyPrint(page);
            }
        }
    })
}

//Print needed elements on screen
function storyPrint(page) {
    leftImage(page.image);
    rightTitle(page.title);
    storyText(page.text);
    playerState(page.state);
    userQuestions(page.questions);
    chapter(page.chapter);
    return page.id == 0 || page.id == 1 ? pageNumber(page.id):pageNumber(parseInt(pageNumberDoc.innerHTML));
}

getThePage(0)