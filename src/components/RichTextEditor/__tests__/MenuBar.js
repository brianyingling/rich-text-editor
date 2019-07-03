import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import MenuBar from '../MenuBar';


configure({ adapter: new Adapter() });

const wrapper = shallow(
    <MenuBar/>
);

describe('<MenuBar/>', () => {
    it('exists', () => {
        expect(wrapper.find(MenuBar)).toBeDefined();
    });
});