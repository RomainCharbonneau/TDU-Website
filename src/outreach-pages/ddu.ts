import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/outreach/ddu.png" class="outreach-photo">
    <br><br>
    <b><h1> Duel Down Under (DDU) </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    DDU or Duel Down Under is Australia's largest unofficial off-season event, founded by Team 3132 in 2012.
    Our team annually opens our workshop and practice field to teams and involves running, supporting, and 
    organizing the logistics of the event. We started Duel Down Under in response to the limited access to 
    events in Australia that hinders many teams from practicing and inspiring their students during the long 
    off-season.
    <br><br>
    Events like Duel Down Under play a crucial role in promoting sustainability within teams by offering newer
    members the opportunity to gain experience in a competitive environment and develop technical and 
    transferable skills. Moreover, Duel Down Under provides teams that missed official events with a chance to
    compete in a similar environment. It also enables higher-level teams to enhance their robots, addressing 
    aspects they may not have had time to complete during the build season.
    </p>
    <br><br>
    <h2> Duel Down Under 2026 </h2>
    <p>
    Date: 27-28 June
    <br>
    Venue: <a href="https://www.google.com/maps/place/Rosewood+Centre+-+Barker+College/@-33.7114759,151.102129,736m/data=!3m2!1e3!4b1!4m6!3m5!1s0x6b12a79bbc0d4a2b:0x934a9fb4712341f9!8m2!3d-33.7114759!4d151.102129!16s%2Fg%2F11c716x51h?entry=ttu&g_ep=EgoyMDI2MTExOC4xIKXMDSoASAFQAw%3D%3D"
            target="_blank">
            Rosewood Centre, 9 The Avenue, Hornsby NSW 2077
            </a>
    <br>
    Team Registration: <a href="mailto:melinda.blake@mq.edu.au" target="_blank">melinda.blake@mq.edu.au</a>
    <br>
    Volunteer Registration: <a href="https://firstaustralia.systems/volunteer/ddu-2026" target="_blank">firstaustralia.systems/volunteer/ddu-2026</a>
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`