# Instructor Components

This directory contains all the instructor-related components for the TARUMT Learning Management System, specifically for instructor profiles and dashboard functionality.

## Component Structure

### Instructor Profile Components

#### InstructorProfileHome
- **Purpose**: Main overview section for instructor profiles
- **Features**: Account information display with edit functionality, department and qualification info
- **Location**: Instructor Dashboard → "My Profile" → "Overview" tab
- **Props**: `user` - User object containing instructor information

#### InstructorRequirements
- **Purpose**: Digital signature and document submission for instructor verification
- **Features**: Canvas-based signature drawing, file upload for certificates and qualifications
- **Location**: Instructor Dashboard → "My Profile" → "Requirements" tab
- **Functionality**: 
  - Digital signature drawing on canvas
  - Document upload for certificates
  - File format validation (PDF, DOC, DOCX, JPG, JPEG, PNG)
  - Maximum file size: 10MB

#### InstructorSecurity
- **Purpose**: Security settings for instructor accounts
- **Features**: Password change modal, two-factor authentication, login notifications
- **Location**: Instructor Dashboard → "My Profile" → "Security" tab
- **Functionality**:
  - Password change with current/new/confirm fields
  - Show/hide password toggles
  - Two-factor authentication enable button
  - Login notification toggle switch

#### InstructorSettings
- **Purpose**: General settings for instructor accounts
- **Features**: Notification preferences, language selection, course-related settings
- **Location**: Instructor Dashboard → "My Profile" → "Settings" tab
- **Functionality**:
  - Email notifications toggle
  - Student progress alerts toggle
  - Course announcements toggle
  - Assessment reminders toggle
  - Language selection dropdown

## File Structure

```
frontend/src/components/instructor/
├── InstructorProfileHome.jsx   # Instructor overview
├── InstructorRequirements.jsx  # Instructor verification requirements
├── InstructorSecurity.jsx      # Instructor security settings
├── InstructorSettings.jsx      # Instructor general settings
├── index.js                    # Export file
└── README.md                   # This file
```

## Usage

### Importing Components

```jsx
import {
  InstructorProfileHome,
  InstructorRequirements,
  InstructorSecurity,
  InstructorSettings
} from '../components/instructor'
```

### Using in Instructor Dashboard

The `InstructorDashboard.jsx` page uses these components in the profile section:

```jsx
const renderTabContent = () => {
  switch (activeTab) {
    case 'dashboard':
      return <DashboardContent />
    case 'course':
      return <CourseManagement />
    case 'profile':
      return (
        <div className="profile-content">
          {profileTab === 'profile-home' && <InstructorProfileHome />}
          {profileTab === 'requirements' && <InstructorRequirements />}
          {profileTab === 'security' && <InstructorSecurity />}
          {profileTab === 'settings' && <InstructorSettings />}
        </div>
      )
    default:
      return null
  }
}
```

## Component Integration

### Profile Navigation Structure
The instructor profile section uses a two-level navigation system:

1. **Main Navigation** (InstructorDashboard):
   - Dashboard
   - Course
   - My Profile

2. **Profile Sub-Navigation** (Profile Section):
   - Overview → `InstructorProfileHome`
   - Requirements → `InstructorRequirements`
   - Security → `InstructorSecurity`
   - Settings → `InstructorSettings`

### State Management
- **Main Tab State**: `activeTab` controls dashboard, course, profile sections
- **Profile Tab State**: `profileTab` controls which profile component to display
- **Component State**: Each component manages its own internal state

## Benefits of This Structure

1. **Modularity**: Each component has a single responsibility
2. **Maintainability**: Easy to update specific functionality without affecting others
3. **Reusability**: Components can be reused in other parts of the application
4. **Instructor-focused**: Clean, focused functionality for instructor users only
5. **Cleaner Code**: InstructorDashboard is more readable and focused
6. **Easier Testing**: Individual components can be tested in isolation
7. **Better Organization**: Related functionality is grouped together

## Styling

All components use the shared CSS classes:
- `profile-content` - Main content container
- `profile-section` - Section wrapper
- `profile-field` - Form field styling
- `btn-primary`, `btn-secondary` - Button styles
- `toggle-switch` - Toggle switch styling
- `modal-overlay`, `modal-content` - Modal styling

## Key Features

- **Instructor-focused**: Components are designed specifically for instructor needs
- **State Management**: Each component manages its own local state
- **Form Handling**: Proper form validation and submission handling
- **Modal Support**: Password change modals with proper accessibility
- **File Upload**: Document upload functionality for instructor requirements
- **Digital Signature**: Canvas-based signature drawing for instructors
- **Responsive Design**: Mobile-friendly layouts and interactions

## Technical Details

### Canvas Signature Implementation
The `InstructorRequirements` component uses HTML5 Canvas for digital signatures:
- Mouse event handling for drawing
- Clear and save functionality
- Base64 data URL export for signature storage

### File Upload Handling
- File type validation
- Size limit enforcement
- Upload success feedback
- Error handling for invalid files

### Security Features
- Password visibility toggles
- Form validation
- Modal-based password change
- Toggle switches for security preferences

## Future Enhancements

Potential improvements for these components:
- Real-time signature validation
- Advanced file compression
- Enhanced security features
- Integration with external verification services
- Multi-language support expansion
- Advanced notification preferences
