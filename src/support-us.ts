import './style.css'
import { createNavbar } from './navbar'
import { createFooter } from './footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="app">
  <div>
    <br>
    <br>
    <br>
    <h1><b> Our Sponsors </b></h1>
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
    <hr>
    <br>
    <p> Sponsors are a large part of what makes our existence as a team possible. Sponsoring an FRC Team is a great way to support the next generation of engineers and scientists. If you are interested in sponsoring our team, please contact us. </p>
    <br>
    <a href="public/assets/Sponsorship_Package.pdf" download>
    <button> Download Sponsorship Package </button>
    </a>
    <br>
    <br>    
  </div>
</section>

    ${createFooter()}
`