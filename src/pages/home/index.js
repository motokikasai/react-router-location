import React, { Component } from "react";
import "./index.css";
import GetSearchParams from "../helper/getSearchParams";

export default class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // lang
      english: false,
      german: false,
      italian: false,
      chinese: false,
      russian: false,
      // book type
      eBook: false,
      Paperback: false,
      Hardcover: false,
      // rating
      Rating: false,
    };
  }

  componentDidMount() {
    // this.props.location && console.log(this.props.location.search);
    const paramValue = GetSearchParams(this.props.location.search);
    console.log(paramValue);

    console.log(decodeURIComponent(paramValue.language).toLowerCase());
    const arrLang = decodeURIComponent(paramValue.language.toLowerCase())
      .replace(" ", ",")
      .split(",");
    console.log(arrLang);

    arrLang.forEach((item) => {
      if (this.state.hasOwnProperty(item)) {
        this.setState({
          [item]: true,
        });
      }
    });
  }

  render() {
    return (
      <div style={{ backgroundColor: "blue" }}>
        <div className="home-page">
          <h1>Filters</h1>

          <form>
            {/* Search term */}
            <div className="form-field">
              <label className="form-field__label">Search</label>

              <input name="search-term" type="text" />
            </div>

            {/* Used */}
            <div className="form-field">
              <label className="checkbox-field">
                <input name="used" type="checkbox" />
                <span className="checkbox-field__label">
                  Include used copies
                </span>
              </label>
            </div>

            {/* Preferred language */}
            <div className="form-field">
              <label className="form-field__label">Language</label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  readOnly
                  checked={this.state.english}
                />
                <span className="checkbox-field__label">English</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  readOnly
                  checked={this.state.german}
                />
                <span className="checkbox-field__label">German</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  readOnly
                  checked={this.state.italian}
                />
                <span className="checkbox-field__label">Italian</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  readOnly
                  checked={this.state.russian}
                />
                <span className="checkbox-field__label">Chineese</span>
              </label>

              <label className="checkbox-field">
                <input
                  name="language"
                  type="checkbox"
                  readOnly
                  checked={this.state.chinese}
                />
                <span className="checkbox-field__label">Russian</span>
              </label>
            </div>

            {/* Book type */}
            <div className="form-field">
              <label className="form-field__label">Book type</label>

              <label className="checkbox-field">
                <input name="book-type" type="checkbox" />
                <span className="checkbox-field__label">E-Book</span>
              </label>
              <label className="checkbox-field">
                <input name="book-type" type="checkbox" />
                <span className="checkbox-field__label">Paperback</span>
              </label>
              <label className="checkbox-field">
                <input name="book-type" type="checkbox" />
                <span className="checkbox-field__label">Hardcover</span>
              </label>
            </div>

            {/* Rating */}
            <div className="form-field">
              <label className="form-field__label">Rating</label>
              <label className="radio-field">
                <input name="customer-rating" type="radio" />
                <span className="radio-field__label">1 and up</span>
              </label>

              <label className="radio-field">
                <input name="customer-rating" type="radio" />
                <span className="radio-field__label">2 and up</span>
              </label>

              <label className="radio-field">
                <input name="customer-rating" type="radio" />
                <span className="radio-field__label">3 and up</span>
              </label>

              <label className="radio-field">
                <input name="customer-rating" type="radio" />
                <span className="radio-field__label">4 and up</span>
              </label>

              <label className="radio-field">
                <input name="customer-rating" type="radio" />
                <span className="radio-field__label">5 and up</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
