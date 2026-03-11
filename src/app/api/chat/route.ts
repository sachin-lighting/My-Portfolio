import { mistral } from '@ai-sdk/mistral';
import { streamText } from 'ai';
import { OPEN_SYSTEM_PROMPT, SYSTEM_PROMPT } from './prompt';
import { getContact } from './tools/getContact';
import { getCrazy } from './tools/getCrazy';
import { getInternship } from './tools/getInternship';
import { getPresentation } from './tools/getPresentation';
import { getProjects } from './tools/getProjects';
import { getResume } from './tools/getResume';
import { getSkills } from './tools/getSkills';
import { getSports } from './tools/getSports';
import { getWeather } from './tools/getWeather';

export const maxDuration = 30;

// ❌ Pas besoin de l'export ici, Next.js n'aime pas ça
function errorHandler(error: unknown) {
  if (error == null) {
    return 'Unknown error';
  }
  if (typeof error === 'string') {
    return error;
  }
  if (error instanceof Error) {
    return error.message;
  }
  return JSON.stringify(error);
}

export async function POST(req: Request) {
  try {
    if (!process.env.MISTRAL_API_KEY) {
      return new Response(
        'Server configuration error: missing MISTRAL_API_KEY',
        {
          status: 500,
        }
      );
    }

    const { messages, mode } = await req.json();
    const urlMode = new URL(req.url).searchParams.get('mode');
    console.log('[CHAT-API] Incoming messages:', messages);

    const selectedMode = mode ?? urlMode;
    const selectedPrompt =
      selectedMode === 'open' ? OPEN_SYSTEM_PROMPT : SYSTEM_PROMPT;
    const chatMessages = [selectedPrompt, ...messages];

    const tools = {
      getProjects,
      getPresentation,
      getResume,
      getContact,
      getSkills,
      getSports,
      getCrazy,
      getInternship,
      getWeather,
    };

    const result = streamText({
      model: mistral('mistral-large-latest'),
      messages: chatMessages,
      toolCallStreaming: true,
      tools,
      maxSteps: 2,
    });

    return result.toDataStreamResponse({
      getErrorMessage: errorHandler,
    });
  } catch (err) {
    console.error('Global error:', err);
    const errorMessage = errorHandler(err);
    return new Response(errorMessage, { status: 500 });
  }
}
