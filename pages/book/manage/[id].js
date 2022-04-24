import { useState } from 'react';

import styles from './[id].module.css';
import Navbar from '../../chest/Navbar';
import BookItem from '../../chest/BookItem';
import About from '../../chest/About';

import { AiOutlinePicture } from 'react-icons/ai';

const Id = (props) => {
  const [name, setName] = useState();
  const [price, setPrice] = useState();

  return (
    <div className={styles['bmanage']}>
      <Navbar />

      <div className={styles['bmanage__wrapper']}>
        <div className={styles['bmanage__left']}>
          <div className={styles['bmanage__header']}>Номын {props['type'] == 'edit' ? 'засварлах' : 'нэмэх'}</div>

          <div className={styles['bmanage__item']}>
            <div className={styles['bmanage__label']}>Номын нэр*</div>

            <div className={styles['bmanage__input']}>
              <input placeholder='Номын нэрийг энд оруулна уу' onChange={(prev) => setName(prev.target.value)} />
            </div>
          </div>

          <div className={styles['bmanage__item']}>
            <div className={styles['bmanage__label']}>Номын зураг*</div>

            <div className={styles['bmanage__pinput']}>
              <AiOutlinePicture />
              <input type='file' />
            </div>
          </div>

          <div className={styles['bmanage__item']}>
            <div className={styles['bmanage__label']}>Номын төрөл*</div>

            <div className={styles['bmanage__select']}>
              <select>
                <option>Адалт явдалт</option>
                <option>Зөгнөлт</option>
                <option>Аймшгийн</option>
              </select>
            </div>
          </div>

          <div className={styles['bmanage__item']}>
            <div className={styles['bmanage__label']}>Нэмэлт мэдээлэл*</div>

            <div className={styles['bmanage__textarea']}>
              <textarea />
            </div>
          </div>

          <div className={styles['bmanage__item']}>
            <div className={styles['bmanage__label']}>Үнэ*</div>

            <div className={styles['bmanage__input']}>
              <input placeholder='Номын нэрийг энд оруулна уу' onChange={(prev) => setPrice(prev.target.value)} />
            </div>
          </div>

          <div className={styles['bmanage__button']}>Хадгалах</div>
        </div>

        <div className={styles['bmanage__preview']}>
          <BookItem data={{ name: name || 'The Midnight Library', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81tCtHFtOgL.jpg', bestseller: true, price: price || 24000 }} />
        </div>
      </div>

      <About />
    </div>
  );
};

//<div className={styles['']}></div>

export default Id;

export const getServerSideProps = (context) => {
  if (context['query']?.['id'] != 'edit' && context['query']?.['id'] != 'add') return { redirect: { destination: '/404' } };
  return { props: { type: context['query']?.['id'] } };
};
