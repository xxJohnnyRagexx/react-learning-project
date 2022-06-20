import './MainPage.css';
import Clock from '../components/Clock.js';

function MainPage()
{
    return(
        <div className="MainPage">
            <Clock />

            <h2>Links to SocialNetworks</h2>
            
            <a href="soundcloud.com">
                <div className="Link">
                    <span>SoundCloud</span>
                </div>           
            </a>
            
            <a href="vk.com">
                <div className="Link">
                    <span>vk</span>
                </div>
            </a>
        </div>
    );
}

export default MainPage;