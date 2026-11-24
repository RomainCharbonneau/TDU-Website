import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/outreach/koala.jpg" class="outreach-photo">
    <br><br>
    <b><h1> The Koala Foundation </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <p> 
    When Team 5593's lab was flooded during the 2018 off season, we knew we wanted to do something to help them through 
    the difficult time. We decided to create a set of apparel items based around our popular koala giveaways, with all 
    proceeds going directly to Team 5593. When our entire home state was declared to be in drought, we knew we needed to 
    help again, so we needed to launch our second Koala Foundation appeal. This time with water-themed apparel. Based on 
    the success of these campaigns, we launched The Koala Foundation Etsy Store, enabling anyone to buy Koala Foundation 
    apparel at any time. For the month of March, for Endometriosis Awareness Month, all proceeds went to Endometriosis 
    Australia, Endometriosis is an illness near and dear to us, it is a painful chronic condition that impacts 1 in 10 
    women, including multiple 3132 members. To this date, The Koala Foundation has raised thousands of dollars for 
    charity.
    <br><br>
    <img src="${import.meta.env.BASE_URL}assets/images/outreach/tkf-cup.jpg" class="outreach-photo">
    <br><br>
    Following the devastating Australian bushfires that have been ravaging the country for months, a FIRST Robotic 
    Competition team from California knew they wanted to help. ⁠The team worked with 21 other teams internationally to 
    contribute designs, all of which are dedicated to Australia. The team have already sold over 400 items and raised over 
    $2.5K for the Australian Red Cross.⁠ ⁠When we spoke to the team they said - “When the bushfires hit, and some of our 
    friends were in path of the fires, we knew we wanted to do something to help. Not just for the financial contribution, 
    but also to let them know we might be competitors on the field, but we're always family off of it.”⁠ ⁠If you are 
    interested in donating to a charity of your choice, please email sellers@teespring.com⁠

    Find out more about FIRST Robotics here:⁠⠀ 
    <a href="https://firstinspires.org/" target="_blank">FIRST Inspires</a>
    <a href="https://www.instagram.com/first_official_/" target="_blank">@firstofficial</a>
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`