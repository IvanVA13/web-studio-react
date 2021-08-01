import Spinner from 'react-loader-spinner';
import styles from './Loader.module.scss';

const Loader = () => {
  return (
    <Spinner
      className={styles.Spinner}
      type="BallTriangle"
      color="#00BFFF"
      height={80}
      width={80}
    />
  );
};

export default Loader;
