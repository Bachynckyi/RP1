import BranchNumberItem from "./BranchNumberItem";
import scss from './BranchNumberList.module.scss';
import { useState, useEffect } from 'react';

const BranchNumberList = ({courierBranchNumber, pickBranchNumber, search, notFoundBranch}) => {
    const [state, setState] = useState(null);

    useEffect(() => {
        const dataFilter = courierBranchNumber.filter(item => item.Description.toLowerCase().includes(search.toLowerCase()) === true);
        if(dataFilter.length === 0) {
            notFoundBranch()
        }
        else {
            setState(
                dataFilter.map(({Description, Ref}) => {
                    return (
                        <BranchNumberItem
                            key={Ref}
                            Description={Description} 
                            pickedBranchNumber={pickedBranchNumber}  
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

    // const elements = courierBranchNumber.filter(item => item.Description.includes(search) === true).map(({Description, Ref}) => {
    //     return (
    //         <BranchNumberItem
    //             key={Ref}
    //             Description={Description} 
    //             pickedBranchNumber={pickedBranchNumber}  
    //         />
    //     );
    // })

    // if(state === null ) {
    //     notFoundBranch()
    // };
    
    return (
        <div>
            {state !== null && (<ul className={scss.courier_list}>{state}</ul>)}
        </div>
    );
};

export default BranchNumberList;