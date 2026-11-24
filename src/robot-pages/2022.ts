import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2022.jpg" class="robot-photo">
    <b><h1> 2022 </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Created for the 2022 season of the FIRST robotics competition RAPID REACT presented by Boeing. It is designed around its unique shooter system, a reliable twin shooter with an adjustable shooter hood. With a vision-assisted aiming system, the robot was able to score into a large goal from multiple distances. Utilising a retractable intake system to minimise damage, and a large S-bend passthrough, large balls are able to smoothly move from the floor to the robot shooter without interference from other robots. In addition to being able to passively achieve the low climb game element of the year’s game, this robot was both versatile and efficient on the field. </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`