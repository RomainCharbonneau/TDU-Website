import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/outreach/smd.png" class="outreach-photo">
    <br><br>
    <b><h1> Smile Like Drake Foundation </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    Partnered with ‘Smile Like Drake’, a not-for-profit organisation designed to promote water safety, the team will 
    be developing an underwater robot to help with beach drowning emergencies. We have also created an FLL-style water 
    safety game which we have piloted at our Robocamps.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`