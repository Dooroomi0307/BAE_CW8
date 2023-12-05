import React, { Component } from 'react';
import { DropdownButton, DropdownItem } from 'react-bootstrap';
import List from './List';

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onFilter = (event) => {
    this.setState({ type: event });
  }

  filterItem = (item) => {
    const { search, type } = this.state;
    const searchMatch = item.name.toLowerCase().includes(search);
    const typeFilter = type === "All" || item.type.toLowerCase() === type.toLowerCase();

    return searchMatch && typeFilter;
  }

  selectedItem = (eventKey) => {
    this.setState({ type: eventKey });
  }
  
  render(){
    return (
      <div className="filter-list">
        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.selectedItem}>
          <DropdownItem eventKey="All">All</DropdownItem><br></br>
          <DropdownItem eventKey="Fruit">Fruit</DropdownItem><br></br>
          <DropdownItem eventKey="Vegetable">Vegetable</DropdownItem>
        </DropdownButton><br></br>
        
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
