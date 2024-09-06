/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Box, Flex, Container, Heading, Text } from 'theme-ui';
import { rgba, textInputs } from 'polished';
import Image from 'components/image';
import SubscriptionForm from 'components/subscription-form';
import illustration from 'assets/images/banner-bg.png';
import paypal from 'assets/images/paypal.png';
import google from 'assets/images/google.png';
import dropbox from 'assets/images/dropbox.png';

const logos = [
  {
    name: 'Paypal',
    src: paypal,
  },
  {
    name: 'Google',
    src: google,
  },
  {
    name: 'Dropbox',
    src: dropbox,
  },
];

const Banner = () => {
  return (
    <Box as="section" id="home" sx={styles.section}>
      <Container>
        <Box sx={styles.contentWrapper}>
          <Box sx={styles.bannerContent}>
            <Heading as="h1">
              Identidade Digital para o Futuro
            </Heading>
            <Text as="p">
              A IdSync conecta suas informações em um único lugar, simplificando seu acesso e garantindo sua segurança.
            </Text>
            <SubscriptionForm sx={styles.subscriptionForm} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;

const styles = {
  section: {
    background: `transparent url(${illustration}) no-repeat center top / cover`,
    pt: [18, null, null, 17, null, null, 0],
    pb: [12, null, null, 12, 7, 11, 0],
  },
  contentWrapper: {
    gap: [null, null, null, null, 8, 15],
    display: ['block', null, null, null, 'grid'],
    alignItems: 'center',
    gridTemplateColumns: [null, null, null, null, '1fr 1fr', '530px 1fr'],
    minHeight: ['auto', null, null, null, '42vh', '81vh', '100vh'],
    pt: [null, null, null, 50, 0, null],
    '@media only screen and (min-width:1501px) and (max-width:1600px)': {
      pt: 14,
    },
  },
  bannerContent: {
    maxWidth: ['100%', '100%', '450px', '600px', '100%', 'none'],
    m: ['0 auto', '0 auto', '0 auto', '0 auto', 0],
    textAlign: 'left', // Alinhando o texto à esquerda em todas as resoluções
    h1: {
      fontFamily: 'headingAlt',
      fontSize: [16, null, null, 20, 24, 45, 48], // Ajustando os tamanhos de fonte para uma transição suave
      lineHeight: [1.26, null, null, 1.5, null, 1.26],
      letterSpacing: [0, null, null, null, '-1.5px'],
      color: 'textSecondary',
    },
    p: {
      fontSize: ['14px', null, null, '16px', '18px'], // Ajustando os tamanhos de fonte para a descrição
      lineHeight: [1.5, null, null, 1.7, null, 2.33],
      color: 'textSecondary',
      maxWidth: [null, null, '370px', '470px'],
      m: ['20px auto 0', null, null, null, '25px 0 0'], // Ajustando a margem para melhor alinhamento
    },
},

subscriptionForm: {
  maxWidth: ['100%', '100%', '100%', '470px', 'none'], // Ajuste de largura máxima para ser mais responsivo
  m: ['30px 0 0', null, null, '30px 0', '35px 0 0'], // Margem ajustada para alinhar à esquerda
  input: {
    backgroundColor: '#FFFFFF',
    border: '0 none',
    fontFamily: 'body',
    fontSize: [1, null, null, null, 2],
    px: [3, null, null, 5],
    boxShadow: '0px 16px 40px rgba(72, 59, 26, 0.08)',
    minHeight: [40, 50, null, null, null, 60],
    textAlign: 'left', // Garantir que o texto dentro do input seja alinhado à esquerda
    '::placeholder': {
      color: 'rgba(2, 7, 62, 0.4)',
      opacity: 1, // Compatibilidade com Firefox
    },
  },
  button: {
    fontSize: [0, 1, null, null, 2],
    minHeight: [40, 50, null, null, null, 60],
    px: ['18px', null, null, null, 6],
    textAlign: 'left', // Alinhando o botão à esquerda
  },
},

  sponsoredBy: {
    alignItems: 'center',
    justifyContent: ['center', null, null, 'flex-start'],
    maxWidth: [null, null, null, 470, 'none'],
    m: ['30px 0 0', null, null, '30px auto', '35px 0 0'],
    span: {
      fontSize: ['13px', null, null, null, 2],
      lineHeight: 2.62,
      color: rgba('#566272', 0.6),
    },
  },
  sponsor: {
    alignItems: 'center',
    figure: {
      ml: [2, null, null, null, 4, 5],
      img: {
        maxWidth: ['60px', null, null, null, '80px', '100%'],
      },
    },
  },
};
