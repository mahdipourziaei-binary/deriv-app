import { Button } from '@deriv/components';
import { localize } from '@deriv/translations';
import PropTypes from 'prop-types';
import React from 'react';
import { redirectToLogin } from '_common/base/login';

const LoginButton = ({ className }) => (
    <Button
        id='dt_login_button'
        className={className}
        has_effect
        text={localize('Log in')}
        onClick={redirectToLogin}
        tertiary
    />
);

LoginButton.propTypes = {
    className: PropTypes.string,
};

export { LoginButton };
