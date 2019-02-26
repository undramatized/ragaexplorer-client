import React from "react"
import {AutoComplete} from "antd"

const Option = AutoComplete.Option;
const OptGroup = AutoComplete.OptGroup;

const ragalist = [
  "Shanmugapriya",
  "Shankarabharanam",
  "Mohanam",
  "Mayamalavagowla"
]

class SearchBox extends React.Component {
  render () {
    return (
      <div>
        <AutoComplete
          dataSource = {ragalist}
        />
      </div>
    )
  }
}

export default SearchBox
