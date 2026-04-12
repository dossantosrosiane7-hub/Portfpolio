const formulario=document.querySelector('#formulario');

function validarFormulario(event) {
     event.preventDefault();
 
const nome = document.querySelector('#nome').value;
const email = document.querySelector('#email').value;
const msg = document.querySelector('#msg').value;

if (nome === ""|| email === "" || msg === "") {
          alert("Por favor, preenche todos os campos antes de enviar.");
    } else {
          alert(`Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`);
        formulario.reset();
     }
}
 
formulario.addEventListener('submit', validarFormulario);

    const btnTema = document.querySelector('#btn-tema');
    const body = document.body;

        function alternarTema() {
       body.classList.toggle('dark-theme');

       //Altera o texto do botão conforme o tema
        if (body.classList.contains('dark-theme')) {
            btnTema.innerText = "☀";
            } else {
                btnTema.innerText = "🌙";
            }
        }
        btnTema.addEventListener('click', alternarTema);

        


                 
              
 

















   