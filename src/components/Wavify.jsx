import Wave from 'react-wavify';

export const Wavify = () => {


    return (

        <>

            <section>

                <Wave className="first-wave"
                    fill='#5BBFDE'
                    paused={false}
                    options={{
                        height: 20,
                        amplitude: 20,
                        speed: 0.15,
                        points: 5
                    }}
                />

                <Wave className='second-wave'
                    fill='#9CF0FD'
                    paused={false}
                    options={{
                        height: 5,
                        amplitude: 30,
                        speed: 0.2,
                        points: 2
                    }}
                />

                <div className='wave-fill'>
                    {/* relleno de la parte baja de las olas */}
                </div>

            </section>

        </>

    );

};