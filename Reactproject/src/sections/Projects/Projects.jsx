import Styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import Ecommerce from '../../assets/Ecommerce.jpeg'
import ProjectCard from '../../common/ProjectCard'

function Projects() {
  return (
    <section id="projects" className={Styles.container}>
        <h1 className='sectionTitle'>Projects</h1>
        <div className={Styles.projectsContainer}>
            < ProjectCard 
            src={viberr} 
            link='https://github.com/Syedshoaib7/TO-DO-List'
            h3="TO-DO"
            p="TODO LIST App"
            />
            < ProjectCard
             src={freshBurger} 
             link='https://github.com/Syedshoaib7/FOOD-DELIVERY-APP'
            h3="FOOD-DEL"
            p="Food Delivery Application"
            />
            < ProjectCard
             src={Ecommerce} 
             link='https://github.com/Syedshoaib7/E-commerce-website'
            h3="E-Commerce"
            p="E-Commerce Website"
            />
          
        </div>
    </section>
  )
}

export default Projects