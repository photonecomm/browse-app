import React from 'react';
import {mount} from 'enzyme';
import {expect} from 'chai';
import jsdom from 'jsdom';
import App from '../../../../src/ui/components/app/App';

const doc = jsdom.jsdom('<!doctype html><html><head><title></title></head><body><meta></meta></body></html>');
global.document = doc;
global.window = doc.defaultView;


describe('Render Root', () => {
    const wrapper = mount(
        <App />
	);

    it('wag-root available ', () => {
    	expect(wrapper.find('.app-page').length).to.equal(1);
    });
});
