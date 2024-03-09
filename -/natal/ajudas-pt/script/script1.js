const nomeInput = document.getElementById('nomeInput');
        const textarea = document.getElementById('textarea');

        nomeInput.addEventListener('input', function() {

            const nome = nomeInput.value;

            // adicionar ao textarea
            const textoParaAdicionar = `Oi, OesKy! O nome do meu pou é '${nome}' e eu recebi um deslike. Eu queria que meu like fosse fornecido de novo..!`;

            textarea.value = textoParaAdicionar;
        });

        function validarFormulario2() {
            var campoEmail = document.getElementById("campoEmail").value.trim();
            var campoPalavras = document.getElementById("nomeInput").value.trim();
            var campoPalavras2 = document.getElementById("campoPalavras2").value.trim();
            var divErro = document.getElementById("divErro");
            divErro.innerHTML = "";
        
            // termina em "@gmail.com"?
            if (!campoEmail.toLowerCase().endsWith("@gmail.com")) {
                divErro.innerHTML += "Por favor, insira apenas emails com o formato '@gmail.com'.<br>";
            }

            var palavrasProibidas = {
                "oesky": "Não é possível digitar o meu próprio nome *_*<br>",
                "noctafly": "O Pou 'NocTaFly' está indisponível para este serviço<br>"
            };
        
            for (var palavra in palavrasProibidas) {
                if (campoPalavras.toLowerCase().includes(palavra)) {
                    divErro.innerHTML += palavrasProibidas[palavra];
                }
            }

            for (var palavra in palavrasProibidas) {
                if (campoPalavras2.toLowerCase().includes(palavra)) {
                    divErro.innerHTML += palavrasProibidas[palavra];
                }
            }
        
            // erro
            if (divErro.innerHTML !== "") {
                divErro.style.display = "block";
                return false;
            }
            
            return true;
        }
        