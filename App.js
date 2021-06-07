import React from 'react';
import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from './src/screens/indexScreen';
import { NotesProvider } from './src/context/NotesContext';

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
  return <NotesProvider>
      <App />
    </NotesProvider>
};