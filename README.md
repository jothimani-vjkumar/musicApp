# 🎵 MusicApp

A modern React Native music streaming application with download functionality, elegant UI, and cross-platform support.

## 📱 Features

- **🎵 Music Streaming**: Browse and play music tracks
- **⬇️ Download System**: Download songs for offline listening
- **🎨 Modern UI**: Clean and intuitive interface
- **📱 Cross-Platform**: Runs on both iOS and Android
- **♾️ Infinite Scrolling**: Seamless browsing experience
- **🎯 Navigation**: Stack and Tab navigation with smooth transitions

## 🛠️ Tech Stack

- **Framework**: React Native 0.81.1
- **Navigation**: React Navigation v7
- **State Management**: React Hooks & Context
- **Image Loading**: React Native Fast Image
- **File System**: React Native FS
- **Icons**: React Native Vector Icons
- **HTTP Client**: Axios
- **Environment Config**: React Native Config

## 📋 Prerequisites

Before running this project, make sure you have the following installed:

### General Requirements

- **Node.js**: >= 20.19.4
- **npm**: >= 10.8.2
- **React Native CLI**: `npm install -g @react-native-community/cli`

### iOS Requirements

- **macOS**: Required for iOS development
- **Xcode**: >= 15.0
- **iOS Simulator**: iOS 17.5+ or physical device
- **CocoaPods**: `sudo gem install cocoapods`

### Android Requirements

- **Android Studio**: Latest version
- **Android SDK**: API Level 34+
- **Java Development Kit**: JDK 17+
- **Android Emulator**: API 34+ or physical device

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone <repository-url>
cd MusicApp
```

### 2. Install Dependencies

```bash
# Install Node.js dependencies
npm install

# Install iOS dependencies (macOS only)
cd ios && pod install && cd ..
```

### 3. Environment Setup

Create a `.env` file in the root directory:

```env
API_URL=https://api.freemusicarchive.org
CLIENT_ID=your_client_id_here
```

### 4. Run the Application

#### For Android

```bash
# Start Metro bundler
npx react-native start

# In a new terminal, run Android
npx react-native run-android
```

#### For iOS (macOS only)

```bash
# Start Metro bundler
npx react-native start

# In a new terminal, run iOS
npx react-native run-ios
```

## 📁 Project Structure

```
MusicApp/
├── 📱 android/                    # Android-specific files
│   ├── app/
│   │   ├── build.gradle           # Android build configuration
│   │   └── src/main/
│   │       ├── AndroidManifest.xml
│   │       └── java/com/musicapp/
├── 🍎 ios/                        # iOS-specific files
│   ├── MusicApp/
│   │   ├── Info.plist             # iOS app configuration
│   │   ├── AppDelegate.swift      # iOS app delegate
│   │   └── LaunchScreen.storyboard
│   ├── MusicApp.xcodeproj/        # Xcode project
│   └── Podfile                    # CocoaPods dependencies
├── 📦 node_modules/               # Node.js dependencies
├── 🎯 src/                        # Source code
│   ├── 🏗️ core/                   # Core application logic
│   │   ├── navigation/            # Navigation configuration
│   │   │   ├── AppNavigator.js    # Main app navigator
│   │   │   ├── MainNavigator.js   # Stack navigator
│   │   │   └── TabNavigator.js    # Bottom tab navigator
│   │   ├── services/              # API and external services
│   │   │   ├── apiService.js      # HTTP client with Axios
│   │   │   └── index.js           # Service exports
│   │   ├── theme/                 # Design system
│   │   │   ├── colors.js          # Color palette
│   │   │   └── fonts.js           # Typography system
│   │   └── localization/          # Internationalization
│   │       └── strings.js         # App strings
│   ├── 🎵 features/               # Feature-based modules
│   │   ├── home/                  # Home feature
│   │   │   ├── components/        # Home-specific components
│   │   │   │   ├── SongList.js    # Music list with infinite scroll
│   │   │   │   ├── SongWidget.js  # Individual song item
│   │   │   │   ├── Header.js      # Home header
│   │   │   │   ├── Search.js      # Search component
│   │   │   │   ├── DownloadButton.js # Download functionality
│   │   │   │   ├── SongDetailContainer.js
│   │   │   │   └── Playback.js    # Playback controls
│   │   │   ├── hooks/             # Home-specific hooks
│   │   │   │   └── fetchSongs.js  # Data fetching logic
│   │   │   ├── screens/           # Home screens
│   │   │   │   └── SongDetailsScreen.js
│   │   │   └── index.js           # Feature exports
│   │   ├── search/                # Search feature
│   │   │   └── screens/
│   │   │       └── SearchScreen.js
│   │   ├── library/               # Library feature
│   │   │   └── screens/
│   │   │       └── LibraryScreen.js
│   │   └── profile/               # Profile feature
│   │       └── screens/
│   │           └── ProfileScreen.js
│   ├── 🔧 shared/                 # Shared utilities and components
│   │   ├── constants/             # App constants
│   │   │   └── screens.js         # Screen name constants
│   │   └── utils/                 # Utility functions
│   │       ├── index.js           # Common utilities
│   │       └── downloadHelper.js  # Download functionality
│   └── 📱 screens/                # Legacy screens (being migrated)
│       └── SplashScreen.tsx
├── 📄 Configuration Files
│   ├── package.json               # Dependencies and scripts
│   ├── app.json                   # React Native app config
│   ├── babel.config.js            # Babel configuration
│   ├── metro.config.js            # Metro bundler config
│   ├── react-native.config.js     # React Native CLI config
│   ├── tsconfig.json              # TypeScript configuration
│   └── .env                       # Environment variables
├── 🧪 __tests__/                  # Test files
└── 📚 Documentation
    ├── README.md                  # This file
    └── PROJECT_STRUCTURE.md       # Detailed structure docs
```

## 🎯 Key Components

### Navigation Structure

```
AppNavigator (NavigationContainer)
└── MainNavigator (Stack Navigator)
    ├── TabNavigator (Initial Screen)
    │   ├── Home Tab
    │   ├── Search Tab
    │   ├── Library Tab
    │   └── Profile Tab
    └── SongDetails Screen
```

### Core Services

- **API Service**: Centralized HTTP client with Axios
- **Download Service**: File download and management
- **Theme System**: Consistent colors and typography

### Feature Architecture

Each feature follows a consistent structure:

- `components/`: Feature-specific UI components
- `screens/`: Screen components
- `hooks/`: Custom React hooks
- `services/`: Feature-specific business logic
- `types/`: TypeScript type definitions (if applicable)

## 🛠️ Troubleshooting

### Common Issues

#### Metro Bundler Issues

```bash
# Clear Metro cache
npx react-native start --reset-cache
```

#### Android Build Issues

```bash
# Clean Android build
cd android && ./gradlew clean && cd ..
```

#### iOS Build Issues

```bash
# Clean iOS build
cd ios && xcodebuild clean -workspace MusicApp.xcworkspace -scheme MusicApp && cd ..
```

#### Permission Issues (Android)

- Ensure all permissions are declared in `android/app/src/main/AndroidManifest.xml`
- Clear app data: `adb shell pm clear com.musicapp`

### Environment Issues

- Ensure Node.js version >= 20.19.4
- Verify Android SDK and build tools are installed
- Check Xcode and iOS Simulator versions
