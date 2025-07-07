const words = [
	{
		original: "привет",
		translation: "hi"
	},
	{
		original: "пока",
		translation: "bye"
	},
	{
		original: "да",
		translation: "yes"
	}
]


/*const words = {
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
}*/

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

const userAnswer0 = prompt(words[0].original) // 0
if (userAnswer0 === words[0].translation) {
	result.correctAnswerCount++;
	document.write("Correct!")
} else {
	document.write("Wrong answer!");
}
document.write("<br>");

const userAnswer1 = prompt(words[1].original) // 0
if (userAnswer1 === words[1].translation) {
	result.correctAnswerCount++;
	document.write("Correct!")
} else {
	document.write("Wrong answer!");
}
document.write("<br>");


const userAnswer2 = prompt(words[2].original) // 0
if (userAnswer2 === words[2].translation) {
	result.correctAnswerCount++;
	document.write("Correct!")
} else {
	document.write("Wrong answer!");
}

const userCorrectAnswerPercent = 100

if (result.correctAnswerCount / words.length * userCorrectAnswerPercent > settings.correctAnswersMinimumPercent) {
	document.write("<br>", notificationMessages.result.finishSuccess)
} else {
	document.write("<br>", notificationMessages.result.finishUnsuccess)
}
