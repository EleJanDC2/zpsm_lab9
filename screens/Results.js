import {
  ActivityIndicator,
  FlatList,
  Text,
  StyleSheet,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export const Results = ({navigation}) => {
  let [isLoading, setIsLoading] = useState(true);
  let [error, setError] = useState();
  let [response, setResponse] = useState();

  useEffect(() => {
    const fetchData = () => {
      fetch('https://tgryl.pl/quiz/results?last=20')
        .then(res => res.json())
        .then(
          result => {
            setIsLoading(false);
            setResponse(result);
          },
          error => {
            setIsLoading(false);
            setError(error);
          },
        );
    };

    // Wywołaj funkcję fetchData od razu (przy zamontowaniu komponentu)
    fetchData();

    // Ustaw interwał na 5 sekund
    const intervalId = setInterval(() => {
      fetchData();
    }, 5000);

    // Wyczyszczenie interwału po odmontowaniu komponentu
    return () => clearInterval(intervalId);
  }, []); // Pusty [] oznacza, że useEffect będzie działać tylko przy zamontowaniu i odmontowaniu komponentu

  // useEffect(() => {
  //   fetch('https://tgryl.pl/quiz/results?last=20%22')
  //     .then(res => res.json())
  //     .then(
  //       result => {
  //         setIsLoading(false);
  //         setResponse(result);
  //       },
  //       error => {
  //         setIsLoading(false);
  //         setError(error);
  //       },
  //     );
  // }, []);
  const getContent = () => {
    if (isLoading) {
      return <ActivityIndicator size={'large'} />;
    }

    if (error) {
      return <Text>{error}</Text>;
    }

    return <Text> API called </Text>;
  };

  const renderItem = ({item}) => (
    <View style={styles.itemContainer}>
      <Text style={styles.text}>Nick: {item.nick}</Text>
      <Text style={styles.text}>Score: {item.score}</Text>
      <Text style={styles.text}>Total: {item.total}</Text>
      <Text style={styles.text}>Type: {item.type}</Text>
      <Text style={styles.text}>Created On: {item.createdOn}</Text>
      <Text style={styles.text}>ID: {item.id}</Text>
    </View>
  );

  return (
    <NavigationContainer independent={true}>
      <Text> RESULTS SCREEN </Text>
      {getContent()}
      <FlatList
        data={response}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    padding: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Results;
