window.onload = function() {
    const canvas = document.querySelector('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas to cover the entire viewport
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const mouse = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };

    const particlesArray = [];
    const maxParticles = 100;

    const colors = ['#C42D37', '#FFA43A', '#6F638C'];

    window.addEventListener('resize', function() {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });

    window.addEventListener('mousemove', function(event) {
        mouse.x = event.clientX;
        mouse.y = event.clientY;
        for (let i = 0; i < 5; i++) {
            particlesArray.push(new Particle());
        }
    });

    window.addEventListener('touchmove', function(event) {
        mouse.x = event.touches[0].clientX;
        mouse.y = event.touches[0].clientY;
        for (let i = 0; i < 5; i++) {
            particlesArray.push(new Particle());
        }
    });

    class Particle {
        constructor() {
            this.x = mouse.x;
            this.y = mouse.y;
            this.size = Math.random() * 5 + 1;
            this.speedX = Math.random() * 3 - 1.5;
            this.speedY = Math.random() * 3 - 1.5;
            this.color = colors[Math.floor(Math.random() * colors.length)];
        }

        update() {
            this.x += this.speedX;
            this.y += this.speedY;
            if (this.size > 0.2) this.size -= 0.1;
        }

        draw() {
            ctx.fillStyle = this.color;
            ctx.beginPath();
            ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
            ctx.fill();
        }
    }

    function handleParticles() {
        for (let i = 0; i < particlesArray.length; i++) {
            particlesArray[i].update();
            particlesArray[i].draw();
            for (let j = i; j < particlesArray.length; j++) {
                const dx = particlesArray[i].x - particlesArray[j].x;
                const dy = particlesArray[i].y - particlesArray[j].y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                if (distance < 100) {
                    ctx.beginPath();
                    ctx.strokeStyle = particlesArray[i].color;
                    ctx.lineWidth = 0.2;
                    ctx.moveTo(particlesArray[i].x, particlesArray[i].y);
                    ctx.lineTo(particlesArray[j].x, particlesArray[j].y);
                    ctx.stroke();
                    ctx.closePath();
                }
            }
            if (particlesArray[i].size <= 0.3) {
                particlesArray.splice(i, 1);
                i--;
            }
        }
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        handleParticles();
        requestAnimationFrame(animate);
    }

    animate();
}

    document.addEventListener("DOMContentLoaded", function() {
        const boxes = document.querySelectorAll('.dbox');
        let prevBox = null;

        boxes.forEach(box => {
            box.addEventListener('mouseenter', () => {
                if (prevBox && prevBox !== box) {
                    gsap.to(prevBox, {
                        width: '600px',
                        duration: 2,
                        ease: 'elastic.out(1,0.3)'
                    });
                    gsap.to(prevBox.querySelector('img'), {
                        opacity: 1,
                        duration: 2,
                        ease: 'elastic.out(1,0.3)'
                    });
                    gsap.to(prevBox.querySelector('h2'), {
                        color: '#282828c3',
                        ease: 'elastic.out(1,0.3)',
                        fontSize: '2vw',
                        top: "25%"
                    });
                    gsap.to(prevBox.querySelector('p'), {
                        opacity: 0,
                        duration: 2,
                        ease: 'elastic.out(1,0.3)'
                    });
                    gsap.to(prevBox.querySelector('button'), {
                        opacity: 0,
                        duration: 2,
                        ease: 'elastic.out(1,0.3)'
                    });
                }
                gsap.to(box, {
                    width: '81%',
                    duration: 2,
                    ease: 'elastic.out(1,0.3)'
                });
                gsap.to(box.querySelector('img'), {
                    opacity: 0,
                    duration: 2,
                    ease: 'elastic.out(1,0.3)'
                });
                gsap.to(box.querySelector('h2'), {
                    color: '#000',
                    ease: 'elastic.out(1,0.3)',
                    fontSize: '4vw',
                    top: "18%"
                });
                gsap.to(box.querySelector('p'), {
                    opacity: 1,
                    duration: 2,
                    ease: 'elastic.out(1,0.3)'
                });
                gsap.to(box.querySelector('button'), {
                    opacity: 1,
                    duration: 2,
                    ease: 'elastic.out(1,0.3)'
                });
                prevBox = box;
            });
        });
    });


var tl = gsap.timeline()
tl.from(".herosection h1",{
    opacity: 0,
    duration: 5,
    scale: 0.9,
    y: -50,
    
})
tl.from(".appointment",{
    opacity: 0, 
    duration: 1,
    scale: 0.9
})
tl.from(".appointment .content h1",{
    opacity: 0, 
    duration: 1,
    y: -20,
})
tl.from(".appointment .content p",{
    opacity: 0, 
    duration: 0.5,
    y: -10,
})
tl.from(".appointment .row .text",{
    opacity: 0, 
    duration: 0.5,
    y: -10,
    // stagger: 1
})
tl.from(".appointment form",{
    opacity: 0, 
    duration: 0.5,
    y: 10,
})
tl.from(".appointment button",{
    opacity: 0, 
    duration: 0.7,
    y: -20,
})

// Video controls
gsap.registerPlugin(ScrollTrigger);
 
gsap.from(".page-p .video-div",{
    scale:0.8,
    scrollTrigger:{
        trigger:".page-p",
        scroller: "body",
        markers: false, 
        start: "top 40%",
        end: "top 25%",
        scrub:2
        }
})





