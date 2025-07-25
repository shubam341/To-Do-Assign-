# 📝 My Todo App

A modern cross-platform **React Native To-Do App** built using **Expo**, **TypeScript**, **Tailwind CSS**, and **Context API**. This app allows users to add, update, delete, and filter tasks, with dark/light mode toggle support.

---

## 🚀 Features

-  Add, edit, delete todos
-  Filter tasks by priority/date
-  Light and Dark mode
-  Due dates with `date-fns`
-  Priority levels (Low, Medium, High)
-  Persistent storage with AsyncStorage
-  State management via Context API
-  Styled with Tailwind CSS using `nativewind`
-  Expo + React Native for cross-platform support

---

##  Tech Stack

- **React Native + Expo**
- **TypeScript**
- **Context API**
- **Tailwind CSS** (via `nativewind`)
- **Lucide Icons**
- **date-fns**
- **AsyncStorage**
- **Expo Router**

---

## Folder Structure

├── app/ # Expo Router pages
│ ├── (tabs)/ # Tab-based navigation
│ ├── explore.tsx
│ ├── index.tsx
│ ├── _layout.tsx
│ ├── +not-found.tsx
├── assets/ # Fonts, images, etc.
├── components/ # Reusable UI components
├── constants/ # Constant values (if any)
├── contexts/ # Context API files
├── hooks/ # Custom hooks
├── node_modules/
├── scripts/ # Build/deployment scripts
├── src/ # Component code (modular)
│ ├── components/
│ │ ├── AddTodoForm.tsx
│ │ ├── FilterBar.tsx
│ │ ├── TodoItem.tsx
│ │ ├── TodoStats.tsx
│ ├── contexts/
├── App.tsx # App root
├── app.json # Expo configuration
├── babel.config.js # Babel config
├── eas.json # Expo Application Services config
├── eslint.config.js # ESLint rules
├── expo-env.d.ts # Type declarations
├── .gitignore



---

##  Installation & Run

### 1. Clone the repo

```bash
git clone https://github.com/your-username/my-todo-app.git
cd my-todo-app

2. Install dependencies
bash
Copy code
npm install

3. Run on development server
bash
Copy code
npx expo start
Then:

Press a for Android

Press w for Web

Scan QR in Expo Go app

 Build APK for Testing
You can generate a testable APK (Android) like this:

bash
Copy code
npx expo install eas-cli
eas build:configure
eas build -p android --profile preview
You'll get an APK download link after the build is complete.

 Screenshots
Light Mode	Dark Mode




---
Author
Shubam Choudhary
Feel free to reach out for collaboration or suggestions!








