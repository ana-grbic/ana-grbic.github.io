import portfolioWebsite from '../../assets/portfolio_website_video.mp4'
import forestGame from '../../assets/forest_game_video.mp4'
import timeComplexity from '../../assets/time_complexity_video.mp4'

const projects = {
  'project-1': {
    title: 'Portfolio Website',
    description: 'A simple website I created to showcase my projects and interests. Built using React and hosted on GitHub Pages.',
    github: 'https://github.com/ana-grbic/ana-grbic.github.io/tree/main',
    video: portfolioWebsite
  },
  'project-2': {
    title: 'Forest Game',
    description: 'My second game using Python and the Pygame Library. Still in relatively early stages, including placeholder assets.',
    github: 'https://github.com/ana-grbic/Forest-Game',
    video: forestGame
  },
  'project-3': {
    title: 'Time Complexity Testing',
    description: 'My Bachelor thesis project which tests snippets of code for their time complexity. Built in C++ with a simple command line interface.',
    github: 'https://github.com/ana-grbic/Time-Complexity-Testing',
    video: timeComplexity
  }
}

export default projects