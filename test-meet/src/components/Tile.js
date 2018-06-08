import React from 'react'


class Tile extends React.Component {

    render() {
        return (
            <div className="column card">
                <div className="card-image card-shadow img justify-content: center columns is-centered">
                    <img src={this.props.src} />
                </div>
                
                    <div className="card-content has-background-grey has-text-light has-text-weight-bold is-size-3 has-text-centered">
                        {this.props.linkText}
                    </div>
            
            </div>
        )
    }
}

export default Tile