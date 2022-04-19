import React from 'react';

const SocialLogin = () => {
    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
                <p className='mt-3 px-2'>or</p>
                <div style={{ height: '1px' }} className="bg-secondary w-50"></div>
            </div>
            <div>
                <button className='bg-primary text-white w-50'>Google Sign In</button>
            </div>
        </div>
    );
};

export default SocialLogin;