import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/robots/2018blackburn.jpg" class="robot-photo">
    <b><h1> 2018: Blackburn </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> Blackburn was a two-stage elevator robot built for the Power Up challenge. A sprung compliant wheel intake collected and aligned power cubes which could then be outtaked forwards or sideways. Pivoting hooks enabled the robot to climb independently, or a carbon-fibre wing could be deployed for a fast, safe buddy climb.
        <br>
        <br>
        Video of buddy climb:
    </p>
    <br>
    <iframe 
    class="video"
    src="https://www.youtube.com/embed/Fv7YyLtGeOQ?si=WtaosDTJB4JqHwhq" 
    title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen>
    </iframe>
    <br><br>
    <p> Blackburn competed at the Southern Cross Regional, the South Pacific Regional, the Silicon Valley Regional and the Houston Championship in the Carver Division. </p>
    <br>
  </div>
</section>

    ${createFooter()}
`