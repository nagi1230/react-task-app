import React, { useState } from 'react';
import { Button, Input } from '../../../../components/ui';
import './ProfileContent.css';

const ProfileContent = () => {

    const [loadMoreData, setLoadMoreData] = useState(5);

    const [formError, setFormError] = useState({
        name: "",
        email: ""
    });

    const [formData, setFormData] = useState({
        name: "",
        email: ""
    });

    const handleValidations = () => {

        if (formData.name === "" || formData.email === "") {
            setFormError({
                name: "This is a required field",
                email: "This is a required field"
            });

        } else if (!formData.email.includes("@") && !formData.email.includes(".")) {
            setFormError({
                name: "",
                email: "Please enter valid email"
            })
        }

        else {
            setFormError({
                name: "",
                email: ""
            });
        }
    }

    const handleSubmitForm = () => {
        handleValidations();
    };

    const users = [
        "John", "Jane", "Alice", "Bob", "David",
        "Emma", "Chris", "Sophia", "Liam", "Olivia",
    ];

    return (
        <main className="main-content-container">

            <h2 className="page-title">My Profile</h2>
             
            <div className="content-card">
                <div className="profile-card">
                    <div className="profile-user-info">
                        <div className="profile-avatar">
                            <img src="https://i.pravatar.cc/80?img=12" alt="Cameron Williamson" />
                        </div>
                        <div className="profile-user-details">
                            <h3 className="profile-username">Cameron</h3>
                            <p className="profile-fullname">Williamson</p>
                        </div>
                    </div>

                    <Button variant="light" size="small" icon="✏️">
                        Edit
                    </Button>

                </div>
                <div className="stats-grid">
                    <div className="stat-card">
                        <div className="stat-icon joined">🤝</div>
                        <div className="stat-details">
                            <p className="stat-label">Joined On</p>
                            <p className="stat-value">DD/MM/YYYY</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon referrals">👥</div>
                        <div className="stat-details">
                            <p className="stat-label">My Referrals</p>
                            <p className="stat-value">10</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon trollerverse">🎮</div>
                        <div className="stat-details">
                            <p className="stat-label">Trollerverse</p>
                            <p className="stat-value">16500 Points</p>
                        </div>
                    </div>

                    <div className="stat-card">
                        <div className="stat-icon trollerdash">🏃</div>
                        <div className="stat-details">
                            <p className="stat-label">TrollerDash</p>
                            <p className="stat-value">10500 Points</p>
                        </div>
                    </div>
                </div>

                <div className="personal-info-section">
                    <h3 className="section-title">Personal Information</h3>

                    <div className="form-grid">
                        <Input
                            label="Name"
                            placeholder="Enter Here"
                            onChange={(e) => {
                                const value = e.target.value
                                setFormData({ ...formData, name: e.target.value })
                                if (!value) {
                                    setFormError({
                                        name: "This is a required field",
                                    })
                                } else {
                                    setFormError({
                                        name: "",
                                    })
                                }
                            }}
                            error={formError.name}
                        />
                        <Input
                            label="Email"
                            type="email"
                            placeholder="Enter Here"
                            onChange={(e) => {
                                const value = e.target.value;
                                const validateEmail = value.includes("@") && value.includes(".");
                                setFormData({ ...formData, email: e.target.value });

                                if (!value) {
                                    setFormError({
                                        email: "This is a required field",
                                    })

                                } else if (!validateEmail) {
                                    setFormError({
                                        email: "Please enter valid email",
                                    })
                                }
                                else {
                                    setFormError({
                                        name: "",
                                    })
                                }
                            }}
                            error={formError.email}
                        />
                    </div>

                    <Button variant="primary" size="medium" onClick={handleSubmitForm}>
                        Save
                    </Button>

                    <br />
                    <br />
                    
                {/* <p>
                    {
                        users?.slice(0, loadMoreData)?.map((user, index) => (
                            <p key={index}>{user}</p>
                        ))
                    }
                    <button onClick={() => setLoadMoreData(loadMoreData + 5)}>Load More</button>
                </p> */}

                </div>
            </div>
        </main>
    );
};

export default ProfileContent;