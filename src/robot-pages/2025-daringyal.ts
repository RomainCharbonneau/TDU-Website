import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2025daringyal.JPG" class="robot-photo">
    <b><h1> 2025: Daringyal </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Our robot “Daringyal” was designed for the 2025 FIRST Robotics Competition season REEFSCAPE, presented by Haas. It gets its name from the distinct shape of our climber, resembling the barbed tail of a stingray. Daringyal means stingray in the Dharug language.
        <br>
        <br>
        Daringyal was a quick and precise robot, being able to traverse the field with ease and capable of scoring coral in all four levels in the large structure placed in the center of the alliance side denoted the “reef”. It was also able to remove the large balls on the reef denoted “algae”, and climb on the cage hanging off the large structure at the center of the field, namely, the “barge”.
    <br>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`
