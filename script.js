
function morcegoMuda() {
    const morcego = document.getElementById("morceguin")
    if (morcego.src = "assets/morceguin.gif") {
        morcego.src = "assets/morcegao.gif"
    }
}

let lista = []

function morcegoMove(event) {
    const tecla = event.keyCode

    if (lista.includes(tecla)) {
        return
    } else {
        lista.push(tecla)
    }

}

function morcegoPara(event) {
    const tecla = event.keyCode

    if (lista.includes(tecla)) {
        lista = lista.filter((letra) => letra !== tecla)
    }

}


function morcego() {
    morcego = document.getElementById('morcego');
    let coin = document.getElementById('coin');
    var audio = new Audio('assets/audio.mp3');
    speed = 20, // Pixels por movimento
        limits = {
            maxWidth: window.innerWidth - morcego.offsetWidth,
            maxHeight: window.innerHeight - morcego.offsetHeight
        };

    const chr = {
        updown: function () {
            let y = parseInt(getComputedStyle(morcego).top);
            if (lista.includes(87)) { // W
                y -= speed;

            } else if (lista.includes(83)) { // S
                y += speed;
            }
            // Limita o eixo Y
            y = Math.max(0, Math.min(y, limits.maxHeight));
            return y;
        },

        leftright: function () {
            let x = parseInt(getComputedStyle(morcego).left);
            if (lista.includes(65)) { // A
                x -= speed;
                morcego.style.transform = "scaleX(1)";
            } else if (lista.includes(68)) { // D
                x += speed;
                morcego.style.transform = "scaleX(-1)";
            }
            // Limita o eixo X
            x = Math.max(0, Math.min(x, limits.maxWidth));
            return x;
        }
    };
    if (lista.includes(87) || lista.includes(83)) {
        morcego.style.top = chr.updown() + "px";
    }

    if (lista.includes(65) || lista.includes(68)) {
        morcego.style.left = chr.leftright() + "px";
    } a
}
document.addEventListener('keydown', morcegoMove);
document.addEventListener('keyup', morcegoPara);


const interval = setInterval(morcego, 15)

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
        texto.textContent = "Hey! I'm Icaro Dener, Brazillian Pixel artist, and I’ve been creating pixel art for over 6 years. I have worked on various projects, both as a freelancer and doing commissions. I enjoy designing environments and experimenting with different visual styles.";
        texto2.textContent = "I've always been passionate about this retro universe and am constantly learning to improve my techniques. I'm excited to start new projects, collaborate with other creators, and bring creative ideas to life with great attention to detail. I enjoy transforming pixels into something unique and impactful, whether for games, assets, or illustrations.";
        arts.textContent = "Arts";
        contacts.textContent = "Contacts";
        sobre2.textContent = "About Me"
        flag.src = "assets/br.png";
        idioma = "en";
    } else {
        sobre.textContent = "Sobre Mim"
        texto.textContent = "Olá! Sou Icaro Dener um pixel artist brasileiro e venho criando pixel art há mais de 6 anos, já trabalhei em diversos projetos, como freelancer e realizando comissions. gosto de criar cenários experimentando diferentes estilos visuais.";
        texto2.textContent = "Sempre fui apaixonado por esse universo retrô e estou em constante aprendizado para aprimorar minhas técnicas. Estou muito animado para começar novos projetos, colaborar com outros criadores e dar vida a ideias criativas com muito cuidado nos detalhes. Gosto de transformar pixels em algo único e impactante, seja para jogos, assets ou ilustrações. ";
        arts.textContent = "Artes";
        contacts.textContent = "Contatos";
        sobre2.textContent = "Sobre Mim"
        flag.src = "assets/eua.png";
        idioma = "pt";
    }
}
