function diaEnviarEmail (){

    var hoje = new Date();

    var diaDaSemana = hoje.getDay();

    if (diaDaSemana === 2){
        return true;
    } else {
        return false;
    }
}

const listaClientes = [
    {"nomeCliente": "Elen Bomfim", "emailCliente": "elen@exemplo.com", "recebeEmailMarketing": true}, 
    {"nomeCliente": "Ana Maria Almeida", "emailCliente": "ana@exemplo.com", "recebeEmailMarketing": false},
    {"nomeCliente": "Pedro Alencar", "emailCliente": "'pedro@exemplo.com'", "recebeEmailMarketing": true},
    {"nomeCliente": "Enzo Cabral", "emailCliente": "enzo@exemplo.com", "recebeEmailMarketing": false},
    {"nomeCliente": "Diana Bomfim", "emailCliente": "diana@exemplo.com", "recebeEmailMarketing": true},
    {"nomeCliente": "Vivian Augustinho", "emailCliente": "vivian@exemplo.com", "recebeEmailMarketing": false},
    {"nomeCliente": "Erick Gomes", "emailCliente": "erick@exemplo.com", "recebeEmailMarketing": true},
    {"nomeCliente": "Nicolas Sampaio", "emailCliente": "nicolas@exemplo.com", "recebeEmailMarketing": false},
    {"nomeCliente": "Iran Wesley", "recebeEmailMarketing": true}
];

function bodyEmail(cliente) {

    var mensagem =  `Prezado ${cliente.nomeCliente},

    Espero que este e-mail o encontre bem. Estamos entusiasmados em compartilhar as últimas novidades e os veículos mais vendidos em nossa concessionária.

    1. Novos Lançamentos:
    Dê as boas-vindas aos mais recentes modelos que acabamos de receber. De elegantes carros compactos a SUVs espaçosos, nossa seleção foi cuidadosamente atualizada para atender às suas necessidades e preferências. Descubra características inovadoras, designs modernos e desempenho excepcional.

    2. Favoritos dos Clientes:
    Queremos compartilhar os veículos que têm conquistado o coração dos nossos clientes. Esses modelos estão entre os mais vendidos, destacando-se pela confiabilidade, eficiência e tecnologia avançada. Não perca a chance de conhecer essas opções populares e experimentar a qualidade que tantos clientes já apreciaram.

    Visite-nos hoje mesmo:
    Convidamos você a visitar nossa concessionária e explorar pessoalmente esses veículos incríveis. Nossa equipe de profissionais estará à disposição para fornecer informações detalhadas, agendar test drives e ajudá-lo a encontrar a melhor opção para suas necessidades.

    Nós da CarStore estamos ansiosos para recebê-lo e tornar sua experiência automotiva ainda mais emocionante. Fique à vontade para entrar em contato conosco para mais informações ou para agendar sua visita.
  
    Atenciosamente,
 
    CarStore
    Entre em contato:
    E-mail:carstore@atendimentoaocliente.com.br
    Telefone: (11) 5555-4444"`;
    
    return mensagem;    
}

function assuntoEmail(cliente){
    var assunto = cliente.nomeCliente + " venha conferir nossas ofertas da semana!";
    return assunto;

}

function enviarEmailsClientes(cliente) {
    if (cliente.recebeEmailMarketing) {
            var corpo = bodyEmail(cliente);
            var assunto = assuntoEmail (cliente);
            var email = cliente.emailCliente;
            var envio = enviarEmail(email, assunto, corpo)
            return envio;
    }
    else {
        return {"status":"Not Sent","message":"Clientes não aceita receber comunicação de Marketing"};
    }
    
}

// Não alterar este código, a menos que haja uma boa justificativa.
const enviarEmail = (addressee, subject, body) => {
    if (!addressee) {
      return {
        status: "Error",
        message: "Um destinatário precisa ser fornecido ao enviar um e-mail.",
      };
    }
  
    if (!subject) {
      return {
        status: "Error",
        message:
          "O campo de assunto não deveria estar vazio ao enviar um e-mail.",
      };
    }
  
    if (!body) {
      return {
        status: "Error",
        message: "O corpo da mensagem precisa ser fornecido ao enviar um e-mail.",
      };
    }
  
    console.log(
    `
    De: news@carstore.com
    Para: ${addressee}
    Assunto: ${subject}
    
    ${body}
    
    CarStore - Aqui você encontra o seu carro novo
    `
    );
  
    return { status: "Sucess", message: "E-mail enviado com sucesso!" };
  };
  
  module.exports = enviarEmail;


for (i in listaClientes){
    var chamada = enviarEmailsClientes(listaClientes[i])
    console.log(`status: ${chamada.status}
    Mensagem: ${chamada.message}`)
}