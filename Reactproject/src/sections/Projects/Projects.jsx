import Styles from './ProjectsStyles.module.css'
import viberr from '../../assets/viberr.png'
import freshBurger from '../../assets/fresh-burger.png'
import hipsster from '../../assets/hipsster.png'
import fitLift from '../../assets/fitlift.png'
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
             link='https://github.com/Syedshoaib7/TO-DO-List'
            h3="Fresh Burger"
            p="Hamburger Restaurant"
            />
            < ProjectCard
             src={hipsster} 
             link='https://github.com/Syedshoaib7/TO-DO-List'
            h3="Hipsster"
            p="Glasses Shop"
            />
            < ProjectCard
             src={fitLift} 
             link='https://github.com/Syedshoaib7/TO-DO-List'
            h3="FitLift"
            p="Fitness App"
            />
        </div>
    </section>
  )
}

export default Projects