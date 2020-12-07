import * as React from 'react';
import { Text, View} from 'react-native';


export default function DetailsScreen({route}) {

   const { title, description, url} = route.params;

  return (
    <View>
      <Text style={{fontSize: 20, marginBottom: 20}}>{JSON.stringify(title)}</Text>
      <Text style={{ flex: 1, fontSize: 15, alignItems: 'center', marginBottom: 20, justifyContent: 'center' }}>{JSON.stringify(description)}</Text>
      <Text style={{ flex: 1, fontSize: 15, alignItems: 'center', justifyContent: 'center', color:'#00F' }}>URL: {JSON.stringify(url)}</Text>
    </View>
  );
}