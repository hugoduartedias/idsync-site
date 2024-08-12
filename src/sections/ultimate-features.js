/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container } from 'theme-ui';
import SectionHeading from 'components/section-heading';
import Feature from 'components/cards/feature';

import icon1 from 'assets/images/features/1.png';
import icon2 from 'assets/images/features/2.png';
import icon3 from 'assets/images/features/3.png';
import icon4 from 'assets/images/features/4.png';
import icon5 from 'assets/images/features/5.png';
import icon6 from 'assets/images/features/6.png';

const data = [
  {
    id: 1,
    icon: icon2,
    path: '#!',
    title: 'Centralização de Identidade: ',
    description: `Acesse todas as suas informações em um único lugar."`,
  },
  {
    id: 2,
    icon: icon3,
    path: '#!',
    title: 'Autenticação Segura: ',
    description: `Use métodos de autenticação avançados para proteger seus dados.`,
  },
  {
    id: 3,
    icon: icon4,
    path: '#!',
    title: 'Integração Multiplataforma:',
    description: `Conecte-se facilmente a diversos serviços e aplicativos.`,
  },
  {
    id: 4,
    icon: icon6,
    path: '#!',
    title: 'Soluções para Fintechs',
    description: `Nosso avançado sistema de verificação facial e de documentos garante a autenticidade de clientes em processos de onboarding e transações financeiras, protegendo sua fintech de fraudes.`,
  },
  // {
  //   id: 5,
  //   icon: icon5,
  //   path: '#!',
  //   title: 'Customer Support',
  //   description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  // },
  // {
  //   id: 6,
  //   icon: icon6,
  //   path: '#!',
  //   title: 'Integrated with Shopify',
  //   description: `We’re driven beyond just finishing projects. We want to find smart solutions.`,
  // },
];

const UltimateFeatures = () => {
  return (
    <section id="features" sx={styles.section}>
      <Container>
        <SectionHeading
          sx={styles.heading}
          slogan="Nossas Funcionalidades"
          title="As melhores soluções pra você"
        />
        <Box sx={styles.grid}>
          {data?.map((item) => (
            <Feature className="feature-item" key={item.id} data={item} />
          ))}
        </Box>
      </Container>
    </section>
  );
};

export default UltimateFeatures;

const styles = {
  section: {
    backgroundColor: '#F9FBFD',
    pt: [8, null, null, 12, null, 10],
    pb: [9, null, null, 12, 16, 18],
  },
  heading: {
    marginBottom: [7, null, null, 8, 7],
    p: {
      maxWidth: 490,
      margin: ['10px auto 0'],
    },
  },
  grid: {
    gap: [6, null, 0],
    display: 'grid',
    maxWidth: 1080,
    margin: '0 auto',
    gridTemplateColumns: [
      'repeat(1, 1fr)',
      null,
      null,
      'repeat(2, 1fr)',
      'repeat(3, 1fr)',
    ],
    borderTop: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
    borderLeft: (t) => [null, null, `1px solid ${t.colors.borderColor}`],
  },
};
