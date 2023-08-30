import scss from './DeliveryBranchNumberItem.module.scss';

const BranchNumberItem  = ({Description, pickedBranchNumber, address}) => {

    const handlePicker = ({target}) => {
        const branchNumber = target.innerText;
        pickedBranchNumber(branchNumber)
    };

    return (
        <li onClick={handlePicker} className={scss.item}>
            {Description}, {address}
        </li>
    );
  };
  
export default BranchNumberItem;


