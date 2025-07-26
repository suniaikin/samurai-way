const words = [
	{original: "Whats Up?", translation: "Привет"},
	{original: "Bye", translation: "Пока"},
	{original: "Programmer", translation: "Программист"},
	{original: "Laptop", translation: "Ноутбук"},
	{original: "Screen", translation: "Экран"}
]
function showHelloMessage(_notificationMessages) {
	alert(`${_notificationMessages.start.greeting}`)
}
function startTraining(_words, _result, _notificationMessages) {
	for (let i = 0; i < _words.length; i++) {
		let userAnswer = prompt(_words[i].original)
		if (userAnswer === _words[i].translation) {
			_result.correctAnswerCount++;
			alert(_notificationMessages.answerChecking.correctAnswer)
		} else {
			alert(_notificationMessages.answerChecking.wrongAnswer)
		}
	}
}
function showResult(_words, _result, _settings, _notificationMessages ) {
	const userCorrectAnswerPercent = getPercentage(result, words)
	if (userCorrectAnswerPercent > settings.correctAnswersMinimumPercent) {
		document.write("<br>", notificationMessages.result.finishSuccess)
	} else {
		document.write("<br>", notificationMessages.result.finishUnsuccess)
	}
}
function getPercentage(_result, _words) {
	return _result.correctAnswerCount / _words.length * 100;
}
const notificationMessages = {
	start: {
		greeting: "Hello! You can learn English here. Good luck!"
	},
	answerChecking: {
		correctAnswer: "Correct!",
		wrongAnswer: "Wrong answer!"
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

showHelloMessage(notificationMessages)
startTraining(words, result, notificationMessages)
showResult(result, words, settings, notificationMessages)



