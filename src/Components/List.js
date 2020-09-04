import React from 'react';
import { View } from 'react-native';

export default function List({ data, renderItem }){
  return (
    <View>
      {data.map(function(item){
        return (
          <View key={item.id}>
            {renderItem({ item })} 
          </View>
            );
          })}
    </View>
    );
}