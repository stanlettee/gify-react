import styles from './GifSearch.module.css'
import { Component } from 'react'

export default class GifSearch extends Component {
    state = {
        input: this.props.search
    }

    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleSearchChange(this.state.input);
    }

    render() {
        return (
            <form className={styles.form} onSubmit={this.handleSubmit}>
                <input onChange={(e) => this.setState({ input: e.target.value })} placeholder="Enter a name of the gif" value={this.state.input} type="text" className={styles.input}/>
                <button type='submit' className={styles.button}>Enter</button>
            </form>
        )
}
}