let spider = document.getElementById('spider');
let container = document.getElementById('spider_container');
let image = document.getElementById('spider_image');
let ctx = spider.getContext('2d');

let dots = [];
let colors = ['#E5E4E780', '#9F9FA990', '#71717C', '#3F3F47', '#18181B30'];

const defineBubbles = () => {
    spider.width = spider.offsetWidth;
    spider.height = spider.offsetHeight;

    dots = [];
    for (let i = 0; i < 80; i++) {
        dots.push({
            x: Math.random() * spider.width,
            y: Math.random() * spider.height,
            size: Math.random() * 5,
            color: colors[Math.floor(Math.random() * colors.length)],
            imageWidth: Math.floor(Math.random() * 10 + 10)
        });
    }
}
defineBubbles();

// Drawing custom bubbles on the canvas
const drawBubbles = () => {
    dots.forEach(dot => {
        // ctx.fillStyle = dot.color;
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, 0, 0, Math.PI * 2);
        ctx.fillStyle = dot.color;
        ctx.fill();
    });
}
drawBubbles();

// Animating on mouse move on the container
container.addEventListener('mousemove', (event) => {
    resetBubbles();

    let pointer = {
        x: event.pageX - container.getBoundingClientRect().left,
        y: event.pageY - container.getBoundingClientRect().top
    };

    dots.forEach(dot => {
        let distance = Math.sqrt(((pointer.x - dot.x) ** 2) + ((pointer.y - dot.y) ** 2));

        if (distance < 250) {
            ctx.strokeStyle = dot.color;
            ctx.lineWidth = 1;

            ctx.beginPath();
            ctx.drawImage(image, (dot.x - (dot.imageWidth / 2)), (dot.y - (dot.imageWidth / 2)), dot.imageWidth, dot.imageWidth);
            ctx.moveTo(dot.x, dot.y);
            ctx.lineTo(pointer.x, pointer.y);
            ctx.stroke();
        }
    });
})

container.addEventListener('mouseout', _ => {
    resetBubbles();
})

window.addEventListener('resize', _ => {
    resetBubbles();
    defineBubbles();
})

function resetBubbles() {
    ctx.clearRect(0, 0, spider.width, spider.height);
    drawBubbles();
}