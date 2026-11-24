import './style.css'
import { createNavbar } from './navbar'
import { createFooter } from './footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br>
    <br>
    <br>
    <h1><b> Frequently Asked Questions </b></h1>
  </div>
</section>
<section id="FAQ">
  <div class="alternate-section">
    <h3> How do I contact the team? </h3>
    <p> You can contact us using our team email address here:
    <a href="mailto:Firstroboticsteam3132@gmail.com" target="_blank">Firstroboticsteam3132@gmail.com</a>
    or via our Instagram or Facebook pages. </p>
    <br>
    <hr> 
    <h3> How can I help the team? </h3>
    <p> You can help the team by volunteering your time, donating money or materials, 
    or by sponsoring the team. If you want to contact us about sponsorship, please use the team email above. </p>
    <br>
    <hr>
    <h3> Who can join the team? </h3>
    <p> Team 3132 welcomes students in Year 8 or above (ages 13-18). University students, professionals and parents can become involved through mentoring the team. </p>
    <br>
    <hr>
    <h3> How do I join the team? </h3>
    <p> You can join Team 3132 for a trial period during the off-season (May-October). Just send an expression of interest via email! </p>
    <br>
    <hr>
    <h3> How often do you meet? </h3>
    <p> During the months of January to April, Team 3132 meets multiple days a week to build our robot during “build season”. During May to December, our team enters the “offseason”, in which we meet on Fridays from 6-9pm. </p>
    <br>
    <hr>
    <h3> Where do you meet? </h3>
    <p> Our team meets at the Macquarie University </p>
    <br>
  </div>
  <br>
</section>

    ${createFooter()}
`