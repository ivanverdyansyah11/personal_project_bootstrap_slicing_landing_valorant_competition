AOS.init({
    once: true
});

$('.button-hamburger').on('click', function() {
    $(this).toggleClass('active')
    $('.topbar').toggleClass('active')
})

const journeyContent = document.querySelector('.journey-content');
const seasons = document.querySelectorAll('.journey-season .season');
seasons.forEach((season) => {
    season.addEventListener('click', () => {
        const buttonSeasonActive = document.querySelector('.season.active');
        buttonSeasonActive.classList.remove('active');
        season.classList.add('active');
        journeyContent.classList.add('out')
        setTimeout(() => {
            journeyContent.classList.remove('out')
            journeyContent.classList.add('in')
            setTimeout(() => {
                journeyContent.classList.remove('in')
            }, 1000)
        }, 1000)
    })
})