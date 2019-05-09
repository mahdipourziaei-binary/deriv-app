import classNames            from 'classnames';
import PropTypes             from 'prop-types';
import React                 from 'react';
import ImageEvenOddDark      from 'Images/app_2/trade_explanations/img-even-odd-dark.svg';
import ImageEvenOddLight     from 'Images/app_2/trade_explanations/img-even-odd-light.svg';
import ImageHigherLowerDark  from 'Images/app_2/trade_explanations/img-higher-lower-dark.svg';
import ImageHigherLowerLight from 'Images/app_2/trade_explanations/img-higher-lower-light.svg';
import ImageMatchesDark      from 'Images/app_2/trade_explanations/img-matches-differs-dark.svg';
import ImageMatchesLight     from 'Images/app_2/trade_explanations/img-matches-differs-light.svg';
import ImageOverUnderDark    from 'Images/app_2/trade_explanations/img-over-under-dark.svg';
import ImageOverUnderLight   from 'Images/app_2/trade_explanations/img-over-under-light.svg';
import ImageRiseFallDark     from 'Images/app_2/trade_explanations/img-rise-fall-dark.svg';
import ImageRiseFallLight    from 'Images/app_2/trade_explanations/img-rise-fall-light.svg';
import ImageTouchDark        from 'Images/app_2/trade_explanations/img-touch-no-touch-dark.svg';
import ImageTouchLight       from 'Images/app_2/trade_explanations/img-touch-no-touch-light.svg';

// TODO: Replace static image svgs with themed GIFs or animated SVGs
const TradeCategoriesGIF = ({ category, className, is_dark }) => {
    let TradeTypeGIF;
    const themed_classes = classNames(className,
        {
            [`${className}--dark`] : is_dark,
            [`${className}--light`]: !is_dark,
        }
    );
    if (category) {
        switch (category) {
            case ('rise_fall' || 'rise_fall_equal'):
                TradeTypeGIF = is_dark ?
                    (<ImageRiseFallDark className={themed_classes} />)
                    :
                    (<ImageRiseFallLight className={themed_classes} />);
                break;
            case 'high_low':
                TradeTypeGIF = is_dark ?
                    (<ImageHigherLowerDark className={themed_classes} />)
                    :
                    (<ImageHigherLowerLight className={themed_classes} />);
                break;
            case 'match_diff':
                TradeTypeGIF = is_dark ?
                    (<ImageMatchesDark className={themed_classes} />)
                    :
                    (<ImageMatchesLight className={themed_classes} />);
                break;
            case 'even_odd':
                TradeTypeGIF = is_dark ?
                    (<ImageEvenOddDark className={themed_classes} />)
                    :
                    (<ImageEvenOddLight className={themed_classes} />);
                break;
            case 'over_under':
                TradeTypeGIF = is_dark ?
                    (<ImageOverUnderDark className={themed_classes} />)
                    :
                    (<ImageOverUnderLight className={themed_classes} />);
                break;
            case 'touch':
                TradeTypeGIF = is_dark ?
                    (<ImageTouchDark className={themed_classes} />)
                    :
                    (<ImageTouchLight className={themed_classes} />);
                break;
            default:
                TradeTypeGIF = null;
                break;
        }
    }
    return (
        <React.Fragment>
            {TradeTypeGIF}
        </React.Fragment>
    );
};

TradeCategoriesGIF.propTypes = {
    category : PropTypes.string,
    className: PropTypes.string,
    is_dark  : PropTypes.bool,
};

export { TradeCategoriesGIF };
