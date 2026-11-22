import './style.css'
import { createNavbar } from './navbar'
import { createFooter } from './footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}


<section id="app" class="page-section">
  <div>
    <br><br><br>
    <img src="/assets/images/teamLogos/teamLogo.svg" class="team" alt="3132 Logo">
    <br><br>

</section>
<section id="app" class="alternate-section">

    <br><h1><b> Our Sponsors </b></h1>

    <div class="sponsor-grid">
    <a href="https://www.cocacolaep.com/" target="_blank">
    <img src="/assets/images/sponsors/Coca-cola.svg" class="sponsors" alt="Coca-cola logo"></a>

    <a href="https://www.dow.com/en-us" target="_blank">
    <img src="/assets/images/sponsors/Dow.svg" class="sponsors" alt="Dow logo"></a>

    <a href="https://www.ford.com.au/" target="_blank">
    <img src="/assets/images/sponsors/Ford.svg" class="sponsors" alt="Ford logo"></a>

    <a href="https://www.google.com/" target="_blank">
    <img src="/assets/images/sponsors/Google.svg" class="sponsors" alt="Google logo"></a>

    <a href="https://grilld.com.au/" target="_blank">
    <img src="/assets/images/sponsors/Grilld.png" class="sponsors" alt="Grill'd logo"></a>

    <a href="https://www.mq.edu.au/" target="_blank">
    <img src="/assets/images/sponsors/MacquarieUni.svg" class="sponsors" alt="Maquarie University logo"></a>

    <a href="https://novelis.com/" target="_blank">
    <img src="/assets/images/sponsors/Novelis.png" class="sponsors" alt="Novelis logo"></a>

    <a href="https://www.rockwellautomation.com/" target="_blank">
    <img src="/assets/images/sponsors/Rockwell.svg" class="sponsors" alt="Rockwell Automation logo"></a>
    </div>

    <br><br>
    
  </div>
</section>

<section id="about-us" class="page-section">
  <div id="docs">
    <h1><b> About us </b></h1>
    <p> FIRST Team 3132 is Australia’s first FRC team based in Macquarie University, Sydney, New South Wales. We’re a team all about diversity,
    inclusion, inspiration, impact and innovation. Our motto, ‘Innovate. Improve. Inspire the World.’ guides us as we strive towards our
    mission of ‘STEM for Everyone, Everywhere’. </p>
  </div>
  <img src="/assets/images/team2026.webp" class="team-photo" alt="Team photo">
</section>

<section id="about-FIRST" class="alternate-section">
 <div id="docs">
    <h1><b> About FIRST </b></h1>
    <p> FIRST‘s mission is to inspire young people to be science and technology leaders through exciting mentor-based programs in a competition setting.
    These competitions build science, engineering and technology skills, inspire innovation, and foster well-rounded life capabilities including self-confidence,
    communication, and leadership. </p><br><br>
    <a href="//www.firstinspires.org/" target="_blank">
    <button id="FIRST-buttons">FIRST International</button>
    <a href="//www.firstaustralia.org/" target="_blank">
    <button id="FIRST-buttons">FIRST Australia</button>
  </a>
 </div>
 <img src="/assets/images/FIRST_Logo.svg" class="logo" alt="FIRST logo">
 </section>
 <br>

<section id="app">
  <div>
    <h1><b> Acknowledgement of Country </b></h1>
    <br>
    <p> Team 3132 acknowledges the Traditional Custodians of the land where the team is situated,
    the Wallumattagal Clan of the <br> Dharug Nation - whose cultures and customs have nurtured, and
    continue to nurture, the land since time immemorial. </p>
    <br><br><br>
  </div>
</section>

    ${createFooter()} 
`