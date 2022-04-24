import { useState } from 'react';
import Link from 'next/link';

import styles from './[id].module.css';
import Navbar from '../chest/Navbar';
import About from '../chest/About';

import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const books = [
  { id: 20311, genre: 'Гадаадын уран зохиол', name: 'Алхимич', pictureUrl: 'https://m.media-amazon.com/images/I/71CaTj9MAFL._AC_UY327_QL65_.jpg', isbn: '978-99978-5-054-8', desc: 'Андалузийн хоньчин хүү Сантъяго ам дамжин яригдсан нууцлаг эрдэнэсийг олох аялалд мордож буй тухай энэхүү зохиолд өгүүлдэг. Мөрөөдөл хүсэл нь түүнийг төсөөллөөс нь ч илүү баян болгоно гэдэгт тэр итгэж байлаа. Үнэ аялал залуу хүүд зүрх сэтгэлээ сонсох, зөн совингоо дагахын үнэ цэнийг мэдрүүлж, өөрийгөө нээх, хамгийн чухал нь хүсэл мөрөөдлөө олоход нь тусалдаг.', price: 25000 },
  { id: 20312, genre: 'Гэр бүл, хувь хүний хөгжил', name: 'Гадаадад сурах гарц', pictureUrl: 'https://d3tfpmmm736cqr.cloudfront.net/r_md_h/images/publisher/square/60ff77c9_ab9468_0.643.jpg', isbn: '978-9919-9683-1-1', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 17910 },
  { id: 20313, genre: 'Адал явдалт', name: "Harry Potter and the Philosopher's Stone", pictureUrl: 'https://i2-prod.walesonline.co.uk/incoming/article6890072.ece/ALTERNATES/s615b/hp1.jpg', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 25000 },
  { id: 20314, genre: 'Адал явдалт', name: 'Harry Potter and the Order of the Phoenix', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/91t5-Juqt9L.jpg', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 25000 },
  { id: 20315, genre: 'Уран зохиол', name: 'Манхан DUNE', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1645175895-93787951.jpg&w=400&h=500&zc=2&q=90&s=1', isbn: '978-9919-50-974-3', desc: 'Энэ бол одод хоорондын аялалд нэн чухал баялаг спайс буюу нунтгийн цор ганц эх уурхай, Арракис хэмээх цөлжсөн гаргийг хяналтдаа авах гэсэн язгууртнуудын хооронд өрнөж буй улс төрийн тэмцлийн тухай ном. Энэ бол хувь хүний шүтлэг, империализм, колоничлол, эрх мэдлийн төлөөх өрсөлдөөн, популизм зэрэг улс төрийн цогц сэдвүүд рүү гүн гүнзгий шумбах боломж. Мессиагийн дүрүүд, шашны фанатизм, соёлын империализм, бурханчлах үзэл зэрэг олон сэдвийг хөндсөн төдийгүй, чөлөөт хүсэл, хүний нийгмийн болон хувийн мөн чанар гэх мэт философийн ухагдахуунуудыг ч орхигдуулаагүй тун баялаг зохиол.', price: 26100 },
  { id: 20316, genre: 'Хувь хүний хөгжил', name: 'Баян аав, ядуу аав', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/bayan%20aav%20yaduu%20aav1-original-original.jpg&w=400&h=500&zc=2&q=90&s=1', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 19900 },
  { id: 20317, genre: 'Хувь хүний хөгжил', name: 'Геномын код тайлагч', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1647237132-76128923.jpg&w=400&h=500&zc=2&q=90&s=1', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 40000 },
  { id: 20318, genre: 'Уран зохиол', name: 'Цагаан бороо', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1647321352-73386025.jpg&w=400&h=500&zc=2&q=90&s=1', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 25000 },
  { id: 20319, genre: 'Хувь хүний хөгжил', name: 'Одоо англи үг цээжлэхгүй байхыг чинь харнаа - 2', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1556946371-75000625.jpg&w=400&h=500&zc=2&q=90&s=1', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 20000 },
  { id: 20320, genre: 'English book', name: 'Atomic Habits', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL.jpg', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 30000 },
  { id: 20321, genre: 'English book', name: 'The Flames of Hope', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71BKJ0eJ+nL.jpg', isbn: '978-99978-5-054-8', desc: 'Гадаадад сурмаар л байгаа бол хамгийн түрүүнд гадаад хэлээ л сайжруул. Хэлээ сурчихсан байхад бүх л мэдээллийг цаг тухайд нь авахын зэрэгцээ тэр бүр хүмүүсийн олж харад байдаггүй олон боломжийг олж мэдэх болно.', price: 36000 },
  { id: 20322, genre: 'English book', name: 'Freezing Order', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81uZ3a8TtBL.jpg', isbn: '9781982153281', desc: 'Following his explosive New York Times bestseller Red Notice, Bill Browder returns with another gripping thriller chronicling how he became Vladimir Putin’s number one enemy by exposing Putin’s campaign to steal and launder hundreds of billions of dollars and kill anyone who stands in his way.', price: 65000 },
  { id: 20323, genre: 'English book', name: 'Run, Rose, Run', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL.jpg', isbn: '9781668608258', desc: 'From America’s most beloved superstar and its greatest storyteller comes a thriller about a young singer-songwriter on the rise and on the run—and determined to do whatever it takes to survive.', price: 60000 },
  { id: 20324, genre: 'English book', name: 'The Midnight Library', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81tCtHFtOgL.jpg', isbn: '9783426282564', desc: 'A beguiling read, filled with warmth and humour, and a vibrant celebration of the power of books to change lives.', price: 24000 },
  { id: 20325, genre: 'English book', name: 'Dream Town', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/911hfpUcpGL.jpg', isbn: '9781529061888', desc: '1952, Los Angeles. It is New Year’s Eve and PI Aloysius Archer is dining with his friend and rising Hollywood actress Liberty Callahan when they’re approached by Eleanor Lamb, a screenwriter who would like to hire him, as she suspects someone is trying to kill her.', price: 25000 },
  { id: 20326, genre: 'English book', name: 'The Last Thing He Told Me', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81823bTjKHL.jpg', isbn: '9781668608258', desc: 'The Last Thing He Told Me is a mystery-thriller novel by Laura Dave, published May 4, 2021 by Simon & Schuster. The book became an instant #1 New York Times Bestseller and spent 44 weeks on The New York Times Best Seller list.', price: 25000 },
  { id: 20327, genre: 'English book', name: 'Heartstopper Volume One ', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71z-KTBBTpL.jpg', isbn: '9781529061888', desc: 'The instant #1 New York Times bestselling mystery and Reese Witherspoon Book Club pick that’s captivated more than a million readers about a woman searching for the truth about her husband’s disappearance…at any cost.', price: 19900 },
  { id: 20328, genre: 'English book', name: 'The Subtle Art of Not Giving a F*ck', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg', isbn: '9781982153281', desc: 'Enjoy a great reading experience when you buy the Kindle edition of this book. Learn more about Great on Kindle, available in select categories.', price: 45000 },
  { id: 20329, genre: 'English book', name: 'Хатагтай Перегриний онцгой хүүхдүүд 5', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1647501244-34432380.jpg&w=400&h=500&zc=2&q=90&s=1', isbn: '9781501171345', desc: "If you're having trouble changing your habits, the problem isn't you. The problem is your system. Bad habits repeat themselves again and again not because you don't want to change, but because you have the wrong system for change. You do not rise to the level of your goals. You fall to the level of your systems. Here, you'll get a proven system that can take you to new heights.", price: 19900 },
  { id: 20330, genre: 'English book', name: 'IELTS-800', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1650369628-82391484.jpg&w=400&h=500&zc=2&q=90&s=1', isbn: '9781501171345', desc: '-Үгийг төрөл бүрээр цээжлэхэд зориулсан  дуудлага, монгол төсөөтэй үг, жишээ өгүүлбэр, сонирхолтой зурагтай, Бүх түвшний нийт 100000 гаруй үгсийн сантай', price: 19900 },
];

const Read = (props) => {
  const [counter, setCounter] = useState(0);
  const [bookGenre, setBookGenre] = useState('paper');

  const book = books.find((item) => item.id == props['id']);

  return (
    <div className={styles['read']}>
      <Navbar />

      <div className={styles['read__wrapper']}>
        <div className={styles['boqinfo']}>
          <div className={styles['preview']}>
            <img src={book['pictureUrl']} />
          </div>

          <div className={styles['qinfo']}>
            <div className={styles['qinfo__genre']}>{book['genre']}</div>

            <div className={styles['qinfo__title']}>{book['name']}</div>

            <div className={styles['qinfo__item']}>
              <span className={styles['qinfo__label']}>ISBN:</span> {book['isbn']}
            </div>

            <div className={styles['qinfo__desc']}>{book['desc']}</div>
          </div>
        </div>

        <div className={styles['payment']}>
          <div className={styles['payment__label']}>Төлбөр тооцоо</div>

          <div className={styles['payment__wrapper']}>
            <div className={styles['painfo']}>
              <div className={styles['painfo__item']}>
                <div className={styles['painfo__label']}>
                  Үндсэн үнэ: <span className={styles['painfo__price']}>₮{book['price'].toLocaleString()}</span>
                </div>
              </div>

              <div className={styles['painfo__item']}>
                <div className={styles['painfo__label']}>Номын төрөл</div>

                <div className={styles['painfo__genre']}>
                  <div onClick={() => setBookGenre('paper')} className={styles['painfo__genre-item'] + (bookGenre == 'paper' ? ' ' + styles['painfo__genre-item--selected'] : '')}>
                    Хэвлэмэл
                  </div>

                  <div onClick={() => setBookGenre('internet')} className={styles['painfo__genre-item'] + (bookGenre == 'internet' ? ' ' + styles['painfo__genre-item--selected'] : '')}>
                    Цахим ном
                  </div>
                </div>
              </div>

              <div className={styles['painfo__item']}>
                <div className={styles['painfo__label']}>Авах тоо ширхэг</div>

                <div className={styles['painfo__cnt']}>
                  <AiOutlineMinus onClick={() => setCounter((prev) => (prev > 0 ? prev - 1 : 0))} />

                  <span className={styles['painfo__cnt-value']}>{counter}</span>

                  <AiOutlinePlus onClick={() => setCounter((prev) => prev + 1)} />
                </div>
              </div>

              <div className={styles['painfo__button']}>
                <Link href='/payment'>
                  <a>Баталгаажуулах</a>
                </Link>
              </div>
            </div>

            <div className={styles['paview']}>
              <div className={styles['paview__label']}>Төлбөрийн хуудас</div>

              <div className={styles['paview__item']}>
                Үндсэн үнэ: <span className={styles['paview__value']}>₮{book['price'].toLocaleString()}</span>
              </div>

              <div className={styles['paview__item']}>
                Тоо ширхэг: <span className={styles['paview__value']}>{counter}ш</span>
              </div>

              <div className={styles['paview__item']}>
                Үндсэн үнэ: <span className={styles['paview__value']}>₮{(book['price'] * counter).toLocaleString()}</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <About />
    </div>
  );
};

//<div className={styles['']}></div>

export default Read;

export const getServerSideProps = (context) => {
  return { props: { id: context['query']?.['id'] } };
};
