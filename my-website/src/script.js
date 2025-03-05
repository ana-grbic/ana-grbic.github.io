function showContent(sectionId) {
    const contents = document.querySelectorAll('.content');
    contents.forEach(content => content.classList.remove('active'));

    const activeSection = document.getElementById(sectionId);
    activeSection.classList.add('active');
}