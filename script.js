document.getElementById('spin').addEventListener('click', function() {
    let wheel = document.getElementById('wheel');
    let randomDegree = Math.floor(Math.random() * 360) + 720; // Adds extra 720 degrees for more spins
    wheel.style.transform = `rotate(${randomDegree}deg)`;
});
