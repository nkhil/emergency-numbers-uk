import {
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  SafeAreaView,
  Text,
  Alert,
  Linking,
  StatusBar,
} from 'react-native'
import { DATA, type EmergencyNumber } from './constants/data'

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#E6C800" barStyle="dark-content" />
      <Text style={styles.appHeader}>Emergency Numbers UK</Text>
      <Text style={styles.appSubheader}>Tap on an emergency number to call</Text>
      <FlatList
        data={DATA}
        renderItem={
          ({item}) => <Item id={item.id} title={item.title} subTitle={item.subTitle} number={item.number} />}
        keyExtractor={item => item.id}
      />
    </SafeAreaView>
  );
}

const makeCall = (number: EmergencyNumber['number']) => {
  console.log('Make call called with')
  console.log(`number: ${String(number)}`)
  Alert.alert(
    "Call Confirmation",
    `Do you want to call ${number}?`,
    [
      {
        text: "Cancel",
        style: "cancel"
      },
      {
        text: "Call",
        onPress: () => {
          Linking.openURL(`tel:${number}`);
        }
      }
    ]
  )
}

const Item = ({title, subTitle, number }: EmergencyNumber) => (
  <TouchableOpacity style={styles.itemContainer} onPress={() => makeCall(number)}>
    <View style={styles.textContainer}>
      <Text style={styles.name}>{title}</Text>
      <Text style={styles.subtitle}>{subTitle}</Text>
    </View>
    <Text style={styles.number}>{number}</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E6C800', // ORANGE
    // backgroundColor: '#DBB035', // ORANGE
    justifyContent: 'center',
  },
  appHeader: {
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  appSubheader: {
    alignSelf: 'center',
    alignItems: 'center',
    fontFamily: 'Helvetica',
    fontSize: 18,
    marginBottom: 10,

  },
  name: {
    fontSize: 20,
    color: '#070708',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
    color: '#070708',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  number: {
    fontSize: 20,
    color: '#070708',
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    backgroundColor: '#FFF',
    marginVertical: 10,
    marginHorizontal: 10,
  },
  textContainer: {
    flex: 1,
  },
  itemContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFF',
    marginHorizontal: 10,
    borderRadius: 20,
    marginTop: 10,
    marginBottom: 10,
  },
  flag: {
    width: 50,
    resizeMode: 'contain',
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
})
