import React from'react';
import { Text, View, Image, StyleSheet } from 'react-native'
import List from '../Components/List';

const data = [
  {
    id: 1,
    postTitle: 'Planet of Nature',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  },
  {
    id: 2,
    postTitle: 'Lampost',
    avatarURI:
      'https://images.unsplash.com/photo-1559526323-cb2f2fe2591b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    imageURI:
      'https://images.unsplash.com/photo-1482822683622-00effad5052e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80',
    randomText:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. '
  }
]

function renderItem({ item }) {
  return (
    <View>
      <Image
        source={{ uri: item.imageURI }}
        style={styles.image}
      />
      <View style={styles.details}>
        
        <Text style={styles.tittle}>{item.postTitle}</Text>
        <Image 
          source={{ uri: item.avatarURI}}
          style={styles.avatar}
        />
      </View>
      <View style={styles.content}>
        <Text>{item.randomText}</Text>
      </View>
    </View>
  );
}
 
export default function HomeScreen() {
    return (
      <View>
         <List
         data={data}
         renderItem={renderItem}
         />
      </View>
    )
  }
  const styles = StyleSheet.create({
   image: {
     width: '100', 
     height: 300
   },
  details: {
    display:'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: 10,
    borderBottomColor: 'lightgrey',
    borderBottomWidth: 1,
  },
  content: {
    padding: 10
  },
  tittle: {
    fontWeight: 'bold',
  },

  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
  }
  });