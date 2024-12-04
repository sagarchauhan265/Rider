import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import Icon from 'react-native-vector-icons/AntDesign';
import { colorMain } from "../../constant/Colors";
import { useRoute } from "@react-navigation/native"
export default function PaymentPage(props) {
  const route = useRoute();
   console.log("payment",route?.params?.selectedItem?.total_fare)

  return (
    <View >
      <View style={styles.containerHeader}>
      <TouchableOpacity onPress={() => props.navigation.goBack()}>
          <Icon name={'arrowleft'} color={colorMain.whiteColor} size={25} />
        </TouchableOpacity>
        <Text style={[styles.header, styles.headerText]}>Payments</Text>
        {/* <FontAwesome name="question-circle" size={24} color="black" /> */}
      </View>

      <ScrollView contentContainerStyle={styles.container}>
        <View style={styles.row}>
          <Text style={styles.boldText}>Total Fare</Text>
          <Text style={styles.boldText}>₹{route?.params?.selectedItem?.total_fare}</Text>
        </View>
        <View style={styles.divider} />
        <View style={styles.card}>
          <View style={styles.pinkCard}>
            <Text style={styles.smallText}>
              Cashback upto Rs. 200 | Min order value of Rs. 49 | Twice per user per month | via CRED UPI | Valid till 31st Dec
            </Text>
          </View>
          <View style={[styles.row,]}>
            <View style={styles.row}>
              {/* <FontAwesome name="university" size={24} color="black" style={styles.icon} /> */}
              <Text style={styles.normalText}>Pay by any UPI app</Text>
            </View>
            <Text style={styles.linkText}>Choose</Text>
          </View>
        </View>
        {/* Pay Later card   */}
        <View style={styles.row}>
          <Text style={styles.boldText}>Pay Later</Text>
          {/* <Text style={styles.boldText}>₹95</Text> */}
        </View>
        <View style={styles.divider} />
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.row}>
              {/* <FontAwesome name="qrcode" size={24} color="black" style={styles.icon} /> */}
              <Text style={styles.normalText}>Pay at drop</Text>
            </View>
            <TouchableOpacity style={styles.radioButton} />
          </View>
          <View style={styles.pinkCard}>
            <Text style={styles.smallText}>
              Go cashless, after ride pay by scanning QR code
            </Text>
          </View>
          <View style={styles.divider} />
          <View style={[styles.row,]}>
            <View style={styles.row}>
              {/* <FontAwesome name="wallet" size={24} color="black" style={styles.icon} /> */}
              <Text style={styles.normalText}>Simple</Text>
            </View>
            <Text style={styles.linkText}>Link</Text>
          </View>
        </View>
        {/* others card   */}
        <View style={styles.row}>
          <Text style={styles.boldText}>Others</Text>
          {/* <Text style={styles.boldText}>₹95</Text> */}
        </View>
        <View style={styles.divider} />
        <View style={styles.card}>
          <View style={styles.row}>
            <View style={styles.row}>
              {/* <FontAwesome name="qrcode" size={24} color="black" style={styles.icon} /> */}
              <Text style={styles.normalText}>Cash</Text>
            </View>
            <TouchableOpacity style={styles.radioButton} />
          </View>
          <View style={styles.pinkCard}>
            <Text style={styles.smallText}>
              You can pay via cash or upi for your ride
            </Text>
          </View>

        </View>


      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 16,

    margin: 5
  },
  containerHeader: {
    flexGrow: 1,
    backgroundColor: '#eb6587',
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,

  },
  headerText: {
    fontSize: 24,
    fontWeight: '600',
    color: '#fff'
  },
  card: {
    backgroundColor: '#ffe4e1',
    borderRadius: 8,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 5,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  boldText: {
    fontSize: 16,
    fontWeight: '600',
    color: '#000'
  },
  smallText: {
    fontSize: 12,
    marginTop: 8,
    color: '#000'
  },
  normalText: {
    fontSize: 14,
    fontWeight: '600',
    marginTop: 8,
    color: '#000'
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
    marginVertical: 8,
  },
  pinkCard: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 8,
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
  },
  linkText: {
    color: '#ff69b4',
  },
  section: {
    marginBottom: 16,
  },
  radioButton: {
    height: 24,
    width: 24,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#ff69b4',
  },
});