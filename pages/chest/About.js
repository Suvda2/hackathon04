import styles from './About.module.css';

import { AiOutlineGithub } from 'react-icons/ai';
import { FaFacebookF, FaInstagram } from 'react-icons/fa';
import { BiBookOpen } from 'react-icons/bi';

const About = () => {
  return (
    <div className={styles['about']}>
      <div className={styles['about__wrapper']}>
        <div className={styles['about__top']}>
          <div className={styles['abinfo']}>
            <div className={styles['abinfo__logo']}>
              <BiBookOpen />
              Nomlog
            </div>

            <div className={styles['abinfo__desc']}>Бид номыг аль болох хамгийн хялбар аргаар хайх, бусдад зарах боломжийг олгож байна</div>

            <div className={styles['social']}>
              <div className={styles['social__item']}>
                <FaFacebookF />
              </div>

              <div className={styles['social__item']}>
                <FaInstagram />
              </div>

              <div className={styles['social__item']}>
                <AiOutlineGithub />
              </div>
            </div>
          </div>

          <div className={styles['abquick']}>
            <div className={styles['abquick__item']}>
              <div className={styles['abquick__label']}>Онцлох</div>

              <div className={styles['abquick__link']}>Заавал унших номын жагсаалт</div>

              <div className={styles['abquick__link']}>Хямдарсан номууд</div>

              <div className={styles['abquick__link']}>Bestseller номууд</div>
            </div>

            <div className={styles['abquick__item']}>
              <div className={styles['abquick__label']}>Зөвлөгөө</div>

              <div className={styles['abquick__link']}>Яаж ашиглах вэ?</div>

              <div className={styles['abquick__link']}>Ямар ном унших вэ?</div>

              <div className={styles['abquick__link']}>Хэрхэн захиалга хийх вэ?</div>
            </div>

            <div className={styles['abquick__item']}>
              <div className={styles['abquick__label']}>Холбоо барих</div>

              <div className={styles['abquick__link']}>Утас: 85654525</div>

              <div className={styles['abquick__link']}>Мэйл: samad.c4d3@gmail.com</div>
            </div>
          </div>
        </div>

        <div className={styles['about__hr']}></div>

        <div className={styles['copyright']}>
          <div className={styles['copyright__note']}>Developed by BNS</div>

          <div className={styles['copyright__desc']}>Зохиогчийн эрх хуулиар хамгаалагдсан</div>
        </div>
      </div>
    </div>
  );
};

//<div className={styles['']}></div>

export default About;
