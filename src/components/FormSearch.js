import React from 'react';

class FormSearch extends React.Component {
  constructor(props) {
    super(props);
  }


  componentDidMount() {
    const search = document.getElementById('search-txt')
    search.addEventListener('keypress', (e) => {
        if(e.key === 'Enter')
            this.props.handlerOnClickSearch()
    })
  }

  render() {
    return (
      <div className="input-group mt-3 px-5">
        <input
          type="text"
          id='search-txt'
          className="form-control"
          placeholder="Nhập từ khóa bạn muốn tìm..."
          aria-label="Recipient's username"
          aria-describedby="button-addon2"
          onChange={this.props.handlerOnChange}
        />
        <button
          className="btn btn-outline-success"
          type="button"
          id="button-addon2"
          onClick={this.props.handlerOnClickSearch}
        >
          Tìm kiếm
        </button>
      </div>
    );
  }
}

export default FormSearch;
