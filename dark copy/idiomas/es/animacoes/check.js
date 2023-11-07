// função das partículas
const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        const particulas = [];

        // tamanho (vínculo: l-11, 12, 13) e velocidade, l-15/16
        class Particula {
            constructor(x, y, tamanho) {
                this.x = x;
                this.y = y;
                this.tamanho = tamanho;
                this.velocidadeX = Math.random() * 2 - 1;
                this.velocidadeY = Math.random() * 2 - 1;
            }

            //tamanho por canvas
            atualizar() {
                this.x += this.velocidadeX;
                this.y += this.velocidadeY;

                if (this.tamanho > 0.2) this.tamanho -= 0.1;
            }

            // estilo das partículas
            desenhar() {
                ctx.fillStyle = '#ff0211aa';
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.tamanho, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        // tamanho (entre 6 e 3 px)
        function criarParticula(x, y) {
            const tamanho = Math.random() * 6 + 5; 
            particulas.push(new Particula(x, y, tamanho));
        }

        // velocidade e efeitos de animação :w
        function animar() {
            requestAnimationFrame(animar);
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            if (particulas.length < 20) {
                criarParticula(Math.random() * canvas.width, Math.random() * canvas.height);
            }

            for (let i = 0; i < particulas.length; i++) {
                particulas[i].atualizar();
                particulas[i].desenhar();

                if (particulas[i].tamanho <= 0.2) {
                    particulas.splice(i, 1);
                    i--;
                }
            }
        }

        animar();