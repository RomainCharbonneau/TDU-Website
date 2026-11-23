import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/outreach/mwb.png" class="outreach-photo">
    <br><br>
    <b><h1> Mentors Without Borders </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    <a href="https://www.facebook.com/mentorswithoutborders/" target="_blank">Mentors Without Borders Facebook</a>
    <br><br>
    Mentors Without Borders is an annual conference, which started in 2016, hosted across two days, aimed at educating 
    students/teams and sharing knowledge from mentors, both national and international, to students. The Mentors Without 
    Borders conference has hosted speakers from many different word class teams such as 971, 973 and 1678 presenting on a 
    range of topics from team management to design skills to robot concepts.
    <br><br>
    From the archives: “There are many unique challenges to working internationally, there are different languages and 
    cultures that must be successfully navigated. Founded by FRC team 3132 and FTC Team 5972, MWB allows teams who work 
    across borders to collaborate and share best practices. Additionally, MWB reduces the barriers for teams to start 
    working and collaborating internationally.
    <br><br>
    <img src="/assets/images/outreach/mwb-circle.jpg" class="robot-photo">
    <br><br>
    MWB Partner teams include FRC teams 3132 (Thunder Down Under) and 1403 (Cougar Robotics), FTC teams 3595 
    (Schrödinger’s Hat), 4251 (Cougar Robotics) and 5972 (Patronum Bots), and FLL team Project Bucephalus. If you are 
    interested in becoming a partner, email us at 
    <a href="mailto:robotmentorswithoutborders@gmail.com" target="_blank">robotmentorswithoutborders@gmail.com</a>.
    <br><br>
    Mentors without Borders is already seeing amazing success! With over a dozen partner teams now – we’re reaching 
    millions of people, mentoring hundreds of FIRST Teams, and have seen partners travel over 100,000 miles to mentor 
    others! You continued support is key to the success of this program.”
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`