import styles from './skills.less';
import Skill, {SkillProps} from './skills/skill';

interface SkillsProps {
    skills: SkillProps[];
}

export default function Skills(props: SkillsProps) {
    return (
        <>
            <div className={styles.wrapper}>
                <div className={styles.content}>
                    <h2>Moje dovednosti</h2>
                    <div className={styles.skills}>
                        {props.skills.map((skill) => (
                            <Skill
                                icon={skill.icon}
                                name={skill.name}
                                description={skill.description}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </>
    );
}
