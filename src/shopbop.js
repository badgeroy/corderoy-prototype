import categories from './tests/categories.json'
import jackets from './tests/jackets.json'
import coats from './tests/coats.json'


export class Product {
    static Color = class {
        constructor(name, swatch, images) {
            this.name = name;
            this.swatch = swatch;
            this.images = images;
        }

        /**
         * @returns {String} the name of this color
         */
        getName() {
            return this.name;
        }

        /**
         * @returns {String} the source of the swatch of this color (just the "src" from the JSON)
         */
        getSwatch() {
            return this.swatch;
        }

        /**
         * @returns {String[]} subfolders of the images of this color's product (just the "src"s from the JSON)
         */
        getImages() {
            return this.images;
        }
    }

    constructor(name, desc, price, storePage, colors) {
        this.designer = name;
        this.desc = desc;
        this.price = price;
        this.storePage = storePage;
        this.colors = colors;
    }

    /**
     * @returns {String} the designer of this product
     */
    getDesigner() {
        return this.designer;
    }

    /**
     * @returns {String} the description of this product
     */
    getDescription() {
        return this.desc;
    }

    /**
     * @returns {String} the price of this product ("retailPrice.price" in the JSON returned from Shopbop)
     */
    getPrice() {
        return this.price;
    }

    /**
     * @returns {String} the source of the main image
     */
    getMainImage() {
        return this.colors[0].getImages()[0];
    }

    /**
     * @returns {String} the source of this product's store page
     */
    getStorePage() {
        return this.storePage;
    }

    /**
     * @returns {Product.Color[]} an array of all available colors of this product
     */
    getColors() {
        return this.colors;
    }
}

export class Category {
    /**
     * I need you to iterate through the JSON returned from Shopbop and turn each of them into
     * this Category object. Don't forget to iterate through the children categories in the
     * JSON as well before creating the parent category. You will need to create a constructor
     * for this class to make your work easier, the parameters of which is all up to you
     * (I won't be calling the constructor).
     *
     * @returns {Category[]} an array of categories as returned from the Shopbop API
     */
    static getRootCategories = function() {
        const rootCats = []
        for (const subcat of categories.whatsNewCategory.children) {
            if (!subcat.children)
                continue;
            for (const subsubcat of subcat.children) {
                const id = subsubcat.id;
                const name = subsubcat.name;
                rootCats.push(new Category(id, name));
            }
        }
        return rootCats;
    }

    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    /**
     * @returns {String} the numeric string ID of this category
     */
    getId() {
        return this.id;
    }

    /**
     * @returns {String} the name of this category
     */
    getName() {
        return this.name
    }

    /**
     * @returns {Category[]} an array of categories of the children of this category if any,
     *          an empty array otherwise
     */
    getChildren() {

    }

    /**
     * @returns {Product[]} an array of products
     */
    getProducts() {
        const idMap = {"65702": jackets, "65248": coats}
        const id = this.getId()
        for (const prod of idMap[id].products) {
            const name = prod.product.designerName;
            const desc = prod.product.shortDescription;
            const price = prod.product.retailPrice.price;
            const storePage = prod.product.productDetailUrl;
            const colors = []
            for (const color of prod.product.colors) {
                const colorName = color.name;
                const swatch = color.swatch.src;
                const images = color.images.map(img => img.src);
                colors.push(new Product.Color(colorName, swatch, images));
            }
            products.push(new Product(name, desc, price, storePage, colors));
        }
        return products;
    }
}