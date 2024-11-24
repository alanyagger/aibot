//import { openai } from '@ai-sdk/openai';
import { experimental_wrapLanguageModel as wrapLanguageModel } from 'ai';
import { customMiddleware } from './custom-middleware';
import { createOpenAI } from '@ai-sdk/openai';

const openai = createOpenAI({
  baseURL : 'https://api.chatanywhere.tech/v1',
  apiKey : 'sk-0Z8kkECGfmqum1aoTIKTHH8oVYqWnNGC3scdAZpSr8RnuvGs',
  compatibility: 'compatible',
});


export const customModel = (apiIdentifier: string) => {
  return wrapLanguageModel({
    model: openai(apiIdentifier),
    middleware: customMiddleware,
  });
};
