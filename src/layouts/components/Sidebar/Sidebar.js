import { useEffect, useState } from 'react';
import classNames from 'classnames/bind';
import config from '~/config';
import Menu, { MenuItem } from './Menu';
import {
    HomeIcon,
    HomeActiveIcon,
    UserGroupIcon,
    UserGroupActiveIcon,
    LiveIcon,
    LiveActiveIcon,
} from '~/components/Icons';
import styles from './Sidebar.module.scss';
import * as userService from '~/services/userService';
import SuggestedAccounts from '~/components/SuggestedAccounts';

const cx = classNames.bind(styles);
const INIT_PAGE = 1;
const PER_PAGE = 5;

function Sidebar() {
    const [page, setPage] = useState(INIT_PAGE);
    const [isSeeAll, setIsSeeAll] = useState(false);
    const [suggestedUsers, setSuggestedUsers] = useState([]);
    console.log(suggestedUsers)
    useEffect(() => {
        const fetchApi = async () => {
            const result = await userService.getSuggested({ page, perPage: PER_PAGE });
            setSuggestedUsers((prevUsers) => [...prevUsers, ...result]);
        };
        fetchApi();
    }, [page]);

    const handleViewChange = (isSeeAll) => {
        setIsSeeAll(prevState => !prevState);
        if (isSeeAll) {
            setSuggestedUsers(prev => prev.slice(0, 5));
        } else {
            setPage(page + 1);
        }
    }

    return (
        <aside className={cx('wrapper')}>
            <Menu>
                <MenuItem title="For You" to={config.routes.home} icon={<HomeIcon />} activeIcon={<HomeActiveIcon />} />
                <MenuItem
                    title="Following"
                    to={config.routes.following}
                    icon={<UserGroupIcon />}
                    activeIcon={<UserGroupActiveIcon />}
                />
                <MenuItem title="LIVE" to={config.routes.live} icon={<LiveIcon />} activeIcon={<LiveActiveIcon />} />
            </Menu>

            <SuggestedAccounts
                label="Suggested accounts"
                data={suggestedUsers}
                isSeeAll={isSeeAll}
                onViewChange={handleViewChange}
            />
            <SuggestedAccounts label="Following accounts" data={setSuggestedUsers} />
        </aside>
    );
}

export default Sidebar;
