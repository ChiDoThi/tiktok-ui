import classNames from 'classnames/bind';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleXmark, faMagnifyingGlass, faSpinner } from '@fortawesome/free-solid-svg-icons';

import style from './Header.module.scss';
import images from '~/assets/images';

const cx = classNames.bind(style);
console.log(images.logo);
function Header() {
    return (
        <header className={cx('wrapper')}>
            <div className={cx('inner')}>
                {/*-------------- logo---------------- */}
                <div className={cx('logo')}>
                    <img src={images.logo} alt="Tiktok" />
                </div>

                {/*-------------- search---------------- */}
                <div className={cx('search')}>
                    <input placeholder="Search accounts and videos" spellCheck={false} />
                    <button className={cx('clear')}>
                        <FontAwesomeIcon icon={faCircleXmark} />
                    </button>
                    <FontAwesomeIcon className={cx('loading')} icon={faSpinner} />
                    <button className={cx('search-btn')}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                    </button>
                </div>

                {/*-------------- actions---------------- */}
                <div className={cx('actions')}>avbbbgghg fgfghfgf</div>
            </div>
        </header>
    );
}

export default Header;
