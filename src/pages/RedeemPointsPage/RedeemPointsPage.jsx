// import React, { useState } from 'react';
// import { Button, Input } from '../../components/ui';
// import './RedeemPointsPage.css';
// import catIcon from '../../assets/images/cateIcon.png';

// const RedeemPointsPage = () => {
//     const [pointsToRedeem, setPointsToRedeem] = useState('');
//     const [tokenValue, setTokenValue] = useState('');
//     const [formError, setFormError] = useState({
//         points: "",
//         token: ""
//     });

//     const handlePointsChange = (e) => {
//         const value = e.target.value;
//         setPointsToRedeem(value);
//         // Simple conversion: 100 points = 1 token
//         setTokenValue(value ? (parseFloat(value) / 100).toFixed(2) : '');

//         // Clear error when user starts typing
//         if (value) {
//             setFormError(prev => ({ ...prev, points: "" }));
//         }
//     };

//     const handleConfirm = () => {
//         // Validation
//         if (!pointsToRedeem) {
//             setFormError(prev => ({ ...prev, points: "This is a required field" }));
//         } else {
//             setFormError(prev => ({ ...prev, points: "" }));
//             alert(`Redeeming ${pointsToRedeem} points for ${tokenValue} tokens!`);
//         }
//     };

//     return (
//         <main className="main-content-container">
//             <div className="redeem-page-content">
//                 <div className="redeem-form-section">
//                     <div className="redeem-form-card">
//                         <div className="form-section">
//                             <Input
//                                 label="Enter points to redeem"
//                                 placeholder="Enter value"
//                                 // value={pointsToRedeem}
//                                 // onChange={handlePointsChange}
//                                 // error={formError.points}
//                             />
//                         </div>

// <div className="conversion-arrow">
//     <div className="arrow-icon">↓</div>
// </div>

//                         <div className="form-section">
//                             <Input
//                                 label="Get Token"
//                                 placeholder="Show value"
//                                 // value={tokenValue}
//                                 // readOnly
//                                 // error={formError.token}
//                             />
//                         </div>

//                         <div className='confirm-button-container'>
//                             <Button variant="primary" size="medium" onClick={handleConfirm}>
//                                 Confirm
//                             </Button>
//                         </div>
//                     </div>
//                 </div>

//     <div className="cat-character-section">
//         <div className="cat-container">
//             <img src={catIcon} alt="cat-character" className="cat-image" />
//             {/* <div className="token-bubbles">
//                 <div className="token-bubble purple">K</div>
//                 <div className="token-bubble blue">S</div>
//                 <div className="token-bubble yellow">D</div>
//             </div> */}

//             <div className="initials-bubble">
//                 <div className="circle k-circle">K</div>
//                 <div className="circle s-circle">S</div>
//                 <div className="circle d-circle">D</div>
//             </div>
//         </div>
//         <div className="claw-marks"></div>
//     </div>
// </div>
//         </main>
//     );
// };

// export default RedeemPointsPage;




import React from 'react'
import { Button, Input } from '../../components/ui';
import './RedeemPointsPage.css';
import catIcon from '../../assets/images/cateIcon.png';

function RedeemPointsPage() {
    
    return (
        <main className="main-content-container">
            <div className='abc'>
                <div className='card-section'>
                    <Input
                        label="Enter points to redeem"
                        placeholder="Enter value"
                    />

                    <div className="conversion-arrow">
                        <div className="arrow-icon">↓</div>
                    </div>

                    <div className='card-section-input'>
                        <div className='card-section-input-div'>
                            <Input
                                label="Enter points to redeem"
                                placeholder="Enter value"
                            />
                            <Button variant="primary" size="medium">
                                Confirm
                            </Button>
                        </div>
                    </div>
                </div>
                <div className="cat-character-section">
                    <div className="cat-container">
                        <img src={catIcon} alt="cat-character" className="cat-image" />
                        {/* <div className="token-bubbles">
                            <div className="token-bubble purple">K</div>
                            <div className="token-bubble blue">S</div>
                            <div className="token-bubble yellow">D</div>
                        </div> */}
                        <div className="initials-bubble">
                            <div className="circle k-circle">K</div>
                            <div className="circle s-circle">S</div>
                            <div className="circle d-circle">D</div>
                        </div>
                    </div>
                    <div className="claw-marks"></div>
                </div>
            </div>

        </main>
    )
}

export default RedeemPointsPage;