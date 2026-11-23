import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/outreach/h4u.png" class="outreach-photo">
    <br><br>
    <b><h1> Here For You (DDU) </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    We have seen time and time again how FIRST breaks down barriers and cuts across demographic groups, 
    whether it is geographic, economic, or otherwise. Hear For You works within the FIRST model and creates
    game-changers which make it easier and healthier for those suffering from mental health illnesses and 
    conditions to enjoy FIRST and get all its benefits.
    <br><br>
    We are working with FIRST to improve the event experience for every person, students, mentors, and 
    volunteers alike.
    <br><br>
    Hear For You quiet rooms can be implemented at any FIRST event. They provide a safe space that is a bit 
    more "chill" and low-key to help students decompress. Besides getting away from the acoustic and visual 
    excitement of an event, there are activities, like colouring, which have been shown to help relax even 
    the most ardent FRCer.
    <br><br>
    In 2019, both Championship events had Quiet Rooms and the use of them is expanding across the globe to 
    nearly all FIRST events.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`