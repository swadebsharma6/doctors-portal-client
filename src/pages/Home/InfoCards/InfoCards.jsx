import { cardsData } from "../../../utils/cardsData";
import Card from "./Card";


const InfoCards = () => {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-6 mb-20">
           {
            cardsData.map(info => <Card
                key={info.id}
                info={info}
                ></Card>)
           }
        </div>
    );
};

export default InfoCards;