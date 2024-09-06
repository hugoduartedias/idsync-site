/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Button } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Accordion from 'components/accordion/accordion';

const data = [
  {
    id: 1,
    title: `01. Como posso integrar sua solução ao meu sistema atual?`,
    contents: (
      <div>
        Nossa solução foi projetada para ser facilmente integrada a qualquer sistema existente. Entre em contato conosco, e faremos a migração do seu sistema atual para a nossa plataforma, garantindo uma integração perfeita sem interrupções no seu negócio.
      </div>
    ),
  },
  {
    id: 2,
    title: `02. Quais são as melhores práticas para garantir a segurança dos dados?`,
    contents: (
      <div>
        Utilizamos as melhores práticas de segurança, incluindo criptografia de ponta a ponta e monitoramento contínuo. Além disso, oferecemos autenticação multifator para proteger seu acesso e o de seus clientes.
      </div>
    ),
  },
  {
    id: 3,
    title: `03. Como posso acompanhar o desempenho da minha solução?`,
    contents: (
      <div>
        Nossa plataforma oferece um painel de controle completo, onde você pode monitorar o desempenho em tempo real, acompanhar métricas de uso e ajustar conforme necessário para otimizar sua operação.
      </div>
    ),
  },
  {
    id: 4,
    title: `04. Posso fazer upgrade ou downgrade do meu plano?`,
    contents: (
      <div>
        Sim! Nossos planos são flexíveis, permitindo que você faça upgrades ou downgrades conforme as necessidades do seu negócio. Basta entrar em contato com nosso time de suporte para ajustar o plano.
      </div>
    ),
  },
  {
    id: 5,
    title: `05. Qual o tempo de resposta do suporte técnico?`,
    contents: (
      <div>
        Oferecemos suporte técnico 24/7 com tempo de resposta rápido. Nossa equipe está pronta para resolver qualquer problema e garantir que seu sistema funcione sem interrupções.
      </div>
    ),
  },
];

const Faq = () => {
  return (
    <section id="faq" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={{ mb: [6, null, null, 12, 17] }}
          slogan="Dúvidas Frequentes"
          title="Respostas para suas perguntas"
        />

        <Accordion items={data} />
        <Box sx={styles.loadMore}>
          <Button variant="primary" sx={styles.button}>
            Mais perguntas? Fale conosco
          </Button>
        </Box>
      </Container>
    </section>
  );
};

export default Faq;

const styles = {
  section: {
    pt: [6, null, null, null, 6, 10, 14],
    pb: [12, null, null, null, 10, 22],
    backgroundColor: '#f7f9fc', // Fundo claro e suave
  },
  loadMore: {
    paddingTop: [3, null, null, 0],
    textAlign: 'center',
  },
  button: {
    backgroundColor: '#00FF87', // Cor verde neon para o botão
    color: '#013344', // Texto escuro para contraste
    minHeight: 50,
    px: '22px',
    borderRadius: '30px', // Botão arredondado
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    ':hover': {
      backgroundColor: '#00cc6a',
      color: 'white',
    },
  },
};
