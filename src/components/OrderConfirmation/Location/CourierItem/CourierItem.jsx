import scss from './СourierItem.module.scss';

const CourierItem  = ({Description, pickedLocality, Ref}) => {

    const handlePicker = ({target}) => {
        const locality = target.innerText;
        pickedLocality({locality, Ref})
    };

    return (
        <li onClick={handlePicker} className={scss.item}>
            {Description}
        </li>
    );
  };
  
export default CourierItem;


