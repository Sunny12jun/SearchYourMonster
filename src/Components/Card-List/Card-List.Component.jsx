import React from 'react';
import '../Card-List/card-list.styles.css'
// export class  CardListComponent extends React.PureComponent {
//     constructor(props) {
//         super(props)

//     }


//     render() {

//         return (
//             <div></div>

//         )
//     }



// }

import { Card } from '../Card/Card.Component'
export const CardList = props => {
    return (
        <div className='card-list'  >
            {props.monsters.map(monster =>
                <Card monster={monster} ></Card>
                // <h1 key={monster.id}>{monster.name}</h1>
            )}
        </div>)

}