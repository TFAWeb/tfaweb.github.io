/*
    {
        question: "",
        answers: [
            {
                text: "",
                isCorrect: false
            }
        ]
    }
*/

while (true) {
   alert(`Ce site a été définitivement fermé par l'auteur T.F.A. Merci d'avoir visité notre quiz et d'avoir apprécié avec nous! ❤️\nContactez l'auteur T.F.A si vous voulez voir le code source.`); 
};

let pass;

/**
 * 🖕 For you if you saw this pass
 */

while (pass !== 'physique') {
    pass = prompt('Please provide the password to access:', pass ?? '');

    if (pass == null) close();
    
    if (pass !== 'physique') {
        alert('Password incorrect, please try again.');
    };
};

let questionsData = [
    {
        text: "Qu'est-ce que l'énergie cinétique?",
        answers: [
            {
                text: "L'énergie stockée dans un objet en raison de sa position.",
                isCorrect: false
            },
            {
                text: "L'énergie associée au mouvement d'un objet.",
                isCorrect: true
            },
            {
                text: "L'énergie produite par les réactions chimiques.",
                isCorrect: false
            },
            {
                text: "L'énergie magnétique d'un objet.",
                isCorrect: false
            }
        ]
    },
    {
        text: "Comment peut-on définir l'énergie cinétique?",
        answers: [
            {
                text: "L'énergie thermique d'un objet.",
                isCorrect: false
            },
            {
                text: "L'énergie liée à la gravité d'un objet.",
                isCorrect: false
            },
            {
                text: "L'énergie associée au mouvement d'un objet.",
                isCorrect: true
            },
            {
                text: "L'énergie électrique générée par un objet.",
                isCorrect: false
            }
        ]
    },
    {
        text: "Quels sont les facteurs qui influencent l'énergie cinétique d'un objet?",
        answers: [
            {
                text: "La température et la pression.",
                isCorrect: false
            },
            {
                text: "La forme et la couleur de l'objet.",
                isCorrect: false
            },
            {
                text: "La masse et la vitesse de l'objet.",
                isCorrect: true
            },
            {
                text: "La distance et le temps écoulé.",
                isCorrect: false
            }
        ]
    },
    {
        text: "Comment calcule-t-on l'énergie cinétique d'un objet en mouvement?",
        answers: [
            {
                text: "En multipliant la masse de l'objet par la force gravitationnelle.",
                isCorrect: false
            },
            {
                text: "En divisant la vitesse de l'objet par sa masse.",
                isCorrect: false
            },
            {
                text: "En multipliant la moitié de la masse de l'objet par le carré de sa vitesse.",
                isCorrect: true
            },
            {
                text: "En soustrayant la masse de l'objet de sa vitesse.",
                isCorrect: false
            }
        ]
    },
    {
        text: "Comment l'énergie cinétique d'un objet change-t-elle lorsque sa vitesse augmente ou diminue?",
        answers: [
            {
                text: "Elle augmente proportionnellement à la vitesse de l'objet. ",
                isCorrect: true
            },
            {
                text: "Elle diminue lorsque la vitesse augmente et augmente lorsque la vitesse diminue.",
                isCorrect: false
            },
            {
                text: "Elle reste constante, quelle que soit la vitesse de l'objet.",
                isCorrect: false
            },
            {
                text: "Elle est inversement proportionnelle à la vitesse de l'objet.",
                isCorrect: false
            }
        ]
    },
    {
        text: "Comment la vitesse d'un objet affecte-t-elle son énergie cinétique?",
        answers: [
            {
                text: 'L\'énergie cinétique n\'est pas affectée par la vitesse.',
                isCorrect: false
            },
            {
                text: 'L\'énergie cinétique est indépendante de la vitesse.',
                isCorrect: false
            },
            {
                text: 'L\'énergie cinétique diminue proportionnellement à la vitesse.',
                isCorrect: false
            },
            {
                text: 'L\'énergie cinétique augmente proportionnellement à la vitesse.',
                isCorrect: true
            }
        ]
    },
    {
        text: "Quel est le nom original de l'énergie cinétique ces dernières années?",
        answers: [
            {
                text: 'Kinetic Energy',
                isCorrect: false
            },
            {
                text: 'Kinema',
                isCorrect: true
            },
            {
                text: 'Cinéma',
                isCorrect: false
            },
            {
                text: 'Aucune',
                isCorrect: false
            },
        ]
    },
    {
        text: 'Quelle unité de mesure est couramment utilisée pour l\'énergie cinétique?',
        answers: [
            {
                text: 'Volt (V)',
                isCorrect: false
            },
            {
                text: 'Vitesse (m/s)',
                isCorrect: false
            },
            {
                text: 'Watt (W)',
                isCorrect: false
            },
            {
                text: 'Aucune',
                isCorrect: true
            },
        ]
    }
];

// variables initialization
let questions = [];
let score = 0;
let answeredQuestions = 0;
let appContainer = document.getElementById("questions-container");
let scoreContainer = document.getElementById("score-container");
scoreContainer.innerHTML = `Score: ${score}/${questionsData.length}`;

/**
 * Shuffles array in place. ES6 version
 * @param {Array} arr items An array containing the items.
 */
function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [arr[i], arr[j]] = [arr[j], arr[i]];
    }
}

shuffle(questionsData);

// creating questions
for (var i = 0; i < questionsData.length; i++) {
    let question = new Question({
        text: questionsData[i].text,
        answers: questionsData[i].answers
    });

    appContainer.appendChild(question.create());
    questions.push(question);
}

document.addEventListener("question-answered", ({ detail }) => {
    if (detail.answer.isCorrect) {
        score++;
    }

    answeredQuestions++;
    scoreContainer.innerHTML = `Score: ${score}/${questions.length}`;
    detail.question.disable();

    if (answeredQuestions == questions.length) {
        const scoreNote = {
            0: 'Tu es nul',
            1: 'Pas bon',
            2: 'Réviser est la seule solution',
            3: 'Cela pourrait être mieux',
            4: 'Bien',
            5: 'Très bien',
            6: 'Physician professionnel',
            7: 'Le dieu de la physique!',
            8: 'Intello 🤓'
        };

        setTimeout(function () {
            alert(`Quizz terminé!\nScore finale: ${score}/${questions.length}\n\nRéponse d'intelligence artificielle: ${scoreNote[score]}`);
        }, 100);
    }
});

console.log(questions, questionsData);
