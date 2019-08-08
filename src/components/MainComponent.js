import React from 'react';
import { Navbar, NavbarBrand } from 'reactstrap';
import { DISHES } from '../shared/dishes';
import Menu from './MenuComponent';
import DishDetail from './DishdetailComponent';

export default class Main extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: DISHES,
            selectedDish: null
        }
    }
    onDishSelect = (id) => {
        this.setState({ selectedDish: id });
    }
    render() {
        return (
            <div>
                <Navbar dark color='primary'>
                    <div className='container'>
                        <NavbarBrand href='#'>JSEBASF Restaurant</NavbarBrand>
                    </div>
                </Navbar>
                <Menu dishes={this.state.dishes} onClick={this.onDishSelect} />
                <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
            </div>
        );
    }
}