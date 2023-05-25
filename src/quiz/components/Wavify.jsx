import Wave from 'react-wavify';

export const Wavify = () => {


    return (

        <div>

            <Wave className="first-wave"
                fill='#5BBFDE'
                paused={false}
                options={{
                    height: 10,
                    amplitude: 15,
                    speed: 0.15,
                    points: 4
                }}
            />

            <Wave className='second-wave'
                fill='#9CF0FD'
                paused={false}
                options={{
                    height: 5,
                    amplitude: 20,
                    speed: 0.25,
                    points: 2
                }}
            />

            <div className='wave-fill'>
                {/* relleno de la parte baja de las olas */}
            </div>

        </div>

    );

};