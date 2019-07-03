import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import  MenuBar from '../MenuBar';
import RichTextEditor from '../index';
import ViewPane from '../ViewPane';

configure({ adapter: new Adapter() });

const wrapper = shallow(
    <RichTextEditor/>
);

describe('<RichTextEditor/>', () => {
    it('exists', () => {
        expect(wrapper.find(RichTextEditor)).toBeDefined();
    });
    it('should render the MenuBar', () => {
        expect(wrapper.find(MenuBar)).toHaveLength(1);
    });
    it('should render the ViewPane', () => {
        expect(wrapper.find(ViewPane)).toHaveLength(1);
    });
});
