import DeliveryLocationItem from "../DeliveryLocationItem/DeliveryLocationItem"; 
import scss from './DeliveryLocationList.module.scss';
import { useState, useEffect } from 'react';

const DeliveryLocationList = ({courierLocality, pickLocality, searchDelivery, notFoundCity}) => {
    const [state, setState] = useState(null);

    const pickedLocality = ({locality, Ref}) => {
        pickLocality({locality, Ref});
    };

    useEffect(() => {
        const dataFilter = courierLocality.filter(item => item.name.toLowerCase().includes(searchDelivery.toLowerCase()) === true);
        if(dataFilter.length === 0) {
            notFoundCity()
        }
        else {
            setState(
                dataFilter.map(({name, id}) => {
                    return (
                        <DeliveryLocationItem
                            key={id}
                            Description={name} 
                            pickedLocality={pickedLocality}
                            Ref={id}
                        />
                    );
                })
            )
        }
// eslint-disable-next-line 
    }, [searchDelivery])
    
    return (
        <div>
            {state !== null && (<ul className={scss.courier_list}>{state}</ul>)}
        </div>
    );
};

export default DeliveryLocationList;