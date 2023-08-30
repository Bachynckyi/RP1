import DeliveryBranchNumberItem from "../DeliveryBranchNumberItem/DeliveryBranchNumberItem";
import scss from './DeliveryBranchNumberList.module.scss';
import { useState, useEffect } from 'react';

const DeliveryBranchNumberList = ({courierBranchNumber, pickBranchNumber, search, notFoundBranch}) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        const dataFilter = courierBranchNumber.filter(item => item.name.toLowerCase().includes(search.toLowerCase()) === true || item.address.toLowerCase().includes(search.toLowerCase()) === true);
        if(dataFilter.length === 0) {
            notFoundBranch()
        }
        else {
            setState(
                dataFilter.map(({name, id, address}) => {
                    return (
                        <DeliveryBranchNumberItem
                            key={id}
                            Description={name} 
                            pickedBranchNumber={pickedBranchNumber}
                            address={address}  
                        />
                    );
                })
            )
        }
// eslint-disable-next-line 
    }, [search])
    
    const pickedBranchNumber = (branchNumber) => {
        pickBranchNumber(branchNumber);
    };
    
    return (
        <div>
            {state !== null && (<ul className={scss.courier_list}>{state}</ul>)}
        </div>
    );
};

export default DeliveryBranchNumberList;