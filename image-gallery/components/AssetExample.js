import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadImages } from '../React/action';
import {setCurrentPageIndex} from '../React/action';
import { View, Image, StyleSheet, Button, FlatList, ActivityIndicator } from 'react-native';
import { Card } from 'react-native-paper';
import Header from "./Header";

class ImageGrid extends Component {

    componentDidMount() {
        console.log("asses", this.props.authData);
        this.props.loadImages();
    }

    setPageIndex() {
        this.props.setCurrentPageIndex();
    }

    render() {
        const { isLoading, images, loadImages, error } = this.props;

        let loaderComponent =  (<View style={[styles.loader, styles.horizontalLoader]}>
                                    <ActivityIndicator size="large" />
                                </View>
                                );

      let listComponent = (
        <Fragment>
                  <Header navigation = {this.props.navigation}/>
        <Card style = {styles.imageContainer}>
            <View style = {styles.imageView}>
                <FlatList
                    data={images}
                    renderItem={(image) => (
                        <View style={{ flex: 1, flexDirection: 'column', margin: 1 }}>
                            <Image style={{justifyContent: 'center',alignItems: 'center',height: 100,}} 
                            source={{ uri: image.item.urls.small }}
                            />
                        </View>
                    )}
                    numColumns={2}
                    keyExtractor={(item, index) => index.toString()}
                />
            </View>
        </Card>
        <Button
            title = "Load More"
            onPress={() => {loadImages();this.setPageIndex()}}
            style = {{marginTop: 10}}
        >
            </Button>
        </Fragment>
      );
        return (
            isLoading? loaderComponent: listComponent
        );
    }
}

const styles = StyleSheet.create({
    imageContainer: {
        color: "#424242",
        shadowColor: "#000",
        elevation: 5,   
        shadowOffset: {
	        width: 0,
	        height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        marginTop: 15,
        marginBottom: 15,
        flex: 1
    },
    imageView: {
        padding: 10
    },
    loader : {
        flex: 1,
        justifyContent: "center"
    },
    horizontalLoader: {
        flexDirection: "row",
        justifyContent: "space-around",
        padding: 10
    }
})

const mapStateToProps = ({ isLoading, images, error, imageStats, pageIndex, authData }) => ({
    isLoading,
    images,
    error,
    imageStats,
    pageIndex,
    authData
});

const mapDispatchToProps = dispatch => ({
    loadImages: () => dispatch(loadImages()),
    setCurrentPageIndex: () => dispatch(setCurrentPageIndex())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps,
)(ImageGrid);
