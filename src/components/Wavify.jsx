import Wave from 'react-wavify';
import { changeWaveSize } from '../helpers';

export const Wavify = () => {


    return (

        <>

            <button onClick={ () => { changeWaveSize(100) } }> Change size: 100px </button>

            <button onClick={ () => { changeWaveSize(200) } }> Change size: 200px </button>

            <button onClick={ () => { changeWaveSize(0) } }> Change size: 0px </button>

            <main>

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

            </main>

        </>

    );

};