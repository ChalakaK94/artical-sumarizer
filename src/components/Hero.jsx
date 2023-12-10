
import {logo} from '../assets'
export function Hero() {
    return (
        <>
            <header className='w-full  flex justify-center items-center flex-col'>
                <nav className='flex justify-between items-center w-full mb-10 pt-3'>
                    <img src={logo} alt="logo" className='w-28 object-contain'/>
                    <button onClick={()=>window.open('','_blank')}
                            className='black_btn'> GitHub</button>
                </nav>

                <h1 className='head_text'>Summarize Article</h1>
                <h2 className='desc'>
                    Simplify with your reading with Summarize, an Open source article summarizer
                    that transform length articles into clear and concise summaries
                </h2>
            </header>
        </>
    )
}