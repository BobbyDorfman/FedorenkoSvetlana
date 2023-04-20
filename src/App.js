import React from 'react';
import './App.css';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Портфолио учителя начальных классов</h1>
                <nav>
                    <ul>
                        <li><a href="#about">Обо мне</a></li>
                        <li><a href="#experience">Опыт работы</a></li>
                        <li><a href="#projects">Проекты</a></li>
                        <li><a href="#contact">Контакты</a></li>
                    </ul>
                </nav>
            </header>
            <main>
                <section id="about">
                    <h2>Обо мне</h2>
                    <p>Здесь можно добавить информацию о себе, например, ваше образование, опыт работы и т.д.</p>
                </section>
                <section id="experience">
                    <h2>Опыт работы</h2>
                    <p>Здесь можно добавить информацию о вашем опыте работы учителем начальных классов.</p>
                </section>
                <section id="projects">
                    <h2>Проекты</h2>
                    <p>Здесь можно добавить информацию о ваших проектах, которые вы сделали или которые ваши ученики создали во время уроков. Вы можете добавить фотографии и описания каждого проекта.</p>
                </section>
                <section id="contact">
                    <h2>Контакты</h2>
                    <p>Здесь можно добавить ваши контактные данные, такие как адрес электронной почты или номер телефона, чтобы родители и ученики могли связаться с вами.</p>
                </section>
            </main>
            <footer>
                <p>Copyright © 2023</p>
            </footer>
        </div>
    );
}

export default App;