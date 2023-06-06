import scss from './ColorPickerItem.module.scss';

const ColorPickerItem = ({id, color}) => {


    return (
        <li key={id}>
            <input 
                style={{backgroundColor: color}}
                className={scss.input_checkbox}
                type='checkbox'
            />
        </li>
    );
  };
  
export default ColorPickerItem;