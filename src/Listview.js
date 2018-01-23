import React, { Component } from 'react';

import {
    Platform,
    StyleSheet,
    Text,
    View,
    Alert,
    ListView,
    TouchableOpacity,

} from 'react-native';



const ds = new ListView.DataSource({ rowHasChanged: (r1, r2) => r1 !== r2 });
const prof_det = "";


class Listview extends Component {


    constructor(props) {
        super(props);

        this.state = {
            dataSource: ds.cloneWithRows([
                {
                    "title": "Title1",
                    "subtitle": "SubTtitle1",


                },
                {
                    "title": "Title2",
                    "subtitle": "SubTtitle2",

                },
                {
                    "title": "Title3",
                    "subtitle": "SubTtitle3",
                },
                {
                    "title": "Title4",
                    "subtitle": "SubTtitle4",

                },
                {
                    "title": "Title5",
                    "subtitle": "SubTtitle5",
                },
                {
                    "title": "Title6",
                    "subtitle": "SubTtitle6",
                },

                {
                    "title": "Title7",
                    "subtitle": "SubTtitle7",


                },
                {
                    "title": "Title8",
                    "subtitle": "SubTtitle8",

                },
                {
                    "title": "Title9",
                    "subtitle": "SubTtitle9",
                },
                {
                    "title": "Title10",
                    "subtitle": "SubTtitle10",

                },
                {
                    "title": "Title11",
                    "subtitle": "SubTtitle11",
                },
                {
                    "title": "Title12",
                    "subtitle": "SubTtitle12",
                },


            ]),
        };

    }


    fun_onitem_click(title) {
        alert(title)
    }


    render() {
        return (

            <View style={styles.container}>

                <ListView
                    dataSource={this.state.dataSource}
                    //renderRow = {this._renderrow}
                    renderRow={
                        (rowData) => {
                            return (
                                <View style={styles.container}>

                                    <TouchableOpacity onPress={() => this.fun_onitem_click(rowData.title)}>
                                        <View style={styles.container}>

                                            <Text style={styles.title} >{rowData.title}</Text>
                                            <Text style={styles.subtitle}>{rowData.subtitle}</Text>

                                        </View>
                                    </TouchableOpacity>

                                    <View style={styles.devider} />

                                </View>

                            )
                        }
                    } />


            </View>
        )

    }
}

const styles = StyleSheet.create({


    container: {
        flex: 1,

    },

    title: {
        fontSize: 20,
        color: '#000000',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        textAlign: 'justify',
        margin: 10,

    },

    subtitle: {
        fontSize: 15,
        color: '#000000',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        textAlign: 'justify',
        marginLeft: 10,
        marginRight: 10,


    },

    devider: {
        flex: 1,
        alignSelf: 'stretch',
        height: 1,
        backgroundColor: '#000000',
        marginTop: 7,
    },

});
export default Listview;