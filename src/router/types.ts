export type RootStackParamList = {
  Login: undefined;
  Registration: {user: any};
  Home: {user: any};
  CropRegister: {user: any};
  Profile: {user: any};
  MyCrops: undefined;
  CropDetails: {cropId: string};
  RaiseClaim: {cropId: string};
  MyClaims: undefined;
  ClaimDetails: {claimId: string};
  SchemeDetails: undefined;
};
