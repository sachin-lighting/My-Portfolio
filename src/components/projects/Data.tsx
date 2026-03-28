// File: data.tsx

import Image from 'next/image';
import { ChevronRight, Link } from 'lucide-react';
import { Separator } from '@/components/ui/separator';

// --- PROJECT DATABASE ---
// This array holds the detailed information for each project.
const PROJECT_CONTENT = [
  {
    title: 'Frontend Optimization & Migration Project',
    description:
      'A production-focused frontend modernization effort where I helped migrate a large Next.js codebase to React.js, fixed type conflicts, reduced resource-heavy rendering, and improved the overall responsiveness of the application.',
    techStack: [
      'React.js',
      'TypeScript',
      'Tailwind CSS',
      'Bootstrap',
      'Material UI',
      'REST APIs',
      'Performance Optimization',
      'Debugging',
    ],
    date: '2025 - Present',
    links: [
      {
        name: 'Company Website',
        url: 'https://www.regent-lighting.in',
      },
    ],
    images: [
      {
        src: '/projects/frontend-optimization-regent-catalog.png',
        alt: 'Regent Lighting product catalog — recessed downlight grid',
      },
      {
        src: '/projects/frontend-optimization-regent-filters.png',
        alt: 'Regent Lighting product configuration and technical filters',
      },
    ],
  },
  {
    title: 'Grocify Website',
    description:
      'A grocery storefront UI built for a React essentials assignment: hero with produce photography, category-filtered product grid, customer testimonials, dark-mode shop views, and an “Our process” journey from source to delivery. Deployed on Netlify with a clean orange-and-white brand system.',
    techStack: [
      'React',
      'JavaScript',
      'Responsive UI',
      'Dark mode',
      'E-commerce UI',
      'Netlify',
    ],
    date: '2025',
    links: [
      {
        name: 'Live site',
        url: 'https://subtle-swan-d62032.netlify.app/',
      },
      {
        name: 'Source code',
        url: 'https://github.com/sachin-prajapati-k/react-essentials-assignment/tree/main/grocify-clone',
      },
    ],
    images: [
      {
        src: '/projects/grocify-hero.png',
        alt: 'Grocify — landing hero with organic fruits and vegetables',
      },
      {
        src: '/projects/grocify-shop-light.png',
        alt: 'Grocify — product grid with category filters (light theme)',
      },
      {
        src: '/projects/grocify-testimonials.png',
        alt: 'Grocify — customer testimonials section',
      },
      {
        src: '/projects/grocify-shop-dark.png',
        alt: 'Grocify — product grid in dark theme',
      },
      {
        src: '/projects/grocify-process.png',
        alt: 'Grocify — Our process page',
      },
    ],
  },
  {
    title: 'Personal Expense Tracker',
    description:
      'A Create React App project built around custom hooks: add and edit expenses with categories and dates, filter by category and date range, search by title, sort by date/amount/category, and view summary tiles for total spend, visible count, and latest monthly total. Data persists in localStorage; deployed on Netlify.',
    techStack: [
      'React',
      'JavaScript',
      'Custom Hooks',
      'localStorage',
      'Create React App',
      'Netlify',
    ],
    date: '2025',
    links: [
      {
        name: 'Live site',
        url: 'https://darling-paletas-b03d4f.netlify.app/',
      },
      {
        name: 'Source code',
        url: 'https://github.com/sachin-prajapati-k/react-essentials-assignment/tree/main/personal-expense-tracker',
      },
    ],
    images: [
      {
        src: '/projects/personal-expense-tracker-1.png',
        alt: 'Personal Expense Tracker — dashboard with add expense, filters, summary, and list',
      },
      {
        src: '/projects/personal-expense-tracker-2.png',
        alt: 'Personal Expense Tracker — form and date picker',
      },
      {
        src: '/projects/personal-expense-tracker-3.png',
        alt: 'Personal Expense Tracker — full app view',
      },
    ],
  },
  {
    title: 'Weather Information Dashboard',
    description:
      'A dark-themed weather dashboard built with React: fetch live conditions by city via a weather API, show temperature, condition, humidity, and wind speed, and surface metadata like selected city, last updated time, and current window width. Side effects use useEffect with proper cleanup.',
    techStack: [
      'React',
      'JavaScript',
      'useEffect',
      'REST API',
      'Create React App',
      'Netlify',
    ],
    date: '2025',
    links: [
      {
        name: 'Live site',
        url: 'https://celadon-kringle-13e4ac.netlify.app/',
      },
      {
        name: 'Source code',
        url: 'https://github.com/sachin-prajapati-k/react-essentials-assignment/tree/main/weather-app',
      },
    ],
    images: [
      {
        src: '/projects/weather-dashboard-1.png',
        alt: 'Weather Information Dashboard — search and current conditions',
      },
      {
        src: '/projects/weather-dashboard-2.png',
        alt: 'Weather Information — city weather metrics',
      },
    ],
  },
  {
    title: 'ShopSphere Commerce',
    description:
      'A shopping-focused web project centered on product discovery, category browsing, and a cleaner purchase flow. Built to practice storefront structure, reusable UI sections, and user-friendly shopping interactions.',
    techStack: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Responsive UI',
      'E-commerce Flow',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/projects/shopping-project-preview.svg',
        alt: 'Shopping project preview',
      },
    ],
  },
  {
    title: 'Expense Tracker Dashboard',
    description:
      'A personal finance tracker designed to record expenses, organize transactions, and make spending easier to understand. The focus is on simple interaction, practical UI, and day-to-day usability.',
    techStack: [
      'React',
      'TypeScript',
      'State Management',
      'Forms',
      'UI Components',
      'Productivity App',
    ],
    date: '2025',
    links: [],
    images: [
      {
        src: '/projects/expense-tracker-preview.svg',
        alt: 'Expense tracker preview',
      },
    ],
  },
  {
    title: 'Secure Password Generator',
    description:
      'A lightweight utility project that generates strong passwords based on user-selected rules like length and character combinations. Built to practice clean UI and useful browser-based functionality.',
    techStack: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'Utility App',
      'Input Handling',
      'Frontend Logic',
    ],
    date: '2024',
    links: [],
    images: [
      {
        src: '/projects/password-generator-preview.svg',
        alt: 'Password generator preview',
      },
    ],
  },
  {
    title: "Marlo's Pizza Online Shop",
    description:
      'A food ordering concept focused on menu browsing, product presentation, and smooth order-oriented UX. The project highlights storefront thinking and clean visual structure for an online pizza brand.',
    techStack: [
      'React',
      'JavaScript',
      'HTML5',
      'CSS3',
      'Food Ordering UI',
      'Responsive Design',
    ],
    date: '2024',
    links: [],
    images: [
      {
        src: '/projects/marlos-pizza-preview.svg',
        alt: 'Marlo pizza shop preview',
      },
    ],
  },
  {
    title: 'Currency Changer',
    description:
      'A compact conversion app that lets users quickly switch between currencies with a straightforward interface. Built to practice interactive inputs, calculation logic, and simple utility-focused design.',
    techStack: [
      'JavaScript',
      'HTML5',
      'CSS3',
      'API Integration',
      'Conversion Logic',
      'Utility App',
    ],
    date: '2024',
    links: [],
    images: [
      {
        src: '/projects/currency-changer-preview.svg',
        alt: 'Currency changer preview',
      },
    ],
  },
];

