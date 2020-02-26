import { Button } from '@deriv/components';
import { localize } from '@deriv/translations';
import PropTypes from 'prop-types';
import React from 'react';
import { redirectToSignUp } from '_common/base/login';

const SignupButton = ({ className }) => (
    <Button
        id='dt_signup_button'
        className={className}
        has_effect
        text={localize('Sign up')}
        onClick={redirectToSignUp}
        primary
    />
);

SignupButton.propTypes = {
    className: PropTypes.string,
};

export { SignupButton };
