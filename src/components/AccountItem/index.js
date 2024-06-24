import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem() {
    return (
        <div className={cx('wrapper')}>
            <img
                className={cx('avatar')}
                src="https://p16-sign-sg.tiktokcdn.com/aweme/100x100/tos-alisg-avt-0068/4b85df94ddbc913a995d4d721e417580.jpeg?lk3s=a5d48078&nonce=23987&refresh_token=3a971429e1f75e7e33842a17fe0d4043&x-expires=1719414000&x-signature=gly5pZX78Ewec3MCmtkhyiMoy%2F8%3D&shp=a5d48078&shcp=81f88b70"
                alt="HHoa"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>Nguyen Van A</span>
                    <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />
                </h4>
                <span className={cx('username')}>@nguyenvana</span>
            </div>
        </div>
    );
}

export default AccountItem;
