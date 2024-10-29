import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceoptions = [
        {
            "id": 1,
            "name": "Basic Plan",
            "price": 29.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "1 group class per week",
                "Standard support",
                "Free Wi-Fi",
                "Access during staffed hours only",
                "Basic nutrition guidance",
                "Access to cardio machines"
            ]
        },
        {
            "id": 2,
            "name": "Standard Plan",
            "price": 49.99,
            "features": [
                "Access to gym equipment",
                "Locker room access",
                "4 group classes per week",
                "Sauna access",
                "Priority support",
                "Free Wi-Fi",
                "Access to all cardio and strength machines",
                "Extended gym hours (early mornings and evenings)",
                "Discount on additional personal training sessions",
                "1 free guest pass per month"
            ]
        },
        {
            "id": 3,
            "name": "Premium Plan",
            "price": 79.99,
            "features": [
                "Access to gym equipment",
                "Locker room and private locker access",
                "Unlimited group classes",
                "Sauna and steam room access",
                "Personal training session (1 per month)",
                "24/7 gym access",
                "Premium support",
                "Free Wi-Fi",
                "Access to premium equipment and exclusive workout zones",
                "Full access to nutritional workshops",
                "Complimentary towel service",
                "1 massage session per month",
                "Access to advanced workout tracking app"
            ]
        }
    ]

    return (
        <div className="m-12">
            <h2 className="text-5xl">Best Prices in Town </h2>
            <div className="grid md:grid-cols-3 gap-6">
                {
                    priceoptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;