import scss from './BranchNumberItem.module.scss';

const BranchNumberItem  = ({Description, pickedBranchNumber}) => {

    const handlePicker = ({target}) => {
        const branchNumber = target.innerText;
        pickedBranchNumber(branchNumber)
    };

    return (
        <li onClick={handlePicker} className={scss.item}>
            {Description}
        </li>
    );
  };
  
export default BranchNumberItem;


