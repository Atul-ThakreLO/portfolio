export function generatePersonSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Atul Thakre",
    url: "https://portfolio-one-mu-22.vercel.app",
    image: "https://portfolio-one-mu-22.vercel.app/og-image.png",
    sameAs: [
      "https://github.com/Atul-ThakreLO",
      "https://www.linkedin.com/in/atul-thakre-logers",
      "https://x.com/AtulThakre_Lg",
    ],
    jobTitle: "Full Stack & Web3 Developer",
    worksFor: {
      "@type": "Organization",
      name: "Freelance",
    },
    description:
      "Full Stack & Web3 Developer building scalable applications, smart contracts, and modern user experiences. Specializing in Ethereum, Solidity, Next.js, and blockchain development.",
    knowsAbout: [
      "Web Development",
      "Web3",
      "Blockchain",
      "Smart Contracts",
      "Solidity",
      "Ethereum",
      "Next.js",
      "React",
      "TypeScript",
      "Node.js",
      "GSAP",
    ],
  };
}

export function generateWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "Atul Thakre Portfolio",
    url: "https://portfolio-one-mu-22.vercel.app",
    description:
      "Full Stack & Web3 Developer building scalable applications, smart contracts, and modern user experiences.",
    author: {
      "@type": "Person",
      name: "Atul Thakre",
    },
    inLanguage: "en-US",
  };
}

export function generateProfilePageSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "ProfilePage",
    dateCreated: "2025-01-01T00:00:00.000Z",
    dateModified: "2025-12-24T00:00:00.000Z",
    mainEntity: generatePersonSchema(),
  };
}
