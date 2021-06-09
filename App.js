import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';
import { Provider } from './src/context/NotesContext';

const navigator = createStackNavigator({
  Index: IndexScreen
}, {
  initalRouteName: 'Index',
  defaultNavigationOptions: {
    title: 'Notes'
  }
});

const App = createAppContainer(navigator);

export default () => {
  return <Provider>
      <App />
    </Provider>
};