import scss from "./DeliveryLocationItem.module.scss";

const DeliveryLocationItem  = ({Description, pickedLocality, Ref}) => {

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
  
export default DeliveryLocationItem;


