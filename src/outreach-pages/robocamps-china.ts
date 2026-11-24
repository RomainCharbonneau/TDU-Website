import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/outreach/robocamps.png" class="outreach-photo">
    <br><br>
    <b><h1> RoboCamps China </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    Inspired by our existing Robo Camps model, we were challenged by Macquarie Alumni to transplant this model to 
    poorer rural regions with the intention of assisting these communities incorporate the Robo camps curriculum 
    into their education. Thanks to the support from the Chi Wah foundation based in the People’s Republic of China, 
    they sponsored our team and FRC team 1678 The Citrus Circuits to collaboratively teach other high school and 
    middle school students how to use LEGO Mindstorms EV3 robots. This was achieved by designing fun challenges and 
    goals for the students to strive towards where they can pick up new skills as well as refine their english 
    capabilities through interaction with native english speakers. This also strengthened our student mentors 
    teaching capabilities through trying to overcome the language barriers.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`