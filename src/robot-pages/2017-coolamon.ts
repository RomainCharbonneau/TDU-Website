import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2017coolamon.jpg" class="robot-photo">
    <b><h1> 2017: Coolamon </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Coolamon was designed to complete all aspects of the STEAM  WORKS challenge. Gears were loaded in at the player stations and actively placed using a pneumatic. The polycarbonate hopper expanded to hold 100+ fuel and the rapid-fire shooter gave the robot the capability to score an extra ranking point through pressure accumulation. A fast climber integrated into the intake ensured that Coolamon was always ready for takeoff. Coolamon competed at the Southern Cross Regional, the South Pacific Regional, the Hawaii Regional and the Houston Championship in the Hopper division.
        <br>
        <br>
        Team 3132 won the South Pacific Regional and the Hawaii Regional in 2017.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`