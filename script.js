// script.js

function startQuiz() {
    const quiz = `
        <h3>NASA PACE Quiz</h3>
        <p>Question 1: What does PACE stand for?</p>
        <ul>
            <li>A. Plankton, Atmosphere, Clouds, Ecosystem</li>
            <li>B. Plankton, Aerosol, Cloud, ocean Ecosystem</li>
            <li>C. Planet, Animals, Clouds, Earth</li>
        </ul>
        <p>Answer: B. Plankton, Aerosol, Cloud, ocean Ecosystem</p>
        <p>Question 2: What can aerosols affect?</p>
        <ul>
            <li>A. Weather and climate</li>
            <li>B. The color of the ocean</li>
            <li>C. The size of clouds</li>
        </ul>
        <p>Answer: A. Weather and climate</p>
    `;
    document.getElementById("quiz").innerHTML = quiz;
}
