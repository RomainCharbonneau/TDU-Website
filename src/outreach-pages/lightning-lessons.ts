import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/outreach/lightning.png" class="outreach-photo">
    <br><br>
    <b><h1> Lightning Lessons </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    The online formatting allowed students to learn without being present, removing the obstacles surrounding 
    transportation to and from a teaching venue. This video series has been uploaded to our youtube channel, allowing 
    students to learn and access lessons after they have ended.
    <br><br>
    <a href="https://youtu.be/88AiJWPvhyM?si=Bnk49p7NS73EPBkT" target="_blank">Gears and Belts and Chain, Oh My!</a>
    <br><br>
    <a href="https://youtu.be/wPp-v05c8Kg?si=a9ZxUraZHa1Ke69t" target="_blank">Touch It, Own It: A Deep Dive Into FRC Intakes</a>
    <br><br>
    <a href="https://youtu.be/yTYrnS0lLc8?si=PtdZzTkI-X7XjIAv" target="_blank">Practical Sensors and Control Systems</a>
    <br><br>
    <a href="https://youtu.be/kFyH5-6nPoI?si=h4SSY2YBzBkRjRjL" target="_blank">Is your team Sus(tainable)</a>
    <br><br>
    <a href="https://youtu.be/RB_wAvX0V-Q?si=rkdaX4P8-N6K92AV" target="_blank">Practical Inclusion</a>
    <br><br>
    <a href="https://youtu.be/JTUVe0Gj0OY?si=-X2QAxzFuAzPSzyo" target="_blank">Strategy 101</a>
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`