/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Container, Flex, Heading, Text } from 'theme-ui';
import { FaRegLightbulb, FaUsers, FaShieldAlt, FaMobileAlt } from 'react-icons/fa'; // Ícones para recursos

const data = [
  {
    id: 1,
    icon: FaRegLightbulb,
    title: 'Inovação Constante',
    description:
      'Estamos em constante evolução para trazer as inovações mais recentes e garantir que você esteja sempre à frente.',
  },
  {
    id: 2,
    icon: FaUsers,
    title: 'Colaboração Efetiva',
    description:
      'Facilitamos a colaboração entre equipes, garantindo que múltiplos usuários possam compartilhar informações facilmente.',
  },
  {
    id: 3,
    icon: FaShieldAlt,
    title: 'Segurança de Alto Nível',
    description:
      'Seus dados estão protegidos com as mais avançadas tecnologias de segurança, permitindo que você trabalhe com tranquilidade.',
  },
  {
    id: 4,
    icon: FaMobileAlt,
    title: 'Acessibilidade Móvel',
    description:
      'Com uma interface amigável para dispositivos móveis, você pode acessar a plataforma de qualquer lugar, a qualquer momento.',
  },
];

const InteractiveFeatures = () => {
  return (
    <section id="interactive-features" sx={styles.section}>
      <Container>
        <Heading sx={styles.heading}>Explore Nossas Funcionalidades</Heading>
        <Flex sx={styles.timeline}>
          {data.map((feature, index) => (
            <Box
              key={feature.id}
              sx={styles.timelineItem}
              className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}
            >
              <Box sx={styles.timelineContent}>
                <feature.icon size={50} sx={styles.icon} />
                <Heading as="h3" sx={styles.featureTitle}>
                  {feature.title}
                </Heading>
                <Text as="p" sx={styles.featureDescription}>
                  {feature.description}
                </Text>
              </Box>
            </Box>
          ))}
        </Flex>
      </Container>
    </section>
  );
};

export default InteractiveFeatures;

const styles = {
  section: {
    pt: [6, null, 8, null, 10, 14],
    pb: [8, null, 10, null, 12, 18],
    backgroundColor: '#F9FAFC',
    textAlign: 'center',
  },
  heading: {
    fontSize: [5, null, 6],
    mb: [6, null, 8],
    color: 'heading',
  },
  timeline: {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    '&:before': {
      content: "''",
      position: 'absolute',
      top: 0,
      left: '50%',
      width: '2px',
      height: '100%',
      backgroundColor: '#00FF87', // Linha central verde neon
      transform: 'translateX(-50%)',
    },
  },
  timelineItem: {
    position: 'relative',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    mb: 5,
    '&.left': {
      justifyContent: 'flex-end',
    },
    '&.right': {
      justifyContent: 'flex-start',
    },
  },
  timelineContent: {
    position: 'relative',
    backgroundColor: '#fff',
    p: 4,
    borderRadius: '8px',
    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
    maxWidth: '500px',
    zIndex: 2,
    textAlign: 'left',
    '&:hover': {
      transform: 'scale(1.05)',
      transition: 'all 0.3s ease',
      boxShadow: '0px 8px 16px rgba(0, 0, 0, 0.15)',
    },
  },
  icon: {
    color: '#00FF87',
    mb: 3,
  },
  featureTitle: {
    fontSize: 3,
    mb: 2,
    color: 'heading',
  },
  featureDescription: {
    fontSize: 2,
    color: 'textSecondary',
  },
};
