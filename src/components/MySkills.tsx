import { useState } from 'react';

function MySkills() {
    const skills = [
        {id: 1, title: "Microsoft Office", level: 3},
        {id: 2, title: "Git - Gitlab, Github", level: 3},
        {id: 3, title: "LaTex", level: 3},
        {id: 4, title: "SQL - Oracle DBMS", level: 2},
        {id: 5, title: "HTML, CSS", level: 2},
        {id: 6, title: "CAD - ArchiCAD, Allplan", level: 3},
        {id: 7, title: "React", level: 3},
    ];

    const programmingSkills = [
        {id: 1, title: "Java", level: 3},       
        {id: 3, title: "Javascript", level: 2},
        {id: 4, title: "Typescript", level: 2},
        {id: 5, title: "C#", level: 2},
        {id: 6, title: "C++", level: 2},
        {id: 7, title: "Batch", level: 2},
    ];

    return ( 
        <>
            <h1>Skills</h1>
            {skills.map((skill) => (
                <div className='skill' key={skill.id}>
                    <p>{skill.title}</p>
                </div>
            ))}
            <h2>Programming Languages</h2>
            {programmingSkills.map((skill) => (
                <div className='skill' key={skill.id}>
                    <p>{skill.title}</p>
                </div>
            ))}
        </>
     );
}
 
export default MySkills;