import React, { Fragment, PureComponent } from "react"
import { MdFilterList } from "react-icons/md"
import Select from "react-select"
import Media from "react-media"
import { find } from "lodash"
const options = [
  { value: "relevance", label: "Relevance" },
  { value: "date", label: "Date" },
  { value: "viewCount", label: "View Count" }
]

class Filters extends PureComponent {
  constructor(props) {
    super(props)
    let selectedOption = find(options, ["value", this.props.activeFilter])
    this.state = {
      opened: false,
      selectedOption: selectedOption,
      sort: props.activeFilter,
      type: ""
    }
  }

  collapseHandler = () => {
    this.setState(prevState => ({
      ...prevState,
      opened: !prevState.opened
    }))
  }

  changeHandler = e => {
    e.persist()
    let selectedOption = find(options, ["value", e.target.value])
    if (e.target.checked) {
      this.setState(
        {
          opened: false,
          [e.target.name]: e.target.value,
          selectedOption
        },
        () => this.props.onFilter(this.state)
      )
    }
  }

  changeSelect = ({ value, label }) => {
    this.setState(
      {
        opened: false,
        sort: value,
        selectedOption: { value, label }
      },
      () => this.props.onFilter(this.state)
    )
  }

  componentDidUpdate(prevProps) {
    if (this.props.activeFilter !== prevProps.activeFilter) {
      let selectedOption = find(options, ["value", this.props.activeFilter])
      this.setState(
        {
          opened: false,
          sort: this.props.activeFilter,
          selectedOption: selectedOption
        },
        () => this.props.onFilter(this.state)
      )
    }
  }

  render() {
    return (
      <Media query={{ maxWidth: 576 }}>
        {matches =>
          matches ? (
            <Select
              className="filters-select"
              isSearchable={false}
              options={options}
              onChange={this.changeSelect}
              value={this.state.selectedOption}
            />
          ) : (
            <Fragment>
              <button type="button" className="results-filters" onClick={this.collapseHandler}>
                <MdFilterList style={{ verticalAlign: "middle" }} />
                <span>Filters</span>
              </button>
              <form
                onSubmit={e => e.preventDefault()}
                className={`filters-collapse ${this.state.opened ? "opened" : ""}`}
              >
                <div className="filters-group">
                  <h4 className="filters-group_title">Sort By</h4>
                  <ul className="filters-list">
                    <li className="filter-item">
                      <label
                        className={`filter-label ${
                          this.state.sort === "relevance" ? "active" : ""
                        }`}
                        htmlFor="sortRelevance"
                      >
                        Relevance
                      </label>
                      <input
                        id="sortRelevance"
                        type="radio"
                        name="sort"
                        value="relevance"
                        checked={this.state.sort === "relevance" ? true : false}
                        onChange={this.changeHandler}
                      />
                    </li>
                    <li className="filter-item">
                      <label
                        className={`filter-label ${this.state.sort === "date" ? "active" : ""}`}
                        htmlFor="sortDate"
                      >
                        Date
                      </label>
                      <input
                        id="sortDate"
                        type="radio"
                        name="sort"
                        value="date"
                        checked={this.state.sort === "date" ? true : false}
                        onChange={this.changeHandler}
                      />
                    </li>
                    <li className="filter-item">
                      <label
                        className={`filter-label ${
                          this.state.sort === "viewCount" ? "active" : ""
                        }`}
                        htmlFor="sortViewCount"
                      >
                        View Count
                      </label>
                      <input
                        id="sortViewCount"
                        type="radio"
                        name="sort"
                        value="viewCount"
                        checked={this.state.sort === "viewCount" ? true : false}
                        onChange={this.changeHandler}
                      />
                    </li>
                  </ul>
                </div>
              </form>
            </Fragment>
          )
        }
      </Media>
    )
  }
}

export default Filters
