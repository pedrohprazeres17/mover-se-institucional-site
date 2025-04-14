
const About = () => {
  return (
    <div className="min-h-screen">
      <section className="pt-24 pb-12 bg-gradient-to-b from-accent/50 to-background">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold mb-8 gradient-text">Sobre o Programa SER</h1>
          <div className="prose prose-lg max-w-none">
            <p className="text-gray-600 mb-6">
              O Programa SER é uma iniciativa de formação holística voltada para universitários, 
              promovendo bem-estar, saúde física e mental por meio de atividades diversificadas. 
              O projeto visa ao desenvolvimento completo do ser humano, integrando práticas que 
              reforcem o autoconhecimento, a convivência em grupo, a promoção da saúde e o 
              desenvolvimento de virtudes, embasadas nos conceitos franciscanos.
            </p>
            <p className="text-gray-600 mb-6">
              Dentro do Programa SER, existe o Projeto Mover-se, que oportuniza diferentes 
              atividades para a descompressão, bem-estar físico e mental.
            </p>
            <p className="text-gray-600 mb-6">
              A implantação deste projeto contribui diretamente para uma cultura universitária 
              mais inclusiva, acolhedora e focada no bem-estar integral do estudante. Espera-se 
              a redução dos índices de sofrimento emocional, o fortalecimento das habilidades 
              socioemocionais, a melhoria no desempenho acadêmico e a criação de um ambiente 
              mais saudável e colaborativo. Além disso, o projeto atua como estratégia preventiva, 
              minimizando os riscos de problemas de saúde mental que impactam significativamente 
              a vida dos universitários.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
