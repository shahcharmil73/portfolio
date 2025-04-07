import React from "react";
import data from "../../data/index.json";
//import "./SkillsGrid.css";

export default function SkillsGrid() {
  return (
    <section className="skills--section" id="skillsGrid">
      <div className="skills--section--title">
        <h2>Skills</h2>
        <p>
          Here are some of my skills on which I have been working on for the
          past 2 years.
        </p>
      </div>

      <div className="skills--grid">
        {Object.entries(data?.groupedSkills || {}).map(([category, items], i) => (
          <div className="skills--group" key={i}>
            <h3>{category}</h3>
            <div className="skills--icons">
              {items.map((item, index) => (
                <div className="skill--badge" key={index}>
                  <img
                    src={item.src}
                    alt={item.name}
                    onError={(e) =>
                      (e.target.src =
                        "https://cdn-icons-png.flaticon.com/512/565/565547.png")
                    } // fallback icon
                  />
                  <span>{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
