const leftImageDoc = document.getElementById("leftImage");
const rightTitleDoc = document.getElementById('rightStoryTitle');
const storyTextDoc = document.getElementById('storyText');
const userAnswersDoc = document.getElementById('userAnswers');
const chapterDoc = document.getElementById('chapter');
const pageNumberDoc = document.getElementById('pageNumber');

const story = [
    {
        id: 0,
        title: 'Super adventure',
        text: 'Adipisicing elit. Tempore, itaque numquam. Eos harum' +
                ' molestiae, nisi dolorem consectetur repudiandae' +
                ' eius similique fuga ipsum recusandae aperiam architecto' +
                ' quos illum aliquid a odit',
        questions: [
            {
                first: 'Going forward',
                target: 1
            },
            {
                second: 'Thinking of by looking the sky',
                target: 2
            },
            {
                third: 'Take a nap',
                target: 3
            }
        ],
        chapter: ''
    },
    {// Forward
        id: 1,
        title: '',
        text: 'Three paths...' +
                'Forward it seems to be the fired volcano road... scary !' + 
                'On the left it seems to be quiet, a nice forest with big trees. ' +
                'On the right... I can\'t see anything, the air is like blurry. ' + 
                'Which path should I take ?',
        questions: [
            {
                first: 'Going to the fired mountain',
                target: 4
            },
            {
                second: 'looking for a stone rock',
                target: 5
            },
            {
                third: 'Turning around trying to do a tornado attack',
                target: 6
            }
        ],
        chapter: 'Super adventure'
    },
    {// Forward
        id: 2,
        title: '',
        text: 'A guy shows up from knowhere and trying to attack you!',
        questions: [
            {
                first: 'Take the wood stick',
                target: 4
            },
            {
                second: 'looking for a stone rock',
                target: 5
            },
            {
                third: 'Turning around trying to do a tornado attack',
                target: 6
            }
        ],
        chapter: 'Super adventure'
    },
    {// Looking the sky
        id: 2,
        title: '',
        text: 'The sky is blue, this is so nice... I\m totaly in peace.' + 
                'By chance, a stranger is near you.',
        questions: [
            {
                first: 'Hurry and going forward',
                target: 7
            },
            {
                second: 'Asking the right path to the stranger',
                target: 8
            },
            {
                third: 'Going on top the of a tree to see forward',
                target: 9
            }
        ],
        chapter: 'Super adventure'
    },
    {// Take a nap
        id: 3,
        title: '',
        text: 'You\'re resting so well... Nothing could bothering you',
        questions: [
            {
                first: 'Continue resting',
                target: 3
            },
            {
                second: 'Waking up',
                target: 2
            }
        ],
        chapter: 'Super adventure'
    },
    {// Take the wood stick
        id: 4,
        title: '',
        text: 'He\'s rushing you !',
        questions: [
            {
                first: 'Run away and save your life',
                target: 7
            },
            {
                second: 'Plant the wood stick on his head',
                target: 8
            },
            {
                third: 'Trying to do a tornado attack once more',
                target: 9
            }
        ],
        chapter: 'Super adventure'
    },
    {
        id: 2,
        title: '',
        text: 'The sky is blue, this is so nice... I\m totaly in peace',
        questions: [
            {
                first: 'Hurry and going forward',
                target: 7
            },
            {
                second: 'Asking the right path to the stranger',
                target: 8
            },
            {
                third: 'Turning around trying to do a tornado attack',
                target: 9
            }
        ],
        chapter: 'Super adventure'
    }
];

leftImageDoc.src = './assets/img/first_Page.jpg';

const rightTitle = str => {
    return rightTitleDoc.innerHTML = str;
}

const storyText = str => {
    return storyTextDoc.innerHTML = str;
}

const userQuestions = (questions) => {
    if (questions.length == 3) {
        return userAnswersDoc.innerHTML = `<div class="questions">
                                                <button onclick="getThePage(${questions[0].target})">${questions[0].first}</button>
                                            </div>
                                            <div class="questions">
                                                <button onclick="getThePage(${questions[1].target})">${questions[1].second}</button>
                                            </div>
                                            <div class="questions">
                                                <button onclick="getThePage(${questions[2].target})">${questions[2].third}</button>
                                            </div>`;
    } else {
        return userAnswersDoc.innerHTML = `<div class="questions">
                                                <button onclick="getThePage(${questions[0].target})">${questions[0].first}</button>
                                            </div>
                                            <div class="questions">
                                                <button onclick="getThePage(${questions[1].target})">${questions[1].second}</button>
                                            </div>`;
    }
}

const chapter = str => {
    return chapterDoc.innerHTML = str;
}

const pageNumber = nbr => {
    return pageNumberDoc.innerHTML = nbr + 1;
}

function getThePage(id) {
    for (let page of story) {
        if (id == page.id) {
            storyPrint(page);
        }
    }
    pageNumber(parseInt(pageNumberDoc.innerHTML));
}

function storyPrint(page) {
    console.log('sss')
    rightTitle(page.title);
    storyText(page.text);
    userQuestions(page.questions);
    chapter(page.chapter);
}

getThePage(0)