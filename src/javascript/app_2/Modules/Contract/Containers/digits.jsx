import PropTypes               from 'prop-types';
import React                   from 'react';
import { CSSTransition }       from 'react-transition-group';
import { connect }             from 'Stores/connect';
import { isDigitContract }     from 'Stores/Modules/Contract/Helpers/digits';
import { isEnded }             from 'Stores/Modules/Contract/Helpers/logic';
import { LastDigitPrediction } from '../Components/LastDigitPrediction';

const Digits = ({
    contract_info,
    digits_info,
    display_status,
    is_trade_page,
    last_digit,
}) => {
    const { barrier, contract_type } = contract_info;
    const is_digit = isDigitContract(contract_type);
    const is_ended = isEnded(contract_info);

    return (
        <CSSTransition
            in={is_digit}
            timeout={250}
            classNames={{
                enter    : 'digits--enter',
                enterDone: 'digits--enter-done',
                exit     : 'digits--exit',
            }}
            unmountOnExit
        >
            <LastDigitPrediction
                barrier={+barrier || +last_digit} // fallback to last_digit if barrier from contract_info is null
                contract_type={contract_type}
                digits_info={digits_info}
                is_ended={is_ended}
                is_trade_page={is_trade_page}
                status={display_status}
            />
        </CSSTransition>
    );
};

Digits.propTypes = {
    contract_info : PropTypes.object,
    digits_info   : PropTypes.object,
    display_status: PropTypes.string,
    is_trade_page : PropTypes.bool,
    last_digit    : PropTypes.oneOfType([
        PropTypes.number,
        PropTypes.string,
    ]),
};

export default connect(
    ({ modules }) => ({
        contract_info : modules.contract.contract_info,
        digits_info   : modules.contract.digits_info,
        display_status: modules.contract.display_status,
        last_digit    : modules.trade.last_digit,
    })
)(Digits);
