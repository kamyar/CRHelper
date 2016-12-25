
import React from 'react';

import SBBaseComp from '../common/SBBaseComp';

export default class HelloWorldCard extends SBBaseComp {
    render() {
        console.log("I work!");
        return (
            <div>
                Hello World!
            </div>
        );
    }

}
