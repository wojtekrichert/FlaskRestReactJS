import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'


class Rest extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("http://127.0.0.1:5000/")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                    },
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
                )
  }
  render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {items}
                </div>
            );
        }
    }
}

// ========================================

ReactDOM.render(
  <Rest />,
  document.getElementById('root')
);

