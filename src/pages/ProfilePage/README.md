# Profile Page

User profile page displaying personal information, statistics, and account details.

## 🎨 Features

- **Profile Card**: User avatar, name, and edit button
- **Stats Grid**: Four stat cards showing:
  - Joined On date
  - My Referrals count
  - Trollerverse points
  - TrollerDash points
- **Personal Information Form**: Name and Email input fields with Save button

## 📁 Structure

```
ProfilePage/
├── components/
│   └── ProfileContent/
│       ├── ProfileContent.jsx    # Main profile content
│       └── ProfileContent.css
├── ProfilePage.jsx               # Page wrapper
├── ProfilePage.css
└── README.md
```

## 🎯 Color Scheme

- Background: Light purple (`#F5F3FF`)
- Profile Card: `#A78BFA` (lighter purple)
- Input fields: `#F3E8FF`
- Save button: `#7C3AED` (primary purple)
- Stat cards: White with colored icon backgrounds
  - Joined: Yellow gradient
  - Referrals: Blue gradient
  - Trollerverse: Pink gradient
  - TrollerDash: Purple gradient

## 🚀 Usage

The page is accessible via `/profile` route. This is also the default landing page of the application.