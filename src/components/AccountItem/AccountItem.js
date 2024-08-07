import PropTypes from 'prop-types';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import classNames from 'classnames/bind';
import Image from '~/components/Image';
import styles from './AccountItem.module.scss';

const cx = classNames.bind(styles);

function AccountItem({ data, onClick }) {
    return (
        <Link to={`/profile/${data.nickname}`} className={cx('wrapper')} onClick={onClick}>
            <Image
                className={cx('avatar')}
                src={data.avatar}
                alt={data.last_name}
                fallback="https://fullstack.edu.vn/assets/f8-icon-lV2rGpF0.png"
            />
            <div className={cx('info')}>
                <h4 className={cx('name')}>
                    <span>{data.full_name}</span>
                    {data.tick && <FontAwesomeIcon className={cx('check')} icon={faCheckCircle} />}
                </h4>
                <span className={cx('username')}>{data.nickname}</span>
            </div>
        </Link>
    );
}

AccountItem.propTypes = {
    data: PropTypes.object.isRequired,
    onClick: PropTypes.func,
}

export default AccountItem;
