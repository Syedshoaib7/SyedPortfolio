import styles from './SkillsStyles.module.css'
import CheckMarkIcon from '../../assets/checkmark-dark.svg'
import SkillList from '../../common/SkillList'

function Skills() {
  return (
    <section id="skills" className={styles.container}>
        <h1 className='sectionTitle'>Skills</h1>
        <div className={styles.skillList}>
           <SkillList src={CheckMarkIcon} skill="HTML"/>
           <SkillList src={CheckMarkIcon} skill="CSS"/>
           <SkillList src={CheckMarkIcon} skill="JavaScript"/>
           <SkillList src={CheckMarkIcon} skill="Java"/>
           <SkillList src={CheckMarkIcon} skill="SQL"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillList src={CheckMarkIcon} skill="React"/>
           <SkillList src={CheckMarkIcon} skill="Tailwind CSS"/>
        </div>
        <hr/>
        <div className={styles.skillList}>
           <SkillList src={CheckMarkIcon} skill="Git"/>
           <SkillList src={CheckMarkIcon} skill="GitHub"/>
           <SkillList src={CheckMarkIcon} skill="Bootstrap"/>
        </div>
    </section>
  )
}

export default Skills