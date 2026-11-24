import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2010wombot.png" class="robot-photo">
    <b><h1> 2010: Wombot </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Wombot was Team 3132’s rookie robot and was designed to play the Breakaway game. It had a low profile to enable it to pass easily through the tunnels and featured an offset four-wheel drivetrain configuration. An intake-kicker mechanism allowed the robot to collect balls and make shots on the goals.
        <br>
        <br>
        Wombot competed at the Granite State Regional and at the Atlanta Championships in the Galileo Division.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`