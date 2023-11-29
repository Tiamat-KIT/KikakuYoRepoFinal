import Modal from './Modal';
import {useSession} from "./Table"

const Navbar  = () => {

  const session = useSession()
  return (
    <nav className="navbar bg-orange-700">
      <div className='flex-1 gap-x-3'>
        <div className='normal-case text-xl text-yellow-200 pl-4'>
          やりたいこと探し
        </div>
          {/* <A href="/" className="btn btn-ghost normal-case text-xl text-yellow-400 shadow-md bg-orange-600 hover:bg-orange-400"> */}
            
          {/* </A> */}
      </div>
      <div className='flex-none'>
        <Modal />
      </div>
    </nav>
  );
};

export default Navbar;
