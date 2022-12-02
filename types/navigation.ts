import { typeNativeStackScreenProps } from '@react-navigation/stack';

export type RootStackParamList = {
  Home: undefined;
  Movies: undefined;
};

export type HomeScreenNavigationProp = typeNativeStackScreenProps<RootStackParamList, 'Movies'>