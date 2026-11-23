import './style.css'
import { createNavbar } from './navbar'
import { createFooter } from './footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<section id="paragraph">
  <div>
    <br><br><br>
    <b><h1> Robots </h1></b>
    <br>
    <p> A list of our robots year to year including their accomplishments.
    <br>
    <br>
    <hr>
    <br>
  </div>
  <div class="grid">
    <button class="dropbtn">
      <a href="/robots/2025-daringyal.html" target="_self">
      <h3> 2025: Daringyal </h3>
      <img src="/assets/images/robots/2025daringyal.JPG" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2024-baakan" target="_self">
      <h3> 2024: Baakan </h3>
      <img src="/assets/images/robots/2024baakan.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2023-nurung" target="_self">
      <h3> 2023: Nurung </h3>
      <img src="/assets/images/robots/2023nurung.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2022" target="_self">
      <h3> 2022 </h3>
      <img src="/assets/images/robots/2022.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2020-2021" target="_self">
      <h3> 2020/2021 </h3>
      <img src="/assets/images/robots/2020.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2019-maramara" target="_self">
      <h3> 2019: Mara Mara </h3>
      <img src="/assets/images/robots/2019maramara.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2018-blackburn" target="_self">
      <h3> 2018: Blackburn </h3>
      <img src="/assets/images/robots/2018blackburn.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2017-coolamon" target="_self">
      <h3> 2017: Coolamon </h3>
      <img src="/assets/images/robots/2017coolamon.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2016-aragung" target="_self">
      <h3> 2016: Aragung </h3>
      <img src="/assets/images/robots/2016aragung.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2015-kosciuszko" target="_self">
      <h3> 2015: Kosciuszko </h3>
      <img src="/assets/images/robots/2015kosciuszko.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2014-maloo" target="_self">
      <h3> 2014: Maloo </h3>
      <img src="/assets/images/robots/2014maloo.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2013-ikara" target="_self">
      <h3> 2013: Ikara </h3>
      <img src="/assets/images/robots/2013ikara.png" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2012-mate" target="_self">
      <h3> 2012: MATE </h3>
      <img src="/assets/images/robots/2012mate.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2011-tnak" target="_self">
      <h3> 2011: TNAK </h3>
      <img src="/assets/images/robots/2011tnak.jpg" class="robots">
      </a>
    </button>
    <button class="dropbtn">
      <a href="/robots/2010-wombot" target="_self">
      <h3> 2010: Wombot </h3>
      <img src="/assets/images/robots/2010wombot.png" class="robots">
      </a>
    </button>
  </div>
  <br>
  <br>
</section>

    ${createFooter()}
`