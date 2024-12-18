const moveButton = document.getElementById('moveButton');
const moveables = document.querySelectorAll('.moveable');

function moveObjectsX() {
    moveables.forEach(moveable => {
        const targetRect = moveable.getBoundingClientRect();
        moveable.style.transition = 'transform 2s ease';
        moveable.style.transform = `translateX(-50px) translateY(100px)`;
    });
}

moveButton.addEventListener('click', moveObjectsX);
