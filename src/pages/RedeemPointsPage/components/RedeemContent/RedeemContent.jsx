import React from 'react';
import { Button } from '../../../../components/ui';
import './RedeemContent.css';
import wallet from "../../../../assets/images/wallet.png";

function RedeemContent() {

    return (
        <main className="main-content-container">
            <div className="content-card">

                <div className="airdrop-illustration">
                    <img src={wallet} alt="" />
                </div>

                <div className="airdrop-content">
                    <h2 className="airdrop-title">An Airdrop will be coming soon.</h2>
                    <p className="airdrop-subtitle">Stay tuned!</p>

                    <Button
                        variant="primary"
                        size="large"
                        className="connect-wallet-btn"
                    >
                        Connect Wallet
                    </Button>

                </div>

            </div>
        </main>
    );

}

export default RedeemContent;