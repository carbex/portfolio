import '../../../Global.scss';
import React, { useState, useEffect } from 'react'
import Card from './Card/Card'
import * as S from './Portfolio.styles'


// const projects = [
//   {
//     _id: 1,
//     visible: false,
//     imageUrl: 'images/yams.png',
//     title: 'My Yams',
//     description: "My Yams est une application web permettant de  jouer au Yams. Il est possible d'ajouter des joueurs et d'enregistrer sa partie pour la continuer ultérieurement.",
//     resources: ['Express', 'React', 'React Router Dom', 'Redux', 'Mongoose'],
//     githubUrl: 'https://github.com/carbex/yams',
//     siteUrl: 'https://myyamsgame.herokuapp.com'
//   },
//   {
//     _id: 2,
//     visible: false,
//     imageUrl: 'images/easycoopte.png',
//     title: 'Easycoopte',
//     description: "Easycoopte est une application web permettant la cooptation au sein de son entreprise. Suivant le type d'utilisateur, il est possible d'ajouter des offres, de recommander une personne, de changer le status de la cooptation, de visualiser le nombre d'offres et le nombre de cooptations en cours et de filtrer les offres ou les cooptations affichées.",
//     resources: ['Express', 'React', 'React Router Dom', 'Redux', 'Mongoose avec clefs étrangères'],
//     githubUrl: 'https://github.com/ilanashley/EasyCoopt',
//     siteUrl: 'https://easycoopte.herokuapp.com'
//   },
//   {
//     _id: 3,
//     visible: false,
//     imageUrl: 'images/mymoviz.png',
//     title: 'My Moviz',
//     description: "My Moviz est une application web permettant d'afficher une liste de films en fonction de leur sortie au cinéma. Il est possible de liker un film, d'indiquer le nombre de fois qu'il a été visionné et de le noter. Une wishlist permet de lister et de supprimer le ou les films likés.",
//     resources: ['Bootstrap', 'Express','BackEnd webservices','Fetch', 'React','Reverse data flow', "Hooks d'état et d'effets", 'Fusion Express/React', 'Mongoose'],
//     githubUrl: 'https://github.com/carbex/mymoviz',
//     siteUrl: ''
//   },
//   {
//     _id: 4,
//     visible: false,
//     imageUrl: 'images/morningnews.png',
//     title: 'Morning News',
//     description: "Morning news est une application web permettant d’afficher les news récentes par source d'informations et de les mettre dans une wishlist pour les sauvegarder en base de données et les lire plus tard.",
//     resources: ['Express', 'React', 'React Router Dom', 'Redux', 'Mongoose', 'Token', 'Bcrypt'],
//     githubUrl: 'https://github.com/carbex/morningnews',
//     siteUrl: ''
//   },
//   {
//     _id: 5,
//     visible: false,
//     imageUrl: 'images/bikeshop.png',
//     title: 'Bike Shop',
//     description: "Bike Shop est une application web de e-Commerce permettant d'enregistrer dans son panier une sélection d'articles puis de les acheter en ligne grâce à une plateforme de paiement.",
//     resources: ['Bootstrap', 'Express', 'EJS', 'Sessions', 'Stripe'],
//     githubUrl: 'https://github.com/carbex/bikeshop',
//     siteUrl: ''
//   },
//   {
//     _id: 6,
//     visible: false,
//     imageUrl: 'images/blackboard.png',
//     title: 'Blackboard',
//     description: "Blackboard est une application web permettant de visualiser le back-office d'un site e-Commerce de vente de trottinettes. On peut y voir la liste des clients, la liste des commandes avec leur status,  le catalogue produit ainsi que les statistiques sous forme de graphiques.",
//     resources: ['Express', 'EJS', 'Partials', 'Mongoose avec clefs étrangères, sous-documents, populate et agregate', 'Chart.js', 'Manipulation de dates'],
//     githubUrl: 'https://github.com/carbex/blackboard',
//     siteUrl: ''
//   },
//   {
//     _id: 7,
//     visible: false,
//     imageUrl: 'images/face_up.png',
//     title: 'Face Up',
//     description: "Face Up est une application mobile permettant de prendre une photo ou une vidéo et d'analyser ses données via une intelligence artificielle.",
//     resources: ['Express', 'React Native', 'Expo', 'React Navigation', 'Redux', 'Cloudinary', 'API de reconnaissance faciale'],
//     githubUrl: 'https://github.com/carbex/faceup',
//     siteUrl: ''
//   },
//   {
//     _id: 8,
//     visible: false,
//     imageUrl: 'images/locapic.png',
//     title: 'Locapic',
//     description: "Locapic est une application mobile permettant de géolocaliser un utilisateur en matérialisant ses déplacements sur une carte interactive et en offrant la possibilité d'y ajouter des points d'intérêts et de rentrer en contact avec l'intégralité des utilisateurs par l'intermédiare d'une messagerie instantannée.",
//     resources: ['Express', 'React Native', 'Expo', 'React Navigation', 'Redux', 'Web Sockets', 'Local Storage', 'Map View', 'Modale', 'Regex'],
//     githubUrl: 'https://github.com/carbex/locapic',
//     siteUrl: ''
//   }
// ]

function Portfolio() {

  const [projects, setProjects] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // const myProm = new Promise(function(resolve, reject) {
    //     setProjects(() => projects);
    //     resolve();
    // });
    // myProm.then(() => {
    //   setLoading(false)
    // });

    const loadProjects = async () => {
      let rawResponse = await fetch('/projects/get')
      let response = await rawResponse.json()
      setProjects(() => response.projects)
    }
    loadProjects()
    setLoading(false)

  }, [])

  const handleProjectClick = (index) => {
    setProjects(projects.map((project, i) => i === index ? project.visible === false ? { ...project, visible: true } : { ...project, visible: false } : { ...project, visible: false }))    
  }

  const listProjects = projects.map((project, index) => {
    return <Card 
      key={project._id} 
      index={index}
      visible={project.visible}
      imageUrl={project.imageUrl}  
      title={project.title} 
      description={project.description}
      resources={project.resources} 
      githubUrl={project.githubUrl}
      siteUrl={project.siteUrl} 
      onProjectClick={handleProjectClick} 
    />
  })

  return (
    <S.Container>
      <S.PageTitle>MES PROJETS</S.PageTitle>
      {loading && <S.SubTitle>Chargement...</S.SubTitle>}
      <S.Portfolio>
        {listProjects}
      </S.Portfolio>
    </S.Container>   
  );
}

export default Portfolio;