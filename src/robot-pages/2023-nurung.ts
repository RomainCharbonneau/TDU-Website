import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2023nurung.jpg" class="robot-photo">
    <b><h1> 2023: Nurung </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Designed for the 2023 "Charged Up" season of the FIRST Robotics Competition, Nurung is a robot that excels in versatility, capable of scoring low, medium, and high with both types of game pieces.
    <br>
    <br>
    Nurung takes its name from the local First Nations dialect, meaning "arm", and is the centerpiece of the robot. The arm is powered by an impressive gearbox that allows it to rotate a full 270 degrees despite weighing approximately 7kg. This gearbox is particularly important when the arm extends to its full length for scoring in the high position.
    <br>
    <br>
    The gearbox for the arm boasts a remarkable ratio of 400:1 reduction, helping decrease cycle times by being able to move game pieces on either side of the robot.
    <br>
    <br>
    In addition to its scoring capabilities, Nurung is also an exceptional defense bot, thanks to its standard 6-wheel drive base and four 400W motors, which provide a total of 1600W of drive base power.
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`