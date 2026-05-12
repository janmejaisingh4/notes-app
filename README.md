# 📝 Notes App UI – React Native + Expo Router

A modern and responsive Notes Application UI built using React Native with Expo Router.

This project was created for the **Mobile Development Cohort Assignment** focused on:

- React Native Core Components
- Responsive Layouts
- Dark/Light Theme Handling
- Clean UI Design
- Keyboard Handling
- Component-Based Architecture

---
# 📸 App Screenshots

## 🏠 Notes Listing Screen

<img src="./assets/images/Screen 01.jpeg" width="300" alt="Notes Listing Screen" />

---

## ✍️ Note Editor Screen

<img src="./assets/images/Screen 02.jpeg" width="300" alt="Note Editor Screen" />

---

# ✨ Features

## 📋 Notes Listing Screen

- Display notes using `FlatList`
- Search notes with `TextInput`
- Responsive card layouts
- Dark/Light mode adaptation
- Pressable note cards
- Tablet responsive grid layout

---

## ✍️ Note Editor Screen

- Note title input
- Multiline content editor
- Keyboard safe layout using `KeyboardAvoidingView`
- Header section using `ImageBackground`
- Save & Back buttons using `Pressable`

---

# 🧠 Concepts Used

| Concept | Description |
|---|---|
| `FlatList` | Efficient rendering of notes list |
| `Pressable` | Interactive buttons and cards |
| `useColorScheme()` | Automatic dark/light theme detection |
| `useWindowDimensions()` | Responsive UI for phones/tablets |
| `KeyboardAvoidingView` | Prevent keyboard overlap |
| `ImageBackground` | Stylish editor header |
| `StyleSheet.create()` | Clean and optimized styling |
| `StyleSheet.compose()` | Combining reusable styles |
| `StyleSheet.flatten()` | Dynamic responsive styling |

---

# 📁 Project Structure

```txt
notesapp/
│
├── assets/
│   └── images/
│
├── src/
│   ├── app/
│   │   ├── _layout.tsx
│   │   ├── index.tsx
│   │   └── editor.tsx
│   │
│   ├── components/
│   │   ├── common/
│   │   └── notes/
│   │
│   ├── constants/
│   ├── data/
│   ├── hooks/
│   ├── styles/
│   ├── types/
│   └── utils/
│
├── package.json
└── README.md
```

---

# 🎨 UI Highlights

- Minimal modern design
- Consistent spacing system
- Soft shadows & rounded cards
- Responsive layouts
- Dark mode optimized colors
- Professional typography hierarchy

---

# 📱 Responsive Design

The application automatically adapts for:

- Mobile Phones
- Tablets
- Different screen sizes

Implemented using:

```tsx
useWindowDimensions()
```

---

# 🌗 Theme Handling

Automatic system theme detection using:

```tsx
useColorScheme()
```

Supports:

- Light Theme
- Dark Theme

---

# 🚀 Getting Started

# 1️⃣ Clone Repository

```bash
git clone https://github.com/your-username/notes-app.git
```

---

# 2️⃣ Move Into Project Folder

```bash
cd notes-app
```

---

# 3️⃣ Install Dependencies

```bash
npm install
```

---

# 4️⃣ Install Expo Dependencies

```bash
npx expo install expo-router
npx expo install expo-status-bar
npx expo install react-native-safe-area-context
```

---

# 5️⃣ Start Development Server

```bash
npx expo start
```

This will start the Expo development server.

---

# 📲 Run Using Expo Go

## Step 1

Install:

- Expo Go from Play Store (Android)
- Expo Go from App Store (iPhone)

---

## Step 2

Ensure:

- Mobile device and laptop are connected to the same WiFi network

---

## Step 3

Open Expo Go and scan the QR code shown in terminal/browser.

The application will open instantly on your device.

---

# 💻 Run on Emulator

## Android Emulator

Press:

```txt
a
```

inside terminal after running:

```bash
npx expo start
```

---

## iOS Simulator (Mac Only)

Press:

```txt
i
```

inside terminal.

---

# 🛠 Tech Stack

- React Native
- Expo
- Expo Router
- TypeScript
- React Hooks

---

# 📦 Components Used

## Core Components

- `SafeAreaView`
- `View`
- `Text`
- `FlatList`
- `TextInput`
- `Pressable`
- `Switch`
- `KeyboardAvoidingView`
- `ImageBackground`

---

# 🪝 Hooks Used

- `useState`
- `useMemo`
- `useColorScheme`
- `useWindowDimensions`

---

# 📸 Screens Included

| Screen | Description |
|---|---|
| Notes List Screen | Shows all notes in responsive cards |
| Editor Screen | Used for writing/editing notes |

---

# 🌟 Additional Enhancements

- Responsive tablet layout
- Reusable components
- Clean architecture
- Modern card UI
- Pressable interaction feedback
- Empty state handling
- Optimized spacing system

---

# 🧪 Testing

Tested on:

- Android Device
- Expo Go
- Responsive layouts
- Dark & Light modes

---

# 📹 Demo Video

Add your demo video link here:

```txt
https://your-demo-video-link.com
```

---

# 🔗 GitHub Repository

Add your repository link here:

```txt
https://github.com/your-username/notes-app
```

---

# 📚 Learning Outcome

This project helped practice:

- Mobile UI Design
- React Native Layout System
- Responsive App Development
- Theme Adaptation
- Component Reusability
- Professional Project Structuring

---

# 👨‍💻 Author

Janmejai Singh

---

# 📄 License

This project is created for educational and assignment purposes.