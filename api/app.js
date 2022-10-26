import React, { Component } from 'react';
import api from './api';

class App extends Component {

    state = {
        filmes: [],
    }

    async componentDidMount() {
        const response = await api.get('');
        console.log(response.data);
        this.setState( {filmes: response.data} );
    }

    render() {{

        const {filmes} = this.setState;
        returns(
            <div>
                <h1>BANKAI</h1>
                {filmes.map( filme => (
                    <li key={filme.show.id}>
                        <h2>
                            {filmes.show.name};
                        </h2>
                    </li>
                ))}
            </div>
        )
    }
}

export default App; 