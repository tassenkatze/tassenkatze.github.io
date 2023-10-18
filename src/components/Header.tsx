function Header() {
    return (
        <div className="Header">
            <div className='HeaderIcon'>/ᐠ.ꞈ.ᐟ\ﾉ</div>
            <Menubar />
        </div>
    )
}

function Menubar() {
    return ( 
        <div className='Menubar'>
            <div className="Links">
                <a href="/aboutMe">About Me</a>
                <a href="/projects">Projects</a>
            </div>
        </div>

        
     );
}

export default Header;
