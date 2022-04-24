import { useState } from 'react';
import Link from 'next/link';

import styles from './Navbar.module.css';

import { AiOutlineUser, AiOutlineMenu, AiOutlineHome, AiOutlineHeart, AiOutlineLogout, AiOutlineBook, AiOutlineDatabase, AiOutlineClose } from 'react-icons/ai';
import { BiBookOpen } from 'react-icons/bi';
import { MdOutlineDarkMode } from 'react-icons/md';

const Navbar = () => {
  const [isNavbarOpen, setIsNavbarOpen] = useState(false);

  const toggleDark = () => {
    if (localStorage.getItem('data-theme') == null) {
      localStorage.setItem('data-theme', 'dark');
    } else {
      localStorage.setItem('data-theme', localStorage.getItem('data-theme') == 'dark' ? 'light' : 'dark');
    }
    document.documentElement.setAttribute('data-theme', localStorage.getItem('data-theme'));
  };

  return (
    <div className={styles['navbar']}>
      <div className={styles['navbar__wrapper']}>
        <div className={styles['navbar__search']}>
          <AiOutlineUser />
        </div>

        <div className={styles['navbar__logo']}>
          <BiBookOpen /> nomlog
        </div>

        <div className={styles['navmobile'] + (isNavbarOpen ? ' ' + styles['navmobile--open'] : '')}>
          <div className={styles['navmobile__wrapper']}>
            <div className={styles['navmobile__close']} onClick={() => setIsNavbarOpen(false)}>
              <AiOutlineClose />
            </div>

            <div className={styles['navmobile__quick']}>
              <Link href='/'>
                <a>
                  <div className={styles['navmobile__quick-item']}>
                    <AiOutlineHome />
                    Эхлэл
                  </div>
                </a>
              </Link>

              <Link href='/book/manage/add'>
                <a>
                  <div className={styles['navmobile__quick-item']}>
                    <AiOutlineDatabase />
                    Зар оруулах
                  </div>
                </a>
              </Link>

              <Link href='#'>
                <a>
                  <div className={styles['navmobile__quick-item']}>
                    <AiOutlineBook />
                    Миний номууд
                  </div>
                </a>
              </Link>

              <Link href='#'>
                <a>
                  <div className={styles['navmobile__quick-item']}>
                    <AiOutlineLogout />
                    Гарах
                  </div>
                </a>
              </Link>
            </div>

            <div className={styles['navmobile__logo']}>
              <BiBookOpen /> nomlog
            </div>
          </div>
        </div>

        <div className={styles['navlink']}>
          <div className={styles['navlink__item']}>
            <Link href='/'>
              <a>Эхлэл</a>
            </Link>
          </div>

          <div className={styles['navlink__item']}>
            <Link href='/#newbooks'>
              <a>Шинэ номууд</a>
            </Link>
          </div>

          <div className={styles['navlink__item']}>
            <Link href='/#rentbooks'>
              <a>Ном түрээслэх</a>
            </Link>
          </div>

          <div className={styles['navlink__item']}>
            <Link href='/book/manage/add'>
              <a>Зар нэмэх</a>
            </Link>
          </div>
        </div>

        <div className={styles['navquick']}>
          <div className={styles['navquick__item']} onClick={() => toggleDark()}>
            <MdOutlineDarkMode />
          </div>

          <div className={styles['navquick__item']}>
            <AiOutlineUser />
          </div>
        </div>

        <div className={styles['navbar__menu']} onClick={() => setIsNavbarOpen(true)}>
          <AiOutlineMenu />
        </div>
      </div>
    </div>
  );
};

//<div className={styles['']}></div>

export default Navbar;
