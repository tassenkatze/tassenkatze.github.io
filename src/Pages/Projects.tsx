function Projects() {
    const left =  <div className='Left'></div> 
    const right =  <div className='Right'></div> 
    const main = <div className='Main'><h1>Projects</h1><p>More coming soon...</p></div>;

    return (
        <div className="Content">
            {left}
            {main}
            {right}
        </div>
     );
}

export default Projects;