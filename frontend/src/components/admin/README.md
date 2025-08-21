# Admin Components

This directory contains all the admin-related components for the TARUMT Learning Management System.

## Components Overview

### AdminDashboardHome
- **Purpose**: Main dashboard with statistics and recent activity
- **Features**: Statistics cards, activity feed, welcome message
- **Location**: `/admin-dashboard` (default tab)

### AdminApproveInstructor
- **Purpose**: Manage instructor approval applications
- **Features**: Filter by status/qualification, applications table, approve/reject actions
- **Location**: `/admin-dashboard` → "Approve Instructor with Qualification" tab

### AdminInstructorCRUD
- **Purpose**: Full CRUD operations for instructor accounts
- **Features**: Search, filters, bulk actions, pagination, edit/suspend/delete actions
- **Location**: `/admin-dashboard` → "Instructor Account CRUD" tab

### AdminProfile
- **Purpose**: Admin profile management
- **Features**: Editable name, admin settings, access level management
- **Location**: `/admin-dashboard` → "My Profile" tab

## SuperAdmin Component

### SuperAdminDashboard
- **Purpose**: Manage admin accounts (SuperAdmin only)
- **Features**: 
  - Admin account statistics
  - Search and filter admin accounts
  - Manage access levels (Full, Limited, Read-only)
  - Account status management (Active, Inactive, Suspended)
  - CRUD operations for admin accounts
- **Location**: `/superadmin-dashboard`
- **Access**: SuperAdmin role only

## File Structure

```
frontend/src/components/admin/
├── AdminDashboardHome.jsx      # Dashboard home
├── AdminApproveInstructor.jsx  # Instructor approval
├── AdminInstructorCRUD.jsx     # Instructor management
├── AdminProfile.jsx            # Admin profile
├── index.js                    # Export file
└── README.md                   # This file
```

## Usage

### For Regular Admins
- Access via `/admin-login` → `/admin-dashboard`
- Can manage instructors and their own profile
- Cannot access SuperAdmin dashboard

### For SuperAdmins
- Access via `/superadmin-login` → `/superadmin-dashboard`
- Can manage all admin accounts
- Has full system access

## Styling

All components use the shared `admin.css` stylesheet located at:
`frontend/src/styles/admin.css`

## Key Features

- **Responsive Design**: Works on all screen sizes
- **Consistent UI**: Same design pattern across all admin components
- **Modular Architecture**: Each component is self-contained
- **State Management**: Uses React hooks for local state
- **Authentication**: Integrated with AuthContext
