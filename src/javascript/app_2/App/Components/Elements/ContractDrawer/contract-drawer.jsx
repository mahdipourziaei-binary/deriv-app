import classNames            from 'classnames';
import PropTypes             from 'prop-types';
import React, { Component }  from 'react';
import { withRouter }        from 'react-router';
import Localize              from 'App/Components/Elements/localize.jsx';
import { Icon, IconBack }    from 'Assets/Common';
import routes                from 'Constants/routes';
import ProfitLossCardContent from 'Modules/Reports/Components/profit-loss-card-content.jsx';
import MarketSymbolIconRow   from 'Modules/Reports/Components/market-symbol-icon-row.jsx';
import ContractCardBody      from './contract-card-body.jsx';
import ContractCardFooter    from './contract-card-footer.jsx';
import ContractCardHeader    from './contract-card-header.jsx';
import ContractCard          from './contract-card.jsx';
import ContractAudit         from '../ContractAudit/contract-audit.jsx';
import Money                 from '../money.jsx';

class ContractDrawer extends Component {
    getBodyContent () {
        const {
            buy_price,
            currency,
            payout,
            profit,
        } = this.props.contract_info;

        return (
            <ContractCard contract_info={this.props.contract_info}>
                <ContractCardHeader>
                    <MarketSymbolIconRow
                        show_description={true}
                        payload={this.props.contract_info}
                    />
                </ContractCardHeader>
                <ContractCardBody>
                    <ProfitLossCardContent
                        pl_value={+profit}
                        payout={+payout}
                        currency={currency}
                    />
                </ContractCardBody>
                <ContractCardFooter>
                    <div className='purchase-price-container'>
                        <Localize str='Purchase Price:' />&nbsp;
                        <span className='purchase-price' >
                            <Money
                                currency={currency}
                                amount={buy_price}
                            />
                        </span>
                    </div>
                    <ContractAudit contract={this.props.contract_info} />
                </ContractCardFooter>
            </ContractCard>
        );
    }

    render() {
        const body_content = this.getBodyContent();
        return (
            <div className={classNames('contract-drawer', {})}>
                <div
                    className='contract-drawer__heading'
                    onClick={() => this.props.history.push(routes.reports)}
                >
                    <Icon icon={IconBack} />
                    <h2><Localize str={this.props.heading || 'Contract'} /></h2>
                </div>
                <div className='contract-drawer__body'>{body_content}</div>
            </div>
        );
    }
}

ContractDrawer.propTypes = {
    contract_info: PropTypes.object,
    heading      : PropTypes.string,
};

export default withRouter(ContractDrawer);
