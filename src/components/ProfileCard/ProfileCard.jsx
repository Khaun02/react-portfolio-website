import "./ProfileCard.css";

function ProfileCard() {
    return (
        <div className="card">
            <div className="intro_header">
                <div className="intro_section">
                    <div>
                        <h1>Shaun Khang</h1>
                    </div>
                    <div className="social_media">
                        <a href="mailto:khaunx02@gmail.com" target="_blank" rel="noopener noreferrer">Email </a>
                        <a href="https://github.com/Khaun02/" target="_blank" rel="noopener noreferrer">Github </a>
                        <a href="https://www.linkedin.com/in/shaunkhang/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
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