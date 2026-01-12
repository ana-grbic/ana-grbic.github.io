import projects from './projects'
import './ProjectDetail.css'

function ProjectDetail({ projectId }) {
  const project = projects[projectId]

  if (!project) {
    return <p className="schoolbell-regular">Project not found.</p>
  }

  return (
    <div className="project-detail-layout schoolbell-regular">
        <div className="project-video-container">
            <video
            src={project.video}
            autoPlay
            muted
            loop
            playsInline
            className="project-video"
            />
            <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            >
            View on GitHub
            </a>
        </div>

        <div className="project-text-scroll">
            <h2>{project.title}</h2>
            <p>{project.description}</p>
        </div>
    </div>
  )
}

export default ProjectDetail