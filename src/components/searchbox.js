import React from "react"
import {AutoComplete} from "antd"

// const Option = AutoComplete.Option;
// const OptGroup = AutoComplete.OptGroup;

const ragalist = [
  "Shanmugapriya",
  "Shankarabharanam",
  "Mohanam",
  "Mayamalavagowla"
]

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  onSelect = (value) => {
    console.log('onSelect', value);
  }

  handleSearch = (inputVal) => {
    let results = []
    if (inputVal.length>0) {
      results = ragalist.filter((value)=>{
        return inputVal.toLowerCase() == value.toLowerCase().slice(0,inputVal.length)
      })
    }

   this.setState({ dataSource: results })
  }

  render () {
    return (
      <div>
        <AutoComplete
          dataSource={this.state.dataSource}
          style={{ width: 200 }}
          onSelect={this.onSelect}
          onSearch = {this.handleSearch}
          placeholder="Search for Raaga here..."
        />
      </div>
    )
  }
}

export default SearchBox
