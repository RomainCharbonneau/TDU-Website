import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/outreach/tca.png" class="outreach-photo">
    <br><br>
    <b><h1> The Compass Alliance </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    <a href="https://www.thecompassalliance.org/" target="_blank">The Compass Alliance Website</a>
    <br><br>
    The Compass Alliance was founded in the fall of 2017 by FRC 3132 in partnership with 9 teams from around the 
    world. The mission of the founding teams was to make a big impact on the FRC Community and its members. We 
    launched the website in December 2017, complete with services such as Tag Teams (virtual mentors), Call Center 
    (24/7 chat hotline), Help Hubs (open machine shops), and a Resource Repository.
    <br><br>
    The Compass Alliance is a go-to answer for running, enhancing and sustaining an FRC team. Comprising tried and 
    true methods and resources from the best-of-the-best to help teams go from good to great, from hanging on to 
    thriving, and from community involved to community essential.
    <br><br>
    Since launching, The Compass Alliance has become a valued resource in the FIRST Community, there are over 100 
    resources available and pathway "curriculum" available for 16 different topics.
    <br><br>
    As a result, FIRST contacted The Compass Alliance, and we are partnering with them to bring our pathways to 
    every FRC team around the world.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`