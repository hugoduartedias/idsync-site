/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Heading, Text, Flex } from 'theme-ui';

const data = [
  {
    id: 1,
    number: '01',
    title: 'Escalabilidade com Dados',
    description:
      'Escale a sua operação com a gestão inteligente de dados em grande escala, automatizando validações de identidade de clientes, fornecedores, parceiros e transações, enquanto mantém o compliance para regulamentações como PLD/CFT.',
  },
  {
    id: 2,
    number: '02',
    title: 'Visão Completa',
    description:
      'Alcance uma visão completa da jornada do usuário na sua empresa, eliminando silos de dados entre áreas que interagem com o cliente, proporcionando uma experiência integrada para o usuário.',
  },
  {
    id: 3,
    number: '03',
    title: 'Autonomia e Agilidade',
    description:
      'Autonomia e agilidade ao alcance do seu time, com uma solução low code para gerenciar os fluxos de validação de identidade conforme suas necessidades.',
  },
];

const Clients = () => {
  return (
    <section id="clients" sx={styles.section}>
      <Container>
        <div sx={styles.heading}>
        <Heading sx={styles.title}>
          Benefícios da Nossa Plataforma
        </Heading>
        </div>
        <Flex sx={styles.grid}>
          {data.map((item) => (
            <Box key={item.id} sx={styles.card}>
              <Text as="span" sx={styles.number}>
                {item.number}
              </Text>
              <Heading as="h3" sx={styles.cardTitle}>
                {item.title}
              </Heading>
              <Text as="p" sx={styles.cardDescription}>
                {item.description}
              </Text>
            </Box>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default Clients;

const styles = {
  section: {
    pt: [8, null, null, null, 10, 14],
    pb: [6, null, null, null, 10, 14],
  },
  heading: {
    gridColumn: [null, null, null, '1/3', 'unset'],
    maxWidth: [null, null, null, 420, 'none'],
    mx: [null, null, null, 'auto', 'unset'],
    textAlign: ['center', null, null, null],
    h2: {
      color: 'heading',
      fontFamily: 'headingAlt',
      fontSize: [4, null, 6, 8, null, null, 11],
      fontWeight: 500,
      lineHeight: [1.33, null, 1.4, 1.53],
      letterSpacing: ['-0.5px', null, null, '-1px'],
      textAlign: ['center', null, null, null, null],
      span: {
        backgroundSize: 'cover',
        px: 2,
      },
      mb: 4,
    },
    p: {
      color: 'textSecondary',
      fontSize: ['13px', null, null, 2, '15px', 2],
      lineHeight: [1.86, null, null, null, 1.86, 2.25],
      maxWidth: 470,
      m: [null, null, null, '20px auto 0', '15px 0 0', null, 'unset'],
      textAlign: ['center', null, null, null, 'left'],
    },
  },
  grid: {
    display: 'grid',
    gridTemplateColumns: ['repeat(1, 1fr)', 'repeat(3, 1fr)'],
    gap: [4, null, 5],
  },
  card: {
    bg: 'white',
    p: [3, null, 4],
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    borderRadius: '8px',
    textAlign: 'center',
  },
  number: {
    display: 'block',
    fontSize: [5, null, 6],
    fontWeight: 'bold',
    color: '#000', // Cor roxa similar à do print
    mb: 3,
  },
  cardTitle: {
    fontSize: [3, null, 4],
    mb: 2,
    color: 'heading',
  },
  cardDescription: {
    fontSize: [1, null, 2],
    color: 'textSecondary',
  },
};
