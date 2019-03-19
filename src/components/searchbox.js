import React from "react"
import { AutoComplete } from "antd"

const Option = AutoComplete.Option;
// const OptGroup = AutoComplete.OptGroup;

class SearchBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dataSource: []
    };
  }

  componentWillMount(props) {
    this.setState({ ragalist: this.props.ragas })
  }

  onSelect = (value, option) => {
    console.log('onSelect', value, option);
  }

  handleSearch = (inputVal) => {
    let results = []
    if (inputVal.length>0) {
      results = this.state.ragalist.filter((value)=>{
        return inputVal.toLowerCase() == value.name.toLowerCase().slice(0,inputVal.length)
      })
    }
    let resultOptions = results.map((raga)=>{
      return (
        <Option key={raga.id} value={raga.format_name}>
          {raga.format_name}
        </Option>
      )
    })
    console.log(resultOptions)
    this.setState({ dataSource: resultOptions })
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
