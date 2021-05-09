<template>
    <div>
        <!--О нас-->
        <section
            id="main"
            class="section flex flex-row justify-between mt-28"
        >
            <div class="about-us">
                <div class="title">
                    <h2>О нас</h2>
                </div>
                <div class="about-us__body">
                    <p>
                        Мы - команда из бывших студентов создали курс "Школа будущих
                        <br>взрослых" для помощи школьникам в
                        социализации во
                        <br>взрослую жизнь.
                    </p>
                    <p>
                        С нами этот трудный путь пройдет быстро и увлекательно для вас.
                    </p>
                </div>
                
                <div class="btn btn--round ask-question">
                    <button type="button">Задать вопрос</button>
                </div>
                
                <div class="btn btn--round to-courses">
                    <button type="button">Перейти к курсам</button>
                </div>
            </div>
            <div class="advices pt-6">
                <SvgMainAdvices/>
            </div>
            
            <div class="arrow">
                <SvgMainArrow/>
            </div>
            
            <div class="green-cross">
                <SvgMainGreenCross/>
            </div>
        </section>
        <!--О нас-->
        
        <!--Чему вас научим-->
        <section
            id="what-you-learn"
            class="section flex flex-row mt-52"
        >
            <div class="learning w-full">
                <div class="title">
                    <h2>Чему мы вас научим?</h2>
                </div>
                
                <div class="skills flex flex-row gap-3 justify-center">
                    <div class="skill">
                        <div class="skill__background"></div>
                        <div class="skill__icon">
                            <SvgSkillStrategy/>
                        </div>
                        <div class="skill__name">Выстраивание стратегий</div>
                    </div>
                    <div class="skill">
                        <div class="skill__background"></div>
                        <div class="skill__icon">
                            <SvgSkillDocuments/>
                        </div>
                        <div class="skill__name">Работа с документами</div>
                    </div>
                    <div class="skill">
                        <div class="skill__background"></div>
                        <div class="skill__icon">
                            <SvgSkillFinances/>
                        </div>
                        <div class="skill__name">Управление финансами</div>
                    </div>
                    <div class="skill">
                        <div class="skill__background"></div>
                        <div class="skill__icon">
                            <SvgSkillUniversity/>
                        </div>
                        <div class="skill__name">Поступление в университет</div>
                    </div>
                </div>
            </div>
            
            <div class="star">
                <SvgSkillStar/>
            </div>
            
            <div class="line">
                <SvgSkillLine/>
            </div>
            
            <div class="double-line">
                <SvgSkillDoubleLine/>
            </div>
        </section>
        <!--Чему вас научим-->
        
        <!--Как проходит обучение-->
        <section
            id="how-you-learn"
            class="section flex flex-row mt-52"
        >
            <div class="learning w-full">
                <div class="title">
                    <h2>Как проходит обучение?</h2>
                </div>
                
                <div class="steps flex flex-col">
                    <div class="step">
                        <div class="step__counter">
                            <div class="step__counter__number">1</div>
                            <div class="step__counter__name">Динамичные курсы</div>
                        </div>
                        <div class="step__info">
                            Мы считаем, что видео курсы должны быть такие же кинематографичные, как и видео каналов
                            миллиоников на YouTube. Никакого скучного белого фона и преподавателя с бумажкой.
                        </div>
                    </div>
                    <div class="step">
                        <div class="step__counter">
                            <div class="step__counter__number">2</div>
                            <div class="step__counter__name">Домашнее задание</div>
                        </div>
                        <div class="step__info">
                            Для закрепления информации после каждого урока мы советуем выполнять задания. Если не
                            хватает времени – сделай позже. Знания закрепляются на практике, так что не пренебрегай
                            этим.
                        </div>
                    </div>
                    <div class="step">
                        <div class="step__counter">
                            <div class="step__counter__number">3</div>
                            <div class="step__counter__name">Видео-уроки в Zoom</div>
                        </div>
                        <div class="step__info">
                            В конце каждой темы курса будет проведена видео-встреча в Zoom с менторами, на которой будет
                            закреплен полученный материал. На ней менторы также ответят на все ваши вопросы.
                        </div>
                    </div>
                    <div class="step">
                        <div class="step__counter">
                            <div class="step__counter__number">4</div>
                            <div class="step__counter__name">Обратная связь</div>
                        </div>
                        <div class="step__info">
                            Любое обучение невозможно без исправления ошибок и советов наставников. Поэтому в чате вы
                            сможете задать вопрос куратору, а также попросить помощи у своих “однокурсников.”
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="multi-dots">
                <SvgStepsMultiDots/>
            </div>
            
            <div class="rings">
                <SvgStepsRings/>
            </div>
            
            <div class="cross">
                <SvgStepsCross/>
            </div>
        </section>
        <!--Как проходит обучение-->
        
        <!--Как проходит обучение-->
        <section
            id="who-we-are"
            class="section flex flex-row mt-52"
        >
            <div class="learning w-full">
                <div class="title">
                    <h2>Кто мы?</h2>
                </div>
                
                <div class="teachers flex flex-row flex-wrap justify-between gap-y-10">
                    <div class="teacher flex items-center 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                        <div
                            :style="{ 'background-image': `url(${require('~/assets/images/teacher-Egor.png')}` }"
                            class="teacher__avatar"
                        ></div>
                        <div class="teacher__body flex flex-col">
                            <div class="teacher__name">Егор</div>
                            <div class="teacher__info">
                                Прошел бакалавр, побывал студентом по обмену в Китае, знает
                                большинство нюансов студенческой жизни.
                            </div>
                        </div>
                    </div>
                    <div class="teacher flex items-center 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                        <div
                            class="teacher__avatar"
                            style="background-color: black;"
                        ></div>
                        <div class="teacher__body flex flex-col">
                            <div class="teacher__name">Unknown</div>
                            <div class="teacher__info">
                                Unknown unknown unknown unknown unknown unknown unknown unknown unknown
                            </div>
                        </div>
                    </div>
                    <div class="teacher flex items-center 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                        <div
                            :style="{ 'background-image': `url(${require('~/assets/images/teacher-Alexandra.png')}` }"
                            class="teacher__avatar"
                        ></div>
                        <div class="teacher__body flex flex-col">
                            <div class="teacher__name">Александра</div>
                            <div class="teacher__info">
                                На одной волне со школьниками благодаря большому опыту работы в
                                образовательных проектах.
                            </div>
                        </div>
                    </div>
                    <div class="teacher flex items-center 2xl:w-1/2 xl:w-1/2 lg:w-1/2 md:w-full sm:w-full">
                        <div
                            :style="{ 'background-image': `url(${require('~/assets/images/teacher-Maria.png')}` }"
                            class="teacher__avatar"
                        ></div>
                        <div class="teacher__body flex flex-col">
                            <div class="teacher__name">Мария</div>
                            <div class="teacher__info">
                                Дизайнер, благодаря своему большому опыту, создает удобный и
                                художественный интерфейс.
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            
            <div class="star">
                <SvgWhoWeStar/>
            </div>
        </section>
        <!--Как проходит обучение-->
    </div>
