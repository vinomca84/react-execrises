import React from 'react';
import './index.css';
export default class DynamicTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      firstname: "",
      lastname: "",
      items: []
    }
  }

  updateItemsOne(event) {
    this.setState({
      firstname: event.target.value      
    });
  }

  updateItemsTwo(event) {
    this.setState({
      lastname: event.target.value
    });
  }
  handleClick() {
    var items = this.state.items;
    let data = [this.state.firstname,this.state.lastname]
    items.push(data);
    this.setState({
      items: items,
      firstname: "",
      lastname: "",
    });
  }

  handleItemChanged(i, event) {
    var items = this.state.items;
    items[i]  = event.target.value;

    this.setState({
      items: items
    });
  }

  handleItemDeleted(i) {
    var items = this.state.items;

    items.splice(i, 1);

    this.setState({
      items: items
    });
  }

  renderRows() {
    var context = this;

    return this.state.items.map(function(o, i) {
              return (
                <tr key={"item-" + i}>
                  <td>
                    {o[0]}
                  </td>
                  <td>
                    {o[1]}
                  </td>
                  <td>
                    <button
                      onClick={context.handleItemDeleted.bind(context, i)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
      );
    });
  }

  render() {
    return (
      <div className="listitems">
        <input
          type="text"
          value={this.state.firstname}
          onChange={this.updateItemsOne.bind(this)}
        />
        <input
          type="text"
          value={this.state.lastname}
          onChange={this.updateItemsTwo.bind(this)}
        />
        <button onClick={this.handleClick.bind(this)}>
          Add Item
        </button>
        <table>
          <thead>
            <tr>
              <th>Firstname</th>
              <th>Lastname</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {this.renderRows()}
          </tbody>
        </table>
      </div>
    );
  }
}