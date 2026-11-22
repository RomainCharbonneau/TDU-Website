import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/robots/2024baakan.png" class="robot-photo">
    <b><h1> 2024: Baakan </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Our robot “Baakan” was designed for the 2024 FIRST Robotics Competition game CRESCENDO, presented by Haas.
        <br>
        <br>
        Baakan had demonstrated its size in speed, being designed to be small, mobile, agile, and versatile, hence its name, utilised by the First Nations dialect to mean “ankle biter”. Baakan was capable of swiftly travelling across the field within seconds.
        <br>
        <br>
        It was also able to score in a low goal, or “amp”, and a high goal, or “speaker”, with the ability to climb on a larger structure denoted the “stage”.
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`
