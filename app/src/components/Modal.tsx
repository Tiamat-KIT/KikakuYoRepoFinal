import { JSX } from "solid-js";
import { Navigate } from "solid-start";

export default function Modal():JSX.Element {
  return (
    <>
      <button class="btn btn-ghost" onClick={()=> {(document.getElementById('my_modal_5') as HTMLDialogElement).showModal()}}>
        ～概要～
      </button>
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="modal-box">
          <h3 class="font-bold text-lg">このページはどういうページ？</h3>
          <p class="py-4">
            先輩たちが過去に資格取得や自己研鑽としてどんなことに取り組んだか<br />
            わかるページだよ！ぜひ参考にしてね！
          </p>
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">
                Close
                <Navigate href={"/"} />
              </button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};
