export function createNavbar() {
    return `
        <nav>
            <a href="${import.meta.env.BASE_URL}">Home</a>
            <a href="${import.meta.env.BASE_URL}team">The Team</a>
            <a href="${import.meta.env.BASE_URL}outreach">Outreach</a>
            <a href="${import.meta.env.BASE_URL}robots">Robots</a>
        </nav>
    `;
}