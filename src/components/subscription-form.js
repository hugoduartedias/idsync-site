/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex, Button } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Button sx={styles.button}>{buttonLabel ?? 'Saiba Mais'}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    input: {
      alignItems: 'left',
      flexGrow: 1,
      p: ['0 20px', null, null, null, '0 25px'],
      minHeight: [40],
      height: '40px',
      width: 'auto',
    },
  },
  button: {
    ml: [-1],
    borderRadius: '30px',
    height: '35px', // Diminui a altura do botão
    backgroundColor: '#00FF87',
    color: '#fff',
    fontSize: '16px',
    padding: '0 20px',
    transition: 'all 0.3s ease', // Transição suave para a animação
    '&:hover': {
      backgroundColor: '#00cc6a', // Cor de fundo ao passar o mouse
      transform: 'scale(1.05)', // Leve aumento no tamanho ao passar o mouse
      boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Adiciona uma sombra ao hover
    },
  },
};
