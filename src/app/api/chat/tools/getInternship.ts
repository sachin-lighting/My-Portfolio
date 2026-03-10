import { tool } from 'ai';
import { z } from 'zod';

export const getInternship = tool({
  description:
    "Gives a summary of the kind of frontend opportunities I'm looking for, plus my contact info and how to reach me. Use this tool when the user asks about my availability or how to contact me for opportunities.",
  parameters: z.object({}),
  execute: async () => {
    return `Here’s what I’m looking for 👇

- 📅 **Availability**: Currently working, but open to strong frontend opportunities
- 🌍 **Location**: **Noida / NCR / Remote**
- 🧑‍💻 **Focus**: Frontend development, UI performance, React and TypeScript applications
- 🛠️ **Stack**: React.js, TypeScript, Tailwind CSS, Bootstrap, Material UI, Redux
- ✅ **What I bring**: Real-world experience in component development, API integration, performance optimization, and debugging. I also bring strong communication from my training background.
- 🔥 I learn fast and enjoy solving practical product problems

📬 **Contact me** via:
- Email: sachin13579p@gmail.com
- Phone: +91 8958477243 / +91 7579971289
- LinkedIn: https://linkedin.com/in/sachin-prajapati-451515252
- GitHub: https://github.com/sachin-prajapati-k
- Portfolio: https://www.sachinprajapati.co.in

Let's build something clean, fast, and useful.
    `;
  },
});
