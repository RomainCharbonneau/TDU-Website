import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2016aragung.jpg" class="robot-photo">
    <b><h1> 2016: Aragung </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Aragung was a compact robot designed to pass under the 16” Low Bar with ease. A robust drivetrain with 8” pneumatic wheels enabled it to cross a variety of defenses and the multi-directional polycord intake both collected boulders and manipulated the cheval de frise. A turreting shooter with a movable hood enabled Aragung to shoot from any position in the courtyard.
        <br>
        <br>
        Aragung competed at the Northern Lights Regional, the Australia Regional, the Hawaii Regional and the St Louis Championship in the Galileo Division.
        <br>
        <br>
        Team 3132 won the Australia Regional in 2016.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`