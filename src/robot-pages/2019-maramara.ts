import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2019maramara.png" class="robot-photo">
    <b><h1> 2019: Mara Mara </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Mara Mara featured a three-stage elevator enabling it to place game pieces in the cargo ship and in the highest rocket bays. Cargo was collected using vectored intake wheels and was transferred through the robot to the carriage. The hatch mechanism was mounted to a linear slide which minimized alignment time. A robust drivetrain allowed the robot to begin the match on Level 2 and the design also featured a Level 3 climber. Mara Mara competed at the Southern Cross Regional, the South Pacific Regional and the Houston Championships in the Carver Division and on Einstein.
        <br>
        <br>
        Team 3132 won the Carver Division at the 2019 Houston Championship.
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`