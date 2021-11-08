class Product {
    static Color = class {
        /**
         * @returns {String} the name of this color
         */
        getName() {

        }

        /**
         * @returns {String} the source of the swatch of this color (just the "src" from the JSON)
         */
        getSwatch() {

        }

        /**
         * @returns {String[]} subfolders of the images of this color's product (just the "src"s from the JSON)
         */
        getImages() {

        }
    }

    /**
     * @returns {String} the name of this product ("designerName" in the JSON returned from Shopbop)
     */
    getName() {

    }

    /**
     * @returns {String} the description of this product
     */
    getDescription() {

    }

    /**
     * @returns {String} the price of this product ("retailPrice.price" in the JSON returned from Shopbop)
     */
    getPrice() {

    }

    /**
     * @returns {Product.Color[]} an array of all available colors of this product
     */
    getColors() {

    }
}

class Category {
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

    }

    /**
     * @returns {String} the numeric string ID of this category
     */
    getId() {

    }

    /**
     * @returns {String} the name of this category
     */
    getName() {

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

    }
}