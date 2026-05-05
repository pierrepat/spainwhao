export interface Project {
  slug: string;
  name: string;
  location: string;
  description: string;
  status: "completed" | "in-progress";
  heroImage: string;
}

export const projects: Project[] = [
  {
    slug: "bali-20",
    name: "Bali 20",
    location: "Costa Blanca, Spain",
    description: "Modern Mediterranean villa with open-plan living and private pool",
    status: "completed",
    heroImage: "/images/bali-20/render_01.jpg",
  },
  {
    slug: "bali-21",
    name: "Bali 21",
    location: "Costa Blanca, Spain",
    description: "Contemporary coastal home blending indoor and outdoor spaces",
    status: "completed",
    heroImage: "/images/bali-21/render_01.jpg",
  },
  {
    slug: "bali-21-bis",
    name: "Bali 21 bis",
    location: "Costa Blanca, Spain",
    description: "Refined iteration on the Bali series with enhanced natural light",
    status: "completed",
    heroImage: "/images/bali-21-bis/render_01.jpg",
  },
  {
    slug: "papa-negro",
    name: "Papa Negro",
    location: "Costa Blanca, Spain",
    description: "Bold architectural statement set against the Mediterranean hillside",
    status: "completed",
    heroImage: "/images/papa-negro/render_01.jpg",
  },
];
