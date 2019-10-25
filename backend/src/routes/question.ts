import Koa from 'koa';
import Router from 'koa-router';

interface IQuestion {
  question: string;
  answers: string[];
  correctAnswerIndex: number;
  answerExplanation: string;
  source: string;
}

// tslint:disable-next-line: no-var-requires
const questions: IQuestion[] = require('../quiz/questions.json');
let day = 0;

/**
 * Call for /getQuestionOfDay
 * @param ctx Router Context
 */
function QuestionMW(ctx: Koa.ParameterizedContext<any, Router.IRouterParamContext<any, {}>>) {
  ctx.body = questions[day % questions.length];
}

// every day increment day counter
setInterval(() => day ++, 86400000);

export default QuestionMW;
