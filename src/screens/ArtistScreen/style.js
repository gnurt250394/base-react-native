import {StyleSheet} from 'react-native'
import Utils from "../../utils";

const HEADER_IMAGE_HEIGHT = Utils.ThemeUtils.relativeHeight(30);
export default StyleSheet.create({
    container: {
        flex: 1,
    },
    /*header style*/
    headerLeftIcon: {
        position: 'absolute',
        left: Utils.ThemeUtils.relativeWidth(2),
    },
    headerRightIcon: {
        position: 'absolute',
        right: Utils.ThemeUtils.relativeWidth(2),
    },
    headerStyle: {
        height: Utils.ThemeUtils.APPBAR_HEIGHT,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 200,
    },
    headerTitle: {
        textAlign: 'center',
        justifyContent: 'center',
        color: Utils.Color.HEADER_TEXT_COLOR,
        fontSize: Utils.ThemeUtils.fontNormal
    },
    /*Top Image Style*/
    headerImageStyle: {
        height: HEADER_IMAGE_HEIGHT,
        width: '100%',
        top: 0,
        alignSelf: 'center',
        position: 'absolute'
    },
    /*profile image style*/
    profileImage: {
        position: 'absolute',
        zIndex: 100,
    },
    /*profile title style*/
    profileTitle: {
        position: 'absolute',
        zIndex: 100,
        textAlign: 'center',
        color: Utils.Color.BLACK,
        top: Utils.ThemeUtils.relativeHeight(35),
        left: 0,
        right: 0,
        fontSize: Utils.ThemeUtils.fontXLarge
    },
    /*song count text style*/
    songCountStyle: {
        position: 'absolute',
        textAlign: 'center',
        fontWeight: '400',
        top: Utils.ThemeUtils.relativeHeight(40),
        left: 0,
        right: 0,
        fontSize: Utils.ThemeUtils.fontNormal,
    },
    artistCardContainerStyle: {
        backgroundColor: Utils.Color.CARD_BG_COLOR,
        elevation: 5,
        shadowRadius: 3,
        shadowOffset: {
            width: 3,
            height: 3
        },
        padding: 15,
        marginVertical: Utils.ThemeUtils.relativeWidth(1),
        marginHorizontal: Utils.ThemeUtils.relativeWidth(2),
        flexDirection: 'row',
        alignItems: 'center'
    },
    artistImage: {
        height: Utils.ThemeUtils.relativeWidth(15),
        width: Utils.ThemeUtils.relativeWidth(15),
        borderRadius: Utils.ThemeUtils.relativeWidth(7.5)
    },
    songTitleStyle: {
        fontSize: Utils.ThemeUtils.fontNormal,
        color: Utils.Color.BLACK
    },
    cardTextContainer: {
        flex: 1,
        margin: Utils.ThemeUtils.relativeWidth(3)
    },

})