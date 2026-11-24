import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2012mate.jpg" class="robot-photo">
    <b><h1> 2012: MATE </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> MATE And The Engineers competed in the Rebound Rumble Challenge. A dual intake allowed for the rapid collection of game pieces and the flywheel shooter was oriented perpendicular to the drivetrain to allow for easier alignment. A deployable arm lowered the bridges in preparation for the endgame.
        <br>
        <br>
        MATE competed at the Orlando Regional and at the St Louis Championships in the Curie Division.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`