import React from 'react';
import Banner from '../assets/home.banner.png';
import Logo from '../assets/slimtidetogether.png';
import Coral from '../assets/home.pic.1.png';
import Palancar from '../assets/home.pic.2.png';
import Brain from '../assets/home.pic.3.png';

function Home() {
    return (
        <div className="body">
            <div>
                <img
                    src={Banner}
                    className="img-fluid"
                    width="100%"
                    alt="reef"
                />
            </div>

            {/* Title */}
            <div className="container my-5 display-4 text-center">
                <img src={Logo} alt="tide together logo" width="300px" />
            </div>

            {/* Content - Main Page */}
            <div className="container">
                <div className="row py-4">
                    <div className="col d-none d-md-block">
                        <img className="img-fluid" src={Coral} alt="reef with orange coral and fishes" />
                    </div>
                    <div className="col lead">
                        Dive into a world of conservation with Tide Together: Marine Life Sponsorship. Born from a deep-seated love
                        for scuba diving and a profound appreciation for the wonders beneath the waves, our mission transcends
                        borders and bubbles.
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col lead">
                        In the wake of our shifting climate's ripple effect on marine flora and fauna, we've witnessed firsthand the
                        urgent need for action. Our vision is crystal clear: to forge a community of ocean guardians, united by a
                        common passion for preserving marine biodiversity.
                    </div>
                    <div className="col d-none d-md-block">
                        <img className="img-fluid" src={Palancar} alt="palancar reef in cozumel" />
                    </div>
                </div>
                <div className="row py-4">
                    <div className="col d-none d-md-block">
                        <img className="img-fluid" src={Brain} alt="brain coral" />
                    </div>
                    <div className="col lead">
                        Through our platform, we invite fellow ocean enthusiasts to make a splash in conservation efforts. By
                        sponsoring marine life, each sponsorship becomes a testament to our commitment to safeguarding the fragile
                        ecosystems we hold dear. Together, we navigate the currents of change, restoring reefs, protecting habitats,
                        and ensuring that the treasures of the deep endure for generations to come.
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
