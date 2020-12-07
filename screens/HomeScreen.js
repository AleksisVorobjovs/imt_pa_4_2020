import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View, Button } from 'react-native';

export default function HomeScreen({ navigation }) {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(
      'https://api.currentsapi.services/v1/search?keywords=cryptocurrency&apiKey=IY_WA6euk-o8vcAdGJ4o2ZnIvjyjePnK1js9ZGWZNxBvRwRr'
    )
      .then((response) => response.json())
      .then((json) => setData(json.news))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  }, []);

  return (
    <View style={{ flex: 1, padding: 24 }}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          keyExtractor={({ id }, index) => id}
          renderItem={({ item }) => (
            <View style={{ margin: 10 }}>
              <Button
                title={item.title}
                onPress={() =>
                  navigation.navigate('details', {
                    title: item.title,
                    description: item.description,
                    url: item.url,
                  })
                }
              />
            </View>
          )}
        />
      )}
    </View>
  );
}
