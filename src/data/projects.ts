export interface Project {
  slug: string;
  name: string;
  location: string;
  description: string;
  status: "completed" | "in-progress";
  heroImage: string;
  renderCount: number;
}

export const projects: Project[] = [
  {
    slug: "bali-20",
    name: "Bali 20",
    location: "Costa Blanca, Spain",
    description: "Modern Mediterranean villa with open-plan living and private pool",
    status: "completed",
    heroImage: "/images/bali-20/render_01.jpg",
    renderCount: 7,
  },
  {
    slug: "bali-21",
    name: "Bali 21",
    location: "Costa Blanca, Spain",
    description: "Contemporary coastal home blending indoor and outdoor spaces",
    status: "completed",
    heroImage: "/images/bali-21/render_01.jpg",
    renderCount: 5,
  },
  {
    slug: "bali-21-bis",
    name: "Bali 21 bis",
    location: "Costa Blanca, Spain",
    description: "Refined iteration on the Bali series with enhanced natural light",
    status: "completed",
    heroImage: "/images/bali-21-bis/render_01.jpg",
    renderCount: 2,
  },
  {
    slug: "papa-negro",
    name: "Papa Negro",
    location: "Costa Blanca, Spain",
    description: "Bold architectural statement set against the Mediterranean hillside",
    status: "completed",
    heroImage: "/images/papa-negro/render_01.jpg",
    renderCount: 10,
  },
];

/** Generate all render paths for a project */
export function getProjectRenders(project: Project): string[] {
  const renders: string[] = [];
  for (let i = 1; i <= project.renderCount; i++) {
    const num = String(i).padStart(2, "0");
    renders.push(`/images/${project.slug}/render_${num}.jpg`);
  }
  return renders;
}
