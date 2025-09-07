#!/bin/bash

echo "🚀 Setting up AwesomeApp React Native Project..."

# Make sure we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

echo "📱 Setting up iOS..."
cd ios
if command -v pod &> /dev/null; then
    pod install
    echo "✅ iOS CocoaPods installed successfully"
else
    echo "⚠️  CocoaPods not found. Please install CocoaPods first:"
    echo "   sudo gem install cocoapods"
fi
cd ..

echo "🤖 Setting up Android..."
# Check if Android SDK is available
if [ -d "$ANDROID_HOME" ] || [ -d "$ANDROID_SDK_ROOT" ]; then
    echo "✅ Android SDK found"
else
    echo "⚠️  Android SDK not found. Please set ANDROID_HOME or ANDROID_SDK_ROOT"
fi

echo "🔧 Final setup steps..."

# Create .env file template
if [ ! -f ".env" ]; then
    cat > .env << EOF
# API Configuration
API_BASE_URL=http://localhost:3000/api
API_TIMEOUT=10000

# App Configuration
APP_NAME=AwesomeApp
APP_VERSION=1.0.0

# Development
DEBUG=true
FLIPPER_ENABLED=true
EOF
    echo "✅ Created .env file template"
fi

# Create .env.example
if [ ! -f ".env.example" ]; then
    cp .env .env.example
    echo "✅ Created .env.example file"
fi

echo ""
echo "🎉 Setup completed successfully!"
echo ""
echo "📋 Next steps:"
echo "1. Update the .env file with your API endpoints"
echo "2. Run 'npx react-native run-ios' for iOS"
echo "3. Run 'npx react-native run-android' for Android"
echo ""
echo "📚 Documentation:"
echo "- Project structure: PROJECT_STRUCTURE.md"
echo "- Main README: README.md"
echo ""
echo "🔧 Useful commands:"
echo "- Start Metro: npx react-native start"
echo "- Clear cache: npx react-native start --reset-cache"
echo "- iOS: npx react-native run-ios"
echo "- Android: npx react-native run-android"
echo ""
echo "Happy coding! 🚀"
