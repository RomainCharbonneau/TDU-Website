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
    <b><h1> Lightning Service </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    Lightning Service is a service provided by TDU for other teams at various competitions and events. It 
    involves helping more junior teams with their technical issues in the pits. It has been available since 
    2015, when the earliest FRC Australian regional took place. Since, it has been helping newer teams get 
    their robots on the field and making FIRST more accessible to everyone.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`