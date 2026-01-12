import "./about.css";
import profileImg from "../../assets/pfp_1.jpeg";

function About() {
  return (
     <div className="about-layout">
      <div className="about-image">
        <img src={profileImg} alt="Profile" />
      </div>

      <div className="about-text schoolbell-regular">
        <div className="about-text-scroll">
          <p>
            Hi, I'm Ana. I'm Serbian but I was raised internationally. I was born in Egypt and later lived in Germany, Serbia, Hungary, Australia, and now Netherlands. I graduated in Computer Science from Vrije Universiteit Amsterdam in July 2025. Some of my earliest memories are of playing video games with my dad which is probably what sparked my interest in technology. It was only half a year before graduating from high school that I decided to pursue computer science as a degree. I am passionate about creative media like art, photography, movies, books, and video games, all of which inspire my work as a developer. The feeling of being able to create whatever you imagine is what drives me to keep learning and improving my skills.
          </p>
        </div>
      </div>
    </div>
  )
}
export default About