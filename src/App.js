import { Navigation } from 'react-native-navigation';
import { AppRegistry } from 'react-native';
import MainScreen from './MainScreen';

const MAIN_SCREEN = 'midburn.MainScreen';


Navigation.registerComponent(MAIN_SCREEN, () => MainScreen);

Navigation.startSingleScreenApp({
  screen: {
    screen: MAIN_SCREEN,
    title: 'Welcome',
    navigatorStyle: {},
  },
});

AppRegistry.registerComponent('MidburnApp', () => MAIN_SCREEN);
