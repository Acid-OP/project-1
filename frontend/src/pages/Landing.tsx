
import { Sidebar } from '../components/Sidebar';

import { ChessCardcomponent } from '../components/ChessCardcomponent';

export function Landing() {
  return (
    <div className=" h-screen flex flex-col justify-center"> 
    <Sidebar/>
    <ChessCardcomponent/>
    </div>
  );
}
