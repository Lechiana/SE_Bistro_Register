import React from 'react';

const Step = ( { step = 1 }) => {
    return (

        <div className="container mx-auto pt-8">
            <ul class="w-full steps mx-auto">
                <div className="step step-primary">
                    <img src="/images/track1.png" alt="" className="mx-auto mt-6" />
                    <h3>เช็ควัตถุดิบ</h3>
                </div>
                
                <div className={`step ${step >= 2 ? 'step-primary': ''}`}>
                    <img src="/images/track2.png" alt="" className="mx-auto mt-6" />
                    <h3>ทำอาหาร</h3>
                </div>
                <div className={`step ${step >= 3 ? 'step-primary': ''}`}>
                    <img src="/images/track3.png" alt="" className="mx-auto mt-6" />
                    <h3>จัดส่ง</h3>
                </div>
                <div className={`step ${step >= 4 ? 'step-primary': ''}`}>
                    <img src="/images/track4.png" alt="" className="mx-auto mt-6" />
                    <h3>สำเร็จ</h3>
                </div>
            </ul>
        </div>
    );
};

export default Step;
