import * as React from 'react';
import {
  SafeAreaView,
  useColorScheme,
  useWindowDimensions,
  ViewStyle,
} from 'react-native';
import { SceneMap, TabBar, TabView } from 'react-native-tab-view';
import { Colors } from 'react-native/Libraries/NewAppScreen';

import App from './App';
import AppMobX from './App.mobx';

const renderScene = SceneMap({
  first: App,
  second: AppMobX,
});

const renderTabBar: React.FC<any> = props => {
  return (
    <TabBar
      {...props}
      indicatorStyle={{ backgroundColor: 'white' }}
      style={{ backgroundColor: '#4caf50' }}
    />
  );
};

export default function TabScreen() {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle: ViewStyle = {
    backgroundColor: isDarkMode ? Colors.darker : '#c8e6c9',
    flex: 1,
    paddingHorizontal: 20,
  };

  const layout = useWindowDimensions();

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'first', title: 'Hooks' },
    { key: 'second', title: 'MobX' },
  ]);

  return (
    <SafeAreaView style={backgroundStyle}>
      <TabView
        navigationState={{ index, routes }}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{ width: layout.width }}
        tabBarPosition="bottom"
        renderTabBar={renderTabBar}
      />
    </SafeAreaView>
  );
}
