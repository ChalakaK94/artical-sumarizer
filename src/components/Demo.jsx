
import {copy,linkIcon,tick,loader} from '../assets'
import {useEffect, useState} from "react";
import {useLazyGetSummaryQuery} from "../services/article.js";
export function Demo() {

    const [article, setArticle] = useState({
        url:'',
        summary: ''
    })

    const [allArticles, setAllArticles] = useState([])

    const [ getSummary, {error, isFetching}] = useLazyGetSummaryQuery();

    useEffect(() => {
        const articleFromLocalStorage = JSON.parse(localStorage.getItem('articles'))

        if(articleFromLocalStorage){
            setAllArticles(articleFromLocalStorage)
        }
    }, []);

    const handleSubmit = async (e) =>{
        e.preventDefault();
        const {data} = await getSummary({ articleUrl: article.url })
        if (data?.summary) {
            const newArticle = { ...article, summary: data.summary };
            const updatedAllArticles = [newArticle,  ...allArticles];
            setAllArticles(updatedAllArticles)
            setArticle(newArticle);

            localStorage.setItem('articles', JSON.stringify(updatedAllArticles));
        }


    }
    return (
        <section className='mt-16 w-full max-w-xl'>
            <div className='flex flex-col w-full gap-2'>
                <form className='relative flex justify-center items-center' onSubmit={handleSubmit}>
                    <img src={linkIcon} alt='link' className='absolute left-0 my-2 ml-3 w-5'/>
                    <input type='url' placeholder='Enter a Url' value={article.url}
                           onChange={(e)=>setArticle({...article, url: e.target.value})} required className='url_input peer'/>
                    <button type='submit' className='submit_btn peer-focus: border-gray-700 peer-focus:text-gray-700'>Submit</button>
                </form>

                <div>

                </div>
            </div>

        </section>
    )
}