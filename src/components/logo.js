/** @jsxRuntime classic */
/** @jsx jsx */
import {  jsx } from 'theme-ui';
import { Link } from 'components/link';
import LogoSvg from 'components/icons/logo';

export default function Logo({ isSticky, footer, ...props }) {
  return (
    <Link path="/" sx={styles.logo} {...props}>
      <img src='/logo.png' width={100}/>
      {/* <LogoSvg /> */}
    </Link>
  );
}
const styles = {
  logo: {
    alignItems: 'center',
    cursor: 'pointer',
    display: 'inline-flex',
    maxWidth: [null, null, null, 185, null, 'none'],
    svg: {
      height: 'auto',
      width: [128, null, '100%'],
    },
  },
};
