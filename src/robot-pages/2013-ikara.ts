import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2013ikara.png" class="robot-photo">
    <b><h1> 2013: Ikara </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Ikara was designed to compete in the Ultimate Ascent challenge. The robot collected frisbees from the feeder station and stored them in the hopper while traveling the field. A powerful two-wheel shooter mounted on a lead screw enabled Ikara to consistently make shots into the high goal. Ikara could also hang from the lowest bar for a bonus 10 points during the end game.
        <br>
        <br>
        Ikara competed at the Hawaii Regional and at the St Louis Championships in the Galileo Division.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`