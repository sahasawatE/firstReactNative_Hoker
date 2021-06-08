import * as React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import {SafeAreaView,StyleSheet} from 'react-native';
import Feed from './Feed';
import Add from './Add';
import Profile from './Profile';

const FeedRoute = () => <SafeAreaView style={{backgroundColor:'#f9bdd5'}}><Feed/></SafeAreaView>;

const AddRoute = () => <SafeAreaView style={{backgroundColor:'#f9bdd5'}}><Add/></SafeAreaView>;

const ProfileRoute = () => <SafeAreaView style={{backgroundColor:'#f9bdd5'}}><Profile/></SafeAreaView>;

const Tabs = () => {

  const styles = StyleSheet.create({
    nav:{
      backgroundColor: '#ff83bd'
    },
    innav:{
      
    }
  });

  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'feed', title: 'Feed', icon: 'chart-pie'},
    { key: 'add', title: 'Add', icon: 'plus'},
    { key: 'profile', title: 'Profile', icon: 'user'},
  ]);

  const renderScene = BottomNavigation.SceneMap({
    feed: FeedRoute,
    add: AddRoute,
    profile: ProfileRoute,
  });

  return (
      <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      barStyle={styles.nav}
      style={styles.innav}
    />
  );
};

export default Tabs;