import {StyleSheet, Platform} from 'react-native';
import {Colors} from './Colors';

export const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.white,
    padding: 10,
    flex: 1,
  },
  containerCentered: {
    flex: 1,
    justifyContent: 'center',
    alignContent: 'center',
    padding: 10,
  },
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  headerContainer: {
    backgroundColor: Colors.theme,
    height: Platform.OS === 'android' ? 56 : 44,
    paddingTop: 0,
  },
  drawerContainerTop: {
    backgroundColor: Colors.theme,
    flex: 3,
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerContainerMiddle: {
    flex: 7,
  },
  drawerContainerBottom: {
    flex: 2,
    backgroundColor: Colors.theme,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
  },
  productContatiner: {
    flex: 1,
    flexDirection: 'row',
    backgroundColor: Colors.dullBackground,
    height: 80,
  },
  swipeableRemove: {
    width: 60,
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  highlight: {
    fontWeight: '700',
  },
  footer: {
    color: Colors.dark,
    fontSize: 12,
    fontWeight: '600',
    padding: 4,
    paddingRight: 12,
    textAlign: 'right',
  },
  flex1: {
    flex: 1,
  },
  flex2: {
    flex: 2,
  },
  flex3: {
    flex: 3,
  },
  flex4: {
    flex: 4,
  },
  flex5: {
    flex: 5,
  },
  flex6: {
    flex: 6,
  },
  flex7: {
    flex: 7,
  },
  flex8: {
    flex: 8,
  },
  flexRow1: {
    flexDirection: 'row',
    flex: 1,
  },
  flexRow2: {
    flexDirection: 'row',
    flex: 2,
  },
  flexRow3: {
    flexDirection: 'row',
    flex: 3,
  },
  flexRow4: {
    flexDirection: 'row',
    flex: 4,
  },
  flexRow5: {
    flexDirection: 'row',
    flex: 5,
  },
  flexRow6: {
    flexDirection: 'row',
    flex: 6,
  },
  flexRow7: {
    flexDirection: 'row',
    flex: 7,
  },
  flexRow8: {
    flexDirection: 'row',
    flex: 8,
  },
  error: {color: 'red', fontSize: 12},
  textCenter: {textAlign: 'center'},
  textLeft: {textAlign: 'left'},
  textRight: {textAlign: 'right'},
});

export const textStyle = (
  color?: string | undefined,
  fontSize?: number | undefined,
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
    | undefined,
) => {
  const colorVal = color ? color : '#000';
  const fontSizeVal = fontSize ? fontSize : 14;
  const fontWeightVal = fontWeight ? fontWeight : 'normal';

  return {
    color: colorVal,
    fontSize: fontSizeVal,
    fontWeight: fontWeightVal,
  };
};

export const itemWidth = (width: number) => {
  return {
    width: width,
  };
};

export const itemHeight = (height: number) => {
  return {
    height: height,
  };
};
