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
                {/* Should contain one Skill component
        for each web dev skill that you have,
        customized with props */}
                <SkillList />
            </div>
        </div>
    );
}

function Avatar() {
    return <img className="avatar" src="ali.jpeg" alt="Ali" />;
}

function Intro() {
    return (
        <div>
            <h1>Ali Farrokhtala</h1>
            <p>
                Full-stack web developer and data analysis. When not coding or
                learning a new technology, I like to play hike, cook (and eat),
                or to just enjoy the playing vide games.
            </p>
        </div>
    );
}

function SkillList() {
    return (
        <div className="skill-list">
            {skills.map((skill) => (
                <Skill
                    skill={skill.skill}
                    color={skill.color}
                    level={skill.level}
                />
            ))}
        </div>
    );
}

function Skill({ skill, color, level }) {
    return (
        <div className="skill" style={{ backgroundColor: color }}>
            <span>{skill}</span>
            <span>
                {level === "beginner" && "👶"}
                {level === "intermediate" && "👍"}
                {level === "advanced" && "💪"}
            </span>
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
