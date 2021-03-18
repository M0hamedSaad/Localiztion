import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Platform, Dimensions, I18nManager } from 'react-native';
import g from './Global';


export default {

    contain: {
        backgroundColor: 'white',
        flex: 1,
    },
    LoginContainer: {
        marginTop: hp('5%')
    },
    logo: { width: 120, height: 120, marginLeft: 'auto', marginRight: 'auto' },

    login:
    {
        fontSize: 24, color: g.BLACK,
        fontWeight: Platform.OS == "ios" ? "800" : null, marginRight: wp('10'),
        marginTop: hp('5%'), textAlign: 'right'
    },

    viewInput:
    {
        marginTop: hp('2%'), marginRight: 'auto', marginLeft: 'auto',
        borderColor: g.Light_Gray, borderWidth: .5, borderRadius: 10,
        justifyContent: 'center',
        height: hp('8%'), width: wp('80%'), textAlign: 'right'
    },
    input:
    {
        textAlign: !I18nManager.isRTL ? 'right' : 'left', fontSize: 16,
        padding: 10, color: 'black'
    },

    enter:
    {
        fontSize: 16, color: g.BLACK, marginRight: wp('10'),
        marginTop: hp('2'), textAlign: 'right'
    },

    username:
    {
        fontSize: 14, color: g.Gray, marginRight: wp('10'),
        marginTop: hp('5%'), textAlign: 'right'
    },



    forget:
    {
        fontSize: 16, color: g.Blue,
        fontWeight: Platform.OS == "ios" ? "800" : null,
        marginTop: hp('5%'), marginRight: wp('50'),
    },

    btn:
    {
        marginTop: hp('3%'), marginLeft: 'auto', marginRight: 'auto',
        borderRadius: 10, backgroundColor: g.Bold_blue, alignItems: 'center',
        justifyContent: 'center',
        height: hp('8%'), width: wp('80%')
    },

    btnAr:
    {
        marginTop: hp('3%'),
        borderRadius: 10, backgroundColor: '#273A7095', alignItems: 'center',
        justifyContent: 'center',
        height: hp('8%'), width: wp('30%')
    },

    txt_btn:
    {
        fontSize: 16, color: g.white,
        fontWeight: Platform.OS == "ios" ? "800" : null, textAlign: 'center'
    },
    txt_btn2:
    {
        fontSize: 16,
        fontWeight: Platform.OS == "ios" ? "800" : null, textAlign: 'center'
    },
    sign1:
    {
        fontSize: 14, color: g.Ferany,
        fontWeight: Platform.OS == "ios" ? "800" : null,
        marginRight: wp('10'),
        marginTop: hp('1%'), marginRight: wp('2%')
    },
    sign:
    {
        fontSize: 14, color: g.Blue,
        fontWeight: Platform.OS == "ios" ? "800" : null, marginRight: wp('10'),
        marginTop: hp('1%'), marginRight: wp('2%')
    },

    row:
    {
        flexDirection: 'row', marginLeft: 'auto', marginTop: hp('10'), marginBottom: hp('5')
        , marginRight: 'auto',
    },

    change:
    {
        color: g.BLACK, fontSize: 20, marginTop: hp('4%'), marginLeft: wp('40%')
        , fontFamily: Platform.OS == "android" ? g.Bold : g.Regular, fontWeight: Platform.OS == "ios" ? "800" : null, marginRight: wp('10'),


    },

    change_title:
    {
        color: g.BLACK, fontSize: 20, marginTop: hp('4%'), marginRight: wp('35%'),
        textAlign: 'center',
        fontWeight: Platform.OS == "ios" ? "800" : null, marginRight: wp('10'),

    },
    lang: {

        flexDirection: 'row-reverse', marginLeft: 'auto', marginRight: 'auto',
        width: '70%', justifyContent: 'space-around'

    }



};