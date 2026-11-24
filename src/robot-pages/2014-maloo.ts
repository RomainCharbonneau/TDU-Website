import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2014maloo.jpg" class="robot-photo">
    <b><h1> 2014: Maloo </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Maloo was built on the AM14U kit chassis and designed to move up and down the field at high speed. The dual intake reduced the time required to collect the exercise balls, and a powerful pneumatic catapult allowed Maloo to shoot into the high goal.
        <br>
        <br>
        Maloo competed at the Hawaii Regional in 2014.
    </p>
    <br>
    <br>
  </div>
</section>

   ${createFooter()}
`