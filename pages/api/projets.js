// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json([
    {
      title: "Réseau social Groupomania",
      description: "Projet de réseau social pour une entreprise fictive.",
      technologies: [ "REACT","SASS", "NodeJs", "Express", "MYSQL","Bcrypt","Jwt","Nginx"],
      live: "https://groupomania.robin-lebon.com ",
      code: "https://github.com/Robin-Lune/RobinLebon_7_22072021",
      image: "/images/groupomania.jpg",
      imageAlt: "Projet de réseau social d'entreprise",
      text:"Le projet consiste à construire un réseau social interne pour les employés de Groupomania. Le but de cet outil est de faciliter les interactions entre collègues. (Site fonctionnel vous pouvez vous inscrire et me laisser un petit mot!)" 
    },
    {
      title: "Robin LEBON photographe",
      description: "Site vitrine de photographe.",
      technologies: ["Nginx", "NodeJs", "Express", "REACT","Styled Component"],
      live: "https://robin-lebon.com ",
      image: "/images/site-photo.jpg",
      imageAlt: "Site vitrine de photographe",
      text:"Site vitrine pour mettre en avant mon travail de photographe, j'ai opté pour un design minimaliste avec peu de texte pour transmettre uniquement les informations essentielles et laisser les images parler d'elles même." 

    },
    {
      title : 'Site Portfolio de développeur',
      description : 'Site Portfolio de développeur.',
      technologies : ['NextJs','SASS','Nginx' ],
      code : 'https://github.com/Robin-Lune/Portfolio_dev',
      image : '/images/site-dev.jpg',
      imageAlt: "Site Portfolio de développeur",
      text:"La difficulté dans ce projet à été de trouver le bon équilibre entre graphisme et technologies derrière pour qu'on puisse y retrouver ma personnalité ainsi qu'un aperçu de mes compétences. " 
      

    },
    {
      title : 'Bot Instagram',
      description : 'Bot qui scrap les données selon la localisation. Puis recense les Hashtags les plus populaires.',
      technologies : ['NodeJs', 'Puppeteer','Electron'],
      image : '/images/bot-insta.jpg',
      imageAlt: "Bot instagram",
      text:"Petit projet sur mon temps libre, pour automatiser certaines tâches sur Insta comme la publication de mes photos avec les hashtags les plus populaires pour avoir un maximum de couverture. Malheureusement plus à jour par manque de temps depuis la dernière refonte d'instagram. " 

    },
  ]);
}
