# Profile Components

This directory contains all the profile-related components for the TARUMT Learning Management System, specifically for student profiles.

## Component Structure

### Student Profile Components

#### StudentProfileHome
- **Purpose**: Main overview section for student profiles
- **Features**: Account information display with edit functionality
- **Location**: Profile page → "Overview" tab (for students)

#### StudentCoursesHistory
- **Purpose**: Quick access to student courses and history
- **Features**: Navigation cards to "View My Courses" and "View My History"
- **Location**: Profile page → "My Course And History" tab (for students)

#### StudentSecurity
- **Purpose**: Security settings for student accounts
- **Features**: Password change modal, two-factor authentication toggle
- **Location**: Profile page → "Security" tab (for students)

#### StudentSettings
- **Purpose**: General settings for student accounts
- **Features**: Notification preferences, language selection, course reminders
- **Location**: Profile page → "Settings" tab (for students)

## File Structure

```
frontend/src/components/profile/
├── StudentProfileHome.jsx      # Student overview
├── StudentCoursesHistory.jsx   # Student courses/history navigation
├── StudentSecurity.jsx         # Student security settings
├── StudentSettings.jsx         # Student general settings
├── index.js                    # Export file
└── README.md                   # This file
```

## Usage

### Importing Components

```jsx
import {
  StudentProfileHome,
  StudentCoursesHistory,
  StudentSecurity,
  StudentSettings
} from '../components/profile'
```

### Using in Profile Page

The main `Profile.jsx` page now uses these components for student users:

```jsx
const renderTabContent = () => {
  if (user?.role === 'student') {
    switch (activeTab) {
      case 'overview':
        return <StudentProfileHome user={user} />
      case 'my-courses-history':
        return <StudentCoursesHistory />
      case 'security':
        return <StudentSecurity />
      case 'settings':
        return <StudentSettings />
      default:
        return <StudentProfileHome user={user} />
    }
  }
  return null
}
```

## Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Maintainability**: Easy to update specific functionality without affecting others
3. **Reusability**: Components can be reused in other parts of the application
4. **Student-focused**: Clean, focused functionality for student users only
5. **Cleaner Code**: Main Profile.jsx is now much more readable and focused
6. **Easier Testing**: Individual components can be tested in isolation
7. **Better Organization**: Related functionality is grouped together

## Styling

All components use the shared `profile.css` stylesheet located at:
`frontend/src/styles/profile.css`

The CSS includes:
- Profile layout and sidebar styling
- Form field styles
- Modal and overlay styles
- Responsive design adjustments
- Toggle switches and form controls

## Key Features

- **Student-focused**: Components are designed specifically for student needs
- **State Management**: Each component manages its own local state
- **Form Handling**: Proper form validation and submission handling
- **Modal Support**: Password change modals with proper accessibility
- **Responsive Design**: Mobile-friendly layouts and interactions
