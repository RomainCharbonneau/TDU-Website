import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2020.jpg" class="robot-photo">
    <b><h1> 2020/2021 </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> This robot was designed for the 2020 season of the FIRST robotics competition, INFINITE RECHARGE. Due to the events of the COVID-19 pandemic the 2020/2021 competition was cancelled, and the robot was built and played in an unofficial 2021 competition. The robot was capable of an impressive 8-ball automated routine, scoring the high goal from the various points within the field. </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`