import styles from './skill.less';

export interface SkillProps {
    icon: string;
    name: string;
    description: string;
}

export default class Skill extends React.Component<SkillProps, {}> {

    render() {
        return (
            <div className={styles.skill}>
                <div className={styles.icon}>
                    <img src={this.props.icon} alt={this.props.name}/>
                </div>
                <div className={styles.detail}>
                    <div className={styles.name}>{this.props.name}</div>
                    <div className={styles.description}>{this.props.description}</div>
                </div>
            </div>
        )
    }
}
