import './development.css'
import { useState, useEffect } from 'react'
import { useLocation } from 'react-router-dom';
import portfolioWebsite from '../../assets/portfolio_website_video.mp4'
import forestGame from '../../assets/forest_game_video.mp4'
import timeComplexity from '../../assets/time_complexity_video.mp4'
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
          <video src={portfolioWebsite} autoPlay muted loop playsInline />
        </button>

        <button onClick={() => setActiveProject('project-2')}>
          <video src={forestGame} autoPlay muted loop playsInline />
        </button>

        <button onClick={() => setActiveProject('project-3')}>
          <video src={timeComplexity} autoPlay muted loop playsInline />
        </button>
      </div>
    </div>
  )
}

export default Development