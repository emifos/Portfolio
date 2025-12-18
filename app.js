/* Scroll-Arrow*/
/*Used this article for inspiration and guidance: https://developer.mozilla.org/en-US/docs/Web/API/IntersectionObserver/IntersectionObserver */
document.addEventListener('DOMContentLoaded', () => {
    const arrow = document.querySelector(".scroll-arrow")
    if (!arrow) return

    const sections = document.querySelectorAll("section")
    const lastSection = sections[sections.length - 1]

    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    arrow.classList.add("up")
                } else {
                    arrow.classList.remove("up")
                }
            })
        },
        { threshold: 0.2,}
    )
    observer.observe(lastSection)
})
