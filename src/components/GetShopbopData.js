import React from "react";

export default class GetShopbopData extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch("https://api.shopbop.com/public/search?lang=en-US%C2%A4cy=USD&q=jeans&limit=40&minPrice=25&maxPrice=500&siteId=1006&allowOutOfStockItems=false&dept=WOMENS",
            {
                method: 'GET',
                headers: {
                    'accept': 'application/json',
                    'Client-Id': 'Shopbop-UW-Team2',
                    'ShopbopAPIExplorer': '1.0.0'
                }
            }
        )
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result.items
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                            {item.name} {item.price}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}