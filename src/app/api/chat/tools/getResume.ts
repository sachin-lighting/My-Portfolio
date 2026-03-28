import { tool } from 'ai';
import { z } from 'zod';

export const getResume = tool({
  description:
    'This tool show my resume.',
  parameters: z.object({}),
  execute: async () => {
    return "You can download my resume from the card above.";
  },
});
