import React from 'react';
import {
  Image,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default function HomeScreen() {
  return (
    <View  style={{ flex: 1 }}>
 {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Bonjour; Zoro</Text>
        <Image
        source={require('@/assets/images/zoro.jpg')}
        style={styles.profil}/>
      </View>
    
    <ScrollView style={styles.container}>
     

      {/* Bannière */}
      <View >
       <Image style={styles.bannerImage} source={require('@/assets/images/banner.png')}/>
      </View>

      {/* Services */}

      <View style={styles.servicesContainer}>
        <View style={styles.card}>
          <Image style={styles.cardImg} source={require('@/assets/images/demande.png')}/>
          <Text style={styles.cardTitle}>Demander un ramassage</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.cardImg} source={require('@/assets/images/historique.png')}/>
          <Text style={styles.cardTitle}>Non Historique</Text>
        </View>

        <View style={styles.card}>
          <Image style={styles.cardImg} source={require('@/assets/images/tag.png')}/>
          <Text style={styles.cardTitle}>Tarif et Pack</Text>
        </View>

        <View style={styles.card}>
       <Image style={styles.cardImg} source={require('@/assets/images/notif.png')}/>
          <Text style={styles.cardTitle}>Notifications et Suivi</Text>
        </View>
      </View>
         <Image style={styles.promoImg} source={require('@/assets/images/promo.png')}/>
    </ScrollView>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F7F9FC',
    position:'relative',
  
    
  },

  header: {
    backgroundColor: '#eeeeee',
    padding:10,
    alignItems: 'center',
    display:'flex',
    justifyContent:'space-between',
    flexDirection:'row',
     paddingTop: StatusBar.currentHeight, 
    position:'fixed',
    width:'100%'

  },

  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1976D2',
  },
   profil:{
    width:40,
    height:40,
    borderRadius:50
  },

  subtitle: {
    marginTop: 8,
    fontSize: 15,
    color: '#fdf0e3',
    textAlign: 'center',
  },


  bannerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
  },

  bannerText: {
    marginTop: 10,
    color: '#666',
    fontSize: 15,
  },
  bannerImage:{
    height:200,
    width:'100%'
  },

  button: {
    marginTop: 20,
    backgroundColor: '#1976D2',
    paddingVertical: 12,
    borderRadius: 10,
    alignItems: 'center',
  },

  buttonText: {
    color: '#FFF',
    fontWeight: 'bold',
    fontSize: 16,
  },

  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginHorizontal: 20,
    marginTop: 10,
    marginBottom: 15,
    color: '#333',
  },

  servicesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    paddingHorizontal: 10,
    paddingTop:30
  },

  card: {
    width: '42%',
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    marginBottom: 15,
    alignItems: 'center',
    elevation: 2,
  },

  cardIcon: {
    fontSize: 35,
  },

  cardTitle: {
    marginTop: 10,
    fontWeight: '600',
    textAlign: 'center',
    color: '#333',
  },
   cardImg: {
    width:'100%',
    height:100
  },
  promoImg:{
   
    marginHorizontal:'5%',
    width:'90%',
    height:200,
    borderRadius:25,
    resizeMode:'contain',
    overflow:'hidden'
  },

  advantages: {
    margin: 20,
    backgroundColor: '#FFF',
    borderRadius: 15,
    padding: 20,
    elevation: 2,
  },

  advantage: {
    fontSize: 16,
    marginBottom: 10,
    color: '#444',
  },
 
});