import { render } from '@testing-library/react';
import React from 'react';

class ImageCreator extends React.Component {
    state = {
        text: '',
        allMemeImgs: [],
        randomImg: '',
    };

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
        .then(response => response.json())
        .then(content => 
            this.setState({
                allMemeImgs: content.data.memes
            })
        );
    }

    handleChange = (event:any) => {
        const { name, value } = event.target;

        this.setState({
            [name]: value
        });
    };

    handleSubmit = (event:any) => {
        event.preventDefault();
        const { allMemeImgs } = this.state;
        const rand = allMemeImgs[Math.floor(Math.random() * allMemeImgs.length)]['url'];
            this.setState({
                randomImg: rand
            });
    };

    render() {
        return (
            <div>
                <form className="meme-form" onSubmit={this.handleSubmit}>
                    <input
                        placeholder="Enter text"
                        type="text"
                        value={this.state.text}
                        name="text"
                        onChange={this.handleChange}
                    />
                    <button>Generate</button>
                </form>

                <br />
                <div className="meme">
                    {this.state.randomImg === '' ? '' :
                        <img src={this.state.randomImg} alt="meme" />
                    }
                    {this.state.randomImg === '' ? '' :
                        <h2 className="top">{this.state.text}</h2>
                    }
                </div>
            </div>
        );
    }
}

export default ImageCreator;