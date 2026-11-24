import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2011tnak.jpg" class="robot-photo">
    <b><h1> 2011: TNAK </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> That’s Not A Knife (TNAK) was built on a C-base kit chassis and designed to play the Logomotion game. The rack-and-pinion lift and multi-jointed arm were designed to hang the logo pieces on the scoring grid. The robot also featured a mini-bot capable of scoring tower points during the endgame.
        <br>
        <br>
        TNAK competed at the Hawaii Regional and at the St Louis Championships in the Galileo Division.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`