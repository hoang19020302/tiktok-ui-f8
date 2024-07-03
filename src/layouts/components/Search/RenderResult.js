import { memo } from 'react';
import PropTypes from 'prop-types';
import AccountItem from '~/components/AccountItem';

function RenderResult({ searchResult, handleHideResult }) {
    return (
        <div>
            {searchResult.map((result) => (
                <AccountItem key={result.id} data={result} onClick={handleHideResult} />
            ))}
        </div>
    );
}

RenderResult.propTypes = {
    searchResult: PropTypes.array.isRequired,
    handleHideResult: PropTypes.func.isRequired,
};

export default memo(RenderResult);
