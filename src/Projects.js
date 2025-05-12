import useFetch from "./useFetch";
import ProjectList from "./ProjectList";

const Projects = () => {
    const {data: projects, isLoading, error} = useFetch(`${process.env.REACT_APP_API_URL}/projects`);
    return (
        <div className="projects">
            {error && <div>{error}</div>}
            {isLoading && <div className="project-list container">Loading...</div>}
            {projects && <ProjectList projects = {projects} title = "Projects"/>} {/* jei projects nera null tuomet einanam i ProjectList */}
        </div>
    );
}
 
export default Projects;