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
      <a href="${import.meta.env.BASE_URL}outreach/24hours" target="_self">
      <h3> 24 Hours of STEM </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/24hours.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/cares" target="_self">
      <h3> California Australian Robotics Equipment Service </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/cares.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/ddu" target="_self">
      <h3> Duel Down Under (DDU) </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/ddu.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/ladies" target="_self">
      <h3> FIRST Ladies </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/ladies.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/fishermans-institute" target="_self">
      <h3> Fisherman's Institute </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/fishermans.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/here-for-you" target="_self">
      <h3> Here For You </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/h4u.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/lightning-lessons" target="_self">
      <h3> Lightning Lessons </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/lightning.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/lightning-service" target="_self">
      <h3> Lightning Service </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/lightning.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/mentors-without-borders" target="_self">
      <h3> Mentors Without Borders </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/mwb.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/microbank" target="_self">
      <h3> Microbank </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/microbank.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/robocamps-china" target="_self">
      <h3> RoboCamps China </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/robocamps.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/robocamps" target="_self">
      <h3> RoboCamps </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/robocamps.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/robots-around-the-world" target="_self">
      <h3> Robots Around The World </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/ratw.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/smile-like-drake" target="_self">
      <h3> Smile Like Drake Foundation </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/smd.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/the-compass-alliance" target="_self">
      <h3> The Compass Alliance </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/tca.png" class="outreach">
      </a>
    </button>
    <button class="dropbtn">
      <a href="${import.meta.env.BASE_URL}outreach/the-koala-foundation" target="_self">
      <h3> The Koala Foundation </h3>
      <img src="${import.meta.env.BASE_URL}assets/images/outreach/koala.jpg" class="outreach">
      </a>
    </button>
  </div>
  <br>
  <br>
</section>

    ${createFooter()}
`
