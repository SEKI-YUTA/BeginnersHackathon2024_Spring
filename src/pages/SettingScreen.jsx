import { useState } from 'react';

const SettingScreen = () => {
    const [settingText, setHandle] = useState(true);

    const settingHandle1 = () => {
        if (settingText === '') return;
        if (settingText === false) {
            setHandle(!settingText);
        }

    };

    const settingHandle2 = () => {
        if (settingText === '') return;
        if (settingText === true) {
            setHandle(!settingText);
        }
    };

    const GenrusItems = (props) => (
        <div>
            <input type="radio" className="w-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
            <label for="inline-radio" className="pr-4 text-sm font-medium text-gray-900 dark:text-gray-300">
                {props.value}
            </label>
        </div>
    );

    const GeneralSettings = () => (
        <div>
            <div className="w-[300px]">
                <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    おすすめ設定
                </label>
            </div>
            <div className="inline-block relative w-[300px]">
                <select className="appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
                    <option>好きなジャンルの曲を表示</option>
                    <option>好きなジャンル以外の曲を表示</option>
                </select>
                <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                </div>
            </div>
            <div className="w-[300px] pt-4">
                <label className="text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4">
                    ジャンル設定
                </label>
            </div>
            <div className="flex w-full">
                <GenrusItems value="ポップス" />
                <GenrusItems value="ハードコア" />
                <GenrusItems value="ロック" />
                <GenrusItems value="ジャズ" />
            </div>
            <div className="md:w-2/3 pt-5">
                <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm py-2 px-4 text-center ">
                    変更
                </button>
            </div>
        </div >
    );

    const AccountSettings = () =>
    (
        <div>
            <div className="w-1/3">
                <label className=" items-start text-gray-500 font-bold pt-3 pb-6 mb-1 md:mb-2">
                    メールアドレス
                </label>
            </div>
            <div className="md:w-2/3">
                <input className=" bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[250px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" />
            </div>

            <div className="md:w-1/3">
                <label className="block items-start text-gray-500 font-bold pt-3 md:mb-2" for="inline-password">
                    パスワード
                </label>
            </div>
            <div className="flex">
                <div className="md:w-2/3">
                    <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-[250px] py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="inline-password" type="password" placeholder="****************************" />
                </div>
                <div className="md:w-2/3 pl-10">
                    <button type="button" className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm py-2 px-4 text-center ">
                        変更
                    </button>
                </div>

            </div>

        </div>
    );

    return (
        <div>
            <div className="flex w-[1300px] h-[40px]">
                <div className="flex items-center justify-center w-[100px] h-[40px] border-r border-b text-sm" >
                    <button>戻る</button>
                </div>
                <div className="flex items-center justify-left w-[1200px] h-[40px] pl-10 border-b text-xl" >
                    <div>設定</div>
                </div>
            </div>
            <div className="flex w-[1300px] h-[700px]">
                <div className="flex-none w-[100px] h-[100px] text-sm" >
                    <div className="flex items-center justify-center w-[100px] h-[50px] ">
                        <button className={settingText ? 'underline' : null} onClick={settingHandle1} >一般設定</button>
                    </div>
                    <div className="flex items-center justify-center w-[100px] h-[50px] ">
                        <button className={settingText ? null : 'underline'} onClick={settingHandle2}>アカウント設定</button>
                    </div>
                </div>
                <div className="flex  justify-left w-[1200px] h-[700px] border-l pt-3 pl-10" >
                    {settingText ? < GeneralSettings /> : < AccountSettings />}
                </div>
            </div>
        </div>
    );
};

export default SettingScreen;