
const SkillList = ({skillList, title}) => {

    return ( 
        <div className="skill-list container">
            <div className="skill-list">
                <h2 className="pb-4 mb-4 border-bottom">{title}</h2>
                <div className="skill-grid">
                    {skillList.map((skill) => (
                        <div className="skill-preview" key={skill.id}>
                            <div>
                                <img src={`${process.env.REACT_APP_API_URL}/skills/${skill.id}`} alt={skill.name} title={skill.name.replace('.png', '')} className="skill-image"/>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
     );
}
 
export default SkillList;