</template>

<script>
export default {
    name: 'index',
};
</script>

<style
    lang="scss"
    scoped
>
#main {
    position: relative;
    
    .about-us {
        width:                 575px;
        height:                655px;
        position:              relative;
        background-image:      url("data:image/svg+xml,%3Csvg fill='none' height='533' viewBox='0 0 533 533' width='533' xmlns='http://www.w3.org/2000/svg' %3E%3Cpath d='M288.382 447.521C287.608 445.371 287.093 443.049 286.835 440.727C286.749 440.039 286.749 439.265 286.749 438.577C286.749 424.302 298.27 412.778 312.543 412.778H386.745C401.018 412.778 412.54 401.255 412.54 386.98V302.79C412.54 288.515 424.061 276.991 438.334 276.991C439.194 276.991 440.14 277.077 441 277.163C442.891 277.679 444.783 278.109 446.76 278.453C451.059 279.227 455.445 279.657 459.916 279.657C500.241 279.657 533 246.893 533 206.561C533 166.143 500.241 133.465 459.916 133.465C455.015 133.465 450.2 133.981 445.557 134.841H445.471C444.353 135.099 443.235 135.271 442.117 135.615L445.643 134.841C444.525 135.185 443.407 135.443 442.203 135.615C440.914 135.787 439.624 135.873 438.334 135.873C425.007 135.873 414.001 125.725 412.712 112.74C412.626 111.88 412.54 110.934 412.54 110.074C412.54 109.128 412.626 108.268 412.712 107.408V25.7986C412.712 11.5234 401.19 0 386.917 0H25.7945C11.5215 0 0 11.5234 0 25.7986V386.98C0 401.255 11.5215 412.778 25.7945 412.778H120.202C134.475 412.778 145.997 424.388 145.997 438.577C145.997 439.351 145.997 440.039 145.911 440.727C145.911 440.985 145.911 441.243 145.825 441.415C145.653 443.221 145.223 444.941 144.707 446.661V446.747C144.621 447.005 144.535 447.262 144.449 447.434L145.911 441.329C145.481 443.049 145.051 444.769 144.793 446.575V446.661C144.019 450.96 143.589 455.346 143.589 459.904C143.589 500.322 176.348 533 216.674 533C257.085 533 289.758 500.322 289.758 459.904C289.414 455.776 289.07 451.648 288.382 447.521C287.952 445.199 287.522 442.963 286.835 440.727Z' fill='%23A8D1E7' /%3E%3C/svg%3E");
        background-size:       533px;
        background-repeat:     no-repeat;
        background-position-y: 80px;
        
        .title {
            margin-bottom: 20px;
            text-align:    left;
        }
        
        &__body {
            //background-color: #A8D1E7;
            //border-radius:    1.5rem;
            width:    415px;
            height:   415px;
            padding:  40px 20px;
            position: relative;
            
            svg {
                position: absolute;
                top:      0;
                left:     0;
                z-index:  -1 !important;
                height:   533px;
                width:    533px;
                
                path {
                    z-index: -1 !important;
                }
            }
            
            p {
                font-size:     28px;
                color:         #24315E;
                line-height:   32px;
                margin-bottom: 1rem;
                
                &:last-child {
                    margin-bottom: 0;
                }
            }
        }
        
        .btn {
            position: absolute;
        }
        
        .ask-question {
            right: 0;
            top:   200px;
        }
        
        .to-courses {
            bottom: 0;
            left:   130px;
        }
    }
    
    .green-cross,
    .star,
    .arrow {
        position: absolute;
    }
    
    .arrow {
        top:  -90px;
        left: 220px;
    }
    
    .green-cross {
        bottom: 90px;
        left:   540px;
    }
}

