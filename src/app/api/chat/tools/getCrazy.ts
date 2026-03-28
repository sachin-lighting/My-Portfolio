
import { tool } from "ai";
import { z } from "zod";


export const getCrazy = tool({
  description:
    "This tool will tell the craziest thing I've ever done. Use it when the user asks something like: 'What's the craziest thing you've ever done?'",
  parameters: z.object({}),
  execute: async () => {
    return "A big turning point for me was moving from IT training into real frontend product development and proving myself through production work, performance fixes, and hands-on debugging.";
  },
});