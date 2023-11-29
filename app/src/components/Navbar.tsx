import { A } from '@solidjs/router';
import { Component, Show } from 'solid-js';
import Modal from './Modal';
import {useSession} from "./Table"

const Navbar: Component = () => {

  const session = useSession()
  return (
    <nav class="navbar bg-orange-700">
      <div class='flex-1 gap-x-3'>
        <div class='normal-case text-xl text-yellow-200 pl-4'>
          やりたいこと探し
        </div>
          {/* <A href="/" class="btn btn-ghost normal-case text-xl text-yellow-400 shadow-md bg-orange-600 hover:bg-orange-400"> */}
            
          {/* </A> */}
      </div>
      <div class='flex-none'>
        <Modal />
      </div>
    </nav>
  );
};

export default Navbar;
