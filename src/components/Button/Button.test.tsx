import React from 'react';
import { fireEvent } from '@testing-library/react';
import { render } from '@testing-library/react';
import Button,{ButtonProps,ButtonSize,ButtonType} from './index'



const defaultProps = {
    onClick:jest.fn(),
}

const testProps ={
    btnType:ButtonType.Primary,
    size:ButtonSize.Large,
    className:'sampleclass'
}

const disabledProps={
    disabled:true,
    onClick:jest.fn()
}

describe('test button component', () => {
    it('should render the currect default button', () => {
        const wrapper = render(<Button {...defaultProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.tagName).toEqual('BUTTON');
        expect(element).toHaveClass('btn btn-default');
        expect(element.disabled).toBeFalsy();
        fireEvent.click(element);
        expect(defaultProps.onClick).toHaveBeenCalled();    
    })
    it('should render the currect component base on different props', () => {
        const wrapper = render(<Button {...testProps}>Nice</Button>)
        const element = wrapper.getByText('Nice');
        expect(element).toBeInTheDocument();
        expect(element).toHaveClass('btn-primary btn-lg sampleclass')
    })
    it('should render a link when btnType euqal  link and href is provided', () => {
        const wrapper = render(<Button btnType={ButtonType.Link} href="https://www.baidu.com">Link</Button>)
        const element = wrapper.getByText('Link');
        expect(element.tagName).toEqual('A')
        expect(element).toHaveClass('btn btn-link')
    })
    it('should render disabled button when disabled prop set to true', () => {
        const wrapper = render(<Button {...disabledProps}>Nice</Button>)
        const element = wrapper.getByText('Nice') as HTMLButtonElement;
        expect(element).toBeInTheDocument();
        expect(element.disabled).toBeTruthy();
        fireEvent.click(element);
        expect(disabledProps.onClick).not.toHaveBeenCalled();    
    })
})