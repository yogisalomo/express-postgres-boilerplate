"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.toIngredient = void 0;
var toIngredient = function (ingredient) {
    return {
        id: ingredient.id,
        name: ingredient.name,
        slug: ingredient.slug,
        description: ingredient.description,
        foodGroup: ingredient.foodGroup,
        createdAt: ingredient.createdAt,
        updatedAt: ingredient.updatedAt,
        deletedAt: ingredient.deletedAt,
    };
};
exports.toIngredient = toIngredient;
