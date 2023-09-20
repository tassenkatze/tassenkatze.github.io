import '../styles/resume.css';

function Resume() {
    return ( 
        <>
            <h1>Hello to cat world</h1>
            <h2>Resumé</h2>
            <p style={{}}> formatting coming soon</p> 
            <br></br><br></br><br></br>
            {/* <MakeTimeline/> */}
            <MakeTimeLineTest/>
        </>
     );
}

const events = [
    { short: 'Nepal2', status: 'Volunteering at Children\'s Home', date: 'Dec 2022 -- May 2023', company: 'Self Help Nepal', place: 'Kathmandu, Nepal', describtion: ''},
    { short: 'Studium-Provadis', status: 'Dual Studies BS Computer Science', date: 'Oct 2019 -- Sep 2022', company: 'Provadis School of International Management and Technology AG', place: 'Frankfurt, Germany', describtion: 'Approximately 30% of the study<br></br>Final Grade: 2.0'},
    { short: 'Studium-Telekom2', status: 'Dual Student in Computer Science', date: 'Aug 2021 -- Sep 2022', company: 'Service Hub Development Solutions Department, Deutsche Telekom AG', place: 'Darmstadt, Germany' ,describtion: 'Approximately 70% of the study<br></br>Revamping an order portal in the ASP.NET MVC framework using C#'},
    { short: 'Studium-Telekom1', status: 'Dual Student in Computer Science', date: 'Oct 2019 -- Jul 2021', company: 'Geoinformation Systems/ Digital Hub Gis-Fixed-Net-Inventory Department, Deutsche Telekom AG', place: 'Darmstadt, Germany' ,describtion: 'Approximately 70% of the study<br></br>Creation of several auxiliary tools for software monitoring and automation using Java, Python, Golang and Batch'},
    { short: 'Nepal1', status: 'Volunteering at Children\'s Home', date: 'Oct 2018 -- May 2019', company: 'Self Help Nepal', place: 'Kathmandu, Nepal'},
    { short: 'Bauzeichner', status: 'Construction Draftswoman', date: 'Jan 2018 - Sep 2018', company: 'Solar-System-Haus', place: 'Singen, Germany'},
    { short: 'Ausbildung-Bauzeichner', status: 'Training as a Construction Draftswoman', date: 'Sep 2016 -- Jan 2018', company: 'Solar-System-Haus', place: 'Singen, Germany'},
];

function MakeTimelineItem(eventShort: string){
    const item = events.find(element => element.short === eventShort)
    const element  = (
        <div className="TimelineItemPanel">
            <h4>{item?.status}</h4>
            <h6>{item?.date}</h6>
            <p>{item?.company} - {item?.place}</p>
        </div>
    )
    return element
}

function MakeTimeLineTest(){
    const timeline = (
        <>
        <div className='timeline'>
            <div>{MakeTimelineItem('Nepal2')}</div>
            <div></div>
            <div>
                <div>{MakeTimelineItem('Studium-Telekom1')}</div>
                <div>{MakeTimelineItem('Studium-Telekom2')}</div>
            </div>
            <div>{MakeTimelineItem('Studium-Provadis')}</div>
            <div>{MakeTimelineItem('Nepal1')}</div>
            <div></div>
            <div>{MakeTimelineItem('Bauzeichner')}</div>
            <div></div>
            <div>{MakeTimelineItem('Ausbildung-Bauzeichner')}</div>
            <div></div>
        </div>
        </>
    )
    return timeline
    
}

function MakeTimeline(){
    const style = {
    }
    const timeline = (
        <>
        <table>
        <tr>
            <td className='leftColumn'>{MakeTimelineItem('Nepal2')}</td>
            <td className='rightColumn'></td>
        </tr>
        <tr>
            <td className='leftColumn'>{MakeTimelineItem('Studium-Telekom1')}
            {MakeTimelineItem('Studium-Telekom2')}</td>  
            <td className='rightColumn'>{MakeTimelineItem('Studium-Provadis')}</td>
        </tr>
        <tr>
            <td className='leftColumn'>{MakeTimelineItem('Nepal1')}</td>
            <td className='rightColumn'></td>
        </tr>
        <tr>
            <td className='leftColumn'>{MakeTimelineItem('Bauzeichner')}</td>
            <td className='rightColumn'></td>
        </tr>
        <tr>
            <td className='leftColumn'>{MakeTimelineItem('Ausbildung-Bauzeichner')}</td>
            <td className='rightColumn'></td>
        </tr>
        </table>

        </>
    )

    return timeline
}

export default Resume;

