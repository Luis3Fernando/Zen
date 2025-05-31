import { useTime } from '../hooks/useTime';

import Countdown from '../components/Countdown';
import Main from '../components/Main';
import DefaultLayout from '../layout/DefaultLayout';


function Home() {
  const { started } = useTime();

  return (
    <>
      <DefaultLayout>
        {started ? <Countdown /> : <Main />}
      </DefaultLayout>
    </>
  )
}

export default Home