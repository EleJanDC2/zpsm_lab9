import {
  Button,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {useEffect, useState} from 'react';

export const Test = ({navigation}) => {
  const sendResults = () => {
    console.log('Wyslano wyniki');

    fetch('https://tgryl.pl/quiz/results', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nick: 'Jan Czaja',
        score: '18',
        total: '20',
        type: 'historia',
      }),
    });
  };
  //
  // const [quizList, setQuizList] = useState([]);
  //
  // useEffect(() => {
  //   const fetchQuizData = async () => {
  //     try {
  //       const response = await fetch('https://tgryl.pl/quiz/tests');
  //       const data = await response.json();
  //       setQuizList(data);
  //     } catch (error) {
  //       console.error('Błąd pobierania danych:', error);
  //     }
  //   };
  //
  //   fetchQuizData();
  // }, []);
  //
  // const handleItemClick = id => {
  //   // Tutaj możesz dodać kod obsługujący kliknięcie, na razie wypisuje coś w konsoli
  //   console.log(`Kliknięto element o ID: ${id}`);
  // };

  const [quizList, setQuizList] = useState([]);
  const [selectedQuizId, setSelectedQuizId] = useState(null);
  const [quizDetails, setQuizDetails] = useState(null);

  useEffect(() => {
    const fetchQuizData = async () => {
      try {
        const response = await fetch('https://tgryl.pl/quiz/tests');
        const data = await response.json();
        setQuizList(data);
      } catch (error) {
        console.error('Błąd pobierania danych:', error);
      }
    };

    fetchQuizData();
  }, []);

  const handleItemClick = async id => {
    setSelectedQuizId(id);
    try {
      const response = await fetch(`https://tgryl.pl/quiz/test/${id}`);
      const data = await response.json();
      setQuizDetails(data);
    } catch (error) {
      console.error('Błąd pobierania danych:', error);
    }
  };

  const renderQuizItem = ({item}) => (
    <TouchableOpacity onPress={() => handleItemClick(item.id)}>
      <View style={styles.itemContainer}>
        <Text style={styles.name}>{item.name}</Text>
        <Text style={styles.description}>{item.description}</Text>
      </View>
    </TouchableOpacity>
  );

  const renderQuizDetails = () => (
    <View style={styles.detailsContainer}>
      {/* Tutaj możesz wyświetlić szczegóły quizu, na przykład pytania i odpowiedzi */}
      <Text style={styles.detailsText}>ID: {quizDetails.id}</Text>
      <Text style={styles.detailsText}>Name: {quizDetails.name}</Text>
      {/* Dodaj inne elementy, które chcesz wyświetlić */}
    </View>
  );

  return (
    <NavigationContainer independent={true}>
      <Text> TEST SCREEN </Text>
      <Button title="Wyślij wyniki" onPress={sendResults} />
      <View style={styles.container}>
        <FlatList
          data={quizList}
          renderItem={renderQuizItem}
          keyExtractor={item => item.id}
        />
        {selectedQuizId && quizDetails && renderQuizDetails()}
      </View>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  itemContainer: {
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
    paddingVertical: 10,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 16,
  },
  detailsContainer: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#eee',
  },
  detailsText: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default Test;
