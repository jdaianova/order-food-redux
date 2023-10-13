import Dish from "./Dish/Dish";
import data from '../../data/data';
import { useSelector } from 'react-redux';
import { getSelectedCategory } from '../../redux/dishesSlice';


export default function Menu() {
    const selectedCategory = useSelector(getSelectedCategory);


    return (
        <div>
            {data
            .filter(dish => {
                return selectedCategory === dish.category;
            })
            .map((item) => {
                return (
                    <div key = {item.id}>
                          <Dish item = {item}/>
                    </div>
                )
            })}
        </div>
    )
};