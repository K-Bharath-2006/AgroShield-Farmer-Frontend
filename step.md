# Native App Initial Setup

## Step 1: Install Chocolatey

- Visit the following link to install Chocolatey: [Chocolatey Installation](https://community.chocolatey.org/courses/installation/installing?method=installing-chocolatey)

## Step 2: Install Node Version Manager (NVM)

- If you don't have NVM, install it from the following link: [NVM Installer](https://github.com/coreybutler/nvm-windows)
- If you already have Node on your system, ensure it is Node 18 or newer.

## Step 3: Install JDK

- Download and install JDK version 17 or 21 from the following link: [JDK Download](https://www.oracle.com/java/technologies/downloads/?er=221886#jdk21-windows)
- If you already have a JDK on your system, it is recommended to use JDK17.

## Step 4: Add JAVA_HOME Variable

1. Open the Environment Variables window.
2. Click New under the System variables section.
3. Set the Variable name to `JAVA_HOME`.
4. Set the Variable value to the path of your JDK installation (e.g., `C:\Program Files\Java\jdk-xx.x.x`).
5. Click OK.

## Step 5: Update the PATH Variable

1. In the System variables section, find and select the Path variable, then click Edit.
2. Click New and add the path to the bin directory of your JDK installation (e.g., `C:\Program Files\Java\jdk-xx.x.x\bin`).
3. Click OK to close all dialogs.

## Step 6: Verify Java and JDK Installation

1. Open the command prompt.
2. Type `java -version` and press Enter. You should see output displaying the installed JDK version.
3. Type `javac -version` and press Enter. You should see the compiler version.

## Step 7: Install Node.js and Microsoft OpenJDK

1. Open an Administrator Command Prompt.
2. Run the following command:
   ```sh
   choco install -y nodejs-lts microsoft-openjdk17
   ```

## Step 8: Install Android Studio

- Download Android Studio from the following link: [Android Studio Download](https://developer.android.com/studio)

## Step 9: Configure ANDROID_HOME Environment Variable

1. Open the Windows Control Panel.
2. Click on User Accounts, then click User Accounts again.
3. Click on Change my environment variables.
4. Click on New... to create a new ANDROID_HOME user variable that points to the path to your Android SDK.

## Step 10: Install SDK Platform Tools

- Download SDK platform tools from the following link: [SDK Platform Tools](https://developer.android.com/tools/releases/platform-tools)

## Step 11: Add Platform-Tools to Path

1. Open the Windows Control Panel.
2. Click on User Accounts, then click User Accounts again.
3. Click on Change my environment variables.
4. Select the Path variable.
5. Click Edit.
6. Click New and add the path to platform-tools to the list.

## Step 12: Create a React Native App

1. Open a command prompt and run the following command:
   ```sh
   npx react-native@0.73 init AwesomeProject
   ```

## Step 13: Install Node Modules

1. Navigate to the project directory.
2. Run the following command:
   ```sh
   npm install
   ```

## Step 14: Run the Android App

1. Run the following command to start the app on an Android device/emulator:
   ```sh
   npm run android
   ```

## Step 15: Fix ADB Not Recognized Error

1. If you get the error `"adb" is not recognized as an internal or external command, operable program or batch file.`, follow these steps:
   1. Open the Environment Variables window.
   2. Under the System variables section, find and select the Path variable, then click Edit.
   3. In the Edit Environment Variable window, click New and add the path to the directory containing `adb.exe` (e.g., `C:\platform-tools`).
   4. Then run this command in PowerShell (replace `path` with your platform-tools path):
      ```sh
      [Environment]::SetEnvironmentVariable("Path", "$env:Path;C:\Users\sathi\Downloads\platform-tools-latest-windows\platform-tools", "User")
      ```

## Step 16: Check ADB Version

1. Go to the project directory.
2. Run the following command:
   ```sh
   adb version
   ```

## Step 17: Run the Android App Again

1. Run the following command to start the app on an Android device/emulator:
   ```sh
   npm run android
   ```
