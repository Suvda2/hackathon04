// import uuid from 'uuid';
import { useState } from 'react';
import { v4 } from 'uuid';

import styles from './index.module.css';
import Navbar from './chest/Navbar';
import About from './chest/About';
import BookItem from './chest/BookItem';

import { AiOutlineSearch } from 'react-icons/ai';

const testapi = ['https://data.internom.mn/media/images//41557.jpg', 'https://data.internom.mn/media/images//6541254441211.jpg', 'https://data.internom.mn/media/images//Harry_Potter_and_The_Goblet_of_Fire_COVER1.jpg', 'https://data.internom.mn/media/images//14994_cover-2.jpg', 'https://data.internom.mn/media/images//41557.jpg', 'https://data.internom.mn/media/images//6541254441211.jpg', 'https://data.internom.mn/media/images//Harry_Potter_and_The_Goblet_of_Fire_COVER1.jpg', 'https://data.internom.mn/media/images//14994_cover-2.jpg', 'https://data.internom.mn/media/images//41557.jpg', 'https://data.internom.mn/media/images//6541254441211.jpg', 'https://data.internom.mn/media/images//Harry_Potter_and_The_Goblet_of_Fire_COVER1.jpg', 'https://data.internom.mn/media/images//14994_cover-2.jpg'];

// const bookrent = [
//   { name: 'Freezing Order', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81uZ3a8TtBL.jpg', bestseller: true, price: 65000 },
//   { name: 'Run, Rose, Run', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81SQwBAtpWL.jpg', bestseller: true, price: 60000 },
//   { name: 'The Midnight Library', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81tCtHFtOgL.jpg', bestseller: true, price: 24000 },
//   { name: 'Dream Town', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/911hfpUcpGL.jpg', bestseller: true, price: 25000 },
//   { name: 'The Last Thing He Told Me', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/81823bTjKHL.jpg', bestseller: true, price: 25000 },
//   { name: 'Heartstopper Volume One ', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71z-KTBBTpL.jpg', bestseller: false, price: 19900 },
//   { name: 'The Subtle Art of Not Giving a F*ck', pictureUrl: 'https://images-na.ssl-images-amazon.com/images/I/71QKQ9mwV7L.jpg', bestseller: true, price: 45000 },
//   { name: 'Хатагтай Перегриний онцгой хүүхдүүд 5', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1647501244-34432380.jpg&w=400&h=500&zc=2&q=90&s=1', bestseller: false, price: 19900 },
//   { name: 'IELTS-800', pictureUrl: 'https://book.mn/timthumb.php?src=https://book.mn/uploads/products/1650369628-82391484.jpg&w=400&h=500&zc=2&q=90&s=1', bestseller: true, price: 19900 },
// ];

const buybooks = [
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
];

const rentbooks = [
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

const Index = () => {
  const [search, setSearch] = useState('');

  var buybooksfiltered = buybooks.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(/\s+/g, ' ').trim()));
  var rentbooksfiltered = rentbooks.filter((item) => item.name.toLocaleLowerCase().includes(search.toLocaleLowerCase().replace(/\s+/g, ' ').trim()));

  return (
    <div className={styles['home']}>
      <Navbar />

      <div className={styles['home__wrapper']}>
        <div className={styles['special']}>
          <div className={styles['special__wrapper']}>
            <div className={styles['special__label']}>Цахим номын худалдаа</div>

            <div className={styles['special__desc']}>Хамгийн хурдан, нэгдсэн номын систем</div>
          </div>
        </div>

        <div className={styles['search']}>
          <AiOutlineSearch /> <input placeholder='Та хайх номоо энд оруулна уу' onChange={(ev) => setSearch(ev.target.value)} />
        </div>

        <div className={styles['book']} id='newbooks'>
          <div className={styles['book__label']}>Худалдаж авах</div>

          <div className={styles['bookgenre']}>
            <div className={styles['bookgenre__item']}>
              <select>
                <option>Адал явдалт</option>

                <option>Уран зөгнөлт</option>

                <option>Хөгжил</option>

                <option>Түүх</option>

                <option>Сурах бичиг</option>

                <option>Хүүхдийн</option>
              </select>
            </div>

            <div className={styles['bookgenre__item']}>
              <select>
                <option>Монгол хэл</option>

                <option>Англи хэл</option>

                <option>Япон хэл</option>

                <option>Солонгос хэл</option>

                <option>Орос хэл</option>
              </select>
            </div>

            <div className={styles['bookgenre__item']}>
              <select>
                <option>Шинэ</option>

                <option>Хуучин</option>
              </select>
            </div>

            <div className={styles['bookgenre__item']}>
              <select>
                <option>100-500 хуудастай</option>

                <option>500-1000 хуудастай</option>
              </select>
            </div>
          </div>

          <div className={styles['book__list']}>
            {buybooksfiltered.map((item, i) => (
              <BookItem key={v4()} data={item} />
            ))}
          </div>
        </div>

        <div className={styles['book']} id='rentbooks'>
          <div className={styles['book__label']}>Түрээслэх</div>

          <div className={styles['bookgenre']}>
            <div className={styles['bookgenre__item']}>
              <select>
                <option>Адал явдалт</option>

                <option>Уран зөгнөлт</option>

                <option>Хөгжил</option>

                <option>Түүх</option>

                <option>Сурах бичиг</option>

                <option>Хүүхдийн</option>
              </select>
            </div>

            <div className={styles['bookgenre__item']}>
              <select>
                <option>Монгол хэл</option>

                <option>Англи хэл</option>

                <option>Япон хэл</option>

                <option>Солонгос хэл</option>

                <option>Орос хэл</option>
              </select>
            </div>

            <div className={styles['bookgenre__item']}>
              <select>
                <option>Шинэ</option>

                <option>Хуучин</option>
              </select>
            </div>

            <div className={styles['bookgenre__item']}>
              <select>
                <option>100-500 хуудастай</option>

                <option>500-1000 хуудастай</option>
              </select>
            </div>
          </div>

          <div className={styles['book__list']}>
            {rentbooksfiltered.map((item, i) => (
              <BookItem key={v4()} data={item} />
            ))}
          </div>
        </div>
      </div>

      <About />
    </div>
  );
};

//<div className={styles['']}></div>

export default Index;
