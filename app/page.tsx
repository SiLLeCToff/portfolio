import styles from './page.module.css'
import YoutubeVideo from "@/app/components/YoutubeVideo/YoutubeVideo";
export default function Home() {

    const stack = [
        {name: "VITE"},
        {name: "REACT"},
        {name: "NEXT"},
        {name: "GIT"},
        {name: "WEBPACK"},
        {name: "REDUX"},
        {name: "TAILWIND"},
        {name: "JS"},
        {name: "CSS"},
        {name: "HTML"},
        {name: "MUI"},

    ]


  return (

    <main className="w-screen h-screen bg-black flex-col items-center justify-between">

        <nav className="nav flex w-full h-full">
            <h1>ISAEV RUSLAN</h1>
            <h3 className="span loader"><span className="m">F</span><span className="m">E</span><span className="m">R</span><span className="m">O</span><span className="m">N</span><span className="m">T</span><span className="m">E</span><span className="m">N</span><span className="m"></span><span className="m">D</span><span className="m">&nbsp;</span><span className="m">D</span><span className="m">E</span><span className="m">V</span><span className="m">E</span><span className="m">L</span><span className="m">O</span><span className="m">P</span><span className="m">E</span><span className="m">R</span></h3>
            <div className="nav-container"><a className="nav-tab" href="#tab-stack">STACK</a><a className="nav-tab" href="#tab-about">ABOUT ME</a><a className="nav-tab" href="#tab-jobs">JOBS</a><a className="nav-tab" href="#tab-contacts">CONTACTS</a></div>
        </nav>
        <main className="main w-full">
            <section className="slider w-full" id="tab-stack">
                <h1>STACK</h1>
                <h2>FRONTEND</h2>
                <div className="flex justify-between w-11/12">
                    {stack.map((item, index) =>  (<div key={index} className="flex md:h-[200px] sm:h-[50px] max-sm:h-[50px] flex-col justify-center items-center xl:gap-3  sm:gap-1 max-sm:gap-0">
                        <div className={styles[item.name.toLowerCase()]}></div>
                        <p className="flex text-white font-light text-[1vw]">{item.name}</p>
                    </div>))}
                </div>
            </section>
            <section className="slider" id="tab-about">
                <h1>ABOUT ME</h1>
                <div className="flex w-9/12 flex-col items-start mb-[50px]">
                    <br/>
                    <h2><p className="text-[#03dac6] -translate-x-5">Инструменты разработки Frontend:</p></h2>
                    <h2>- REACT, Redux-toolkit, JavaScript, HTML</h2>
                    <h2>- UI библиотеки: MUI, headlessui</h2>
                    <h2 className="whitespace-nowrap flex items-start">- Стилизация: CSS, TAILWIND<p className="flex font-light xl:text-[15px] md:text-[15px] sm:text-[12px] text-[#03dac6] max-sm:hidden">*Мой любимый, дает скорость верстки</p></h2>
                    <h2>- Git & GitHub для удобства разработки с репозиториями</h2>
                    <h2>- REST API (Axios, Fetch)</h2>
                    <h2>- Vite и TurboPack</h2>
                    <br/>
                    <h2><p className="text-[#03dac6] -translate-x-5">Инструменты разработки Backend:</p></h2>
                    <h2>-NODE.JS & Express</h2>
                    <h2>-BCRYPT и JWT для авторизации</h2>
                    <br/>
                    <h2 className="flex"><p className="flex text-[#03dac6] -translate-x-5">Опыт работы:</p></h2>
                    <h2 className="flex text-start"><p className="flex  text-red-800 font-medium">&nbsp;6 месяцев&nbsp;</p> работы на фрилансе и<p className="flex text-red-800 font-medium">8 месяцев&nbsp;</p> коммерции. </h2>
                    <h2 className="flex text-start">- На коммерции создание небольших сайтов/приложений, и оптимизация действующих.</h2>
                    <h2 className="flex text-start">- На фрилансе доработки и создание админок в большей части.</h2>
                </div>
            </section>
            <section className="slider" id="tab-jobs">
                <h1>JOBS</h1>
                <div className="flex flex-col justify-center w-10/12 items-start">
                    <h2 className="flex text-start "><p className="text-[#03dac6] -translate-x-5">Магазин кроссовок</p></h2>
                    <h2 className="flex text-start">- Этот проект разработан только мной и все UI были самописные для производительности.</h2>
                    <h2 className="flex text-start"><p className="whitespace-nowrap flex">- Упор был сделан на Админ панель просмотреть ниже или по&nbsp;<a href="https://sneaker-shop-app.vercel.app/" className="flex whitespace-nowrap underline underline-offset-8 text-[#03dac6] hover:text-[#ff0266]">ссылке</a></p></h2>
                    <h2 className="flex text-start"><p className="text-[#03dac6] -translate-x-5">Frontend:</p>Написан на React, Redux-Toolkit, TAILWIND</h2>
                    <h2 className="flex text-start"><p className="text-[#03dac6] text-start -translate-x-5">Backend:</p>- Написан на NodeJS + Express <br/>- БД postgreSQL(пароли и почты хранятся в зашифрованном виде)<br/>
                        - Для авторизации и шифрования использовал JWT, Bcrypt
                    </h2>
                </div>
                <div className=" flex w-fulljustify-center items-center mt-[50px] mb-[50px]"></div>
                <YoutubeVideo/>
            </section>
            <section className="slider" id="tab-contacts">
                <h1>CONTACTS</h1>
                <h2>E-Mail: SILLECTOFF@GMAIL.COM</h2>
                <h2 className="mb-[200px]">Telegram: <a href="tg://resolve?domain=sillectoff" className="underline underline-offset-4 text-[#03dac6] hover:text-[#ff0266]">@sillectoff</a></h2>
            </section>
        </main>
        <canvas className="background"></canvas>
    </main>
  )
}
