import SkillList from "./SkillList";
import useFetch from "./useFetch";

const Skills = () => {

    const {data: skills, isLoading, error} = useFetch(`${process.env.REACT_APP_API_URL}/skills`);

    return (
        <div className="skills">
            {error && <div>{error}</div>}
            {isLoading && <div className="skill-list container">Loading...</div>}
            {skills && <SkillList skillList = {skills} title = "Tech skills"/>}
        </div>
    )
}

export default Skills;