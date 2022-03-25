// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Groupomania",
      description: "Projet de réseau social pour une entreprise fictive.",
      technologies: ["Nginx", "NodeJs", "Express", "MYSQL", "REACT"],
      live: "https://groupomania.robin-lebon.com ",
      code: "https://github.com/Robin-Lune/RobinLebon_7_22072021",
      image: "/images/groupomania.png",
      imageAlt: "Projet de réseau social d'entreprise"
    },
    {
      title: "Site professionnel de photographe",
      description: "Site vitrine de photographe.",
      technologies: ["Nginx", "NodeJs", "Express", "REACT"],
      live: "https://robin-lebon.com ",
      image: "/images/site-photo.jpg",
      imageAlt: "Site vitrine de photographe"
    },
    {
      title : 'Site Portfolio de développeur',
      description : 'Site Portfolio de développeur.',
      technologies : ['Nginx', 'NextJs'],
      code : 'https://github.com/Robin-Lune/Portfolio_dev',
      image : '/images/site-dev.jpg',
      imageAlt: "Site Portfolio de développeur"
    },
    {
      title : 'Bot Instagram',
      description : 'Bot qui scrap les données selon la localisation. Puis recense les Hashtags les plus populaires.',
      technologies : ['NodeJs', 'Puppeteer','Electron'],
      image : '/images/bot-insta.jpg',
      imageAlt: "Bot instagram"
    },
  ]);
}
