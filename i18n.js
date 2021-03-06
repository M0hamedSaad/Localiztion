import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import { I18nManager } from 'react-native';

// the translations
// (tip move them in a JSON file and import them)
const resources = {
    ar: {
        translation: {
            'العربية': 'English',
            'تسجيل دخول': 'Log In',
            'ادخل اسم المستخدم وكلمة المرور الخاصة بك': 'Enter your username and password',
            'اسم المستخدم': 'Username',
            'كلمة المرور': 'Password',
            'انشاء مستخدم جديد': 'Create a new user',
            'ليس لديك حساب؟': 'You do not have an account?',
            'نسيت كلمة المرور؟': 'Forgot your password?',
        },
    },
};

i18n
    .use(initReactI18next) // passes i18n down to react-i18next
    .init({
        resources,
        lng: I18nManager.isRTL ? 'ar' : 'en',

        keySeparator: false, // we do not use keys in form messages.welcome

        interpolation: {
            escapeValue: false, // react already safes from xss
        },
    });
/* i18next.on('languageChanged', function(lng) {
   // E.g. set the moment locale with the current language
   moment.locale(lng);

   // then re-render your app
   app.render();
});*/

export default i18n;
