import CourierItem from "../CourierItem/CourierItem";
import scss from './CourierList.module.scss';

const CourierList = ({courierLocality, pickLocality}) => {

    const pickedLocality = ({locality, Ref}) => {
        pickLocality({locality, Ref});
    };

    const elements = courierLocality.map(({Description, Ref, SettlementTypeDescription, AreaDescription }) => {
        return (
            <CourierItem 
                key={Ref} 
                Description={Description} 
                pickedLocality={pickedLocality} 
                Ref={Ref} 
                SettlementTypeDescription={SettlementTypeDescription}
                AreaDescription={AreaDescription}
                />
        );
    });
    
    return (
        <div>
            <ul className={scss.courier_list}>{elements}</ul>
        </div>
    );
};

export default CourierList;