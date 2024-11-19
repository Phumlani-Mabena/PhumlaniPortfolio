const navLinks = document.querySelectorAll('header nav a');
const logoLink = document.querySelector('.logo');
const sections = document.querySelectorAll('section');

const activePage = () => {
    const header = document.querySelector('header');
    const barsBox = document.querySelector('.bars-box');

    header.classList.remove('active');
    setTimeout(() => {
        header.classList.add('active');
    }, 1100);

    navLinks.forEach(link => {
        link.classList.remove('active');
    });

    barsBox.classList.remove('active');
    setTimeout(() => {
        barsBox.classList.add('active');
    }, 1100);

    sections.forEach(section => {
        section.classList.remove('active');
    });
}

navLinks.forEach((link, idx) => {
    link.addEventListener('click', () => {
        if (!link.classList.contains('active')) {
            activePage();

            link.classList.add('active');

            setTimeout(() => {
                sections[idx].classList.add('active');
            }, 1100);
        }
    });
});

logoLink.addEventListener('click', () => {
    if (!navLinks[0].classList.contains('active')) {
        activePage();

        navLinks[0].classList.add('active');

        setTimeout(() => {
            sections[0].classList.add('active');
        }, 1100);
    }
});

const resumeBtns = document.querySelectorAll('.resume-btn')

resumeBtns.forEach((btn, idx) => {
    btn.addEventListener('click', () => {
        const resumeDetails = document.querySelectorAll('.resume-detail');

        resumeBtns.forEach(btn => {
            btn.classList.remove('active');
        });
        btn.classList.add('active');

        resumeDetails.forEach(detail => {
            detail.classList.remove('active');
        });
        resumeDetails[idx].classList.add('active');
    });
});

document.getElementById("downloadButton").addEventListener("click", function () {
    var a = document.createElement("a");
    a.href = "Imgs/PhumlaniMabena Cv.pdf";
    a.download = "PhumlaniMabena Cv.pdf";
    a.click();
  });



document.addEventListener("DOMContentLoaded", function () {
    const text = "Hi. I’m Sinethemba Vitsha.\nA Full Stack Developer.";
    const typewriterText = document.getElementById("typewriter-text");
    let index = 0;

    function typeWriter() {
        if (index < text.length) {
            if (text.charAt(index) === "\n") {
                typewriterText.innerHTML += "<br>";
            } else {
                typewriterText.innerHTML += text.charAt(index);
            }
            index++;
            setTimeout(typeWriter, 100); // Adjust speed here (lower value = faster typing)
        }
    }
});
typeWriter();
