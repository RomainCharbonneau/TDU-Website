import '../style.css'
import { createNavbar } from '../navbar'
import { createFooter } from '../footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <img src="/assets/images/outreach/ratw.png" class="outreach-photo">
    <br><br>
    <b><h1> Robots Around the World </h1></b>
  </div>
</section>
<section id="robot-text">
  <div>
    <br>
    <h2> Robots Around the World </h2>
    <p>
    Robots Around the World is a program designed to bring FIRST to students from disadvantaged communities. Through 
    Robots around the world, we’ve brought FIRST to communities in the Australian outback, Navajo Nation of America, 
    and inner-city Sydney. The program has started over 200 teams.
    </p>
    <br><br>
    <h2> Robots in The Outback </h2>
Robots in the outback is a program, founded in 2016, aimed at starting and helping, with the help of overseas mentors, 
FRC teams in regional towns in rural NSW to get on their feet. Over the years, RITO has started many FRC teams and 
helped them carry-on in the following years.
    </p>
    <br>
    <br>
  </div>
</section>

    ${createFooter()}
`