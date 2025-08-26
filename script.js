
function morcegoMuda() {
    const morcego = document.getElementById("morceguin")

    if (morcego.src = "assets/morceguin.gif") {
        morcego.src = "assets/morcegao.gif"
        return
    }
}
function move(event) {
    const k = event.keyCode,
        morcego = document.getElementById('morcego'),
        speed = 10, // Pixels por movimento
        limits = {
            maxWidth: window.innerWidth - morcego.offsetWidth,
            maxHeight: window.innerHeight - morcego.offsetHeight
        };

    const chr = {
        updown: function () {
            let y = parseInt(getComputedStyle(morcego).top);
            if (k === 87) { // W
                y -= speed;

            } else if (k === 83) { // S
                y += speed;
            }
            // Limita o eixo Y
            y = Math.max(0, Math.min(y, limits.maxHeight));
            return y;
        },

        leftright: function () {
            let x = parseInt(getComputedStyle(morcego).left);
            if (k === 65) { // A
                x -= speed;
                morcego.style.transform = "scaleX(1)";
            } else if (k === 68) { // D
                x += speed;
                morcego.style.transform = "scaleX(-1)";
            }
            // Limita o eixo X
            x = Math.max(0, Math.min(x, limits.maxWidth));
            return x;
        }
    };

    morcego.style.top = chr.updown() + "px";
    morcego.style.left = chr.leftright() + "px";
}

document.addEventListener('keydown', move);

let idioma = "pt";

function mudarIdioma() {
    const texto = document.getElementById("texto");
    const texto2 = document.getElementById("texto2");
    const sobre = document.getElementById("sobreMim");
    const flag = document.getElementById("flag");
    const arts = document.getElementById("arts")
    const contacts = document.getElementById("contacts")
    const sobre2 = document.getElementById("sobreMim2");
    if (idioma === "pt") {
        sobre.textContent = "About Me"
        texto.textContent = "Hello! I'm a pixel artist just starting out, but I already have a lot of experience creating sprites, backgrounds, and experimenting with different visual styles.";
        texto2.textContent = "I've always been passionate about this retro universe and am constantly learning to improve my techniques. I'm excited to start new projects, collaborate with other creators, and bring creative ideas to life with great attention to detail. I enjoy transforming pixels into something unique and impactful, whether for games, assets, or illustrations.";
        arts.textContent = "Arts";
        contacts.textContent = "Contacts";
        sobre2.textContent = "About Me"
        flag.src = "assets/br.png";
        idioma = "en";
    } else {
        sobre.textContent = "Sobre Mim"
        texto.textContent = "Olá! Sou um artista de pixel art em início de carreira, mas já trago uma experiência legal criando sprites, cenários e experimentando diferentes estilos visuais. ";
        texto2.textContent = "Sempre fui apaixonado por esse universo retrô e estou em constante aprendizado para aprimorar minhas técnicas. Estou muito animado para começar novos projetos, colaborar com outros criadores e dar vida a ideias criativas com muito cuidado nos detalhes. Gosto de transformar pixels em algo único e impactante, seja para jogos, assets ou ilustrações. ";
        arts.textContent = "Artes";
        contacts.textContent = "Contatos";
        sobre2.textContent = "Sobre Mim"
        flag.src = "assets/eua.png";
        idioma = "pt";
    }
}
