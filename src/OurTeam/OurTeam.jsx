import React from 'react' 
import './OurTeam.css';
import convenerPhoto from "../assets/convinormal.png";
// import transparent from "../assets/transparent.png";
import subtract from "../assets/Subtract.svg";
// import Rectangle14 from "../assets/Rectangle14.svg";
import our from "../assets/our.png";
// import rectangleleft from "../assets/rectangle-left.svg";
// import design from "../assets/design.svg";
// import ls from "../assets/ls.svg";
// import disrupt from "../assets/disrupt.svg";
import disrupt2 from "../assets/disrupt2.svg";
// import expo from "../assets/expo.svg";
import expo2 from "../assets/expo2.svg";
// import ifbg from "../assets/ifbg.svg";
import if1 from "../assets/if1.svg";
import if2 from "../assets/if2.svg";
// import ina from "../assets/ina.svg";
// import marky from "../assets/marky.svg";
// import prb from "../assets/prb.svg";
// import website from "../assets/website.svg";
// import sparkle from "../assets/sparkle.svg";
import sparkle2 from "../assets/sparkle2.svg";
import purple from "../assets/purple.svg";
import pmxpng from "../assets/pmxpng.png";
import ifpng from "../assets/ifpng.png";
// import websitebg from "../assets/websitebg.svg";
import webpng from "../assets/webpng.png";
import designpng from "../assets/designpng.png";
import sparklepng from "../assets/sparklepng.png";
import lspng from "../assets/lspng.png";
import inapng from "../assets/inapng.png";
import disruptpng from "../assets/disruptpng.png";
import marketingpng from "../assets/marketingpng.png";
import prbpng from "../assets/prbpng.png";
import expopng from "../assets/expopng.png";
import phone from "../assets/phone.svg";
import mail from "../assets/Mail.svg";
import linkedin from "../assets/linkedin.svg";
import rishi from "../assets/rishi.jpg";
import sanika from "../assets/sanika.png";
import kartik from "../assets/kartik.jpg";
import kushagra from "../assets/kushagra.jpg";
import madhav from "../assets/madhav.jpg";
import lakshya from "../assets/lakshya.jpg";
const OurTeam = () => {
    return (
            <section className="our-team">
                  <div className='Heading'>
                    <div className="our-team-heading">OUR TEAM</div>
                  </div>
            <div className='meet-our-heads'>
                <div className="col1">
                    <div className='image-container1' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container2' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${rishi})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>RISHI AGARWAL</div>
                    <div className='POR'>CONVENER</div>
                        <img src={subtract} className="subtract-left" />
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+919351127432">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:rishi.agarwal@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/rishi-agarwal04"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container3' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${sanika})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>SANIKA MADKE</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+919146073490">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:m.sanika@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/sanika-madke-514409286?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container4' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${kartik})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>KARTIK</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+917505641236">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:k.bisht@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/kartikbisht09/"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                </div>
                
                <div className="col2">
                    <div className='meet' style={{backgroundImage: `url(${our})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '2.95vw'}} >
                        <div className="meet-text">MEET</div>
                        <img src={subtract} className="subtract-top" /> 
                    </div>
                    
                    
                    <div className='image-container5' >
                <div className="card">
                            <img src={lakshya} alt="profile" />
                            <div className="text-cut">
                    <div className='Name'>LAKSHYA CHOUDHARY</div>
                                <div className='POR'>CONVENER</div>
                            </div>
                        </div>
                        <div className="overlay-cut">
                            <div className="icons">
                                <a href="tel:+918200053453">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:C.lakshya@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/lakshyachoudhary0805?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BERFEp%2FUKT26w0XNkFifaUw%3D%3D"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                    
                <div className='image-container6' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${kushagra})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>KUSHARGA JAIN</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+918852963846">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:j.kushagra@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/kushagra-jain-402332280"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                <div className='image-container7' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${madhav})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>MADHAV GOEL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+918318118023">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:madhav.goel@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/madhav-goel-417a38297?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                
                
                </div>
                
                <div className="col3">
                    <div className='our' style={{backgroundImage: `url(${our})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '2.95vw'}} >
                    <div className="our-text">OUR</div>
                    </div>

                    <div className='image-container8' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${lakshya})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container9' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                    <div className='image-container10' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                
                </div>
                
                <div className="col4">
                <div className='heads' style={{backgroundImage: `url(${our})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center', borderRadius: '2.95vw'}} >
                    <div className="heads-text">HEADS</div>
                    </div>

                <div className='image-container11' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                <div className='image-container12' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>

                <div className='image-container13' style={{backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 50.13%, rgba(20, 17, 49, 0.64) 71.65%, #141131 99.88%), url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                        <img src={subtract} className="subtract-right" />
                        <div className="overlay">
                            <div className="icons">
                                <a href="tel:+916378334812">
                                    <img src={phone} className="phone" />
                                    </a>
                                <a href="mailto:a.tanish@iitg.ac.in"
                                    target="_blank"
                                    rel="noopener noreferrer">
                                <img src={mail} alt="" className="mail" />
                                </a>
                                <a href="https://www.linkedin.com/in/tanish-agarwal-a30a1527b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                                target="_blank"
                                rel="noopener noreferrer">
                                    <img src={linkedin} alt="" className="linkedin" />
                                </a>
                          </div>
                        </div>
                    </div>
                </div>
            </div>



            {/* <div className="mobile">
                    <div className='image-container-mobile' style={{backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                    <div className='image-container-mobile' style={{ backgroundImage: `url(${convenerPhoto})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center' }}>
                    <div className='Name'>TANISH AGARWAL</div>
                        <div className='POR'>CONVENER</div>
                    </div>
                </div> */}






            <div className='managers-heading'>
                    <div >OUR MANAGERS</div>
                </div>
            <div className="managers">
                <div className="column1">
                    <div className="pmx" style={{backgroundImage: `url(${pmxpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="pmx-text">PMX &<br />ENCODE</div>
                    </div>
                    <div className="if" style={{backgroundImage: `url(${ifpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="if-text">INTERNFAIR</div>
                        <img src={if1} className='if-image1' />
                        <img src={if2} className='if-image2' />
                    </div>
                    <div className="website" style={{backgroundImage: `url(${webpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="website-text">WEBSITE</div>
                    </div>
                </div>
                <div className="column2">
                    <div className="design" style={{backgroundImage: `url(${designpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="design-text">DESIGN</div>
                        <img src={purple} className='purple-left' />
                        <img src={purple} className='purple-top' />
                    </div>
                    <div className="sparkle" style={{backgroundImage: `url(${sparklepng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="sparkle-text">SPARKLE</div>
                        <img src={sparkle2} className='sparkle-image1' />
                        
                    </div>
                </div>
                
                <div className="column3">
                    <div className="ls" style={{backgroundImage: `url(${lspng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="ls-text">LECTURE <br/>SERIES</div>
                    </div>
                    <div className="ina" style={{backgroundImage: `url(${inapng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="ina-text">INA</div>
                    </div>
                    <div className="website" style={{backgroundImage: `url(${webpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="website-text">WEBSITE</div>
                    </div>
                </div>

                <div className="column4">
                    <div className="disrupt" style={{backgroundImage: `url(${disruptpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="disrupt-text">DISRUPT</div>
                        <img src={disrupt2} className='disrupt-image1' />
                    </div>
                    <div className="marky" style={{backgroundImage: `url(${marketingpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="marky-text">MARKETING</div>
                    </div>
                </div>
                <div className="column5">
                    <div className="expo" style={{backgroundImage: `url(${expopng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="expo-text">STARTUP<br />EXPO</div>
                        <img src={expo2} className='expo-image1' />
                    </div>
                    <div className="prb" style={{backgroundImage: `url(${prbpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="prb-text">PR <br />BRANDING</div>
                        <img src={purple} className='purple-rtop' />
                        <img src={purple} className='purple-rbottom' />
                    </div>
                    <div className="website" style={{backgroundImage: `url(${webpng})`, backgroundSize: 'cover', noRepeat: 'no-repeat', backgroundPosition: 'center'}}>
                        <div className="website-text">WEBSITE</div>
                    </div>
                </div>

            </div>
                </section>
        );
}; export default OurTeam;