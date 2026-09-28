import React from 'react'
import './Setting.css'
import { Input } from '../../components/ui';

function Setting() {
    
    return (
        <main className="main-content-container">
            <div className="content-card">
                <div >
                    <ul className='setting-container'>
                        <li>Music
                            <input type="checkbox" />
                        </li>
                    </ul>
                    <ul>
                        <li>Sound
                            <input type="checkbox" />
                        </li>
                    </ul>
                    <ul>
                        <li>Change Password
                            <span>{">"}</span>
                        </li>
                    </ul>
                    <ul>
                        <li>Logout
                            <span>{">"}</span>
                        </li>
                    </ul>
                </div>
            </div>
        </main>
    );
}
export default Setting;
