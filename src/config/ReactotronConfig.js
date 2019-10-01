import Reactotron from 'reactotron-react-native';
import { reactotronRedux } from 'reactotron-redux';
import AsyncStorage from '@react-native-community/async-storage';
import reactotronSaga from 'reactotron-redux-saga';

if (__DEV__) {
  const tron = Reactotron.configure({ host: '192.168.0.103' })
    .useReactNative({})
    .setAsyncStorageHandler(AsyncStorage)
    .use(reactotronRedux())
    .use(reactotronSaga())
    .connect();

  console.tron = tron;

  if (tron.clear) {
    tron.clear();
  }
}