#what-you-learn {
    position: relative;
    
    .line,
    .double-line,
    .star {
        position: absolute;
    }
    
    .star {
        top:   -220px;
        right: 60px;
    }
    
    .line {
        top:     -159px;
        left:    190px;
        z-index: -2;
    }
    
    .double-line {
        top:  -130px;
        left: 90px;
    }
    
    .skills {
        .skill {
            $self:           &;
            width:           240px;
            height:          240px;
            position:        relative;
            display:         flex;
            flex-direction:  column;
            justify-content: center;
            align-items:     center;
            padding:         15px 15px 15px 4rem;
            
            &__background {
                position:          absolute;
                top:               0;
                left:              0;
                width:             315px;
                height:            240px;
                background-image:  url('~assets/images/skill-background.svg');
                background-repeat: no-repeat;
                z-index:           -1;
            }
            
            &:first-child {
                padding-left: 15px;
                
                .skill__background {
                    background-image:  url('~assets/images/skill-background-first.svg');
                    background-repeat: no-repeat;
                }
            }
            
            &:last-child {
                .skill__background {
                    background-image:  url('~assets/images/skill-background-last.svg');
                    background-repeat: no-repeat;
                }
            }
            
            &__icon {
                margin-bottom: 1.5rem;
            }
            
            &__name {
                font-size:   24px;
                color:       #24315E;
                line-height: 32px;
                text-align:  center;
            }
        }
    }
}

