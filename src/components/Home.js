import React from 'react'
import '../../src/styles/base.css';

class Home extends React.Component {

render(){
    return(
            <div className="myWork">
                <div className="jumbotron jumbotron-fluid my-jumbotron d-flex align-items-center">
                    <div className="container text-center my-jumbotron-slogan">
                        <h1 className="titleMain">Bartosz Skowronek</h1>
                        <h2>Full-Stack .NET Developer</h2>
                        <h2>I <p className="heart">❤</p> coding!</h2>
                    </div>
            </div>

            <div className="container white">
                <div className="row">
                    <div className="col-sm-12 text-center">
                        <h2 className="text-uppercase my-mission-text">ABOUT ME</h2>
                        <p>
                        Hi, I'm graduate Cracow University of Technology, Automation and Robotics Engineer Degree. I was never the best at school or academics, I’m just a super curious guy. 
                        I spend a lot of time building software and electronics. 
                        Nowadays I works as a full stack .net developer.</p>
                    </div>
                </div>
                <div className="row justify-content-center my-5">
                    <div className="col-sm-12 col-md-4 text-center">
                        <div className="my-mission-background-icon mx-auto mb-4">
                        </div>
                        <h2>Software Development</h2>
                            <ul className="card-block">
                                <li className="card-text">C# ASP.NET Core MVC WebAPI</li>
                                <li className="card-text">React Redux JavaScript</li> 
                                <li className="card-text">Entity Framework SQL MongoDb</li> 
                                <li className="card-text">HTML5 CSS Bootstrap Angular basics</li>   
                                <li className="card-text">Git Azure DevOps</li>          
                                <li className="card-text">Patterns and good practice</li>                      
                            </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center">
                        <div className="my-mission-background-icon mx-auto mb-4">
                        </div>
                        <h2>Electronics</h2>
                            <ul className="card-block">
                                <li className="card-text">A lot projects on Arduino platform and C assembly, 
                                among others mini sumo robot, weather stations. <br></br>
                                <a href="https://github.com/teqow/Praca-Inzynierska">Check my engineering work!</a>
                                </li>
                            </ul>
                    </div>
                    <div className="col-sm-12 col-md-4 text-center">
                        <div className="my-mission-background-icon mx-auto mb-4">
                        </div>
                        <h2>My work</h2>
                            <ul className="card-block">
                                <li className="card-text">
                                I develop applications in the latest .net technologies and react. 
                                I learn new things every day and develop. 
                                I try to be better and better at what I do.</li> 
                            </ul>
                    </div>
                </div>
            </div>

            <h2 className="my-mission-text"></h2>

            <div className="container white">
                <div className="row justify-content-center my-5">
                    <div className="col-sm-12 col-md-6 text-left ">
                        <h2>What do I want to learn in 2019?</h2>
                            <ul className="card-block">
                                <li className="card-text">microservices architecture</li>
                                <li className="card-text">MobX -> alternative for redux</li> 
                                <li className="card-text">network / security</li> 
                                <li className="card-text">maybe some DevOps</li>   
                                <li className="card-text">and of course developing current skills!</li>          
                            </ul>
                    </div>
                    <div className="col-sm-12 col-md-6 text-center">
                        <h2>Contact me</h2>
                        <form method="POST" action="https://formspree.io/bartosz.skowronek96@gmail.com">
                            <div className="form-group">
                                <input type="email" className="col-sm-8 col-md-12" name="email" placeholder="Your email"></input>
                            </div>
                            <div className="form-group">
                                <textarea className="col-sm-8 col-md-12" rows="4" name="message" placeholder="Message"></textarea>
                            </div>
                            <button className="btn btn-warning mt-2 col-sm-6 col-md-6 text-center">Send Email</button>
                        </form>
                    </div>
                </div>
            </div>

            <div>
            <footer id="footer" className="foo footer">
                <div className="container">
                    <div className="row">
                        <div className="col text-center">
                            <p className="mt-3">Bartosz Skowronek</p>
                        </div>
                    </div>
                </div>
            </footer>
            </div>
        </div>

    )
}

}

export default Home

