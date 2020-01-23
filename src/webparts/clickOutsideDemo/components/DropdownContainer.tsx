import * as React from 'react';
import { IDropdownContainerProps } from './IDropdownContainerProps';
import { IDropdownContainerState } from './IDropdownContainerState';
import { Dropdown } from './Dropdown/Dropdown';


export default class DropdownContainer extends React.Component<IDropdownContainerProps, IDropdownContainerState> {

  constructor(props: IDropdownContainerProps) { 
    super(props); 
    this.state = { 
      dropdownOpen: false 
    } 
  } 

  public render(): React.ReactElement<IDropdownContainerProps> {
    return (
      <div>
        <button onClick={(e) => this.buttonClick(e)}>Toggle dropdown</button> 
        { this.state.dropdownOpen && (
          <Dropdown clickOutsideCallback={(e) => this.buttonClick(e)} />
        )}
          
      </div>
    );
  }

  private buttonClick = (e) => {
    // keep the button click from propagating up and reloading the page
    e.preventDefault();
    e.stopPropagation();

    // set the state for dropdownOpen to be the opposite of what it currently is
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }

}
