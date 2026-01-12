import './development.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import video1 from '../../assets/video1.mp4'
import ProjectDetail from '../../components/ProjectDetail/ProjectDetail.jsx'

function Development() {
  const [activeProject, setActiveProject] = useState(null)
  const location = useLocation();

  useEffect(() => {
    setActiveProject(null);
  }, [location.key]);

  if (activeProject) {
    return (
      <ProjectDetail
        projectId={activeProject}
        onClose={() => setActiveProject(null)}
      />
    )
  }

  return (
    <div className="development-page">
      <div className="parent">

        <button onClick={() => setActiveProject('project-1')}>
          <video src={video1} autoPlay muted loop playsInline />
        </button>

        <button onClick={() => setActiveProject('project-2')}>
          <video src={video1} autoPlay muted loop playsInline />
        </button>

        <button onClick={() => setActiveProject('project-3')}>
          <video src={video1} autoPlay muted loop playsInline />
        </button>
      </div>
    </div>
  )
}

export default Development