import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/outreach/robocamps.png" class="outreach-photo">
    <br><br>
    <b><h1> RoboCamps </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    <a href="https://firstaustralia.org/programs/robocamps/" target="_blank">FIRST Australia's Page</a>
    <br><br>
    RoboCamps are an innovative way to engage children in STEM and robotics through introducing them to LEGO Mindstorm
    robotics and basic coding principles. Over the years, we have run multiple different types of RoboCamps to provide 
    funding for our team and further spread appreciation and engagement in STEM concepts.
    <br><br>
    More recently, we have partnered with Amazon to run 4 ‘Camp Amazon’ RobocCamps with approximately 100 students in 
    attendance combined. With this partnership with Amazon, we ran a RoboCamp for children in the Cancer Ward at 
    Sydney’s Randwick Children Hospital.
    <br><br>
    During Covid 19, we have also been working with Amazon to run online RoboCamps to continue to promote STEM and 
    robotics during challenging times.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`