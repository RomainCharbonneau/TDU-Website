import './style.css'
import { createNavbar } from './navbar'
import { createFooter } from './footer'

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${createNavbar()}

<br><br><br><br><br>

<h1>404 - Page Not Found</h1>

<p>Oops! We couldn't find that page.</p>

<img src="${import.meta.env.BASE_URL}assets/images/nootdab.png" class="noot" alt="Noot logo">

<br><br><br><br><br><br><br><br><br><br>

    ${createFooter()}
`