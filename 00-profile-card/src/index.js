import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles.css";

const skills = [
  {
    skill: "HTML+CSS",
    level: "advanced",
    color: "#2662EA",
  },
  {
    skill: "JavaScript",
    level: "advanced",
    color: "#EFD81D",
  },
  {
    skill: "Web Design",
    level: "advanced",
    color: "#C3DCAF",
  },
  {
    skill: "Git and GitHub",
    level: "intermediate",
    color: "#E84F33",
  },
  {
    skill: "React",
    level: "advanced",
    color: "#60DAFB",
  },
  {
    skill: "Svelte",
    level: "beginner",
    color: "#FF3B00",
  },
];

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

function Avatar() {
  return <img className="avatar" src="avatar.jpeg" alt="Abdullah Corduk" />;
}

function Intro() {
  return (
    <div>
      <h1>Abdullah Corduk</h1>
      <p>
        For me, coding with React isn’t just a skill, it’s something I genuinely
        enjoy. React gives me the tools to turn complexity into simplicity, and
        I love that. 👋 Hello World! I’m a passionate React Developer with a
        solid foundation in modern front-end technologies. I specialize in
        building fast, responsive, and user-centered web applications using
        React.js, JavaScript, and tools like Next.js, Tailwind, Sass, and
        Bootstrap. Through hands-on experience and immersive training, including
        the Coderhouse Full-Stack Web Development Bootcamp and Meta’s Front-End
        Developer Professional Certificate, I’ve built real-world projects
        focused on clean UIs, reusable components, and optimized performance. I
        take pride in writing scalable, maintainable code and collaborating on
        GitHub within Agile and Scrum workflows. 🚀 I’m on a mission to become a
        world-class React developer; constantly learning, building, and
        transforming ideas into meaningful digital experiences.
      </p>
    </div>
  );
}

function SkillList() {
  return (
    <div className="skill-list">
      {skills.map((skill) => (
        <Skill skill={skill.skill} color={skill.color} level={skill.level} />
      ))}
    </div>
  );
}

function Skill({ skill, color, level }) {
  return (
    <div className="skill" style={{ backgroundColor: color }}>
      <span>{skill}</span>
      <span>{level === "beginner" && "👶"}</span>
      <span>{level === "intermediate" && "👍"}</span>
      <span>{level === "advanced" && "💪"}</span>
    </div>
  );
}

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <App />
  </StrictMode>
);

//props updated
