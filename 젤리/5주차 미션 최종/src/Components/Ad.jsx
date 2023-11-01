import React, { useState } from 'react';
import { ReactComponent as Banner } from '../Img/Banner.svg';

export default function Ad(props) {
    const [isCheck, setCheck] = useState(true);

    return (
        <div>
            <button
                onClick={() => {
                    setCheck((e) => !e);
                }}
            >
                {isCheck ? '광고 안 보기' : '광고 보기'}
            </button>
            {isCheck && <Banner />}
        </div>
    );
}

