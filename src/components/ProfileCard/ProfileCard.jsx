import "./ProfileCard.css";
import SVGProg from "../SVGComponents/SVGProg"

function ProfileCard() {
    return (
        <div className="card">
            <div className="">
                <div className="intro_section">
                    <h1 className="name custom">Shaun Khang</h1>

                    <div className="social_media custom">
                        <a href="mailto:khaunx02@gmail.com" target="_blank" rel="noopener noreferrer">
                            <SVGProg language="HTML" showLanguage={false} />
                        </a>
                        <a href="https://github.com/Khaun02/" target="_blank" rel="noopener noreferrer">
                            <SVGProg language="Git" showLanguage={false} />
                        </a>
                        <a href="https://www.linkedin.com/in/shaunkhang/" target="_blank" rel="noopener noreferrer">
                            <SVGProg language="JavaScript" showLanguage={false} />
                        </a>
                    </div>
                </div>

                <div className="location">
                    <p>Madison, WI</p>
                </div>

            </div>
            <div className="intro_bio">
                I'm an aspiring Full-Stack Web Developer/Software Engineer. I have been programming for more than 6 years. I create professional websites and problem solving applications.
            </div>
        </div>
    )
}

export default ProfileCard