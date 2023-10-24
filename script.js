
const nav = document.getElementById("topNav");
window.onscroll = function () {
    if (window.pageYOffset > 100) {
        nav.classList.add("sticky");
    }
    else {
        nav.classList.remove("sticky");
    }
}


const navButton = document.querySelector('button[aria-expanded]');

function toggleNav({ target }) {
    const expanded = target.getAttribute('aria-expanded') === 'true' || false;
    navButton.setAttribute('aria-expanded', !expanded);
}

navButton.addEventListener('click', toggleNav);




const projects = [
    {
        name: 'Student Portal',
        imageURL: './images/portal.jpg',
        link: 'https://fullstack.instructure.com/courses/696',
    },
    {
        name: 'Calendar Clone',
        imageURL: './images/calendar.jpg',
        link: 'https://wonderful-raindrop-0d23f3.netlify.app/',
    },
    {
        name: 'Code Editor',
        imageURL: './images/editor.jpg',
        link: 'https://onecompiler.com/html'
    }
]

const app = document.getElementById('app');

projects.forEach(project => {
    const title = project.name;
    const imgURL = project.imageURL

    const projectEl = document.createElement('a');
    projectEl.classList.add('project');
    projectEl.href = project.link;
    projectEl.target = '_blank';

    projectEl.innerHTML = `
        <img src="${imgURL}" alt="${title}"/>
		<p>
			${title}
		</p>
    `;

    app.appendChild(projectEl);
});
