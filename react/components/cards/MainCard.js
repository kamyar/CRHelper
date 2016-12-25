
import React from 'react';

import SBBaseComp from '../common/SBBaseComp';

export default class HelloWorldCard extends SBBaseComp {
    constructor(props) {
        super(props);
        this._bind([
            'getCardsComp'
        ]);
    }

    getCardsComp() {
        let cardsComp = this.props.cards.map((cobj, i) => {
            return (
                <div key={i} className="flex-box">
                    {cobj.name} {cobj.cost}
                    <img src="/static/img/cards/DartGoblinCard.png" alt={cobj.name}/>
                </div>
            )
        });
        return (
            <div className="flex-box flex-wrap">
                {cardsComp}
            </div>
        )
    }

    render() {
        return (
            <div className="main-card">
                {this.getCardsComp()}
            </div>
        );
    }

}
