import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/robots/2015kosciuszko.jpg" class="robot-photo">
    <b><h1> 2015: Kosciuszko </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Kosciuszko was a mecanum drive robot featuring a single-stage elevator capable of building maximum-height tote stacks with ease. Pneumatic intake wheels enabled the robot to intake recycling containers as well as totes. Kosciuszko had two autonomous modes, one to build triple stacks and the other to retrieve recycling containers from the landfill using custom-built carbon fibre wings.
        <br>
        <br>
        Kosciuszko competed at the Australia Regional, the Hawaii Regional and at the St Louis Championship in the Tesla Division and on Einstein.
        <br>
        <br>
        Team 3132 captained the winning alliance of the Tesla Division at the St Louis Championship in 2015.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`