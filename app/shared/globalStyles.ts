import {StyleSheet, Platform, TextStyle} from 'react-native';
import {Colors} from './Colors';

export const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  headerContainer: {
    backgroundColor: Colors.dark,
    height: Platform.OS === 'android' ? 56 : 44,
    paddingTop: 0,
  },
  drawerContainer: {
    backgroundColor: Colors.dark,
    flex: 1,
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
