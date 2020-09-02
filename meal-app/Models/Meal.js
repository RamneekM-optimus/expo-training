class Meal {
    constructor(id, 
            categoryId, 
            title, 
            affordability, 
            complexity, 
            imageUrl, 
            duration, 
            ingredients, 
            steps,
            isGlutenFree,
            isVegan,
            isVegertarian,
            isLactoseFree
            ) {
        this.id = id;
        this.categoryId = categoryId;
        this.title = title;
        this.affordability = affordability;
        this.complexity = complexity;
        this.imageUrl = imageUrl;
        this.duration = duration;
        this.ingredients = ingredients;
        this.duration = duration;
        this.steps = steps;
    }
}

export default Meal;