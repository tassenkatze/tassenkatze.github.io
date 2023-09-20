function Projects() {
    const left =  <div className='Left'>Used in this project...</div> 
    const right =  <div className='Right'><p>Projectmenu</p></div> 
    const main = <div className='Main'><h1>Project Name</h1><p>Describtion</p></div>;

    return (
        <div className="Content">
            {left}
            {right}
            {main}
        </div>
     );
}

export default Projects;