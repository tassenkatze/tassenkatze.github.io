import MySkills from '../components/MySkills';
import PersonalInfo from '../components/PersonalInfo';
import Resume from '../components/Resume';

function AboutMe() {
    const left =  <div className='Left'><MySkills/></div> 
    const right =  <div className='Right'><PersonalInfo/></div> 
    const main = <div className='Main'><Resume/></div>

    return (
        <div className="Content">
            {left}
            {right}
            {main}
        </div>
        )
}

export default AboutMe;

function MainPart(){
    return (
        <div className='Main'>
            <h1>Hello to cat world</h1>
            <p>Resume - coming soon</p> 
        </div>
    )
}



function handleClickExampleFunction(name: string, event: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    // For: <button onClick={(e) => handleClick("cat", e)}>Uwu</button>
    console.log("Hello " + name, event, "--------", event.currentTarget);
}