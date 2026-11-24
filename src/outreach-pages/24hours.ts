import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/outreach/24hours.png" class="outreach-photo">
    <b><h1> 24 Hours of STEM </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    During the COVID-19 pandemic, many people and FIRST teams were not able to get much engagement 
    due to stay-at-home policies enforced by the government during that time. In order to engage those 
    who have a keen interest in things STEM related, we worked with other FRC teams and renowned presenters 
    from across the globe to engage a worldwide audience stuck at home for 24 hours around the clock.
    <br><br>
    Check out the STEM youtube channels, you can watch the streams or pick a specialist presenter.
    <br><br>
    <a href="https://www.youtube.com/channel/UCN2221P4yGz12dKyIHSF-Vg" target="_blank">24hoursOfSTEM-Energy</a>
    <br><br>
    <a href="https://www.youtube.com/channel/UCisdA0jXtr4rDkCDmQgAipw" target="_blank">24hoursOfSTEM-Mass</a>
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`