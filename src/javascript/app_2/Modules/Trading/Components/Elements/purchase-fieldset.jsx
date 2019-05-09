import classNames     from 'classnames';
import React          from 'react';
import PropTypes      from 'prop-types';
// import { localize }   from '_common/localize';
// import { PopConfirm } from 'App/Components/Elements/PopConfirm';
import Tooltip        from 'App/Components/Elements/tooltip.jsx';
import Fieldset       from 'App/Components/Form/fieldset.jsx';
import ContractInfo   from 'Modules/Trading/Components/Form/Purchase/contract-info.jsx';
// import PurchaseLock   from 'Modules/Trading/Components/Form/Purchase/PurchaseLock';
import PurchaseButton from 'Modules/Trading/Components/Elements/purchase-button.jsx';

class PurchaseFieldset extends React.PureComponent {
    state = {
        show_tooltip: false,
        should_fade : false,
    }

    componentDidMount() {
        this.setState({ should_fade: true });
    }

    onMouseEnter = () => this.setState({ show_tooltip: true });
    onMouseLeave = () => this.setState({ show_tooltip: false });

    render() {
        const {
            basis,
            currency,
            // index,
            info,
            is_contract_mode,
            is_disabled,
            is_high_low,
            is_loading,
            is_proposal_error,
            // is_purchase_confirm_on,
            // is_purchase_locked,
            onClickPurchase,
            onHoverPurchase,
            // togglePurchaseLock,
            type,
        } = this.props;

        const purchase_button = (
            <PurchaseButton
                currency={currency}
                info={info}
                is_contract_mode={is_contract_mode}
                is_disabled={is_disabled}
                is_high_low={is_high_low}
                is_loading={is_loading}
                onClickPurchase={onClickPurchase}
                should_fade={this.state.should_fade}
                type={type}
            />
        );
        
        return (
            <Fieldset
                className='trade-container__fieldset purchase-container__option'
            >
                {/* {(is_purchase_locked && index === 0) && */}
                {/* <PurchaseLock onClick={togglePurchaseLock} /> */}
                {/* } */}
                <React.Fragment>
                    <ContractInfo
                        basis={basis}
                        currency={currency}
                        proposal_info={info}
                        has_increased={info.has_increased}
                        is_loading={is_loading}
                        should_fade={this.state.should_fade}
                        is_visible={!is_contract_mode}
                    />
                    <div
                        className={classNames(
                            'btn-purchase__shadow-wrapper', {
                                'btn-purchase__shadow-wrapper--disabled': (is_proposal_error || is_disabled),
                            },
                        )}
                        onMouseEnter={() => {
                            if (!is_disabled) {
                                onHoverPurchase(true, type);
                            }
                            this.onMouseEnter();
                        }}
                        onMouseLeave={() => {
                            if (!is_disabled) {
                                onHoverPurchase(false);
                            }
                            this.onMouseLeave();
                        }}
                    >
                        <div className='btn-purchase__box-shadow' />
                        {(is_proposal_error && this.state.show_tooltip) &&
                        <Tooltip
                            alignment='left'
                            className='tooltip--error-secondary'
                            message={info.message}
                        />
                        }
                        {
                            // is_purchase_confirm_on ?
                            //     <PopConfirm
                            //         alignment='left'
                            //         cancel_text={localize('Cancel')}
                            //         confirm_text={localize('Purchase')}
                            //         message={localize('Are you sure you want to purchase this contract?')}
                            //     >
                            //         {purchase_button}
                            //     </PopConfirm>
                            //     :
                            purchase_button
                        }
                    </div>
                </React.Fragment>
            </Fieldset>
        );
    }
}

PurchaseFieldset.propTypes = {
    basis            : PropTypes.string,
    currency         : PropTypes.string,
    // index            : PropTypes.number,
    info             : PropTypes.object,
    is_contract_mode : PropTypes.bool,
    is_disabled      : PropTypes.bool,
    is_high_low      : PropTypes.bool,
    is_loading       : PropTypes.bool,
    is_proposal_error: PropTypes.bool,
    // is_purchase_confirm_on: PropTypes.bool,
    // is_purchase_locked    : PropTypes.bool,
    onClickPurchase  : PropTypes.func,
    onHoverPurchase  : PropTypes.func,
    // togglePurchaseLock    : PropTypes.func,
    type             : PropTypes.string,
};

export default PurchaseFieldset;
