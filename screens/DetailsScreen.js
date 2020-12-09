import * as React from 'react';
import { Text, View} from 'react-native';


export default function DetailsScreen({route}) {

   const { title, description, url} = route.params;

  return (
    <View>
      <Text style={{fontSize: 20, marginBottom: 20}}>{JSON.stringify(title)}</Text>
      <Text style={{ fontSize: 10, marginBottom: 20 }}>{JSON.stringify(description)}</Text>
      <Text style={{ fontSize: 10 }}>URL: {JSON.stringify(url)}</Text>
    </View>
  );
}
