import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import Home from '../components/Home';
import configureMockStore from 'redux-mock-store';
import { Platform, TouchableOpacity } from 'react-native';

const createTestProps = (props) => ({
    navigation: {
      navigate: jest.fn()
    },
    ...props
  });


const mockStore = configureMockStore();


describe('<Home />', () => {
  const store = mockStore({ });
  let props;
  beforeEach(() => {
    props = createTestProps({});
  });

    it('has 1 child', () => {
        const component = renderer.create(<Home store = {store} props = {props}/>);
        const tree = renderer.create(<Home store = {store} props = {props}/>).toJSON();
        console.log(component);
        expect(tree.children.length).toBe(1);
    });

    // it("onpress test", () => {
    //     let homeComponent = renderer.create(<Home store = {store} props = {props}/>).getInstance()
    //     console.log(homeComponent);
    //     homeComponent.handleClick();
    //     expect(homeComponent.props.navigation.navigate).toBeCalled();
    // });
});