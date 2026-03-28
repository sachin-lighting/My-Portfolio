
import { tool } from "ai";
import { z } from "zod";


export const getSports = tool({
  description:
    "This tool shares Sachin's hobbies and interests outside work.",
  parameters: z.object({}),
  execute: async () => {
    return "Here are a few things I enjoy outside coding, like badminton, chess, and sudoku.";
  },
});