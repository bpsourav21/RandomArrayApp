import React, { Component } from 'react';
import { connect } from "react-redux";
import { WebView, StyleSheet, View } from 'react-native';


class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    componentDidMount(props) {
    }
    render() {
        return (
            <View style={styles.container}>
              <View style={{flex:1}}>
                    <WebView
                        source={{uri: 'https://mixed.revcontents.com/07-gg/'}}
                    />
                </View>
                <View style={{alignItems:"center"}}>
                    {/* <AdMobBanner
                        adSize="banner"
                        //testDevices={[AdMobBanner.simulatorId]}
                        adUnitID="ca-app-pub-3940256099942544/2934735716"
                        onAdFailedToLoad={error => console.log(error)}
                        onAdClosed= {() => console.log ("I am close")}
                        /> */}
                    {/* <PublisherBanner
                        adSize="banner"
                        validAdSizes={['banner', 'largeBanner', 'mediumRectangle']}
                        adUnitID="/6499/example/APIDemo/AdSizes"
                        ref={el => (this._adSizesExample = el)}
                        /> */}
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center',
        backgroundColor: '#fafafa',
    },
    welcome: {
        fontFamily: 'Roboto',
        fontSize: 34,
        textAlign: 'center',
        color: "#00804A",
        fontWeight: "bold"
    },
    button: {
        borderRadius: 10,
        marginLeft: 30,
        marginRight: 30,
        marginTop: 20
    }
});
// ======================== REDUX CONNECTORS ========================
const mapStateToProps = (state) => {
    return {
    };
};
export default connect(mapStateToProps)(Home); 