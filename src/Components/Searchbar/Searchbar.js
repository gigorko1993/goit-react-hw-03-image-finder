import React, { Component } from 'react';
import s from './Searchbar.module.css';
console.log(s);

class Searchbar extends Component {
  state = {
    value: '',
  };

  onSubmit = e => {
    e.preventDefault();

    if (this.state.value.trim() !== '') {
      this.props.setVal(this.state.value);
      this.setState({ value: '' });
    }
  };

  onChange = e => {
    this.setState({ value: e.target.value });
  };

  render() {
    const { value } = this.state;
    return (
      <header className={s.Searchbar}>
        <form className={s.SearchForm} onSubmit={this.onSubmit}>
          <button type="submit" className={s.button}>
            <span className={s.buttonLabel}>Search</span>
          </button>

          <input
            onChange={this.onChange}
            className={s.SearchFormInput}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            value={value}
          />
        </form>
      </header>
    );
  }
}

export default Searchbar;
