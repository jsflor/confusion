import React from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap';
import DishDetail from './DishdetailComponent';

export default class Menu extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }

    renderDish(dish) {
        if(dish != null){
            return (
                <DishDetail dish={this.state.selectedDish} />
            );
        } else {
            return (
                <div></div>
            );
        }
    }

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
                <div className='col-12 col-md-5 m-1' key={dish.id} onClick={() => this.onDishSelect(dish)}>
                    <Card>
                        <CardImg width='100%' src={dish.image} />
                        <CardImgOverlay>
                            <CardTitle>{dish.name}</CardTitle>
                        </CardImgOverlay>
                    </Card>
                </div>
            );
        });
        return (
            <div className='container'>
               <div className='row'>{menu}</div>
                {this.renderDish(this.state.selectedDish)}
            </div>
        );
    }
}