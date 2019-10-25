import Router from 'koa-router';
import Koa from 'koa';

interface Question {
	question: string,
	answers: string[],
	correctAnswerIndex: number,
	answerExplanation: string,
	source: string
}

const questions : Question[] = require("../quiz/questions.json");
let day = 0;

/**
 * Call for /getQuestionOfDay
 * @param ctx Router Context
*/
function QuestionMW (ctx : Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>>){
	ctx.body = questions[day % questions.length];
}

//every day increment day counter
setInterval(() => day ++,86400000);

export default QuestionMW;