#how-you-learn {
    position: relative;
    
    .rings,
    .cross,
    .multi-dots {
        position: absolute;
    }
    
    .multi-dots {
        top:  -40px;
        left: -60px;
    }
    
    .rings {
        top:   -80px;
        right: 0;
    }
    
    .cross {
        bottom: -100px;
        left:   40px;
    }
    
    .steps {
        .step {
            $self:            &;
            position:         relative;
            display:          flex;
            flex-direction:   row;
            padding:          25px;
            border:           5px solid transparent;
            //border-top:     5px solid #374785;
            //border-bottom:  5px solid #374785;
            margin-top:       -5px;
            border-radius:    150px;
            background-color: #fff;
            background-clip:  padding-box;
            
            &:before {
                content:       '';
                position:      absolute;
                top:           -5px;
                right:         -5px;
                bottom:        -5px;
                left:          -5px;
                z-index:       -1;
                border-radius: inherit; /* !importanté */
                background:    linear-gradient(to left, transparent 6%, #374785 6%, #374785 100%);
            }
            
            &:first-child {
                //border-top: 5px solid #374785;
                margin-top: 0;
            }
            
            &:last-child {
                //border-bottom: 5px solid #374785;
            }
            
            &:nth-child(2n) {
                flex-direction: row-reverse;
                
                .step__counter {
                    margin-right: 0;
                }
                
                .step__info {
                    margin-right: 2rem;
                }
                
                &:before {
                    background: linear-gradient(to right, transparent 6%, #374785 6%, #374785 100%);
                }
            }
            
            &__counter {
                min-width:        300px;
                width:            300px;
                height:           100px;
                display:          flex;
                flex-direction:   row;
                padding:          15px 40px 15px 115px;
                position:         relative;
                background-color: #F8E9A0;
                border-radius:    50px;
                margin-right:     2rem;
                
                &__number {
                    font-family:      'AdamCG', sans-serif;
                    color:            #24315E;
                    font-size:        48px;
                    line-height:      32px;
                    position:         absolute;
                    top:              0;
                    left:             0;
                    bottom:           0;
                    width:            100px;
                    height:           100px;
                    border-radius:    50%;
                    background-color: #F8E9A0;
                    box-shadow:       4px 0 4px rgba(0, 0, 0, 0.25);
                    display:          flex;
                    justify-content:  center;
                    align-items:      center;
                }
                
                &__name {
                    font-size:   24px;
                    color:       #24315E;
                    line-height: 32px;
                    text-align:  center;
                }
            }
            
            &__info {
                font-size:   24px;
                color:       #24315E;
                line-height: 32px;
                text-align:  justify;
            }
        }
    }
}

#who-we-are {
    position: relative;
    
    .star {
        position: absolute;
    }
    
    .star {
        top:   -60px;
        right: -20px;
    }
    
    .teachers {
        .teacher {
            $self: &;
            
            &:nth-child(2n) {
                display:         flex;
                justify-content: flex-end;
            }
            
            &__avatar {
                min-width:           150px;
                min-height:          150px;
                border-radius:       50%;
                background-size:     contain;
                background-repeat:   no-repeat;
                background-position: 50% 50%;
                margin-right:        2rem;
            }
            
            &__body {
                color:     #24315E;
                max-width: 300px;
                
                .teacher__name {
                    font-family:   'AdamCG', sans-serif;
                    font-size:     24px;
                    line-height:   28px;
                    margin-bottom: 1rem;
                }
                
                .teacher__info {
                    font-size:   18px;
                    line-height: 21px;
                }
            }
        }
    }
}
</style>