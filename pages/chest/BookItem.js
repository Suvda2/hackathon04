import Link from 'next/link';

import styles from './BookItem.module.css';

//[{ genre: '', name: '', pictureUrl: '', isbn: '', desc: '', price: }
const BookItem = (props) => {
  return (
    <Link href={'/book/' + props['data']?.['id']}>
      <a>
        <div className={styles['book__item']}>
          <img className={styles['book__cover']} src={props['data']?.['pictureUrl']} />

          <div className={styles['book__title']}>{props['data']?.['name']}</div>

          <div className={styles['book__price']}>₮{props['data']?.['price'].toLocaleString()}</div>
        </div>
      </a>
    </Link>
  );
};

//<div className={styles['']}></div>

export default BookItem;
