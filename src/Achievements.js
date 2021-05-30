import React from "react";

export const Achievements = () => {
    const achievements = [{}];

    const renderAchievements = () => {
        return achievements.map((achievement) => (
            <><div className="text-center card" style={{ width: "16rem", background: "rgb(52, 58, 64)", padding: "20px" }}>
                <img className="card-img-top" src={achievement.img} />
                <div className="card-body">
                    <div className="card-title h5"
                         style={{ color: "rgba(255, 255, 255, 0.7)", fontSize: "18px" }}>{achievement.title}
                    </div>
                    <br />
                    <p className="card-text" style={{ color: "rgb(116, 128, 138)" }}>
                        <div>Issued on: <br /> {achievement.issuedOn}</div>
                    </p>
                    <a className="MuiButtonBase-root MuiButton-root MuiButton-contained" tabIndex="0"
                       aria-disabled="false" target="_blank"
                       href={achievement.actionButtonTo}><span
                        className="MuiButton-label">See Credential</span><span
                        className="MuiTouchRipple-root"></span></a></div></div>
        <br /></>
        ));
    }

    return (
        <section id="achievements" className="about">
            <div className="container aos-init" data-aos="fade-up">
                <div className="section-title"><h2>Achievements</h2></div>
                <div className="row">
                    <div className="col-sm-3 d-flex justify-content-center">
                        {renderAchievements()}
                    </div>
                </div>
            </div>
        </section>
    )
}
