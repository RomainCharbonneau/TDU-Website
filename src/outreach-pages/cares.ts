import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/outreach/cares.png" class="outreach-photo">
    <br><br>
    <b><h1> California Australian Robotics Equipment Service </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    Many Australian teams struggle with paying high registration fees and shipping of robotics parts overseas,
    Some robotics teams in America have easy access to Commercially Off The Shelf components that are legal for
    FRC and are able to easily transition to newer parts, they often abandon parts that would be high in demand
    for Australian Teams. To combat this problem, we are partnering with teams in California to ship their 
    pre-loved equipment here. With shipping donated by Rockwell Automation, and storage donated by Macquarie 
    University, we will be able to provide this equipment free of charge to teams who would be otherwise unable
    to afford it.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`