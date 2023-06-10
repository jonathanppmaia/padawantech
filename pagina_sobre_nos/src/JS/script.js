const arrayNossosValores = [
    {
      titulo: "Inovação", 
      texto: "Estamos sempre buscando novas ideias e soluções para criar tecnologia que transforme a vida das pessoas."
    },
    {
      titulo: "Colaboração",
      texto: "Sabemos que trabalhar em equipe é essencial para alcançar nossos objetivos e, por isso, incentivamos a colaboração em todos os níveis da empresa."
    },
    {
      titulo: "Paixão",
      texto: "Acreditamos que a paixão pelo que fazemos é a chave para o sucesso. Por isso, procuramos contratar pessoas que estejam comprometidas e entusiasmadas com a tecnologia"
    },
    {
        titulo: "Responsabilidade",
        texto: "Assumimos a responsabilidade pelo nosso trabalho e pelos impactos que nossas soluções podem ter na sociedade. Trabalhamos de forma ética e responsável em todas as nossas atividades"
      },
      {
        titulo: "Aprendizado",
        texto: "Estamos sempre buscando aprender e melhorar nossas habilidades, conhecimentos e processos para oferecer soluções cada vez melhores aos nossos clientes e usuários."
      },
      {
        titulo: "Diversidade",
        texto: "Valorizamos e respeitamos a diversidade em todas as suas formas e procuramos criar um ambiente inclusivo para todos os membros da nossa equipe"
      },
      {
        titulo: "Excelência",
        texto: "Buscamos a excelência em tudo o que fazemos, desde a qualidade do código até a experiência do usuário final"
      },
  ]

for (let i = 0; i < arrayNossosValores.length; i++) {
    let article = document.createElement("article");
    article.classList.add("card-valor");
    article.innerHTML = `    
    <strong>${arrayNossosValores[i].titulo}</strong>
        <div class="text-values">                    
            <p>${arrayNossosValores[i].texto}</p>
        </div>
    `;
    let boxValor = document.querySelector('article.box-valor');    
    boxValor.appendChild(article);
    
    
}