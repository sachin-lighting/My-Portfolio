import { tool } from 'ai';
import { z } from 'zod';

export const getContact = tool({
  description:
    'This tool shows only my location and direct contact information.',
  parameters: z.object({}),
  execute: async () => {
    return 'Here are my current location and direct contact details above.';
  },
});
