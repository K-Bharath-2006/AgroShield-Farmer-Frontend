import {GoogleSignin} from '@react-native-google-signin/google-signin';

export const configureGoogleSignIn = () => {
  GoogleSignin.configure({
    webClientId:
      '856581417797-ia6uqa31be1vafun558paopounhkcc0s.apps.googleusercontent.com',
    offlineAccess: false,
  });
};

export const googleSignIn = async () => {
  await GoogleSignin.hasPlayServices({
    showPlayServicesUpdateDialog: true,
  });
  await GoogleSignin.signOut();
  const response = await GoogleSignin.signIn();

  if (response.type !== 'success') {
    throw new Error('Google Sign-In cancelled');
  }

  const {idToken} = response.data;

  if (!idToken) {
    throw new Error('Google ID token missing');
  }

  return {
    idToken,
  };
};
