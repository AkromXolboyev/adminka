import React from 'react';
import { useCategoryAll } from '../service/query/useCategoryAll';
import { CategoryCard } from '../components/category-card';
import { useNavigate } from 'react-router-dom';

export const CategoryAll = () => {
    const navigate = useNavigate();
    const [page, setPage] = React.useState(1);
    const { data,isLoading } = useCategoryAll(page);
    const totalItems = Number(data?.pagesize) || 0;
    const itemsPerPage = 3;
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    if (isLoading) return <h1>loading111</h1>
   
    return (
        <div>

            {data?.data?.map((item) => (
                <CategoryCard key={item.id} {...item} />
            ))}
            <div className='flex justify-end mt-[20px] mr-[30px]  gap-3'>
                {Array(totalPages).fill(null).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setPage(index + 1)}
                        className={` rounded-md  p-3 ${page === index + 1 ? 'bg-slate-500' : 'bg-slate-300'} w-[80px]`}
                    >
                        {index + 1}
                    </button>
                ))}
            </div>
            <button onClick={() => navigate("/create-new") } className='p-5 w-[300px] bg-slate-400 rounded-md'>Новый товар</button>

        </div>
    );
};
