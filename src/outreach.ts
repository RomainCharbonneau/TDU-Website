import './style.css'
import { createNavbar } from './navbar'
import { createFooter } from './footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <b><h1> Outreach Initiatives </h1></b>
    <br>
    <p> A list of all of the awesome things we have done to help the community around the world.
    <br>
    <br>
    <hr>
    <br>
  </div>
  <div class="grid">
    <button class="dropbtn">
      <a href="/2025-daringyal.html" target="_self">
      <h3> 24 Hours of STEM </h3>
      <img src="/assets/images/outreach/24hours.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2024-baakan" target="_self">
      <h3> California Australian Robotics Equipment Service </h3>
      <img src="/assets/images/outreach/cares.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2023-nurung" target="_self">
      <h3> Duel Down Under (DDU) </h3>
      <img src="/assets/images/outreach/ddu.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2022" target="_self">
      <h3> FIRST Ladies </h3>
      <img src="/assets/images/outreach/ladies.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2020-2021" target="_self">
      <h3> Fisherman's Institute </h3>
      <img src="/assets/images/outreach/fishermans.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2019-maramara" target="_self">
      <h3> 2019: Here For You </h3>
      <img src="/assets/images/outreach/h4u.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2018-blackburn" target="_self">
      <h3> Lightning Lessons </h3>
      <img src="/assets/images/outreach/lightning.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2017-coolamon" target="_self">
      <h3> Lightning Service </h3>
      <img src="/assets/images/outreach/lightning.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2016-aragung" target="_self">
      <h3> Mentors Without Borders </h3>
      <img src="/assets/images/outreach/mwb.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2015-kosciuszko" target="_self">
      <h3> Microbank </h3>
      <img src="/assets/images/outreach/microbank.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2014-maloo" target="_self">
      <h3> RoboCamps China </h3>
      <img src="/assets/images/outreach/robocamps.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2013-ikara" target="_self">
      <h3> RoboCamps </h3>
      <img src="/assets/images/outreach/robocamps.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2012-mate" target="_self">
      <h3> Robots Around The World </h3>
      <img src="/assets/images/outreach/ratw.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2011-tnak" target="_self">
      <h3> Smile Like Drake Foundation </h3>
      <img src="/assets/images/outreach/smd.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2010-wombot" target="_self">
      <h3> The Compass Alliance </h3>
      <img src="/assets/images/outreach/tca.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/2010-wombot" target="_self">
      <h3> The Koala Foundation </h3>
      <img src="/assets/images/outreach/koala.jpg" class="robots">
      </a>
    </button>
  </div>
  <br>
  <br>
</section>

    ${createFooter()}
`
