import styles from "./GifList.module.css"
import { Component } from "react"
import axios from "axios";

export default class GifList extends Component {
    state = {
        gifs: []
    }

    fetchGifs = () => {
        axios.get("https://api.giphy.com/v1/gifs/search", {
            params: {
                api_key: "R87gwnQsFKPj40m6nuer5iMGkd2OuzI2",
                q: this.props.search,
                limit: 30
            }
        })
            .then(response => {
                this.setState({ gifs: response.data.data })
                console.log(response.data.data)
            })
            .catch(error => {
                console.error(error);
            });
    }

    render() {
        if (this.props.search === '') {
            return (
                <div className={styles.div}><h2 className={styles.title}>You haven't entered anything yet</h2></div>
            )
        } else {
            return (
                <ul className={styles.list}>
                    {this.state.gifs.map((gif, index) => {
                        return <li key={index} className={styles.item}>
                                <img className={styles.gif} src={gif.images.original.url} alt={gif.title}/>                      
                            </li>
                    })}
                </ul>
            )
        }
    }

    componentDidMount() {
        if (this.props.search !== '') {
            this.fetchGifs()
        } 
    }   

    componentDidUpdate(prevProps, _prevState) {
        if (prevProps.search !== this.props.search) {
            this.fetchGifs();
        }
    }

    componentWillUnmount() {
        this.setState({ gifs: [] })
    }
}