// --- COMPONENT & INTERFACE DEFINITIONS ---
// Define interface for project prop
interface ProjectProps {
  title: string;
}

// This component dynamically renders the project details
const ProjectContent = ({ project }: { project: ProjectProps }) => {
  // Find the matching project data from the database
  const projectData = PROJECT_CONTENT.find((p) => p.title === project.title);

  if (!projectData) {
    return <div>Project details not available</div>;
  }

  return (
    <div className="space-y-10">
      {/* Header section with description */}
      <div className="rounded-3xl bg-[#F5F5F7] p-8 dark:bg-[#1D1D1F]">
        <div className="space-y-6">
          <div className="flex items-center gap-2 text-sm text-neutral-500 dark:text-neutral-400">
            <span>{projectData.date}</span>
          </div>

          <p className="text-secondary-foreground font-sans text-base leading-relaxed md:text-lg">
            {projectData.description}
          </p>

          {/* Tech stack */}
          <div className="pt-4">
            <h3 className="mb-3 text-sm tracking-wide text-neutral-500 uppercase dark:text-neutral-400">
              Technologies
            </h3>
            <div className="flex flex-wrap gap-2">
              {projectData.techStack.map((tech, index) => (
                <span
                  key={index}
                  className="rounded-full bg-neutral-200 px-3 py-1 text-sm text-neutral-800 dark:bg-neutral-800 dark:text-neutral-200"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Links section */}
      {projectData.links && projectData.links.length > 0 && (
        <div className="mb-24">
          <div className="px-6 mb-4 flex items-center gap-2">
            <h3 className="text-sm tracking-wide text-neutral-500 dark:text-neutral-400">
              Links
            </h3>
            <Link className="text-muted-foreground w-4" />
          </div>
          <Separator className="my-4" />
          <div className="space-y-3">
            {projectData.links.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-[#F5F5F7] flex items-center justify-between rounded-xl p-4 transition-colors hover:bg-[#E5E5E7] dark:bg-neutral-800 dark:hover:bg-neutral-700"
              >
                <span className="font-light capitalize">{link.name}</span>
                <ChevronRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Images gallery */}
      {projectData.images && projectData.images.length > 0 && (
        <div className="space-y-6">
          <div className="grid grid-cols-1 gap-4">
            {projectData.images.map((image, index) => (
              <div
                key={index}
                className="relative aspect-video overflow-hidden rounded-2xl"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform"
                />
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

// --- MAIN DATA EXPORT ---
// This is the data used by your main portfolio page.
export const data = [
  {
    category: 'Professional Work',
    title: 'Frontend Optimization & Migration Project',
    src: '/projects/frontend-optimization-regent-catalog.png',
    content: (
      <ProjectContent project={{ title: 'Frontend Optimization & Migration Project' }} />
    ),
  },
  {
    category: 'Grocery E-commerce',
    title: 'Grocify Website',
    src: '/projects/grocify-hero.png',
    content: (
      <ProjectContent project={{ title: 'Grocify Website' }} />
    ),
  },
  {
    category: 'Productivity App',
    title: 'Personal Expense Tracker',
    src: '/projects/personal-expense-tracker-1.png',
    content: (
      <ProjectContent project={{ title: 'Personal Expense Tracker' }} />
    ),
  },
  {
    category: 'Weather & API',
    title: 'Weather Information Dashboard',
    src: '/projects/weather-dashboard-1.png',
    content: (
      <ProjectContent project={{ title: 'Weather Information Dashboard' }} />
    ),
  },
  {
    category: 'E-commerce UI',
    title: 'ShopSphere Commerce',
    src: '/projects/shopping-project-preview.svg',
    content: (
      <ProjectContent project={{ title: 'ShopSphere Commerce' }} />
    ),
  },
  {
    category: 'Productivity App',
    title: 'Expense Tracker Dashboard',
    src: '/projects/expense-tracker-preview.svg',
    content: (
      <ProjectContent project={{ title: 'Expense Tracker Dashboard' }} />
    ),
  },
  {
    category: 'Frontend Utility',
    title: 'Secure Password Generator',
    src: '/projects/password-generator-preview.svg',
    content: (
      <ProjectContent project={{ title: 'Secure Password Generator' }} />
    ),
  },
  {
    category: 'Food Ordering UI',
    title: "Marlo's Pizza Online Shop",
    src: '/projects/marlos-pizza-preview.svg',
    content: (
      <ProjectContent project={{ title: "Marlo's Pizza Online Shop" }} />
    ),
  },
  {
    category: 'Utility App',
    title: 'Currency Changer',
    src: '/projects/currency-changer-preview.svg',
    content: (
      <ProjectContent project={{ title: 'Currency Changer' }} />
    ),
  },
];