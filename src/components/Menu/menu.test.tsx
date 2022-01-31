import React from 'react'
import { cleanup, fireEvent, render,RenderResult } from '@testing-library/react'
import Menu,{MenuProps} from './Menu'
import MenuItem from './MenuItem';


const testProps:MenuProps = {
    defaultIndex:0,
    onSelect:jest.fn(),
    className:'test'
}

const testVerticalProps:MenuProps = {
    defaultIndex:0,
    mode:'vertical',
}

const generateMenu=(props:MenuProps)=>(
    <Menu {...props}>
    <MenuItem index={0}>
      active
    </MenuItem>
    <MenuItem index={1} disabled>
      disabled
    </MenuItem>
    <MenuItem index={2}>
      third
    </MenuItem>
  </Menu>
)

let wrapper:RenderResult,menuElement:HTMLElement,activeElement:HTMLElement,disabledElement:HTMLElement;
describe('test Menu & MenuItem component',()=>{
    beforeEach(()=>{
        wrapper=render(generateMenu(testProps));
        menuElement=wrapper.getByTestId('test-menu');
        activeElement = wrapper.getByText('active');
        disabledElement = wrapper.getByText('disabled');
    })
    it('should render current menu base on default props',()=>{
        expect(menuElement).toBeInTheDocument();
        expect(menuElement).toHaveClass('pusu-menu test');
        expect(menuElement.getElementsByTagName('li').length).toEqual(3);
        expect(activeElement).toHaveClass('menu-item is-active');
        expect(disabledElement).toHaveClass('menu-item is-disabled');
    })
    it('click item should change item and call the right callback',()=>{
        const thirdItem = wrapper.getByText('third');
        fireEvent.click(thirdItem);
        expect(thirdItem).toHaveClass('is-active');
        expect(activeElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).toHaveBeenCalledWith(2);
        fireEvent.click(disabledElement);
        expect(disabledElement).not.toHaveClass('is-active');
        expect(testProps.onSelect).not.toHaveBeenCalledWith(1);
    })
    it('should render vertical mode when mode is set to vertical',()=>{
        cleanup();
        const wrapper = render(generateMenu(testVerticalProps));
        const menuElement = wrapper.getByTestId('test-menu');
        expect(menuElement).toHaveClass('menu-vertical');
    })
})