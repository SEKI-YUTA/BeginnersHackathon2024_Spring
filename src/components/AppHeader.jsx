import { Link } from 'react-router-dom';
function AppHeader({ tailIcon, tailIconClickEvent }) {
    return (
        <header className='bg-white shadow-md'>
            <nav
                className='mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8'
                aria-label='Global'
            >
                <div className='hidden lg:flex lg:gap-x-12'>
                    {/* 後で追加したい時用にコメントアウトしておく */}
                    {/* <div className='relative'>
                        <button
                            type='button'
                            className='flex items-center gap-x-1 text-sm font-semibold leading-6 text-gray-900'
                            aria-expanded='false'
                        >
                            Product
                            <svg
                                className='h-5 w-5 flex-none text-gray-400'
                                viewBox='0 0 20 20'
                                fill='currentColor'
                                aria-hidden='true'
                            >
                                <path
                                    fill-rule='evenodd'
                                    d='M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z'
                                    clip-rule='evenodd'
                                />
                            </svg>
                        </button>
                    </div> */}

                    {/* <a
                        href='#'
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        Features
                    </a> */}
                </div>
                <div className='hidden lg:flex lg:flex-1 lg:justify-end'>
                    <Link
                        to='/Setting' // 遷移させたいパスを`to`プロパティで指定します。
                        className='text-sm font-semibold leading-6 text-gray-900'
                    >
                        {tailIcon}
                    </Link>
                </div>
            </nav>
        </header>
    );
}

export default AppHeader;
