import * as React from 'react';
import { IDropdownProps } from './IDropdownProps'; 
import styles from '../DropdownContainer.module.scss';

export class Dropdown extends React.Component<IDropdownProps> { 
    private dropdownRef: HTMLElement;

    constructor(props: IDropdownProps) { 
        super(props); 
    } 

    public render(): React.ReactElement<IDropdownProps> { 
        return ( 
            <div ref={el => this.dropdownRef = el} className={styles.dropdown}> 
                This is the dropdown 
            </div> 
        ); 
    } 

    public componentDidMount(){
        document.addEventListener('click', this.handleOutsideClick, false);
    }
        
    public componentWillUnmount(){
        document.removeEventListener('click', this.handleOutsideClick, false);
    }
        
    private handleOutsideClick = (event) : void => {
        var myElement = this.dropdownRef;
        
        if( myElement.contains(event.target)){
            return;
        }
            
        // the click is outside of our element, so now we want to do something — to close the dropdown
        // we do this by calling the callback function
        this.props.clickOutsideCallback(event);
    }
        
} 
