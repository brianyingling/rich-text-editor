import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import ViewPane from '../ViewPane';

configure({ adapter: new Adapter() });

const wrapper = shallow(
    <ViewPane/>
);

describe('<ViewPane/>', () => {
    it('exists', () => {
        expect(wrapper.find(ViewPane)).toBeDefined();
    });
    it('has an iframe', () => {
        expect(wrapper.find('iframe')).toHaveLength(1);
    });
});