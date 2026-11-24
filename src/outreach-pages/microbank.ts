import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/outreach/microbank.png" class="outreach-photo">
    <br><br>
    <b><h1> Microbank </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    We used the surplus from our team budget, along with funding from the New South Wales Government to 
    create the Microbank. Using this funding, we give teams no interest loans of up to $6,500 towards their 
    Kit of Parts. This funding allows teams to build a robot they can demonstrate to a potential sponsor, 
    allowing them to become self-funded. With the money they make, teams pay us back the initial seed funding. 
    Thus, allowing that money to be loaned out to more teams.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`