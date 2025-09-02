import { CategoryPageProps } from "@/app/types";
import {getCategoryBySlug} from "@/app/lib/categories";
import ModelCard from "@/app/components/ModelCard";
import ModelsGrid from "@/app/components/ModelsGrid";
import { getModels } from "@/app/lib/models";
export default async function CategoryPage({params}: CategoryPageProps) {
    const {categoryName} = await params;
    const category = await getCategoryBySlug(categoryName);
    const models = await getModels({ category: categoryName });

    return (
        <ModelsGrid title={category.displayName} models={models} />
    )
}