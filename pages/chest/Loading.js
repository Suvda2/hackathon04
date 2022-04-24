import styles from './Loading.module.css';

const Loading = () => {
  return (
    <div className={styles['loading']}>
      <img className={styles['loading__logo']} src='/logo.png' />
    </div>
  );
};

//<div className={styles['']}></div>

export default Loading;

//export const getServerSideProps = (context) => {return { props: {} };};
