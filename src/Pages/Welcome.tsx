function Welcome() {
    const left =  <div className='Left'></div> 
    const right =  <div className='Right'></div> 
    const main = <div className='Main'><h1>Welcome to cat world</h1><p>uwu...</p></div>;

    return (
        <div className="Content">
            {left}
            {main}
            {right}
        </div>
     );
}

export default Welcome;