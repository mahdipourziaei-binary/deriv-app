import PropTypes   from 'prop-types';
import React       from 'react';
import { connect } from 'Stores/connect';

const ContractLink = ({
    contract_id,
    children,
    className,
    openContract,
}) => (
    <a
        className={className}
        href='javascript:;'
        onClick={() => openContract(contract_id)}
    >
        {children}
    </a>
);

ContractLink.propTypes = {
    children   : PropTypes.node,
    className  : PropTypes.string,
    contract_id: PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
    onMount: PropTypes.func,
};

export default connect(
    ({ modules }) => ({
        openContract: modules.contract.onMount,
    }),
)(ContractLink);
