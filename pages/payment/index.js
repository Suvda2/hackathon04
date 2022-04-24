import { useState } from 'react';

import styles from './index.module.css';
import Navbar from '../chest/Navbar';
import About from '../chest/About';

import { FiSend } from 'react-icons/fi';
import { ImQrcode } from 'react-icons/im';
import { AiOutlineCreditCard } from 'react-icons/ai';

const Index = () => {
  const [paymentGenre, setPaymentGenre] = useState('paycheck');

  return (
    <div className={styles['payment']}>
      <Navbar />

      <div className={styles['payment__wrapper']}>
        <div className={styles['paylist']}>
          <div className={styles['paylist__item'] + (paymentGenre == 'paycheck' ? ' ' + styles['paylist__item--selected'] : '')} onClick={() => setPaymentGenre('paycheck')}>
            <FiSend />
            <span>Дансаар шилжүүлэх</span>
          </div>

          <div className={styles['paylist__item'] + (paymentGenre == 'qr' ? ' ' + styles['paylist__item--selected'] : '')} onClick={() => setPaymentGenre('qr')}>
            <ImQrcode />
            <span>Q-PAY төлбөр</span>
          </div>

          <div className={styles['paylist__item']}>
            <AiOutlineCreditCard />
            <span>Картаар шилжүүлэх</span>
          </div>
        </div>

        <div className={styles['payment__container']}>
          {paymentGenre == 'paycheck' && <img className={styles['payment__table']} src='/tb.png' />}
          {paymentGenre == 'qr' && <img className={styles['payment__qr']} src='/qr.png' />}
        </div>
      </div>

      <About />
    </div>
  );
};

//<div className={styles['']}></div>

export default Index;

//export const getServerSideProps = (context) => {return { props: {} };};
