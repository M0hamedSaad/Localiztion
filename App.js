import React, { Component } from 'react';
import {
  View, Text, KeyboardAvoidingView, ScrollView, Image,
  TouchableOpacity, I18nManager, TextInput,
} from 'react-native';
import g from './Global';
import styles from './styles';
import i18n from './i18n';
import RNRestart from 'react-native-restart';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  change(lang) {
    if ((lang == 'ar' && !I18nManager.isRTL) || (lang == 'en' && I18nManager.isRTL))
      console.log("Don't Change");
    else {
      i18n
        .changeLanguage(lang == 'ar' ? 'en' : 'ar')
        .then(() => {
          I18nManager.forceRTL(i18n.language === 'ar');
          try {
          } catch (e) {
            console.log(e)
          }
          RNRestart.Restart();
        });
    }
  }

  render() {
    return (
      <>
        <KeyboardAvoidingView style={styles.contain}
          behavior={Platform.OS === "ios" ? "padding" : 'position'}
          keyboardVerticalOffset={Platform.OS === "ios" ? 64 : -240}>
          <ScrollView showsVerticalScrollIndicator={false}>

            <View style={styles.LoginContainer} >

              <Image
                source={{ uri: 'https://www.designfreelogoonline.com/wp-content/uploads/2016/03/00106-3D-company-logo-design-free-logo-online-Template-02.png' }}
                style={styles.logo}
              />
              <Text style={styles.login}>
                {g.LOGIN}
              </Text>

              <Text style={styles.enter}>
                {g.ENTER_USERNAME_PASSWORD}
              </Text>

              <Text style={styles.username}>
                {g.USERNAME}
              </Text>

              <View style={styles.viewInput}>
                <TextInput
                  onChangeText={(email) => this.setState({ email })}
                  keyboardType="email-address"
                  autoCapitalize='none'
                  autoCorrect={false}
                  placeholder={g.USERNAME}
                  placeholderTextColor={g.Light_Gray}
                  style={styles.input} />
              </View>

              <Text style={[styles.username, styles.enter2]}>
                {g.PASSWORD}
              </Text>

              <View style={styles.viewInput}>
                <TextInput
                  onChangeText={(password) => this.setState({ password })}
                  secureTextEntry
                  autoCorrect={false}
                  placeholder={g.PASSWORD}
                  placeholderTextColor={g.Light_Gray}
                  style={styles.input} />
              </View>

              <Text style={[styles.forget, styles.enter2]}>
                {g.FORGET_PASSWORD}
              </Text>

              <TouchableOpacity style={styles.btn} >
                <Text style={styles.txt_btn}>{g.LOGIN}</Text>
              </TouchableOpacity>

              <View style={styles.lang}>
                <TouchableOpacity style={styles.btnAr}
                  onPress={() => { this.change('ar') }} >
                  <Text style={styles.txt_btn}>{'العربية'}</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnAr}
                  onPress={() => { this.change('en') }} >
                  <Text style={styles.txt_btn}>{'English'}</Text>
                </TouchableOpacity>
              </View>


              <View style={styles.row}>
                <Text style={styles.sign}>
                  {g.SIGNUP}
                </Text>
                <Text style={styles.sign1}>
                  {g.ACCOUNT}
                </Text>
              </View>

            </View>
          </ScrollView>
        </KeyboardAvoidingView>

      </>
    );
  }
}
