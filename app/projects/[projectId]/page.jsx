import ProjectData from '../../data/ProjectData.json';

export default function Page({ params }) {
    const project = ProjectData.find(project => project.id === params.projectId);

    if (!project) {
        return <div>Project not found</div>
    }

    return (
        <div>
            <div>{project.title}</div>
            <div>{project.description}</div>
        </div>
    )
}