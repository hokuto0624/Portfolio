import './header.css'

function Header(){
    const job ="システムエンジニア";
    
    const stdy =new Date("2026-04-01");
    const tody =new Date();
    const ditime =tody -stdy;
    const jobyears =ditime /(1000*60*60*24*365.25);
    return(
        <>
        <h1>{job}</h1>
        <h2>勤続年数{Math.floor(jobyears)}年</h2>
        <img src="path/to/image.jpg" alt="Profile Image" />
        </>
    )
}
export default Header