const vocabulary = {
	words: {
		word0: {
			original: "Whats Up?",
			translation: "Привет"
		},
		
		
		word1: {
			original: "Bye",
			translation: "Пока"
		},
		word2: {
			original: "Programmer",
			translation: "Программист"
		}
	},
	wordsCount: 3
}

const notificationMessages = {
	start: {
		greeting: "Hello! You can learn English here. Good luck!"
	},
	result: {
		finishSuccess: "Wonderful! Nice result.",
		finishUnsuccess: "You can make it better, try it one more time!"
	}
}

const settings = {
	correctAnswersMinimumPercent: 50,
}

const result = {
	correctAnswerCount: 0
}

//-----------------------

alert(notificationMessages.start.greeting)

const userAnswer0 = prompt(vocabulary.words.word0.original)
if (userAnswer0 === vocabulary.words.word0.translation) {
	result.correctAnswerCount++;
	document.write("Correct!")
} else {
	document.write("Wrong answer!");
}
document.write("<br>");

const userAnswer1 = prompt(vocabulary.words.word1.original) // 0
if (userAnswer1 === vocabulary.words.word1.translation) {
	result.correctAnswerCount++;
	document.write("Correct!")
} else {
	document.write("Wrong answer!");
}
document.write("<br>");


const userAnswer2 = prompt(vocabulary.words.word2.original) // 0
if (userAnswer2 === vocabulary.words.word2.translation) {
	result.correctAnswerCount++;
	document.write("Correct!")
} else {
	document.write("Wrong answer!");
}

const userCorrectAnswerPercent = 100

if (result.correctAnswerCount / vocabulary.wordsCount * userCorrectAnswerPercent > settings.correctAnswersMinimumPercent) {
	document.write("<br>", notificationMessages.result.finishSuccess)
} else {
	document.write("<br>", notificationMessages.result.finishUnsuccess)
}
