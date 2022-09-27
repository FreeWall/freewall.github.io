import styles from './skill.less';

export interface SkillProps {
    name: string;
    description: string;
    icon: {
        url: string;
        height: number;
    };
}

export default function Skill(props: SkillProps) {
    return (
        <div className={styles.skill}>
            <div className={styles.icon}>
                <img src={props.icon.url} alt="" height={props.icon.height}/>
            </div>
            <div className={styles.detail}>
                <div className={styles.name}>{props.name}</div>
                <div className={styles.description}>{props.description}</div>
            </div>
        </div>
    );
}
