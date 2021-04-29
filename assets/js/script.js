const leftImageDoc = document.getElementById("leftImage");
const rightTitleDoc = document.getElementById('rightStoryTitle');
const storyTextDoc = document.getElementById('storyText');
const userAnswersDoc = document.getElementById('userAnswers');
const playerStateDoc = document.getElementById('playerState');
const chapterDoc = document.getElementById('chapter');
const pageNumberDoc = document.getElementById('pageNumber');

const story = [
    {
        id: 0,
        title: 'Super adventure',
        text: "In this book you'll choose Jonh's futur. John is an human being free of magic power. A great futur is looking for him, would you help him getting it ?",
        state: '',
        questions: [
            {
                question: 'Start',
                target: 1
            }
        ],
        chapter: ''
    },
    {
        id: 1,
        title: '',
        text: "I'm Jonh Markes, a free magic being in a magic world. How do I do to" +
            " survive ? I don't even know, by chance perhaps... Today I got a very important mission !" +
            " I need to get a Dragon's Claw." +
            " Why ? It cancel magic so with that I'll get some respect !" + 
            " First things first, I need to craft a strong weapon",
        state: '',
        questions: [
            {
                question: 'Add fire particle to the weapon',
                target: 2
            },
            {
                question: 'Add water particle to the weapon',
                target: 3
            },
            {
                question: 'Add lightning particle to the weapon',
                target: 4
            }
        ],
        chapter: 'Super adventure'
    },
    {
        id: 2,
        title: 'Test experimentation',
        text: "Fire particle ? Let's try this out !",
        state: '',
        questions: [
            {
                question: 'Try it on Bary\'s camp',
                target: 5
            },
            {
                question: 'Try it on the experimentation lab',
                target: 6
            }
        ],
        chapter: ''
    },
    {
        id: 3,
        title: 'Test experimentation',
        text: "Water particle ? Let's try this out !",
        state: '',
        questions: [
            {
                question: 'Try it on Bary\'s garden',
                target: 7
            },
            {
                question: 'Try it on the experimentation lab',
                target: 8
            }
        ],
        chapter: ''
    },
    {
        id: 4,
        title: 'Test experimentation',
        text: "Lightning particle ? Let's try this out !",
        state: '',
        questions: [
            {
                question: 'Try it on Bary\'s house',
                target: 9
            },
            {
                question: 'Try it on the experimentation lab',
                target: 10
            }
        ],
        chapter: ''
    },
    {
        id: 5,
        title: '',
        text: "Yeah it works ! Everything is on fire ! Fuck you Bary !",
        state: '',
        questions: [
            {
                question: 'Run away',
                target: 12
            },
            {
                question: 'Waiting on this beautiful view.',
                target: 11
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 7,
        title: '',
        text: "Yeah it works ! Everything is drown ! Fuck you Bary !",
        state: '',
        questions: [
            {
                question: 'Run away',
                target: 12
            },
            {
                question: 'Swimming on his drowned grass.',
                target: 11
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 9,
        title: '',
        text: "Yeah it works ! His house is like trash now, ahah ! Fuck you Bary !",
        state: '',
        questions: [
            {
                question: 'Run away',
                target: 12
            },
            {
                question: 'Dancing around his house',
                target: 11
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 11,
        title: 'Arrestation',
        text: "Ohhh fuck, cops are coming !",
        state: 'going to jail',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: ''
    },
    {
        id: 12,
        title: 'Dragon\'s fight',
        text: "OMG a Dragon, he's finally here !",
        state: '',
        questions: [
            {
                question: 'Cast a fire ball !',
                target: 15
            },
            {
                question: 'Run as fast as you can',
                target: 16
            }
        ],
        chapter: ''
    },
    {
        id: 13,
        title: 'Dragon\'s fight',
        text: "OMG a Dragon, he's finally here !",
        state: '',
        questions: [
            {
                question: 'Cast a water splash attack !',
                target: 15
            },
            {
                question: 'Run as fast as you can',
                target: 16
            }
        ],
        chapter: ''
    },
    {
        id: 14,
        title: 'Dragon\'s fight',
        text: "OMG a Dragon, he's finally here !",
        state: '',
        questions: [
            {
                question: 'Cast a Zeus lightning attack !',
                target: 15
            },
            {
                question: 'Run as fast as you can',
                target: 16
            }
        ],
        chapter: ''
    },
    {
        id: 15,
        title: '',
        text: "What ?! My super attack didn't scratch him at all !!",
        state: 'dead sqeezed by dragon\'s tail',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: 'Dragon\'s fight'
    },
    {
        id: 16,
        title: '',
        text: "Damn he's fast !",
        state: 'dead smashed by a dragon\'s bite',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: 'Dragon\'s fight'
    },
    {
        id: 6,
        title: '',
        text: "Yeah it works ! The lab is really usefull but it's not enough powerfull. Let's upgrade this !",
        state: '',
        questions: [
            {
                question: 'Add more fire particle to it.',
                target: 17
            },
            {
                question: 'Add gas particle to it.',
                target: 18
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 8,
        title: '',
        text: "Yeah it works ! The lab is really usefull but it's not enough powerfull. Let's upgrade this !",
        state: '',
        questions: [
            {
                question: 'Add more water particle to it.',
                target: 19
            },
            {
                question: 'Add ice particle to it.',
                target: 20
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 10,
        title: '',
        text: "Yeah it works ! The lab is really usefull but it's not enough powerfull. Let's upgrade this !",
        state: '',
        questions: [
            {
                question: 'Add more lightning particle to it',
                target: 21
            },
            {
                question: 'Add void particle to it.',
                target: 22
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 18,
        title: '',
        text: "BOOOM ! It exploded.",
        state: 'you dead',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 20,
        title: '',
        text: "Water on your body get frozen instantly !",
        state: 'you dead',
        questions: [
            {
                question: 'Restart', 
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 22,
        title: '',
        text: "Voooom, you created a vortex and you get caught in !",
        state: 'you dead',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: 'Test experimentation'
    },
    {
        id: 17,
        title: 'Dragon\'s territory',
        text: "Pretty nice, my weapon blow so much fire energie now !",
        state: '',
        questions: [
            {
                question: 'Take the portal to the fire dragon\'s territory.',
                target: 23
            },
            {
                question: 'Take the portal to the water dragon\'s territory.',
                target: 24
            },
            {
                question: 'Take the portal to the lightning dragon\'s territory.',
                target: 25
            }
        ],
        chapter: ''
    },
    {
        id: 23,
        title: '',
        text: "Fire territory with fire power ? Not a good idea !",
        state: '',
        questions: [
            {
                question: 'Cast a gigantic fire ball.',
                target: 36
            },
            {
                question: 'Back home for a better choice.',
                target: 32
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 24,
        title: '',
        text: "Water territory with fire power ? Not a good idea !",
        state: '',
        questions: [
            {
                question: 'Cast a gigantic fire ball.',
                target: 36
            },
            {
                question: 'Back home for a better choice.',
                target: 32
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 25,
        title: '',
        text: "Lightning territory with fire power ? Yeah great choice !",
        state: '',
        questions: [
            {
                question: 'Cast a gigantic fire ball.',
                target: 37
            },
            {
                question: 'Go home without attacking, it wasn\'t a good idea.',
                target: 35
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 19,
        title: 'Dragon\'s territory',
        text: "Pretty nice, my weapon blow so much fire energie now !",
        state: '',
        questions: [
            {
                question: 'Take the portal to the fire dragon\'s territory.',
                target: 26
            },
            {
                question: 'Take the portal to the water dragon\'s territory.',
                target: 27
            },
            {
                question: 'Take the portal to the lightning dragon\'s territory.',
                target: 28
            }
        ],
        chapter: ''
    },
    {
        id: 26,
        title: '',
        text: "Fire territory with water power ? Yeah great choice !",
        state: 'you dead',
        questions: [
            {
                question: 'Cast a gigantic water splash attack.',
                target: 37
            },
            {
                question: 'Go home without attacking, it wasn\'t a good idea.',
                target: 35
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 27,
        title: '',
        text: "Water territory with water power ? Not a good idea !",
        state: 'you dead',
        questions: [
            {
                question: 'Cast a gigantic water splash attack.',
                target: 36
            },
            {
                question: 'Back home for a better choice.',
                target: 33
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 28,
        title: '',
        text: "Lightning territory with water power ? Not a good idea !",
        state: '',
        questions: [
            {
                question: 'Cast a gigantic water splash attack.',
                target: 36
            },
            {
                question: 'Back home for a better choice.',
                target: 33
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 21,
        title: 'Dragon\'s territory',
        text: "Pretty nice, my weapon blow so much fire energie now !",
        state: '',
        questions: [
            {
                question: 'Take the portal to the fire dragon\'s territory.',
                target: 29
            },
            {
                question: 'Take the portal to the water dragon\'s territory.',
                target: 30
            },
            {
                question: 'Take the portal to the lightning dragon\'s territory.',
                target: 31
            }
        ],
        chapter: ''
    },
    {
        id: 29,
        title: '',
        text: "Fire territory with lightning power ? Yeah great choice !",
        state: 'you dead',
        questions: [
            {
                question: 'Cast a gigantic Zeus thunder attack.',
                target: 37
            },
            {
                question: 'Go home without attacking, it wasn\'t a good idea.',
                target: 35
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 30,
        title: '',
        text: "Water territory with lightning power ? Not a good idea !",
        state: 'you dead',
        questions: [
            {
                question: 'Cast a gigantic Zeus thunder attack.',
                target: 36
            },
            {
                question: 'Back home for a better choice.',
                target: 34
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 31,
        title: '',
        text: "Lightning territory with lightning power ? Not a good idea !",
        state: '',
        questions: [
            {
                question: 'Cast a gigantic Zeus thunder attack.',
                target: 36
            },
            {
                question: 'Back home for a better choice.',
                target: 34
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 32,
        title: '',
        text: "You're back home, what to do ?",
        state: 'you dead',
        questions: [
            {
                question: 'Take the portal to the fire dragon\'s territory.',
                target: 23
            },
            {
                question: 'Take the portal to the water dragon\'s territory.',
                target: 24
            },
            {
                question: 'Take the portal to the lightning dragon\'s territory.',
                target: 25
            },
            {
                question: 'Nothing, let\'s all dragon be in peace.',
                target: 35
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 33,
        title: '',
        text: "You're back home, what to do ?",
        state: 'you dead',
        questions: [
            {
                question: 'Take the portal to the fire dragon\'s territory.',
                target: 26
            },
            {
                question: 'Take the portal to the water dragon\'s territory.',
                target: 27
            },
            {
                question: 'Take the portal to the lightning dragon\'s territory.',
                target: 28
            },
            {
                question: 'Nothing, let\'s all dragon be in peace.',
                target: 35
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 34,
        title: '',
        text: "You're back home, what to do ?",
        state: 'you dead',
        questions: [
            {
                question: 'Take the portal to the fire dragon\'s territory.',
                target: 29
            },
            {
                question: 'Take the portal to the water dragon\'s territory.',
                target: 30
            },
            {
                question: 'Take the portal to the lightning dragon\'s territory.',
                target: 31
            },
            {
                question: 'Nothing, let\'s all dragon be in peace.',
                target: 35
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 35,
        title: 'Ready to rest',
        text: "You probably saved billions of dragons, you did a great choice.",
        state: '',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: ''
    },
    {
        id: 36,
        title: '',
        text: "Fuck, my super attack isn't effective on him...",
        state: 'dead by the dragon\'s tail attack',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: 'Dragon\'s territory'
    },
    {
        id: 37,
        title: 'Quest of power',
        text: "Get near of a dead dragon",
        state: '',
        questions: [
            {
                question: 'Cut off his claw',
                target: 38
            }
        ],
        chapter: ''
    },
    {
        id: 38,
        title: '',
        text: "Yeah I finally did it !",
        state: '',
        questions: [
            {
                question: 'Restart',
                target: 1
            },
            {
                question: 'Home',
                target: 0
            }
        ],
        chapter: 'Quest of power'
    }
];

leftImageDoc.src = './assets/img/first_Page.jpg';

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

function getThePage(id) {
    for (let page of story) {
        if (id == page.id) {
            storyPrint(page);
            if (page.id == 11 || page.id == 15 || page.id == 16 || page.id == 18 || page.id == 20 ||
                page.id == 22 || page.id == 35 || page.id == 36 || page.id == 38) {
                pageNumber(0);
            } else {
                pageNumber(parseInt(pageNumberDoc.innerHTML));
            }
        }
    }
}

function storyPrint(page) {
    rightTitle(page.title);
    storyText(page.text);
    playerState(page.state);
    userQuestions(page.questions);
    chapter(page.chapter);
}

getThePage(0)
console.log(story.length)