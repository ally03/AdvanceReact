// import React, { Component } from "react";
// // import SearchField from "react-search-field";
// import SearchField from "react-search-field";

// const Search = props => (
//   <SearchField
//     placeholder="Search..."
//     onChange={onChange}
//     searchText="This is initial search text"
//     classNames="test-class"
//   />
// );

// export default Search;

import React, { Component } from "react";
import SearchField from "react-search-box";

export default class Search extends Component {
  data = [
    {
      key: "john",
      value: "John Doe"
    },
    {
      key: "jane",
      value: "Jane Doe"
    },
    {
      key: "mary",
      value: "Mary Phillips"
    },
    {
      key: "robert",
      value: "Robert"
    },
    {
      key: "karius",
      value: "Karius"
    },
    {
      key: "Alid",
      value: "lucho"
    }
  ];

  render() {
    return (
      <SearchField
        placeholder="Placeholder"
        value="Doe"
        data={this.data}
        callback={record => console.log(record)}
      />
    );
  }
}
